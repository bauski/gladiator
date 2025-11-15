import names from './names.mjs'
//import display from './display.mjs'
//import 

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
    calculateSecondaryValues(store.characterStats)
    updateCharacterMenuValues(store.characterStats)
}

function adjustmentTotalTooBig(adjustmentAmount) {
    if (getStatTotal() + adjustmentAmount <= store.characterStats['total']) {
        return true
    }
    return false
}

function calculateSecondaryValues(stats) {
    store.characterStats['secondary'] = {}
    store.characterStats['secondary']['hp'] = stats['constitution'] * stats['strength']
    store.characterStats['secondary']['mp'] = stats['constitution'] * stats['faith']
    store.characterStats['secondary']['physicalAttack'] = stats['agility'] * stats['strength']
    store.characterStats['secondary']['magicalAttack'] = stats['intelligence'] * stats['faith']
    store.characterStats['secondary']['physicalDefense'] = (stats['constitution'] + stats['strength'] + stats['constitution'])
    store.characterStats['secondary']['magicalDefense'] = (stats['intelligence'] + stats['faith'] + stats['constitution'])
}

function convertCamelToHyphen(string) {
    return string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function changeScene(sceneName) {
    if (sceneName == 'characterCreationMenu') {
        const startingAmount = 4
        const startingMax = 40
        let characterStats = {
            'constitution' : startingAmount,
            'strength' : startingAmount,
            'agility' : startingAmount,
            'faith' : startingAmount,
            'intelligence' : startingAmount,
            'charisma' : startingAmount,
            'luck' : startingAmount,
            'total' : startingMax
        }
        store.characterStats = characterStats

        document.querySelector('#intro-menu').style.display = 'none'
        document.querySelector('#character-creation-menu').style.display = 'block'
        calculateSecondaryValues(store.characterStats)
        updateCharacterMenuValues(store.characterStats)
    }

    if (sceneName == 'dayMenu') {
        initializeDayMenu()

        document.querySelector('#character-creation-menu').style.display = 'none'
        document.querySelector('#day-menu').style.display = 'block'
    }
}

function choice(choiceMade) {
    if (choiceMade == 'battle') {
        initializeRandomBattle()
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
    console.log(store.characterStats)
    for (let key in store.characterStats) {
        if (key == 'total' || key == 'secondary') {
            continue
        }
        tempTotal += store.characterStats[key]
    }

    return tempTotal
}

function initializeDayMenu() {
    iterateDay()
    document.querySelector('#day').innerHTML = day
}

function initializeRandomBattle() {
    //getRandomEnemyByLevel(store.)
}

function iterateDay() {
    //if (store.)
}

function updateCharacterMenuValues(stats) {
    let availableStatPoints = stats['total'] - getStatTotal()
    document.querySelector('#available-stat-points').value = availableStatPoints

    for (let key in stats) {
        if (key == 'total') {
            continue
        }
        
        if (key == 'secondary') {
            for (let skey in stats[key]) {
                document.querySelector('#' + convertCamelToHyphen(skey)).value = stats[key][skey]
            }
        } else {
            document.querySelector('#' + key).value = stats[key]
        }
    }
}

// Setting global functions to be able to use in frontend.
window.changeScene = changeScene
window.generateName = generateName
window.adjustInitialCharStat = adjustInitialCharStat
window.choice = choice

window.onload = init;
