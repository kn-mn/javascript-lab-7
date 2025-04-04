// MOUSE EVENTS
const button = document.getElementById('mouseButton');
const message = document.getElementById('message');

button.addEventListener('mouseover', () => {
    message.textContent = "(h)over";
});

button.addEventListener('mouseout', () => {
    message.textContent = "over";
});

// KEYBOARD EVENTS
const keyInput = document.getElementById('keyInput');
const keyCodeMessage = document.getElementById('keyCodeMessage');

keyInput.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyInput.value = event.key;
    keyCodeMessage.textContent = `key pressed: ${event.key}`;
});

// FORM EVENTS
const form = document.getElementById('myForm');
const formMessageInput = document.getElementById('formInput');
const formMessageOutput = document.getElementById('formOutput');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const savedMessage = formMessageInput.value;
    localStorage.setItem('formMessage', savedMessage);
    formMessageOutput.textContent = `"${savedMessage}" is saved in localStorage`;
    formMessageInput.value = '';
});

// FOCUS AND BLUR EVENTS


// EVENT DELEGATION