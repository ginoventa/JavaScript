let number = Math.floor(Math.random()*6 + 1); 
console.log(number);

document.getElementById("submit").onclick = function() {
    let guess = document.getElementById("guess").value;

    if(guess == number){
        document.getElementById("number").textContent = "Right guess! The number was " + number;
    }else{
        document.getElementById("number").textContent = "Wrong guess!";
    }
}

