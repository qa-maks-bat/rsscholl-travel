//
// Open Pop-Up Box
//

const maskContent = document.querySelector(".mask-content");

const loginButton = document.querySelector(".login-button");
const popUpBox = document.querySelector(".popup-box");

const togglePopUp = () => {
    popUpBox.classList.toggle("active-popup-box");
    maskContent.classList.toggle("hidden");
};

loginButton.addEventListener("click", () => {
    togglePopUp();
});

//
// Toggle Between Register (Sign Up) & Login (Sign In) Boxes
//

const registerButton = document.querySelector(".register-login-link");

const buttonFacebook = document.querySelector(".button-facebook");
const buttonGoogle = document.querySelector(".button-google");
const textlineBox = document.querySelector(".popup-textline-box");
const reminderPassword = document.querySelector(".popup-reminder-password");

const popUpTitle = document.querySelector(".popup-title");
const signButton = document.querySelector(".button-signin-signup");
const questionLine = document.querySelector(".register-login-question-line");
const questionLink = document.querySelector(".register-login-link");

const signUpTextArray = [
    [popUpTitle, "Create account"],
    [signButton, "Sign Up"],
    [questionLine, "Already have an account?"],
    [questionLink, "Log in"],
];

const signInTextArray = [
    [popUpTitle, "Log in to your account"],
    [signButton, "Sign In"],
    [questionLine, "Don’t have an account?"],
    [questionLink, "Register"],
];

const linesForHidden = [buttonFacebook, buttonGoogle, textlineBox, reminderPassword];

const toggleElementText = (array) => {
    return array.forEach((innerArray) => (innerArray[0].innerHTML = innerArray[1]));
};

const toggleLines = (arrayHiddenLines) => {
    return arrayHiddenLines.forEach((el) => el.classList.toggle("popup-transform"));
};

const toggleRegisterLoginBox = () => {
    toggleLines(linesForHidden);

    popUpBox.classList.toggle("toggle-register-login");
};

const toggleTextBox = (event) => {
    if (popUpBox.classList.contains("toggle-register-login")) {
        toggleElementText(signUpTextArray);
    } else {
        toggleElementText(signInTextArray);
    }
};

registerButton.addEventListener("click", () => {
    toggleRegisterLoginBox();
    toggleTextBox();
});

//
// Close Pop-Up Box
//

maskContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("mask-content")) {
        togglePopUp();

        if (popUpBox.classList.contains("toggle-register-login")) {
            popUpBox.classList.add("inactive-popup-box");

            setTimeout(function () {
                popUpBox.classList.toggle("toggle-register-login");
                toggleLines(linesForHidden);
                toggleElementText(signInTextArray);

                popUpBox.classList.remove("inactive-popup-box");
            }, 400);
        }
    }
});

//
//  Open Pop-Up Box (Mobile)
//

const accountButton = document.querySelector(".link-account");

accountButton.addEventListener("click", () => {
    togglePopUp();
});

//
//  Input Data
//  (Email, Password)
//

const textFromEmailForm = document.querySelector(".formfield-1");
const textFromPasswordForm = document.querySelector(".formfield-2");

signButton.addEventListener("click", () => {
    alert(
        `
        E-mail = ${textFromEmailForm.value}
        Password = ${textFromPasswordForm.value}
        `
    );
});
