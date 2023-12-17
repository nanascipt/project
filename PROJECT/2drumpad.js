document.addEventListener("DOMContentLoaded", function () {
    const keyMap = {
        "Digit1": "z1",
        "Digit2": "z2",
        "Digit3": "z3",
        "Digit4": "z4",
        "KeyQ": "zq",
        "KeyW": "zw",
        "KeyE": "ze",
        "KeyR": "zr",
        "KeyA": "za",
        "KeyS": "zs",
        "KeyD": "zd",
        "KeyF": "zf",
        "KeyZ": "zz",
        "KeyX": "zx",
        "KeyC": "zc",
        "KeyV": "zv"
    };

    function playSound(note) {
        const audio = new Audio(`${note}.wav`);
        audio.currentTime = 0;
        audio.play();
    }

    function activateKey(note) {
        const keyElement = document.getElementById(note);
        keyElement.style.boxShadow = "0px 0px";
        keyElement.style.marginTop = "10px";
    }

    function deactivateKey(note) {
        const keyElement = document.getElementById(note);
        keyElement.style.boxShadow = "3px 3px 5px #8a8b8d";
        keyElement.style.marginTop = "0px";
    }

    document.addEventListener('keydown', function (info) {
        const note = keyMap[info.code];
        if (note) {
            playSound(note);
            activateKey(note);
        }
    });

    document.addEventListener('keyup', function (info) {
        const note = keyMap[info.code];
        if (note) {
            deactivateKey(note);
        }
    });

    // Add click event listeners for each key
    Object.values(keyMap).forEach(note => {
        const keyElement = document.getElementById(note);
        keyElement.addEventListener('click', function () {
            playSound(note);
            activateKey(note);
            // Delay deactivation for a smooth visual effect
            setTimeout(() => deactivateKey(note), 100);
        });
    });
});
