var div = document.createElement("div")
div.setAttribute("id", "box")
div.style.width= "300px"
div.style.height= "300px"
div.style.border= "black 2px solid"
div.style.backgroundColor= "white"
document.body.appendChild(div)


function one(){
    div.style.backgroundColor= "black"

}

function two(){
    div.style.backgroundColor= "green"

}  

function three(){
    div.style.backgroundColor= "yellow"
}

function four(){
    div.style.backgroundColor= "red"
}

function five(){
    div.style.backgroundColor= "blue"
}

function six(){
    div.style.backgroundColor= "purple"
}

const box= document.getElementById("box");

window.addEventListener("load", one);
div.addEventListener("mouseover", two);
div.addEventListener("mousedown", three);
div.addEventListener("dblclick", four);
div.addEventListener("mouseup", five);
window.addEventListener("scroll", six);

window.onkeydown = function(e) {
var key = e.keyCode ? e.keyCode : e.which;

   if (key == 87) {
    div.style.backgroundColor= "white";
   }else if (key == 66) {
   div.style.backgroundColor= "blue";
   }else if (key == 71) {
    div.style.backgroundColor= "green";
    }else if (key == 89) {
    div.style.backgroundColor= "yellow";
    }else if (key == 82) {
   div.style.backgroundColor= "red";
    }else if (key == 80) {
    div.style.backgroundColor= "purple";
}}
