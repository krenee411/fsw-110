function add(){
    var a= document.getElementById("aNum1").value;
    var b= document.getElementById("aNum2").value;

    result= parseInt(a) + parseInt(b);

    document.getElementById("a1").textContent= "Answer:" +  result; 
}

function sub(){
    var a= document.getElementById("sNum1").value;
    var b= document.getElementById("sNum2").value;

    result= parseInt(a) - parseInt(b);

    document.getElementById("a2").textContent= "Answer:" +  result;
 
}


function mul(){
    var a= document.getElementById("mNum1").value;
    var b= document.getElementById("mNum2").value;

    result= parseInt(a) * parseInt(b);

    document.getElementById("a3").textContent= "Answer:" +  result; 
}