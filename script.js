const plants = document.querySelectorAll('.plant')
const grass = document.querySelectorAll('.grass')
const flower = document.querySelectorAll('.flower')
const fruit = document.querySelectorAll('.fruit')
const gallons = document.getElementById('gallons')
const remaining = document.getElementById('remaining')
const percentage = document.getElementById('percentage')


plants.forEach((plant, idx) => {
    plant.addEventListener('click', () => changeBackground(idx))
})

function changeBackground(idx) {

    plants[idx].classList.toggle('watered')
    updateWaterTank()

}



function updateWaterTank() {
    const wateredPlants = document.querySelectorAll('.plant.watered').length
    const totalPlants = plants.length

    if (wateredPlants === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${wateredPlants / totalPlants * 300}px`

    }

    if (wateredPlants === totalPlants) {
        remaining.style.visibility = "hidden"
        remaining.style.height = 0
    } else {
        remaining.style.visibility = "visible"
        gallons.innerText = `${60 - (10 * wateredPlants)} Gal.`
    }


}

