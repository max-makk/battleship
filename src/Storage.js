export default class Storage {
  static check() {
    return JSON.parse(localStorage.getItem('battleship-ships'))
  }

  static store(items) {
    localStorage.setItem('battleship-ships', JSON.stringify(items))
  }

  static storeDefaultShips() {
    localStorage.setItem('battleship-ships', JSON.stringify(data))
  }
}

const data = {
  singledeck2: { arrDecks: [[4, 6]], hits: 0, x: 4, y: 6, kx: 1, ky: 0 },
  singledeck3: { arrDecks: [[3, 8]], hits: 0, x: 3, y: 8, kx: 1, ky: 0 },
  tripledeck2: { arrDecks: [[7, 0], [8, 0], [9, 0]], hits: 0, x: 7, y: 0, kx: 1, ky: 0 },
  singledeck1: { arrDecks: [[1, 8]], hits: 0, x: 1, y: 8, kx: 0, ky: 1 }, 
  tripledeck1: { arrDecks: [[0, 0], [1, 0], [2, 0]], hits: 0, x: 0, y: 0, kx: 1, ky: 0 }, 
  doubledeck1: { arrDecks: [[4, 0], [5, 0]], hits: 0, x: 4, y: 0, kx: 1, ky: 0 }, 
  singledeck4: { arrDecks: [[8, 7]], hits: 0, x: 8, y: 7, kx: 0, ky: 1 },
  doubledeck2: { arrDecks: [[0, 2], [1, 2]], hits: 0, x: 0, y: 2, kx: 1, ky: 0 }, 
  fourdeck1: { arrDecks: [[3, 2], [4, 2], [5, 2], [6, 2]], hits: 0, x: 3, y: 2, kx: 1, ky: 0 }, 
  doubledeck3: { arrDecks: [[8, 2], [9, 2]], hits: 0, x: 8, y: 2, kx: 1, ky: 0 }
}
