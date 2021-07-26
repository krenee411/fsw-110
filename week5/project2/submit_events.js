

 function info(){
    var a = document.getElementById("fnameBox").value;
    var b = document.getElementById("lnameBox").value;
    var c = document.getElementById("ageBox").value;
    var e = document.getElementById("clothes").value;
    var f = document.getElementById("fabric").value;
    var d = document.getElementsByTagName("question").value;
    if(value == "yes"){
        return "yes"
    }  else{
        return "no"
    }


    
     alert("Name: "+a+b+ "\nAge:" +c+ "\nNew Customer: " +d+ "\nClothing choice:"+e+ "\nFabric Choice: "+f) ;
 }

 
 