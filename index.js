let Nickname;
// document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play");
    if (playButton) {
        playButton.addEventListener("click", function () {
            let Nickname = document.getElementById("Nickname2").value;
            console.log(Nickname);
            localStorage.setItem("Nickname", Nickname);
        });
    }
// });