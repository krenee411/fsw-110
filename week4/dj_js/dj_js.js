var div = document.createElement("div")
div.setAttribute("id", "box")
document.body.style.width= "300px"
document.body.style.height= "300px"
document.body.style.border= "black 2px solid"
document.body.appendChild(div)

var div1 = document.createElement("div")
for (var i=0; i<= 20; i++){
    var div1 = document.createElement("h1")
div1.textContent= "Hello World"
document.body.appendChild(div1)
document.body.style.textAlign= "right"
}



function one(){
    div.body.style.backgroundColor= "black"

}

function two(){
    document.body.style.backgroundColor= "green"

}  

function three(){
    document.body.style.backgroundColor= "yellow"
}

function four(){
    document.body.style.backgroundColor= "red"
}

function five(){
    document.body.style.backgroundColor= "blue"
}

function six(){
    document.body.style.backgroundColor= "purple"
}

window.addEventListener("load", one);
window.addEventListener("mouseover", two);
window.addEventListener("mousedown", three);
window.addEventListener("dblclick", four);
window.addEventListener("mouseup", five);
window.addEventListener("scroll", six);

window.onkeydown = function(e) {
var key = e.keyCode ? e.keyCode : e.which;

   if (key == 87) {
    document.body.style.backgroundColor= "white";
   }else if (key == 66) {
    document.body.style.backgroundColor= "blue";
   }else if (key == 71) {
    document.body.style.backgroundColor= "green";
    }else if (key == 89) {
    document.body.style.backgroundColor= "yellow";
    }else if (key == 82) {
    document.body.style.backgroundColor= "red";
    }else if (key == 80) {
    document.body.style.backgroundColor= "purple";
}}
