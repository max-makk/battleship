import Ship from "./Ship"

export default class Placement {

  constructor(board) {
    this.board = board
    this.isDragged = false
    this.oldShip = {}
    document.addEventListener('dragstart', this.dragStart.bind(this))
    document.addEventListener('mouseup', this.dragEnd.bind(this))
    document.addEventListener('dblclick', this.rotateShip.bind(this))
  }

  dragStart(e) {
    if (!e.target.classList || e.target.classList[0] !== 'ship') return
    this.isDragged = true
    this.removeShip(e.target.getAttribute('data-name'))
  }

  dragEnd(e) {
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
      ship.drawShip()
    } else {
      this.restoreShip()
    }
  }

  rotateShip(e) {
    if (e.target.classList[0] !== 'ship') return
    this.removeShip(e.target.getAttribute('data-name'))
    const obj = { ...this.oldShip, kx: (this.oldShip.kx == 0) ? 1 : 0, ky: (this.oldShip.ky == 0) ? 1 : 0 }
    const result = this.board.checkLocationShip(obj, this.oldShip.decks)
    if (result) {
      const ship = new Ship(this.board, obj)
      ship.createShip()
      ship.drawShip()
    } else {
      const ship = new Ship(this.board, this.oldShip)
      ship.createShip()
      ship.drawShip()
    }
  }

  removeShip(el) {
    const obj = this.board.squadron[el]
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
    delete this.board.squadron[el]
  }

  restoreShip() {
    const ship = new Ship(this.board, this.oldShip)
    ship.createShip()
    ship.drawShip()
  }

}