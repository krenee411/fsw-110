


for (var i=0; i<= 5; i++){
    var hTag = document.createElement("h2")
    hTag.setAttribute("id", "first")
hTag.textContent= "Your Header is here"
hTag.style.fontSize= "20px";
hTag.style.fontWeight= "lighter";
hTag.style.fontFamily= "sans-serif";
hTag.style.color= "cornflowerblue"
document.body.appendChild(hTag)
}

let data = document.querySelector('#first');
data.classList.add('border');
//var data= document.getElementsById("#first").className
//document.querySelector(".border").classList.add(data)