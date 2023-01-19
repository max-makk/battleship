import Ship from "./Ship"

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
    this.resetCurrentShip()
  }

  init() {
    this.opponent = Math.random() > 0.5 ? this.player : this.bot

    this.bot.field.addEventListener('click', this.makeShot.bind(this))

    this.randomCoords = Controller.shuffle(Controller.coords())
    this.coordsAroundHit = []

    if (this.opponent === this.player) {
      setTimeout(() => this.makeShot(), 500)
    }

    this.opponent.field.parentElement.classList.add('highlight')
  }

  getCoordsForShot() {
    const c = this.coordsAroundHit.length > 0 ? this.coordsAroundHit.pop() : this.randomCoords.pop()
    this.removeCoordsFromArrays(c)
    return c
  }

  makeShot(e) {
    let x, y
    if (e !== undefined) {
      if (!e.target.getAttribute('data-xy')) return
      if (this.opponent === this.player) return
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
    this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('o')
    if (this.opponent === this.bot) {
      this.opponent = this.player
      this.toggleLoader()
      setTimeout(() => {
        this.makeShot()
        this.toggleLoader()
      }, 500)
    } else {
      this.opponent = this.bot
    }
    this.opponent.field.parentElement.classList.add('highlight')
  }

  hit(x, y) {
    this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('x')
    this.opponent.matrix[x][y] = 4

    iter: for (let name in this.opponent.squadron) {
      const ship = this.opponent.squadron[name]
      for (let c of ship.arrDecks) {
        if (c[0] !== x || c[1] !== y) continue
        ship.hits++
        if (ship.hits < ship.arrDecks.length) break iter
        if (this.opponent === this.player) {
          this.resetCurrentShip()
        }
        this.markEmptyCellsAroundShip(ship)
        delete this.opponent.squadron[name]
        break iter
      }
    }

    if (Object.keys(this.opponent.squadron).length === 0) {
      if (this.opponent === this.player) {
        this.notify('Game over. You lose.')
        //rematch
        for (let name in this.bot.squadron) {
          const ship = this.bot.squadron[name]
          Ship.drawShip(this.bot.field, ship.arrDecks)
        }
      } else {
        this.notify('Game over. Congratulations, you won!')
        //play again
      }
      this.opponent.field.parentElement.classList.remove('highlight')
      this.bot.field.removeEventListener('click', this.makeShot.bind(this))
    } else if (this.opponent === this.player) {
      this.toggleLoader()
      this.currentShip.hits++
      let coords = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ]

      this.setCoordsAroundHit(x, y, coords)

      setTimeout(() => {
        this.makeShot()
        this.toggleLoader()
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
      this.opponent.field.querySelector(`[data-xy='${'' + x + y}']`).classList.add('o')
    }
  }

  notify(str = 'test ...') {
    const div = document.createElement('div')
    div.classList.add('notify')
    div.textContent = str
    document.body.append(div)
    setTimeout(() => div.remove(), 2000)
  }

  toggleLoader() {
    document.querySelector('.overlay').classList.toggle('hide')
    // document.querySelector('.loader').classList.toggle('hide')
  }

}
