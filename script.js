const container = document.querySelector('#container')

const grid = document.createElement('div')

function createGrid(row, col) {
    container.style.setProperty('--grid-rows', row)
    container.style.setProperty('--grid-cols', col)
    for (c = 0; c < (row*col); c++) {
        let cell = document.createElement('div')
        cell.innerText = c + 1
        container.appendChild(cell).className = "grid-item"
    }
}

createGrid(16, 16)