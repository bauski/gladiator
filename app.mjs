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

    if (nextAmount < 1 || !adjustmentTotalTooBig(adjustmentAmount)) {
            return;
    }
    
    store.characterStats[stat] = nextAmount
    updateCharacterMenuValues(store.characterStats)
}

function adjustmentTotalTooBig(adjustmentAmount) {
    if (getStatTotal() + adjustmentAmount <= store.characterStats['total']) {
        return true
    }
    return false
}

function changeScene(sceneName) {
    if (sceneName == 'characterCreationMenu') {
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
        updateCharacterMenuValues(store.characterStats)
    }
}

function generateName() {
    let name = []
    let nameLength = Math.ceil(Math.random() * 3)

    for (let i = 0; i < nameLength; i++) {
        name.push(names[Math.round(Math.random() * names.length)])
    }
    document.querySelector('#name').value = name.join(' ')
}

function getStatTotal() {
    let tempTotal = 0;
    
    for (let key in store.characterStats) {
        if (key == 'total') {
            continue
        }
        tempTotal += store.characterStats[key]
    }

    return tempTotal
}

function updateCharacterMenuValues(stats) {
    let availableStatPoints = stats['total'] - getStatTotal()
    document.querySelector('#available-stat-points').value = availableStatPoints

    for (let key in stats) {
        if (key == 'total') {
            continue
        }
        document.querySelector('#' + key).value = stats[key]
    }
}

window.changeScene = changeScene
window.generateName = generateName
window.adjustInitialCharStat = adjustInitialCharStat

window.onload = init;
