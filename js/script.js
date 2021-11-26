let d = document
let textarea = d.querySelector("textarea")
let button1 = d.querySelector(".first-div button")
let allNames = d.querySelector(".first-div p")
let display = d.querySelector(".display")
let button2 = d.querySelector(".second-div button")
let winner1 = d.querySelector(".winner1")
let winner2 = d.querySelector(".winner2")
let winner3 = d.querySelector(".winner3")
let arrays =  []
let c = 0


button2.disabled = true


button1.addEventListener("click", getArrays)
button2.addEventListener("click", start)


function getArrays() {
    let val = textarea.value   
    arrays = val.split(" ")
    let summary = ""
    if (val !== "") {
        for (let i = 0; i < arrays.length; i++) {
            summary += ` ${i + 1}:${arrays[i]}`
        }
        allNames.innerHTML = summary
        button2.disabled = false
        c2 = 0
    }else{
        alert("plese enter your names")
    }
    
    
}

function start() {
    if (c < 10) {
        rnd = Math.floor(Math.random() * arrays.length);
        display.innerHTML = arrays[rnd]
        c++
        setTimeout(start,100)
    }else{
        c = 0
        c2++
        if (c2 == 1){
            winner1.innerHTML = arrays[rnd]
            arrays.splice(rnd, 1)
        }else if (c2 == 2){
            winner2.innerHTML = arrays[rnd]
            arrays.splice(rnd, 1)
        }else{
            winner3.innerHTML = arrays[rnd]
            arrays.splice(rnd, 1)
            display.innerHTML = "display"
            button2.disabled = true
        }
    }
}