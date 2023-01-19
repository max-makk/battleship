import './style.css'
import Gameboard from './Gameboard'
import Placement from './Placement'
import Controller from './Controller'
import DOM from './DOM'

const startBtn = document.querySelector('.start')
const randomBtn = document.querySelector('.random')

const playerGrid = document.querySelector('.player')
const botGrid = document.querySelector('.bot')

DOM.createGrid(playerGrid)
DOM.createGrid(botGrid)

const player = new Gameboard(playerGrid)
const bot = new Gameboard(botGrid)

new Placement(player)

player.cleanBoard()
player.randomLocationShips()

bot.cleanBoard()
bot.randomLocationShips()

randomBtn.addEventListener('click', () => {
  Gameboard.isGameStarted = false
  DOM.createGrid(botGrid)
  DOM.createGrid(playerGrid)
  player.cleanBoard()
  player.randomLocationShips()
  bot.cleanBoard()
  bot.randomLocationShips()
  if (document.querySelector('.highlight')) {
    document.querySelector('.highlight').classList.remove('highlight')
  }
})

const controller = new Controller(player, bot)

startBtn.addEventListener('click', () => {
  if (Gameboard.isGameStarted === true) {
    randomBtn.classList.add('highlight')
    setTimeout(() => randomBtn.classList.remove('highlight'), 500)
    return
  }
  Gameboard.isGameStarted = true
  controller.init()
})
