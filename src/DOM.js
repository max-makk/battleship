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
    const h1 = DOM.createDOM('h1', '....battleship....', [])
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
    const battlefields = DOM.createDOM('div', false, ['battlefields'])
    const selfWrapper = DOM.createDOM('div', false, ['wrapper'])
    const rivalWrapper = DOM.createDOM('div', false, ['wrapper'])
    const selfField = DOM.createDOM('div', false, ['battlefield-self', 'battlefield'])
    const rivalField = DOM.createDOM('div', false, ['battlefield-rival', 'battlefield'])
    const selfLabel = DOM.createDOM('div', 'Your Grid', ['battlefield-label'])
    const rivalLabel = DOM.createDOM('div', 'Opponent\'s grid', ['battlefield-label'])
    selfWrapper.append(selfField)
    rivalWrapper.append(rivalField)
    selfWrapper.append(selfLabel)
    rivalWrapper.append(rivalLabel)
    battlefields.append(selfWrapper)
    battlefields.append(rivalWrapper)
    main.append(battlefields)
    const footer = DOM.createDOM('footer',
      'Click on a ship to switch direction. Drag and Drop the ships.',
      []
    )
    document.body.append(header)
    document.body.append(main)
    document.body.append(footer)
  }

  static removeHighlight() {
    if (document.querySelector('.highlight')) {
      document.querySelector('.highlight').classList.remove('highlight')
    }
  }

}
