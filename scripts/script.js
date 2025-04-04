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
    formMessageOutput.textContent = `"${savedMessage}" is saved in localStorage`;
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
const buttonOne = document.getElementById('firstButton');
const buttonTwo = document.getElementById('secondButton');
const buttonThree = document.getElementById('thirdButton');
const buttonFour = document.getElementById('fourthButton');

const messageOne = document.getElementById('firstButtonMessage');
const messageTwo = document.getElementById('secondButtonMessage');
const messageThree = document.getElementById('thirdButtonMessage');
const messageFour = document.getElementById('fourthButtonMessage');

buttonOne.addEventListener('click', () => {
    messageOne.textContent = "this";
});

buttonTwo.addEventListener('click', () => {
    messageTwo.textContent = "is";
});

buttonThree.addEventListener('click', () => {
    messageThree.textContent = "event";
});

buttonFour.addEventListener('click', () => {
    messageFour.textContent = "delegation";
});