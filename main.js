const timer = document.getElementById("timer")

const setTimer = () =>{
    timer.innerText = Date.now() + " ms"
}
setTimer()
setInterval(setTimer ,1000)