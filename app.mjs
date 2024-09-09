import names from './names.mjs'

let viewportElement
var store = {}

const scenes = {
    'characterCreationMenu' : {

    }
}

function init() {
    document.querySelector('#intro-menu').style.display = "block"
}

function adjustInitialCharStat(stat, adjustmentAmount) {
    let nextAmount = store.characterStats[stat] + adjustmentAmount;

    if (nextAmount < 0 && checkAdjustmentMax(stat, nextAmount)) {
            return;
    } else {
        
    }
    return console.log(store.characterStats[stat] += amount)
}

function changeScene(sceneName) {
    if (sceneName == 'characterCreationMenu') {
        let sharedPool = 40
        var characterStats = {
            'constitution' : 1,
            'strength' : 1,
            'agility' : 1,
            'faith' : 1,
            'intelligence' : 1,
            'charisma' : 1,
            'luck' : 1,
            'total' : 40
        }
        store.characterStats = characterStats


        document.querySelector('#intro-menu').style.display = 'none'
        document.querySelector('#character-creation-menu').style.display = 'block'
    }
}

function checkAdjustmentMax(stat, nextAmount) {
    let tempTotal = 
}

function generateName() {
    let name = []
    let nameLength = Math.ceil(Math.random() * 3)

    for (let i = 0; i < nameLength; i++) {
        name.push(names[Math.round(Math.random() * names.length)])
    }
    document.querySelector('#name').value = name.join(' ')
}

window.changeScene = changeScene
window.generateName = generateName
window.adjustInitialCharStat = adjustInitialCharStat

window.onload = init;
