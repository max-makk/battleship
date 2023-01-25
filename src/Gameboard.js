import Ship from './Ship'
import Storage from './Storage'

export default class Gameboard {

  static isGameStarted = false

  static SHIP_DATA = {
    fourdeck: [1, 4],
    tripledeck: [2, 3],
    doubledeck: [3, 2],
    singledeck: [4, 1],
  }

  static createMatrix() {
    return [...Array(10)].map(() => Array(10).fill(0))
  }

  static getRandom = n => Math.floor(Math.random() * (n + 1))

  constructor(field) {
    this.field = field
    this.ships = {}
    this.matrix = []
  }

  cleanBoard() {
    this.ships = {}
    this.matrix = Gameboard.createMatrix()
  }

  randomPlaceShips() {
    for (let type in Gameboard.SHIP_DATA) {
      let count = Gameboard.SHIP_DATA[type][0]
      let decks = Gameboard.SHIP_DATA[type][1]

      for (let i = 0; i < count; i++) {
        let options = this.getCoords(decks)
        options.decks = decks
        options.shipname = type + String(i + 1)
        const ship = new Ship(this, options)
        ship.createShip()
        if (this.field.classList[0] === 'battlefield-self') {
          Ship.drawShip(this.field, ship.arrDecks, ship.shipname)
        }
      }
    }
  }

  saveShips() {
    Storage.store(Object.assign({}, this.ships))
  }

  placeShips() {
    const savedShips = Storage.check()
    for (let name of Object.keys(savedShips)) {
      const data = savedShips[name]
      const ship = new Ship(this, { ...data, decks: data.arrDecks.length, shipname: name })
      ship.createShip()
      Ship.drawShip(this.field, ship.arrDecks, ship.shipname)
    }
  }

  getCoords(decks) {
    let h = Gameboard.getRandom(1)
    let v = (h === 0) ? 1 : 0
    let x = undefined
    let y = undefined

    if (h === 0) {
      x = Gameboard.getRandom(9)
      y = Gameboard.getRandom(10 - decks)
    } else {
      x = Gameboard.getRandom(10 - decks)
      y = Gameboard.getRandom(9)
    }

    const obj = { x, y, h, v }
    const result = this.validateBattlefield(obj, decks)

    if (!result) return this.getCoords(decks)
    return obj
  }

  validateBattlefield(obj, decks) {
    let { x, y, h, v } = obj

    if (h === 0 && ((y + decks) > 10)) return false
    else if (v === 0 && ((x + decks) > 10)) return false

    let dir = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 0], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ]
    for (let i = 0; i < decks; i++) {
      if(i === 1) {
        if(h === 0) {
          dir = [
            [-1, 1], [0, 1], [1, 1]
          ]
        } else {
          dir = [
            [1, -1], [1, 0], [1, 1]
          ]
        }
      }
      for (let s = 0; s < dir.length; s++) {
        const j = (x + i * h) + dir[s][0]
        const k = (y + i * v) + dir[s][1]
        if (j >= 0 && j < 10 &&
          k >= 0 && k < 10 &&
          this.matrix[j][k] === 1) {
          return false
        }
      }
    }
    return true
  }
}

