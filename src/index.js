import './style.css'
import Gameboard from './Gameboard'
import Placement from './Placement'
import Controller from './Controller'
import Storage from './Storage'
import DOM from './DOM'

const startBtn = document.querySelector('.start')
const randomBtn = document.querySelector('.random')
const rematch = document.querySelector('.rematch')

const playerGrid = document.querySelector('.player')
const botGrid = document.querySelector('.bot')

DOM.createGrid(playerGrid)
DOM.createGrid(botGrid)

const player = new Gameboard(playerGrid)
const bot = new Gameboard(botGrid)

new Placement(player)

player.cleanBoard()
if (Storage.check()) {
  player.placeShips()
} else {
  player.randomPlaceShips()
  player.saveShips()
}

bot.cleanBoard()
bot.randomPlaceShips()

randomBtn.addEventListener('click', () => {
  Gameboard.isGameStarted = false
  DOM.createGrid(botGrid)
  DOM.createGrid(playerGrid)
  player.cleanBoard()
  player.randomPlaceShips()
  player.saveShips()
  bot.cleanBoard()
  bot.randomPlaceShips()
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

rematch.addEventListener('click', () => {
  Gameboard.isGameStarted = false
  DOM.createGrid(botGrid)
  DOM.createGrid(playerGrid)
  player.cleanBoard()
  player.placeShips()
  bot.cleanBoard()
  bot.randomPlaceShips()
  if (document.querySelector('.highlight')) {
    document.querySelector('.highlight').classList.remove('highlight')
  }
})
