// This function generates a random number between 0 and 100
let number;
document.getElementById("generator").onclick = function(){
    number = Math.floor(Math.random()*6); 
    document.getElementById("number").innerHTML = number;
}
