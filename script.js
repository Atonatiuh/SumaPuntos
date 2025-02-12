let score = 0;
let completedVideos = 0;
let incompleteVideos = 0;

document.getElementById("clickButton").addEventListener("click", function () {
    this.classList.add("clicked");
    showAd();
    setTimeout(() => {
        this.classList.remove("clicked");
    }, 200);
});

function showAd() {
    alert("🎥 Se mostrará un anuncio. ¡Míralo para ganar puntos!");

    let adCompleted = confirm("¿Terminaste de ver el anuncio?");

    if (adCompleted) {
        score++;
        completedVideos++;
    } else {
        incompleteVideos++;
    }

    updateScores();
}

function updateScores() {
    document.getElementById("score").textContent = score;
    document.getElementById("completedVideos").textContent = completedVideos;
    document.getElementById("incompleteVideos").textContent = incompleteVideos;
}
