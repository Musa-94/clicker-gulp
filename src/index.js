const inputsBlock = document.getElementById('inputs')
const display = document.getElementById('display')

inputsBlock.addEventListener('click', handleClick)

function handleClick(event) {
    const currentValue = Number(display.innerText)
    const action = event.target.id

    if (action === 'increment') {
        increment(currentValue)
    }

    if (action === 'decrement') {
        decrement(currentValue)
    }
}

function increment(currentValue) {
    display.innerText = currentValue + 1
}

function decrement(currentValue) {
    display.innerText = currentValue - 1
}