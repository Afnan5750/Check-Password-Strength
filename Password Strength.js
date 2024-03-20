var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
var bor = document.getElementById("display");
let eyeicon = document.getElementById("eye-icon");


pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
    }


    

    if (pass.value.length === 0) {
        bor.style.borderColor = "#232424";
    }
    else if (pass.value.length < 4) {
        str.innerHTML = "weak";
        bor.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925"
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        bor.style.borderColor = "yellow";
        msg.style.color = "yellow"
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        bor.style.borderColor = "#26d730";
        msg.style.color = "#26d730"
    }
});


eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src= ("images/eye-open.png");
    } else {
        password.type = "password";
        eyeicon.src= ("images/eye-close.png");
    }
}