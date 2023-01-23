import Ship from './Ship'
import Storage from './Storage'

export default class Gameboard {

  static isGameStarted = false

  static SHIP_INFO = {
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
    for (let type in Gameboard.SHIP_INFO) {
      let count = Gameboard.SHIP_INFO[type][0]
      let decks = Gameboard.SHIP_INFO[type][1]

      for (let i = 0; i < count; i++) {
        let options = this.getCoordsDecks(decks)
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

  getCoordsDecks(decks) {
    let kx = Gameboard.getRandom(1), ky = (kx == 0) ? 1 : 0, x, y

    if (kx == 0) {
      x = Gameboard.getRandom(9)
      y = Gameboard.getRandom(10 - decks)
    } else {
      x = Gameboard.getRandom(10 - decks)
      y = Gameboard.getRandom(9)
    }

    const obj = { x, y, kx, ky }
    const result = this.checkLocationShip(obj, decks)

    if (!result) return this.getCoordsDecks(decks)
    return obj
  }

  checkLocationShip(obj, decks) {
    let { x, y, kx, ky, fromX, toX, fromY, toY } = obj;

    fromX = (x == 0) ? x : x - 1;
    if (x + kx * decks == 10 && kx == 1) toX = x + kx * decks;
    else if (x + kx * decks < 10 && kx == 1) toX = x + kx * decks + 1;
    else if (x == 9 && kx == 0) toX = x + 1;
    else if (x < 9 && kx == 0) toX = x + 2;
    fromY = (y == 0) ? y : y - 1;
    if (y + ky * decks == 10 && ky == 1) toY = y + ky * decks;
    else if (y + ky * decks < 10 && ky == 1) toY = y + ky * decks + 1;
    else if (y == 9 && ky == 0) toY = y + 1;
    else if (y < 9 && ky == 0) toY = y + 2;

    if (toX === undefined || toY === undefined) return false;

    if (this.matrix.slice(fromX, toX)
      .filter(arr => arr.slice(fromY, toY).includes(1))
      .length > 0) return false
    return true
  }
}

