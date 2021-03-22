let result = document.getElementById('result')
let form = document.getElementById('data')
let size, density, spacing, i

function calc() {
    size = Number(form.elements[0].value)
    spacing = Number(form.elements[1].value)
    density = Number(form.elements[2].value)
    let side =  Math.sqrt(size)
    let trees = ((size/10000) * density)
    let rows = side/spacing
    let treesInRow = trees/rows
    let r = side/treesInRow

    result.innerHTML = r
}