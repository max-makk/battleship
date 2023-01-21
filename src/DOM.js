export default class DOM {

  static createDOM(tag, text, classes) {
    const newElement = document.createElement(tag)
    if (text) {
      newElement.textContent = text
    }
    if (classes.length > 0) {
      classes.forEach(el => newElement.classList.add(el))
    }
    return newElement
  }

  static createCells(field) {
    for (let i = 0; i < 100; i++) {
      const str = String(i).padStart(2, '0')
      const div = document.createElement('div')
      div.setAttribute('data-xy', str)
      field.append(div)
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

  static init() {
    const header = DOM.createDOM('header', false, [])
    const h1 = DOM.createDOM('h1', 'Battleship', [])
    header.append(h1)
    const main = DOM.createDOM('main', false, [])
    const buttons = DOM.createDOM('div', false, ['buttons'])
    const btnRandom = DOM.createDOM('button', 'Randomise', ['random'])
    const btnPlay = DOM.createDOM('button', 'Play', ['play'])
    const btnRematch = DOM.createDOM('button', 'Rematch', ['rematch'])
    btnRematch.disabled = true
    buttons.append(btnRandom)
    buttons.append(btnPlay)
    buttons.append(btnRematch)
    main.append(buttons)
    const boards = DOM.createDOM('div', false, ['boards'])
    const playerBoard = DOM.createDOM('div', false, ['board'])
    const botBoard = DOM.createDOM('div', false, ['board'])
    const playerField = DOM.createDOM('div', false, ['player'])
    const botField = DOM.createDOM('div', false, ['bot'])
    const playerHeading = DOM.createDOM('h2', 'Your Grid', [])
    const botHeading = DOM.createDOM('h2', 'Opponent\'s grid', [])
    playerBoard.append(playerField)
    botBoard.append(botField)
    playerBoard.append(playerHeading)
    botBoard.append(botHeading)
    boards.append(playerBoard)
    boards.append(botBoard)
    main.append(boards)
    const footer = DOM.createDOM('footer',
      'Double-click to switch a ship direction. Drag and Drop the ships.',
      []
    )
    document.body.append(header)
    document.body.append(main)
    document.body.append(footer)
  }

}
