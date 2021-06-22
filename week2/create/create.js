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
items.appendChild(createItem('Item 2'));
items.appendChild(createItem('Item 3'));

