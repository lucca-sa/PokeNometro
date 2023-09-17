let onScreenCount = document.querySelector("h2")
let interval
let count = 0
let clicado = false

function startCount() {
    if (clicado == false) {
        clicado = true
        interval = setInterval(() => {
            count++
            let countFinal = count / 100
            onScreenCount.innerHTML = countFinal.toFixed(2)
        }, 10);
    }
}


function stopCount() {
    clearInterval(interval)
    clicado = false
}

function resetCount() {
    stopCount()
    count = 0
    onScreenCount.innerHTML = 0
}
