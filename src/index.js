import './style.css'
import Gameboard from './Gameboard'
import Placement from './Placement'
import Controller from './Controller'

const startBtn = document.querySelector('.start')
const randomBtn = document.querySelector('.random')

const playerGrid = document.querySelector('.player')
const botGrid = document.querySelector('.bot')

const createGrid = (grid) => {
  for (let i = 0; i < 100; i++) {
    const str = String(i).padStart(2, '0')
    const div = document.createElement('div')
    div.setAttribute('data-xy', str)
    grid.append(div)
  }
}

createGrid(playerGrid)
createGrid(botGrid)

const player = new Gameboard(playerGrid)
const bot = new Gameboard(botGrid)

const playerPlacement = new Placement(player)

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
  for (let s in player.squadron) {
    document.querySelectorAll(`[data-name=${s}]`).forEach(i => i.remove())
  }
}

//  random array

// const randomArray = () => Array(100).fill(0).map((_, i) => String(i).padStart(2, '0'))

// function shuffle(array) {
//   let currentIndex = array.length, randomIndex;
//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }
//   return array;
// }

// let rndCoords = []

// const firstMove = () => Math.random() > 0.5

// let opponent = {}

startBtn.addEventListener('click', () => {
  Gameboard.started = true
  // rndCoords = shuffle(randomArray())
  // if (firstMove()) {
  //   alert('you move first')
  //   opponent = bot
  // } else {
  //   alert('bot move first')
  //   opponent = player
  //   botMove()
  // }
})

// botGrid.addEventListener('mousedown', (e) => {
//   if (e.target.classList.contains('ship')) return
//   if (opponent === player) return
//   const [x, y] = (e.target.getAttribute('data-xy')).split('')
//   hit(x, y)
// })

// const botMove = () => {
//   const i = rndCoords.pop()
//   const [x, y] = i.split('')
//   hit(x, y)
// }

// const hit = (x, y) => {
//   if(opponent.matrix[+x][+y] === 2) return
//   if (opponent.matrix[+x][+y] === 1) {
//     for (let name in opponent.squadron) {
//       const s = opponent.squadron[name]
//       for(let i of s.arrDecks) {
//         if (i[0] === +x && i[1] === +y) {
//           s.hits++
//         }
//       }
//       if(s.hits === s.arrDecks.length) {
//         delete opponent.squadron[name]
//       }
//       if(Object.keys(opponent.squadron).length === 0) {
//         console.log('win')
//       }
//     }
//     const c = opponent.field.querySelector(`[data-xy='${x + y}']`)
//     if (opponent === bot) {
//       const div = document.createElement('div')
//       div.classList.add('ship')
//       c.append(div)
//     }
//     c.classList.add('x')
//   } else if (opponent.matrix[+x][+y] === 0) {
//     const c = opponent.field.querySelector(`[data-xy='${x + y}']`)
//     c.classList.add('o')
//   }
//   opponent.matrix[+x][+y] = 2
//   opponent = opponent === bot ? player : bot
//   if(opponent === player) {
//     botMove()
//   }
// }

