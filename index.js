// Remove the main element
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Give it an id of 'victory'
newHeader.id = 'victory';

// Add your text
newHeader.textContent = 'Happiness is the champion'; // <-- replace with your name

// (Optional) Append it to the body if needed
document.body.appendChild(newHeader);
