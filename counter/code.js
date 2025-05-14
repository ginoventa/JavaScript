let number = 0; 

document.getElementById("increment").onclick = function(){
    number++;
    document.getElementById("number").innerHTML = number;
}
document.getElementById("decrement").onclick = function(){
    if(number > 0){
        number--;
        document.getElementById("number").innerHTML = number;
    } else{
        alert("Counter cannot go below 0");
    }
}
document.getElementById("reset").onclick = function(){
    number = 0;
    document.getElementById("number").innerHTML = 0;
}

