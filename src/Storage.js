export default class Storage {
  static check() {
    return JSON.parse(localStorage.getItem('battleship-ships'))
  }

  static store(items) {
    localStorage.setItem('battleship-ships', JSON.stringify(items))
  }
}
