function passwordGenerator(){
    let digitQuantity = document.getElementById("input").value;
    let password = "";

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    for(let i = 0; i<digitQuantity; i++){
        let category = Math.floor(Math.random() * 4);

        switch(category){
            case 0:
                password += alphabet[Math.floor(Math.random() * alphabet.length)];
                break;
            case 1:
                password += digits[Math.floor(Math.random() * digits.length)];
                break;
            case 2:
                password += symbols[Math.floor(Math.random() * symbols.length)];
                break;
            case 3:
                password += alphabet.toUpperCase()[Math.floor(Math.random() * alphabet.length)];
                break;
        }
    }

    document.getElementById("password").innerHTML = password;
    return password;
}


document.getElementById("generator").onclick = function(){
    let passwordPaste = passwordGenerator();
    document.getElementById("copier").onclick = function(){
        navigator.clipboard.writeText(passwordPaste);
    }
}
