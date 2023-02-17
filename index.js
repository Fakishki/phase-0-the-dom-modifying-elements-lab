//Write your code here

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

const userName = 'Wally';
newHeader.textContent = `${userName} is the champion`;

document.body.appendChild(newHeader);