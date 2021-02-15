const container = document.querySelector('#container')

const clearButton = document.createElement('button')
clearButton.textContent = "Clear Grid"
clearButton.className = "clearButton"
container.appendChild(clearButton)

const containGrid = document.createElement('div')
containGrid.id = "containGrid"
container.appendChild(containGrid)

function createGrid(row, col) {
    containGrid.style.setProperty('--grid-rows', row)
    containGrid.style.setProperty('--grid-cols', col)
    for (c = 0; c < (row*col); c++) {
        let cell = document.createElement('div')
        containGrid.appendChild(cell).className = "grid-item"
    }
}

createGrid(16, 16)

let grid = document.querySelectorAll('.grid-item')

function createHover() {
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            //div.classList.add("grid-over")
            div.style.backgroundColor = randomColor()
        })
    })
}

createHover()

function clearGrid() {
    grid.forEach((div) => {
        //div.classList.remove("grid-over")
        div.style.backgroundColor = "white"
    })
}

function newGrid() {
    while (containGrid.firstChild) {
        containGrid.removeChild(containGrid.lastChild)
    }
    let newSize = Number(prompt("Please enter size for new grid(Max. 100): "))
    if ((newSize <= 0) || (newSize >= 100)) {
        alert("ERROR! Incorrect grid size.")
    } else {
        createGrid(newSize, newSize)
    }    
}

function randomColor() {
    let randomColor = Math.floor(Math.random()*(2**24)).toString(16)
    randomColor = "#" + randomColor
    return randomColor
}

clearButton.addEventListener('click', () => {
    clearGrid()
    newGrid()
    grid = document.querySelectorAll('.grid-item')
    createHover()
})

