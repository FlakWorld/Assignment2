// Get all elements with the class "accordion-item" and store them in the array "accordionItems"
const accordionItems = document.querySelectorAll(".accordion-item");
    
// Loop through each "accordion-item" in the array
accordionItems.forEach((item) => {
    // Get the title element within the current accordion item
    const title = item.querySelector(".accordion-title");
    
    // Get the content element within the current accordion item
    const content = item.querySelector(".accordion-content");

    // Add a click event listener to the title element
    title.addEventListener("click", () => {
        // Check if the content is currently displayed (visible)
        if (content.style.display === "block") {
            // If the content is visible, hide it by changing the display style property to "none"
            content.style.display = "none";
        } else {
            // If the content is not visible, show it by changing the display style property to "block"
            content.style.display = "block";
        }
    });
});
