var h1Tag = document.createElement('H1');
h1Tag.textContent = "All of this was created in Javascript";
document.body.appendChild(h1Tag);

var pTag = document.createElement('P');
document.body.appendChild(pTag);
pTag.textContent= "Welcome to my JS site";


var ol= document.createElement("ol");
ol.setAttribute("id", "myList")

document.body.appendChild(ol);


const items = document.getElementById("myList");

var item1= document.createElement("li")
item1.textContent= "Item 1";
items.appendChild(item1)

var item2= document.createElement("li")
item2.textContent= "Item 2";
items.appendChild(item2)


var item3= document.createElement("li")
item3.textContent= "Item 1";
items.appendChild(item3)


