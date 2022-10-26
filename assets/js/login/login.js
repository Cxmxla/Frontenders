const email = document.getElementById("email");
const error = document.querySelector(".error");
const error2 = document.querySelector (".error2");
const senha = document.getElementById("senha");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector (".error4");

function login(){

    if (email.value.indexOf("@")== -1 || email.value.length < 13 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
        error.style.display = "flex";
        email.style.borderColor = "red";
    }

    else {
        error.style.display = "none"
    }
}