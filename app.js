"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-mode-button");
    // Check current mode from localStorage
    if (localStorage.getItem("mode") === "night") {
        document.body.classList.add("night-mode");
        toggleButton.innerText = "Day Mode";
    }
    else {
        document.body.classList.remove("night-mode");
        toggleButton.innerText = "Night Mode";
    }
    toggleButton.addEventListener("click", () => {
        if (document.body.classList.contains("night-mode")) {
            document.body.classList.remove("night-mode");
            toggleButton.innerText = "Night Mode";
            localStorage.setItem("mode", "day");
        }
        else {
            document.body.classList.add("night-mode");
            toggleButton.innerText = "Day Mode";
            localStorage.setItem("mode", "night");
        }
    });
});
