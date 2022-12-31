import './style.css'
import Gameboard from './Gameboard'
import Placement from './Placement'

const startBtn = document.querySelector('.start')
const randomBtn = document.querySelector('.random')

const playerGrid = document.querySelector('.player')
const botGrid = document.querySelector('.bot')

const createGrid = (grid) => {
for(let i = 0; i < 100; i++) {
  const str = String(i).padStart(2, '0')
    const div = document.createElement('div')
    div.setAttribute('data-xy', str)
    grid.append(div)
  }
}

createGrid(playerGrid)
createGrid(botGrid)

let isGameStart = false

const player = new Gameboard(playerGrid)
const bot = new Gameboard(botGrid)

const playerPlacement = new Placement(player)

let current = {}

player.cleanBoard()
player.randomLocationShips()

bot.cleanBoard()
bot.randomLocationShips()

randomBtn.addEventListener('click', () => {
  eraseShips()
  player.cleanBoard()
  player.randomLocationShips()
})

const eraseShips = () => {
  for(let s in player.squadron) {
   document.querySelectorAll(`[data-name=${s}]`).forEach(i => i.remove())
  }
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

const firstMove = () => Math.random() > 0.5

startBtn.addEventListener('click', () => {
  if(firstMove) {
    current = player
  } else {
    current = bot
  }
  isGameStart = true
  rndCoords = shuffle(randomArray())
})

document.addEventListener('mousedown', () => {
  if(!isGameStart) return
  botMove()
})

const botMove = () => {
  const i = rndCoords.pop()
  const [x, y] = i.split('')
  hit(+x, +y)
  playerGrid.querySelector(`[data-xy='${i}']`).classList.add('x')
}

const hit = (x,y) => {
  current.matrix[+x][+y] = 2
}
