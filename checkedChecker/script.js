document.querySelector("button").onclick = function() {
    let checkbox = document.getElementById("checkbox");
    let subscribe = document.getElementById("subscribe");
    let like = document.getElementById("like");

    if (checkbox.checked) {
        document.getElementById("checker").textContent = "Checkbox is checked";
    } else {
        document.getElementById("checker").textContent = "Checkbox is NOT checked";
    }

    if (subscribe.checked) {
        document.getElementById("subscriber").textContent = "Subscribe is checked";
    } else {
        document.getElementById("subscriber").textContent = "Subscribe is NOT checked";
    }

    if (like.checked) {
        document.getElementById("liker").textContent = "Like is checked";
    } else {
        document.getElementById("liker").textContent = "Like is NOT checked";
    }
}