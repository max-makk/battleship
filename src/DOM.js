
export default class DOM {
  static createGrid(grid) {
    grid.textContent = ''
    for (let i = 0; i < 100; i++) {
      const str = String(i).padStart(2, '0')
      const div = document.createElement('div')
      div.setAttribute('data-xy', str)
      grid.append(div)
    }
  }
}
