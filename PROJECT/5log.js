function getLogin(event) {
    event.preventDefault();

    let email = document.getElementById("Email").value;
    let pass = document.getElementById("password").value;

    let registeredEmail = sessionStorage.getItem('registeredEmail');
    let registeredPassword = sessionStorage.getItem('registeredPassword');

    if (email === registeredEmail && pass === registeredPassword) {
        alert("Login successful!");
        window.location.href = "4abou.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}