const form = document.querySelector('form');
const errorBox = document.querySelector('.error');
const pwInput = document.querySelector('#pw');
const confirmPwInput = document.querySelector('#confirm');
let errorMessageNode = document.createElement('p');
errorMessageNode.style.fontWeight = 'bold';
errorMessageNode.style.width = '80%';
errorMessageNode.style.textAlign = 'center';
errorBox.appendChild(errorMessageNode);
let errorMessages = {
    pwTooShort: "Your password is too short! Please provide a password that is at least 10 characters long.",
    pwNoMatch: "Your passwords didn't match! Please provide the same password in each field."
};

function toggleErrorStyle(node, hasError) {
    if (hasError === true) {
        node.style.border = '3px solid hsl(333deg, 100%, 44%)';
    }
    else {
        node.style.border = '2px solid #f2f2f2';
    } 
}

function toggleFocusDisplay(node, hasError) {
    if (hasError === true) {
        node.focus();
    }
    else {
        node.blur();
    }
}

function toggleErrorDisplay(hasError) { 
    if (hasError === true) {
        errorBox.style.display = 'flex';
    }
    else {
        errorBox.style.display = 'none';
    }
}

function clearErrors() {
    toggleErrorStyle(pwInput, false);
    toggleErrorStyle(confirmPwInput, false);
    toggleFocusDisplay(pwInput, false);
    toggleFocusDisplay(confirmPwInput, false);
    toggleErrorDisplay(false);
}

form.addEventListener('submit', eventHandler);
function eventHandler(event) {
    event.preventDefault();
    if (document.getElementById('terms').checked === false) {
        alert('You must agree to the terms of service before continuing.');
    }

    else if (pwInput.value.length <= 9) {
        errorMessageNode.innerText = errorMessages.pwTooShort;
        toggleErrorStyle(pwInput, true);
        toggleErrorDisplay(true);
        toggleFocusDisplay(pwInput, true);
    }

    else if (pwInput.value !== confirmPwInput.value) {
        errorMessageNode.innerText = errorMessages.pwNoMatch;
        toggleErrorStyle(pwInput, false);
        toggleErrorStyle(confirmPwInput, true);
        toggleErrorDisplay(true);
        toggleFocusDisplay(pwInput, false);
        toggleFocusDisplay(confirmPwInput, true);
    }

    else {
        alert('Success!');
        clearErrors();
    }
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearAll);
function clearAll(event) {
    event.preventDefault();
    form.reset();
}
