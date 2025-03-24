window.addEventListener("load", function() {

    document.body.classList.remove("locked");

    let loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 1000);
});

document.body.classList.add("locked");