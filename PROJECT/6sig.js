let users = [];

function getRegister(event) {
    event.preventDefault();
    console.log('getRegister function called');

    let email = document.getElementById("Email").value;
    let pass = document.getElementById("password").value;

    if (email.includes('@') && email.endsWith('.com') && email[0] === email[0].toLowerCase() && pass.trim() !== "") {
        // Store both email and password in sessionStorage
        sessionStorage.setItem('registeredEmail', email);
        sessionStorage.setItem('registeredPassword', pass);
        window.location.href = "5log.html";
    } else {
        alert("Please enter a valid email address and provide a non-empty password.");
    }
}