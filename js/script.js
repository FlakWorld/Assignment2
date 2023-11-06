document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
        // Scroll to the top of the page when the "Escape" key is pressed
        window.scrollTo(0, 0);
    }
});