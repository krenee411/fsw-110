var hTag = document.createElement("h1")
hTag.setAttribute("id", "tag")
hTag.textContent= "Hello World"
document.body.appendChild(hTag)

for (var i=0; i<= 9; i++){
    var hTag = document.createElement("h1")
hTag.textContent= "Hello World"
hTag.style.color= "orange"
hTag.style.fontStyle= "italic"
document.body.appendChild(hTag)
}


var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];


var nameList = document.getElementById("people")

for (var i = 0; i < names.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = names[i]
    document.body.appendChild(newName)

}



