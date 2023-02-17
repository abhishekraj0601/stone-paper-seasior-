var stone = document.getElementById("stone")
var paper = document.getElementById("paper")
var sessior = document.getElementById("sessior")
var result = document.getElementById("result")
var random = Math.floor(Math.random()*3) +1
var msg = document.querySelector(".msg")
var msg1 = document.getElementById("msg")
var button = document.getElementById("button")
console.log(random)
stone.onclick=function(){
    paper.style.display="none"
    sessior.style.display="none"
    result.style.display="flex"
    msg1.style.display="block"
    button.style.display="block"
    stone.style.color="blue"
    if (random == 1 && stone) {
        result.innerHTML='<i class="fa-solid fa-hand-back-fist fa-8x"></i>'
        msg.innerHTML="Drow"
        msg1.style.backgroundColor="linear-gradient(red,blue)"

    }else if (random == 2 && stone) {
        result.innerHTML='<i class="fa-solid fa-hand fa-8x" ></i>'
        msg.innerHTML="You Loss"
        msg1.style.backgroundColor="red"

    }else{
        result.innerHTML='<i class="fa-solid fa-hand-scissors fa-8x"></i>'
        msg.innerHTML="You Win"
        msg1.style.backgroundColor="blue"

    }

}

paper.onclick=function(){
    stone.style.display="none"
    sessior.style.display="none"
    result.style.display="flex"
    msg1.style.display="block"
    button.style.display="block"
    paper.style.color="blue"
    if (random == 1 && stone) {
        result.innerHTML='<i class="fa-solid fa-hand-back-fist fa-8x"></i>'
        msg.innerHTML="You Win"
        msg1.style.backgroundColor="blue"
    }else if (random == 2 && stone) {
        result.innerHTML='<i class="fa-solid fa-hand fa-8x" ></i>'
        msg.innerHTML="Drow"
        msg1.style.backgroundColor="linear-gradient(red,blue)"
    }else{
        result.innerHTML='<i class="fa-solid fa-hand-scissors fa-8x"></i>'
        msg.innerHTML="You Loss"
          msg1.style.backgroundColor="red"
    }
}

sessior.onclick=function(){
    paper.style.display="none"
    stone.style.display="none"
    result.style.display="flex"
    msg1.style.display="block"
    button.style.display="block"
    if (random == 1 && stone) {
        result.innerHTML='<i class="fa-solid fa-hand-back-fist fa-8x"></i>'
        msg.innerHTML="You Loss"
        msg1.style.backgroundColor="red"

    }else if (random == 2 && stone) {
        result.innerHTML='<i class="fa-solid fa-hand fa-8x" ></i>'
        msg.innerHTML="You Win"
        msg1.style.backgroundColor="blue"

    }else{
        result.innerHTML='<i class="fa-solid fa-hand-scissors fa-8x"></i>'
        msg.innerHTML="Drow"
        msg1.style.backgroundColor="linear-gradient(red,blue)"
    }
}