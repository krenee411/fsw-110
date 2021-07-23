
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";}}

    function newItem() {
        var li = document.createElement("li");
        var input = document.getElementById("myInput").value;
        var script= document.getElementById("myScript").value;
        var item = document.createTextNode(input+":"+" " +script);
        li.appendChild(item);
        if (input === '') {
          alert("Plese add a task");
        } else {
          document.getElementById("myOL").appendChild(li);
        }
        document.getElementById("myInput").value = "";
        document.getElementById("myScript").value= "";
      
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
      }
      