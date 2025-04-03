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


// FORM EVENTS


// FOCUS AND BLUR EVENTS


// EVENT DELEGATION