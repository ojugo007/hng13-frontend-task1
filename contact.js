const emailInput = document.getElementById("email")
const fullnameInput = document.getElementById("fullname")
const subjectInput = document.getElementById("subject")
const messageInput = document.getElementById("message")
const btn = document.getElementById("btn")

// error element
const emailErrorMessage = document.querySelector('[data-testid="test-contact-error-email"]')
const fullnameErrorMessage = document.querySelector('[data-testid="test-contact-error-fullname"]')
const subjectErrorMessage = document.querySelector('[data-testid="test-contact-error-subject"]')
const messageErrorMessage = document.querySelector('[data-testid="test-contact-error-message"]')
const successMessage = document.getElementById("success-msg")


// input values
const email = emailInput.value
const fullname = fullnameInput.value
const subject = subjectInput.value
const message = messageInput.value

// contact form submission

btn.addEventListener("click", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    if(email === ""){
        emailErrorMessage.classList.add("error-msg")
        emailErrorMessage.innerHTML = "email field cannot be empty"
    }
    if(fullname === ""){
        fullnameErrorMessage.classList.add("error-msg")
        fullnameErrorMessage.innerHTML = "name field cannot be empty"
    }
    if(subject === ""){
        subjectErrorMessage.classList.add("error-msg")
        subjectErrorMessage.innerHTML = "subject field cannot be empty"
    }
    if(message === ""){
        messageErrorMessage.classList.add("error-msg")
        messageErrorMessage.innerHTML = "email field cannot be empty"
    }
    
}