const form = document.querySelector('#form')

let imgFlag

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const planet = document.querySelector('#planet-select')
    const weight = document.querySelector('#weight-inp')

    if (!weight.value) {
        alert('Por favor, preencha o campo do peso corretamente')
    } else if (!planet.value || planet.value == '') {
        alert('Por favor, escolha um planeta/astro') 
    } else {
        if (imgFlag == 1) removeImg()

        showRes(weight.value, planet.value)
        showImg(planet.value)
    
        imgFlag = 1 
    }
})

function createImg(planetName) {
    const img =  document.createElement('img')

    img.setAttribute('src', `./images/${planetName}.png`)

    return img
}

function removeImg() {
    const img = document.querySelector('img')

    img.remove()
}

function calcWeight(weight, planetName) {
    switch (planetName) {
        case 'sun':
            return (weight * 28).toFixed(2)
    
        case 'mercury':
            return (weight * 0.37).toFixed(2)
    
        case 'venus':
            return (weight * 0.88).toFixed(2)
    
        case 'earth':
            return (weight * 1).toFixed(2)
    
        case 'moon':
            return (weight * 0.16).toFixed(2)
    
        case 'mars':
            return (weight * 0.38).toFixed(2)
    
        case 'jupter':
            return (weight * 2.64).toFixed(2)
    
        case 'saturn':
            return (weight * 1.15).toFixed(2)
    
        case 'uranus':
            return (weight * 1.17).toFixed(2)
    
        case 'neptune':
            return (weight * 1.18).toFixed(2)
    
        default:
            break;
    }
}

function definePlanet(weight, planetName) {
    switch (planetName) {
        case 'sun':
            return 'em Sol' 

        case 'mercury':
            return 'em Mercúrio' 
    
        case 'venus':
            return 'em Vênus' 
    
        case 'earth':
            return 'na Terra' 

        case 'moon':
            return 'na Lua' 
    
        case 'mars':
            return 'em Marte' 
    
        case 'jupter':
            return 'em Júpter' 
    
        case 'saturn':
            return 'em Saturno' 
    
        case 'uranus':
            return 'em Urano' 
    
        case 'neptune':
            return 'em Netuno' 
    
        default:
            break;
    }
}

function showRes(weightValue, planetName) {
    const res = document.querySelector('#res')

    const weight = calcWeight(weightValue, planetName)
    const planet = definePlanet(weightValue, planetName)

    res.innerHTML = `O seu peso ${planet} seria de ${weight}kg`
}

function showImg(planetName) {
    const showInfo = document.querySelector('.show-info')

    showInfo.appendChild(createImg(planetName))
}
