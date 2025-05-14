
function convertToCelsius() {
    let fahrenheit = document.getElementById("input").value;
    let celsius = (fahrenheit - 32) * 5/9;
    
    document.getElementById("number").textContent = fahrenheit+"°F to "+celsius.toFixed(2)+ "°C";

}


function convertToFahrenheit() {
    let celsius = document.getElementById("input").value;
    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("number").textContent = celsius+"°C to "+fahrenheit.toFixed(2)+ "°F";
}


document.querySelector("button").onclick = function() {
    let fahrenheit = document.getElementById("fahrenheit");
    let celsius = document.getElementById("celsius");

    if (celsius.checked) {
        convertToCelsius();
    } else if (fahrenheit.checked){
        convertToFahrenheit();
    } else{
        alert("Please select a temperature unit");
    }
}