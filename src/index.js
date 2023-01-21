import './style.css'
import Gameboard from './Gameboard'
import Placement from './Placement'
import Controller from './Controller'
import Storage from './Storage'
import DOM from './DOM'

DOM.init()

const play = document.querySelector('.play')
const random = document.querySelector('.random')
const rematch = document.querySelector('.rematch')

const playerField = document.querySelector('.player')
const botField = document.querySelector('.bot')

DOM.createCells(playerField)
DOM.createCells(botField)

const player = new Gameboard(playerField)
const bot = new Gameboard(botField)

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

random.addEventListener('click', () => {
  Gameboard.isGameStarted = false
  rematch.disabled = true
  play.disabled = false
  DOM.clearField()
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

play.addEventListener('click', () => {
  if (Gameboard.isGameStarted === true) {
    return
  }
  Gameboard.isGameStarted = true
  rematch.disabled = false
  play.disabled = true
  controller.init()
})

rematch.addEventListener('click', () => {
  Gameboard.isGameStarted = false
  rematch.disabled = true
  play.disabled = false
  DOM.clearField()
  player.cleanBoard()
  player.placeShips()
  bot.cleanBoard()
  bot.randomPlaceShips()
  if (document.querySelector('.highlight')) {
    document.querySelector('.highlight').classList.remove('highlight')
  }
})
