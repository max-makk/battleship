import Gameboard from "./Gameboard"
import Placement from "./Placement"
import Storage from "./Storage"
import Controller from "./Controller"

export default class DOM {

  static createDOM(tag, text, classes) {
    const newElement = document.createElement(tag)
    if (text) {
      newElement.textContent = text
    }
    if (classes.length > 0) {
      classes.forEach(el => newElement.classList.add(el))
    }
    return newElement
  }

  static createCells(field) {
    for (let i = 0; i < 100; i++) {
      const str = String(i).padStart(2, '0')
      const div = document.createElement('div')
      div.setAttribute('data-xy', str)
      field.append(div)
    }
  }

  static toggleOverlay() {
    if (document.querySelector('.overlay')) {
      document.querySelector('.overlay').remove()
    } else {
      const div = document.createElement('div')
      div.classList.add('overlay')
      document.body.append(div)
    }
  }

  static notify(str = '...') {
    const div = document.createElement('div')
    div.classList.add('notify')
    div.textContent = str
    document.body.append(div)
  }

  static hideNotify() {
    if (document.querySelector('.notify')) {
      document.querySelector('.notify').remove()
    }
  }

  static clearField() {
    document.querySelectorAll('.ship').forEach(el => el.remove())
    document.querySelectorAll('.hit').forEach(el => el.classList.remove('hit'))
    document.querySelectorAll('.miss').forEach(el => el.classList.remove('miss'))
  }

  static removeHighlight() {
    if (document.querySelector('.highlight')) {
      document.querySelector('.highlight').classList.remove('highlight')
    }
  }

  constructor() {
    this.btnPlay = null
    this.btnRematch = null
    this.btnRandom = null

    this.player = null
    this.bot = null

    this.controller = null
  }

  run() {
    const header = DOM.createDOM('header', false, [])
    const h1 = DOM.createDOM('h1', '....battleship....', [])
    header.append(h1)
    const main = DOM.createDOM('main', false, [])
    const buttons = DOM.createDOM('div', false, ['buttons'])
    this.btnRandom = DOM.createDOM('button', 'Randomise', ['random'])
    this.btnPlay = DOM.createDOM('button', 'Play', ['play'])
    this.btnRematch = DOM.createDOM('button', 'Rematch', ['rematch'])
    this.btnRematch.disabled = true
    buttons.append(this.btnRandom)
    buttons.append(this.btnPlay)
    buttons.append(this.btnRematch)
    main.append(buttons)
    const battlefields = DOM.createDOM('div', false, ['battlefields'])
    const selfWrapper = DOM.createDOM('div', false, ['wrapper'])
    const rivalWrapper = DOM.createDOM('div', false, ['wrapper'])
    const selfField = DOM.createDOM('div', false, ['battlefield-self', 'battlefield'])
    const rivalField = DOM.createDOM('div', false, ['battlefield-rival', 'battlefield'])
    const selfLabel = DOM.createDOM('div', 'Your Grid', ['battlefield-label'])
    const rivalLabel = DOM.createDOM('div', 'Opponent\'s grid', ['battlefield-label'])
    selfWrapper.append(selfField)
    rivalWrapper.append(rivalField)
    selfWrapper.append(selfLabel)
    rivalWrapper.append(rivalLabel)
    battlefields.append(selfWrapper)
    battlefields.append(rivalWrapper)
    main.append(battlefields)
    const footer = DOM.createDOM('footer',
      'Click on a ship to switch direction. Drag and Drop the ships.',
      []
    )
    document.body.append(header)
    document.body.append(main)
    document.body.append(footer)

    DOM.createCells(selfField)
    DOM.createCells(rivalField)

    this.initGame(selfField, rivalField)
  }

  initGame(playerField, botField) {
    this.player = new Gameboard(playerField)
    this.bot = new Gameboard(botField)
    new Placement(this.player)
    this.player.cleanBoard()
    if (Storage.check()) {
      this.player.placeShips()
    } else {
      Storage.storeDefaultShips()
      this.player.placeShips()
    }

    this.bot.cleanBoard()
    this.bot.randomPlaceShips()

    this.controller = new Controller(this.player, this.bot)

    this.btnRematch.addEventListener('click', this.resetGame.bind(this, false))
    this.btnRandom.addEventListener('click', this.resetGame.bind(this, true))
    this.btnPlay.addEventListener('click', this.startGame.bind(this))
  }

  startGame() {
    if (Gameboard.isGameStarted === true) {
      return
    }
    Gameboard.isGameStarted = true
    this.btnRematch.disabled = false
    this.btnPlay.disabled = true
    this.controller.init()
  }

  resetGame(isRandom) {
    Gameboard.isGameStarted = false
    this.btnRematch.disabled = true
    this.btnPlay.disabled = false
    this.controller.stopListening()
    DOM.hideNotify()
    DOM.clearField()
    this.player.cleanBoard()
    if (isRandom) {
      this.player.randomPlaceShips()
      this.player.saveShips()
    } else {
      this.player.placeShips()
    }
    this.bot.cleanBoard()
    this.bot.randomPlaceShips()
    DOM.removeHighlight()
  }

}
