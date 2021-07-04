var div = document.createElement("div")
div.setAttribute("class", "box")
document.body.style.width= "300px"
document.body.style.height= "300px"
document.body.style.border= "black 2px solid"
document.body.style.backgroundColor= "white"
document.body.appendChild(div)

var button= document.createElement("button")
button.textContent= "click here"
document.body.appendChild(button)

const btn=document.querySelector("button")

function one(){
    document.body.style.backgroundColor= "black"

}

function two(){
    document.body.style.backgroundColor= "green"

}

function three(){
    document.body.style.backgroundColor= "yellow"
}

function four(){
    document.body.style.backgroundColor= "blue"
}

function five(){
    document.body.style.backgroundColor= "red"
}

function six(){
    document.body.style.backgroundColor= "purple"
}

btn.addEventListener("load", one);
btn.addEventListener("mouseover", two );
btn.addEventListener("keydown", three );
btn.addEventListener("dblclick", four );
btn.addEventListener("keyup", five );
btn.addEventListener("scroll", six );

document.div.appendChild(btn)