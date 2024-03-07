//console.log("Functional script tag")

const bulb1 = document.querySelector("#lightbulb1") ;
const bulb2 = document.querySelector("#lightbulb2") ;
const bulb3 = document.querySelector("#lightbulb3") ;

let count = 0;

bulb1.addEventListener("click",function(){
    count++;
    const subtitle = document.querySelector(".subtitle");
    if (count === 1) {
        subtitle.innerHTML = "You've clicked the lights " + count + " time"
    }
    else {
        subtitle.innerHTML = "You've clicked the lights " + count + " times"
    }
    this.classList.toggle("active")
})

bulb2.addEventListener("click",function(){
    count++;
    const subtitle = document.querySelector(".subtitle");
    if (count === 1) {
        subtitle.innerHTML = "You've clicked the lights " + count + " time"
    }
    else {
        subtitle.innerHTML = "You've clicked the lights " + count + " times"
    }
    this.classList.toggle("active")
})

bulb3.addEventListener("click",function(){
    count++;
    const subtitle = document.querySelector(".subtitle");
    if (count === 1) {
        subtitle.innerHTML = "You've clicked the lights " + count + " time"
    }
    else {
        subtitle.innerHTML = "You've clicked the lights " + count + " times"
    }
    this.classList.toggle("active")
})