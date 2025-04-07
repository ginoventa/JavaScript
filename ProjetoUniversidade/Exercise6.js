/*Calculator in JS*/
function sum(a, b){
    return a+b; 
}

function divide(a, b){
    if(b!=0){
        return a/b; 
    }else{
        return "Erro. Divisao invalida!"; 
    }
}

function subtract(a, b){
    return a-b; 
}

function multiply(a, b){
    return a*b; 
}

console.log(sum(1,1))
console.log(divide(3,0))
console.log(subtract(1,1))
console.log(multiply(4,3))
