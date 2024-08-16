let counter = 0;

document.getElementById('click-me').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').innerHTML = counter;
});

document.getElementById('reset-counter').addEventListener('click', () => {
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
});