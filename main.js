function init() {
    window.app = {}
    const appElement = document.querySelector('#app')
    const titleElement = document.createElement('h1')
    titleElement.id = 'mainTitle'
    const titleText = document.createTextNode('Gladiator')
    titleElement.appendChild(titleText)
    appElement.appendChild(titleElement)
    const viewportElement = document.createElement('div')
    viewportElement.id = "viewport"
    appElement.appendChild(viewportElement)
    window.app.viewport = viewportElement
    initMainMenu()
}

function initMainMenu() {
    const menuElement = document.createElement('div')

    window.app.viewport.appendChild(menuElement)
}

window.onload = init