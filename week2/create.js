document.getElementById("head1").textContent= document.body.textContent  + "All of this was created in Javascript"
document.getElementById("para1").textContent= document.body.textContent + "Welcome to my JS site"




function createItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const items = document.querySelector('#myList');

items.appendChild(createItem('Item 1'));
items.appendChild(createItem('Item 2'));
items.appendChild(createItem('Item 3'));