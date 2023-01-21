
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

  static toggleOverlay() {
    if (document.querySelector('.overlay')) {
      document.querySelector('.overlay').remove()
    } else {
      const div = document.createElement('div')
      div.classList.add('overlay')
      document.body.append(div)
    }
  }

  static notify(str = '...') {
    const div = document.createElement('div')
    div.classList.add('notify')
    div.textContent = str
    document.body.append(div)
    setTimeout(() => div.remove(), 2000)
  }

  static clearField() {
    document.querySelectorAll('.ship').forEach(el => el.remove())
    document.querySelectorAll('.hit').forEach(el => el.classList.remove('hit'))
    document.querySelectorAll('.miss').forEach(el => el.classList.remove('miss'))
  }

}
