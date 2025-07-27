const formElement = document.querySelector("form#contact");
const nameField = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const charCountMessage = document.getElementById("info-msg");

const formErrorsField = document.getElementById("form-errors");

const namePattern = /^[A-Za-z\s]*$/;
let formErrors = [];

nameField.addEventListener("input", () => {
    if (!namePattern.test(nameField.value)){
        formErrors.push("Invalid name char");
        nameError.textContent = "Invalid character";
        setTimeout(() => {
            nameError.textContent = "";
        }, 3000);

        nameField.value = nameField.value.replace(/[^A-Za-z\s]/, "");
    }
 });

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    if(nameField.validity.valueMissing) {
        formErrors.push("Name is required");
        nameError.textContent = "Name is required";
    }
    else if(!namePattern.test(nameField.value)){
        formErrors.push("Invalid name upon submit");
        nameError.textContent = "Only letters and spaces allowed";
    }
    else if(emailInput.validity.valueMissing) {
        formErrors.push("Email is required");
        emailError.textContent = "Email is required";
    }
    else if(emailInput.validity.typeMismatch) {
        formErrors.push("Invalid email format");
        emailError.textContent = "Invalid email format";
    }
    else if(messageInput.validity.valueMissing) {
        formErrors.push("Message is required");
        messageError.textContent = "Message is required";
    }
    else if(messageInput.value.length > 200) {
        formErrors.push("Message exceeds character limit");
        messageError.textContent = "Message exceeds character limit";
    }
    else{


        formErrorsField.value = JSON.stringify(formErrors);
        formElement.submit();

        formElement.reset();
    }

    setTimeout(() => {
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
    }, 3000);

    
});


messageInput.addEventListener("input", () => {
    const textLength = messageInput.value.length;
    const remainingChars = 200 - textLength;
    charCountMessage.textContent = remainingChars +  " characters remaining";

    if(remainingChars < 50) {
        charCountMessage.style.color = "red";
    }
    else {
        charCountMessage.style.color = "var(--text-color, white)";
    }
});