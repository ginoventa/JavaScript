var result
function performOperation(num1, num2, operation){
    switch(operation.toLowerCase()){
        case "sum":
            return result = num1+num2; 
        case "division":
            if(num2!=0){
                return result = num1/num2; 
            }else{
                return "Error. Invalid division!"; 
            }
        case "subtract":
            return result = num1-num2; 
        case "multiply":
            return result = num1*num2; 
        default: 
            return "Invalid operation!"
    }
}

console.log(performOperation(5,2,"sum"))
console.log(performOperation(5,2,"division"))
console.log(performOperation(5,2,"subtract"))
console.log(performOperation(5,2,"multiply"))
console.log(performOperation(5,2,"operation"))
