import Ship from "./Ship"
import Gameboard from "./Gameboard"

export default class Placement {

  constructor(board) {
    this.board = board
    this.isDragged = false
    this.oldShip = {}
    document.addEventListener('dragstart', this.dragStart.bind(this))
    document.addEventListener('mouseup', this.dragEnd.bind(this))
    document.addEventListener('click', this.rotateShip.bind(this))
  }

  dragStart(e) {
    if (Gameboard.isGameStarted) return
    if (this.board.isGameStarted) return
    if (!e.target.classList || e.target.classList[0] !== 'ship') return
    this.isDragged = true
    this.removeShip(e.target.getAttribute('data-name'))
  }

  dragEnd(e) {
    if (Gameboard.isGameStarted) return
    if (!this.isDragged) return
    this.isDragged = false
    const str = e.target.getAttribute('data-xy')
    if (!str || !e.target.closest('.player')) {
      this.restoreShip()
      return
    }
    const [x, y] = str.split('').map(i => Number(i))
    const obj = { x, y, kx: this.oldShip.kx, ky: this.oldShip.ky }
    const result = this.board.checkLocationShip(obj, this.oldShip.decks)
    if (result) {
      obj.shipname = this.oldShip.shipname
      obj.decks = this.oldShip.decks
      const ship = new Ship(this.board, obj)
      ship.createShip()
      Ship.drawShip(ship.board.field, ship.arrDecks, ship.shipname)
    } else {
      this.restoreShip()
    }
    this.board.saveShips()
  }

  rotateShip(e) {
    if (Gameboard.isGameStarted) return
    if (e.target.classList[0] !== 'ship') return
    this.removeShip(e.target.getAttribute('data-name'))
    const obj = { ...this.oldShip, kx: (this.oldShip.kx == 0) ? 1 : 0, ky: (this.oldShip.ky == 0) ? 1 : 0 }
    const result = this.board.checkLocationShip(obj, this.oldShip.decks)
    if (result) {
      const ship = new Ship(this.board, obj)
      ship.createShip()
      Ship.drawShip(ship.board.field, ship.arrDecks, ship.shipname)
    } else {
      const ship = new Ship(this.board, this.oldShip)
      ship.createShip()
      Ship.drawShip(ship.board.field, ship.arrDecks, ship.shipname)
    }
    this.board.saveShips()
  }

  removeShip(el) {
    const obj = this.board.ships[el]
    this.oldShip = {
      y: obj.y,
      x: obj.x,
      ky: obj.ky,
      kx: obj.kx,
      decks: obj.arrDecks.length,
      shipname: el
    }
    document.querySelectorAll(`[data-name=${el}]`).forEach(i => i.remove())
    for (let i of obj.arrDecks) {
      const [x, y] = i
      this.board.matrix[x][y] = 0
    }
    delete this.board.ships[el]
  }

  restoreShip() {
    const ship = new Ship(this.board, this.oldShip)
    ship.createShip()
    Ship.drawShip(ship.board.field, ship.arrDecks, ship.shipname)
  }
}
