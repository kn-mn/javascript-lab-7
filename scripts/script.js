// MOUSE EVENTS
const button = document.getElementById('mouseButton');
const message = document.getElementById('message');

button.addEventListener('mouseover', () => {
    message.textContent = "Button is hovered!";
});

button.addEventListener('mouseout', () => {
    message.textContent = "Hover ended.";
});

// KEYBOARD EVENTS
const keyInput = document.getElementById('keyInput');
const keyCodeMessage = document.getElementById('keyCodeMessage');

keyInput.addEventListener('keydown', (event) => {
    keyCodeMessage.textContent = `key pressed: ${event.key}`;
});

// FORM EVENTS


// FOCUS AND BLUR EVENTS


// EVENT DELEGATION