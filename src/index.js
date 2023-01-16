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
  Gameboard.started = false
  eraseShips()
  player.cleanBoard()
  player.randomLocationShips()
})

const eraseShips = () => {
  document.querySelectorAll('.ship').forEach(i => i.remove())
}

const controller = new Controller(player, bot)

startBtn.addEventListener('click', () => {
  Gameboard.started = true
  controller.start()
})
