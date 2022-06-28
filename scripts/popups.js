let modal_login = document.getElementById("login-popup");

let modal_signup = document.getElementById("signup-popup");

function openLoginPopup() {
    modal_login.style.display = "block";
}

function closeLoginPopup() {
    modal_login.style.display = "none";
}

function openSignupPopup() {
    modal_signup.style.display = "block";
}

function closeSignupPopup() {
    modal_signup.style.display = "none";
}

function closeLoginPopup() {
    modal_login.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal_login || event.target == modal_signup) {
        modal_login.style.display = "none";
        modal_signup.style.display = "none";
    }
};
