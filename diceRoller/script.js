function generateNumber(numberOfRolls) {
    var randomNumber = []
    var images = [];
    document.getElementById("images").innerHTML = "";
    var imageContainer = document.getElementById("images");

    for(let i = 0; i < numberOfRolls; i++) {
        randomNumber.push(Math.floor(Math.random() * 6) + 1);

        switch (randomNumber[i]) {
            case 1:
                images.push("https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg ");
                break;
            case 2:
                images.push("https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg ");
                break;
            case 3:
                images.push("https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg ");
                break;
            case 4:
                images.push("https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg ");
                break;
            case 5:
                images.push("https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg ");
                break;
            case 6:
                images.push("https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg ");
                break;
        }
        var img = document.createElement("img");
        img.src = images[i];
        imageContainer.appendChild(img);
    }
    return randomNumber;
}

function rollDice(){
    let numbersRolls = Number(document.getElementById("input").value);
    if (numbersRolls < 1 || numbersRolls > 6) {
        alert("Please enter a number above 1");
        return;
    }
    let arrayOfNumbers = generateNumber(numbersRolls);
    document.getElementById("number").textContent = "You rolled: " + arrayOfNumbers.join(", ");
}

document.getElementById("generator").onclick= function(){
    rollDice();
}