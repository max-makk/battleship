
import './style.css'
import Gameboard from './Gameboard'
import Ship from './Ship'

const startBtn = document.querySelector('.start')
const randomBtn = document.querySelector('.random')
randomBtn.addEventListener('click', () => {
  player.cleanBoard()
  player.randomLocationShips()
})

let isGameStart = false

const player = new Gameboard()
const bot = new Gameboard()

player.cleanBoard()
player.randomLocationShips()

bot.cleanBoard()
bot.randomLocationShips()

const playerGrid = document.querySelector('.player')
const botGrid = document.querySelector('.bot')

let isDragged = false

let dragShip = {}

randomBtn.addEventListener('click', () => {
  player.cleanBoard()
  player.randomLocationShips()
  eraseShips()
  drawShips()
})

const restoreShip = () => {
  const ship = new Ship(player, dragShip)
  ship.createShip()
  drawShip(ship.arrDecks, ship.shipname)
}

const dragStart = (e) => {
  isDragged = true
  removeShip(e.target.getAttribute('data-name'))
}

const dragEnd = (e) => {
  if(!isDragged) return
  isDragged = false
  const str = e.target.getAttribute('data-xy')
  if(!str || !e.target.closest('.player')) {
    restoreShip()
    dragShip = {}
    return
  }
  const [x, y] = str.split('').map(i => Number(i))
  const obj = {x, y, kx: dragShip.kx, ky: dragShip.ky}
  const result = player.checkLocationShip(obj, dragShip.decks)
  if(result) {
    obj.shipname = dragShip.shipname
    obj.decks = dragShip.decks
    const ship = new Ship(player, obj)
    ship.createShip()
    drawShip(ship.arrDecks, ship.shipname)
  } else {
    restoreShip()
  }
  dragShip = {}
}

const rotateShip = (e) => {
  removeShip(e.target.getAttribute('data-name'))
  const obj = {...dragShip, kx: (dragShip.kx == 0) ? 1 : 0, ky: (dragShip.ky == 0) ? 1 : 0}
  const result = player.checkLocationShip(obj, dragShip.decks)
  if(result) {
    const ship = new Ship(player, obj)
    ship.createShip()
    drawShip(ship.arrDecks, ship.shipname)
  } else {
    const ship = new Ship(player, dragShip)
    ship.createShip()
    drawShip(ship.arrDecks, ship.shipname)
  }
  dragShip = {}
}

document.addEventListener('mouseup', dragEnd)

const drawShip = (arr, i) => {
  arr.forEach(el => {
   const pos = el.join('')
   const c = playerGrid.querySelector(`[data-xy='${pos}']`)
   const ship = document.createElement('div')
   ship.classList.add('ship')
   ship.setAttribute('data-name', i)
   ship.addEventListener('dragstart', dragStart)
   ship.addEventListener('dblclick', rotateShip)
   c.append(ship)
  })
}

player.matrix.forEach((el, i) => {
  el.forEach((c, k) => {
    const div = document.createElement('div')
    div.setAttribute('data-xy', String(i) + String(k))
    playerGrid.append(div)
  })
})


bot.matrix.forEach((el, i) => {
  el.forEach((c, k) => {
    const div = document.createElement('div')
    div.setAttribute('data-xy', String(i) + String(k))
    botGrid.append(div)
  })
})

const drawShips = () => {
  for(let i in player.squadron) {
    const s = player.squadron[i]
    drawShip(s.arrDecks, i)
  }
}

const eraseShips = () => {
  for(let s in player.squadron) {
   document.querySelectorAll(`[data-name=${s}]`).forEach(i => i.remove())
  }
}

drawShips()

function removeShip(el) {
  const obj = player.squadron[el]
  dragShip = {
    y: obj.y,
    x: obj.x,
    ky: obj.ky,
    kx: obj.kx,
    decks: obj.arrDecks.length,
    shipname: el
  }
  document.querySelectorAll(`[data-name=${el}]`).forEach(i => i.remove())
  for(let i of obj.arrDecks) {
    const [x, y] = i
    player.matrix[x][y] = 0
  }
  delete player.squadron[el]
}

//  random array

const randomArray = () => Array(100).fill(0).map((el, i) => String(i).padStart(2,'0'))

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

let rndCoords = []

startBtn.addEventListener('click', () => {
  isGameStart = true
  rndCoords = shuffle(randomArray())
})

document.addEventListener('mousedown', () => {
  if(!isGameStart) return
  const current = rndCoords.pop()
  playerGrid.querySelector(`[data-xy='${current}']`).classList.add('x')
})
