var a= document.createElement("a")
var link= document.createTextNode("Menu ");
a.appendChild(link);
a.href= link
document.body.appendChild(a)

var b= document.createElement("a")
var link1= document.createTextNode("Home ");
a.appendChild(link1);
b.herf= link1
document.body.appendChild(b)


var c= document.createElement("a")
var link2= document.createTextNode("About Us ");
a.appendChild(link2);
c.herf= link2
document.body.appendChild(c)


var h1Tag = document.createElement("H1");
h1Tag.textContent= "H1 Tag";
document.body.appendChild(h1Tag);


var pTag = document.createElement('P');
pTag.textContent= "P Tag";
document.body.appendChild(pTag);

var ol= document.createElement("li");
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

var foot= document.createElement("footer");
foot.textContent= "Footer"
document.body.appendChild(foot);






