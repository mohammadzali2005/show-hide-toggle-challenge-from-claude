/* Challenge: 
Show / Hide toggle 
=> Build a webpage with a short paragraph of text and a button that toggles the paragraph's visibility on and off. 
The button label should update to reflect the current state.

Requirements
=> A paragraph with a few sentences of any text you like
A button that hides the paragraph when it's visible, and shows it when it's hidden
The button label changes — e.g. "Hide text" when visible, "Show text" when hidden
The text fades in and out smoothly using a CSS transition instead of just snapping on/off
The button has a hover effect styled with CSS */

const text = document.querySelector('.container');
const button = document.getElementById('showHide-btn');

button.addEventListener('click', () => {
    if(button.textContent === 'Hide Text'){
        text.style.display = 'none';
        button.style.boxShadow = "0 0 20px green";
        button.style.backgroundColor = "darkgreen";
        button.textContent = "Show Text";
    } else {
        text.style.display = "block";
        button.style.boxShadow = "0 0 20px red";
        button.style.backgroundColor = "darkred";
        button.textContent = "Hide Text";
    }
})