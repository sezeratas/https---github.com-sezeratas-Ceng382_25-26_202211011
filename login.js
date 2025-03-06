// Array to store login credentials
const loginCredentials = [];

// Function to store credentials
function storeCredentials() {
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store the credentials in an array
    loginCredentials.push({ username, password });

    // Print all elements of the array to the console
    console.log(loginCredentials);
}

// Function to update the clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString();
}

// Update the clock every second
setInterval(updateClock, 1000);

document.addEventListener('keydown', (event) => {
    if (event.key === 'h' || event.key === 'H') {
        const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
    }
});