
export default class Ship {
  constructor(board, { x, y, kx, ky, decks, shipname }) {
    this.board = board
    this.shipname = shipname
    this.decks = decks
    this.x = x
    this.y = y
    this.kx = kx
    this.ky = ky
    this.hits = 0
    this.arrDecks = []
  }

  createShip() {
    let { board, shipname, decks, x, y, kx, ky, hits, arrDecks, k = 0 } = this

    while (k < decks) {
      let i = x + k * kx, j = y + k * ky
      board.matrix[i][j] = 1
      arrDecks.push([i, j])
      k++
    }

    board.squadron[shipname] = { arrDecks, hits, x, y, kx, ky }
  }

  drawShip() {
    this.arrDecks.forEach(el => {
      const pos = el.join('')
      const c = this.board.field.querySelector(`[data-xy='${pos}']`)
      const ship = document.createElement('div')
      ship.classList.add('ship')
      ship.setAttribute('data-name', this.shipname)
      c.append(ship)
    })
  }
}