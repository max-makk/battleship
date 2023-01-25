export default class Ship {

  static drawShip(field, arr, name) {
    arr.forEach(el => {
      const pos = el.join('')
      const c = field.querySelector(`[data-xy='${pos}']`)
      const ship = document.createElement('div')
      ship.classList.add('ship')
      ship.setAttribute('data-name', name)
      c.append(ship)
    })
  }

  constructor(board, { x, y, h, v, decks, shipname }) {
    this.board = board
    this.shipname = shipname
    this.decks = decks
    this.x = x
    this.y = y
    this.h = h
    this.v = v
    this.hits = 0
    this.arrDecks = []
  }

  createShip() {
    let { board, shipname, decks, x, y, h, v, hits, arrDecks, k = 0 } = this

    while (k < decks) {
      let i = x + k * h, j = y + k * v
      board.matrix[i][j] = 1
      arrDecks.push([i, j])
      k++
    }

    board.ships[shipname] = { arrDecks, hits, x, y, h, v }
  }

}
