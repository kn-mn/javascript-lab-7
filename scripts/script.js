// MOUSE EVENT
const button = document.getElementById('mouseButton');
const message = document.getElementById('message');

button.addEventListener('mouseover', () => {
    message.textContent = "(h)over";
});

button.addEventListener('mouseout', () => {
    message.textContent = "over";
});

// KEYBOARD EVENT
const keyInput = document.getElementById('keyInput');
const keyCodeMessage = document.getElementById('keyCodeMessage');

keyInput.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyInput.value = event.key;
    keyCodeMessage.textContent = `key pressed: ${event.key}`;
});

// FORM EVENT
const form = document.getElementById('myForm');
const formMessageInput = document.getElementById('formInput');
const formMessageOutput = document.getElementById('formOutput');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const savedMessage = formMessageInput.value;
    localStorage.setItem('formMessage', savedMessage);
    formMessageOutput.textContent = `"${savedMessage}" saved to localStorage`;
    formMessageInput.value = '';
});

// FOCUS AND BLUR EVENT
const focusInputText = document.querySelector('#focusInput[type="text"]');
const blurMessage = document.getElementById('blurMessage');

focusInputText.addEventListener('focus', (event) => {
    event.target.style.background = 'lightyellow';
});
 
focusInputText.addEventListener('blur', (event) => {
    event.target.style.background = 'pink';

});

// function handleFocus() {
//     document.getElementById('focusInput').style.background = 'lightyellow';
//   }

// function handleBlur() {
// }


// EVENT DELEGATION

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (event) => {
        if (event.target.matches(selector)) {
            callback(event);
        }
    })
}

addGlobalEventListener('click', '.eventDelegationButtons', (event) => {
    const button = event.target;
    const message = button.nextElementSibling;
    
    if (message.textContent.includes(button.textContent)) {
        message.textContent = "";
    } else {
        message.textContent = `${button.textContent} clicked`;
    }
});