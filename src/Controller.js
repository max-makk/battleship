import Ship from "./Ship"
import Gameboard from './Gameboard'
import DOM from "./DOM"

export default class Controller {

  static removeElementArray(arr, [x, y]) {
    return arr.filter(i => i[0] !== x || i[1] !== y)
  }

  static coords = () => {
    const arr = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arr.push([i, j])
      }
    }
    return arr
  }

  static shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  constructor(player, bot) {
    this.player = player
    this.bot = bot
    this.opponent = {}
    this.randomCoords = []
    this.coordsAroundHit = []
    this.clickHandler = this.attack.bind(this)
    this.resetCurrentShip()
  }

  init() {
    this.opponent = Math.random() > 0.5 ? this.player : this.bot

    this.bot.field.addEventListener('click', this.clickHandler)

    this.randomCoords = Controller.shuffle(Controller.coords())
    this.coordsAroundHit = []

    if (this.opponent === this.player) {
      DOM.toggleOverlay()
      setTimeout(() => {
        this.attack()
        DOM.toggleOverlay()
      }, 500)
    }

    this.opponent.field.parentElement.classList.add('highlight')
  }

  getCoordsForShot() {
    const c = this.coordsAroundHit.length > 0 ? this.coordsAroundHit.pop() : this.randomCoords.pop()
    this.removeCoordsFromArrays(c)
    return c
  }

  attack(e) {
    let x, y
    if (e !== undefined) {
      if (this.opponent === this.player) return
      if (!e.target.getAttribute('data-xy')) return
      [x, y] = e.target.getAttribute('data-xy').split('').map(i => Number(i))
    } else {
      [x, y] = this.getCoordsForShot()
    }

    const c = this.opponent.matrix[x][y]

    if (c === 0) {
      this.miss(x, y)
    } else if (c === 1) {
      this.hit(x, y)
    }
  }

  miss(x, y) {
    this.opponent.field.parentElement.classList.remove('highlight')
    this.opponent.matrix[x][y] = 3
    this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('miss')
    if (this.opponent === this.bot) {
      this.opponent = this.player
      DOM.toggleOverlay()
      setTimeout(() => {
        this.attack()
        DOM.toggleOverlay()
      }, 500)
    } else {
      this.opponent = this.bot
    }
    this.opponent.field.parentElement.classList.add('highlight')
  }

  hit(x, y) {
    this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('hit')
    this.opponent.matrix[x][y] = 4

    this.isSunk(x, y)

    if (Object.keys(this.opponent.ships).length === 0) {
    this.bot.field.removeEventListener('click', this.clickHandler)
      if (this.opponent === this.player) {
        DOM.notify('Game over. You lose.')
        for (let name in this.bot.ships) {
          const ship = this.bot.ships[name]
          Ship.drawShip(this.bot.field, ship.arrDecks)
        }
      } else {
        DOM.notify('Game over. Congratulations, you won!')
      }
      this.opponent.field.parentElement.classList.remove('highlight')
    } else if (this.opponent === this.player) {
      DOM.toggleOverlay()
      this.currentShip.hits++
      let coords = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ]

      this.setCoordsAroundHit(x, y, coords)

      setTimeout(() => {
        this.attack()
        DOM.toggleOverlay()
      }, 500)
    }

    if (this.opponent === this.bot) {
      const div = document.createElement('div')
      div.classList.add('ship')
      this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).append(div)
    }
    let coords = [
      [x - 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y - 1],
      [x + 1, y + 1]
    ]
    this.markEmptyCell(coords)
  }

  isSunk(x, y) {
    iter: for (let name in this.opponent.ships) {
      const ship = this.opponent.ships[name]
      for (let c of ship.arrDecks) {
        if (c[0] !== x || c[1] !== y) continue
        ship.hits++
        if (ship.hits < ship.arrDecks.length) break iter
        if (this.opponent === this.player) {
          this.resetCurrentShip()
        }
        this.markEmptyCellsAroundShip(ship)
        delete this.opponent.ships[name]
        break iter
      }
    }
  }

  removeCoordsFromArrays(coords) {
    if (this.coordsAroundHit.length > 0) {
      this.coordsAroundHit = Controller.removeElementArray(this.coordsAroundHit, coords)
    }
    this.randomCoords = Controller.removeElementArray(this.randomCoords, coords)
  }

  resetCurrentShip() {
    this.currentShip = {
      hits: 0,
      firstHit: [],
      kx: 0,
      ky: 0
    }
  }

  setCoordsAroundHit(x, y, coords) {
    let { firstHit, kx, ky } = this.currentShip

    if (firstHit.length === 0) {
      this.currentShip.firstHit = [x, y]
    } else if (kx === 0 && ky === 0) {
      this.currentShip.kx = (Math.abs(firstHit[0] - x) === 1) ? 1 : 0
      this.currentShip.ky = (Math.abs(firstHit[1] - y) === 1) ? 1 : 0
    }

    for (let coord of coords) {
      x = coord[0]
      y = coord[1]
      if (x < 0 || x > 9 || y < 0 || y > 9) continue
      if (this.player.matrix[x][y] !== 0 && this.player.matrix[x][y] !== 1) continue
      this.coordsAroundHit.push([x, y])
    }
  }

  markEmptyCellsAroundShip(ship) {
    const { hits, kx, ky, x, y } = ship
    let coords
    if (ship.hits == 1) {
      coords = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ]
    } else {
      coords = [
        [x - kx, y - ky],
        [x + kx * hits, y + ky * hits]
      ]
    }
    this.markEmptyCell(coords)
  }

  markEmptyCell(coords) {
    let x, y
    for (let coord of coords) {
      x = coord[0]; y = coord[1]
      if (x < 0 || x > 9 || y < 0 || y > 9) continue
      if (this.opponent.matrix[x][y] == 2 || this.opponent.matrix[x][y] == 3) continue
      this.opponent.matrix[x][y] = 2
      if (this.opponent === this.player) {
        this.removeCoordsFromArrays(coord)
      }
      this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('miss')
    }
  }

}
