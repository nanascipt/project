document.addEventListener("DOMContentLoaded", function () {
    const keyData = [
        { note: "c1", keyCode: "KeyQ", file: "c1.wav" },
        { note: "d1", keyCode: "KeyW", file: "d1.wav" },
        { note: "e1", keyCode: "KeyE", file: "e1.wav" },
        { note: "f1", keyCode: "KeyR", file: "f1.wav" },
        { note: "g1", keyCode: "KeyT", file: "g1.wav" },
        { note: "a1", keyCode: "KeyY", file: "a1.wav" },
        { note: "b1", keyCode: "KeyU", file: "b1.wav" },
        { note: "c2", keyCode: "KeyZ", file: "c2.wav" },
        { note: "d2", keyCode: "KeyX", file: "d2.wav" },
        { note: "e2", keyCode: "KeyC", file: "e2.wav" },
        { note: "f2", keyCode: "KeyV", file: "f2.wav" },
        { note: "g2", keyCode: "KeyB", file: "g2.wav" },
        { note: "a2", keyCode: "KeyN", file: "a2.wav" },
        { note: "b2", keyCode: "KeyM", file: "b2.wav" },
        { note: "cs1", keyCode: "Digit2", file: "cs1.wav" },
        { note: "ds1", keyCode: "Digit3", file: "ds1.wav" },
        { note: "fs1", keyCode: "Digit5", file: "fs1.wav" },
        { note: "gs1", keyCode: "Digit6", file: "gs1.wav" },
        { note: "as1", keyCode: "Digit7", file: "as1.wav" },
        { note: "cs2", keyCode: "KeyS", file: "cs2.wav" },
        { note: "ds2", keyCode: "KeyD", file: "ds2.wav" },
        { note: "fs2", keyCode: "KeyG", file: "fs2.wav" },
        { note: "gs2", keyCode: "KeyH", file: "gs2.wav" },
        { note: "as2", keyCode: "KeyJ", file: "as2.wav" }
    ];

    keyData.forEach(({ note, keyCode, file }) => {
        const audio = new Audio(file);
        const noteDiv = document.getElementById(`${note}-note`);

        document.addEventListener('keydown', function (info) {
            if (info.code === keyCode) {
                audio.currentTime = 0;
                audio.play();
                noteDiv.style.backgroundColor = "#FFD700";
            }
        });

        document.addEventListener('keyup', function (info) {
            if (info.code === keyCode) {
                noteDiv.style.backgroundColor = "";
            }
        });

        noteDiv.addEventListener('click', function () {
            audio.currentTime = 0;
            audio.play();
        });
    });
});