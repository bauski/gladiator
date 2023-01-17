function init() {
    window.app = {}
    const appElement = document.querySelector('#app')
    const titleElement = document.createElement('h1')
    titleElement.id = 'mainTitle'
    titleElement.appendChild(document.createTextNode('Gladiator'))
    appElement.appendChild(titleElement)
    const viewportElement = document.createElement('div')
    viewportElement.id = "viewport"
    appElement.appendChild(viewportElement)
    window.app.viewport = viewportElement
    initMainMenu()
}

function initMainMenu() {
    const menuElement = document.createElement('div')
    menuElement.id = 'mainMenu'
    menuElement.classList.add('menu')
    const startButton = document.createElement('button')
    startButton.appendChild(document.createTextNode('Start'))
    startButton.classList.add('menuButton')
    startButton.addEventListener('click', startGame)
    menuElement.appendChild(startButton)
    const loadButton = document.createElement('button')
    loadButton.appendChild(document.createTextNode('Load'))
    loadButton.classList.add('menuButton')
    loadButton.addEventListener('click', loadGame)
    menuElement.appendChild(loadButton)
    app.viewport.appendChild(menuElement)
}

function startGame() {
    app.viewport.innerHTML = ''
    
}
function loadGame() {}
window.onload = init