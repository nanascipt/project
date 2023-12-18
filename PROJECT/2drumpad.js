document.addEventListener("DOMContentLoaded", function () {
    const keyData = [
        { note: "z1", keyCode: "Digit1", file: "z1.wav" },
        { note: "z2", keyCode: "Digit2", file: "z2.wav" },
        { note: "z3", keyCode: "Digit3", file: "z3.wav" },
        { note: "z4", keyCode: "Digit4", file: "z4.wav" },
        { note: "zq", keyCode: "KeyQ", file: "zq.wav" },
        { note: "zw", keyCode: "KeyW", file: "zw.wav" },
        { note: "ze", keyCode: "KeyE", file: "ze.wav" },
        { note: "zr", keyCode: "KeyR", file: "zr.wav" },
        { note: "za", keyCode: "KeyA", file: "za.wav" },
        { note: "zs", keyCode: "KeyS", file: "zs.wav" },
        { note: "zd", keyCode: "KeyD", file: "zd.wav" },
        { note: "zf", keyCode: "KeyF", file: "zf.wav" },
        { note: "zz", keyCode: "KeyZ", file: "zz.wav" },
        { note: "zx", keyCode: "KeyX", file: "zx.wav" },
        { note: "zc", keyCode: "KeyC", file: "zc.wav" },
        { note: "zv", keyCode: "KeyV", file: "zv.wav" }
    ];

    keyData.forEach(({ note, keyCode, file }) => {
        const audio = new Audio(file);
        const keyElement = document.getElementById(note);

        document.addEventListener('keydown', function (info) {
            if (info.code === keyCode) {
                audio.currentTime = 0;
                audio.play();
                keyElement.style.boxShadow = "0px 0px";
                keyElement.style.marginTop = "10px";
            }
        });

        document.addEventListener('keyup', function (info) {
            if (info.code === keyCode) {
                keyElement.style.boxShadow = "3px 3px 5px #8a8b8d";
                keyElement.style.marginTop = "0px";
            }
        });

        keyElement.addEventListener('click', function () {
            audio.currentTime = 0;
            audio.play();
            keyElement.style.boxShadow = "0px 0px";
            keyElement.style.marginTop = "10px";
            setTimeout(() => {
                keyElement.style.boxShadow = "3px 3px 5px #8a8b8d";
                keyElement.style.marginTop = "0px";
            }, 100);
        });
    });
});
