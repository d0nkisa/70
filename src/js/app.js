import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("💣");
    });
    var element = document.querySelector('.image');
    element.addEventListener('click', () => {
        element.style.transform = "scale(2,2)";
        element.classList.add('active');
    })
});