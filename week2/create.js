var h1Tag = document.createElement('H1');
h1Tag.textContent = "All of this was created in Javascript";
document.body.appendChild(h1Tag);

var pTag = document.createElement('P');
document.body.appendChild(pTag);
pTag.textContent= "Welcome to my JS site";


var ol= document.createElement("List");
ol.id = "myList"
ol.class="style"
document.body.appendChild(ol);


function createItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const items = document.querySelector('#myList');

items.appendChild(createItem('Item 1'));
items.appendChild(createItem('Item 2'));
items.appendChild(createItem('Item 3'));

