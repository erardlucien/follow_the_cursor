'use strict'

let container = document.querySelector('.container')
let cursorFollower = document.createElement('span')
cursorFollower.classList.add('cursor__follower')

container.appendChild(cursorFollower)

const START_HUE = 10
const START_SATURATION = 30
const START_LIGHT = 40
let hue = START_HUE
let saturation = START_SATURATION
let light = START_LIGHT
const MAX_LIGTH_SATURATION = 100
const MAX_HUE = 360
const STEP = 10

function followCursor(event) {
    let coordinateX = event.clientX + 30
    let coordinateY = event.clientY + 35

    cursorFollower.style.setProperty('--x', `${coordinateX}`)
    cursorFollower.style.setProperty('--y', `${coordinateY}`)

    cursorFollower.style.setProperty('--hue', `${hue}`)
    cursorFollower.style.setProperty('--saturation', `${saturation}`)
    cursorFollower.style.setProperty('--light', `${light}`)

    hue += STEP
    saturation += STEP
    light += STEP

    if(hue >= MAX_HUE) {
        hue = START_HUE
    }

    if(saturation >= MAX_LIGTH_SATURATION) {
        saturation = START_SATURATION
    }

    if(light >= MAX_LIGTH_SATURATION) {
        light = START_LIGHT
    }
}

function followTouch(event) {
    let touchObject = event.changedTouches[0]
    let coordinateX = touchObject.clientX + 30
    let coordinateY = touchObject.clientY + 35

    cursorFollower.style.setProperty('--x', `${coordinateX}`)
    cursorFollower.style.setProperty('--y', `${coordinateY}`)

    cursorFollower.style.setProperty('--hue', `${hue}`)
    cursorFollower.style.setProperty('--saturation', `${saturation}`)
    cursorFollower.style.setProperty('--light', `${light}`)

    hue += STEP
    saturation += STEP
    light += STEP

    if(hue >= MAX_HUE) {
        hue = START_HUE
    }

    if(saturation >= MAX_LIGTH_SATURATION) {
        saturation = START_SATURATION
    }

    if(light >= MAX_LIGTH_SATURATION) {
        light = START_LIGHT
    }
}

container.addEventListener('mousemove', followCursor)
container.addEventListener('touchmove', followTouch)