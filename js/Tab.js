// Function to open a specific tab based on the provided tabName
function openTab(tabName) {
    // Initialize variables for tab elements and tab buttons
    var i;
    var tabs = document.getElementsByClassName("tab-content");
    var tabButtons = document.getElementsByClassName("tab-button");

    // Hide all tab content and remove the "active" class from tab buttons
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"; // Hide the tab content
        tabButtons[i].classList.remove("active"); // Remove the "active" class
    }

    // Display the tab content with the given tabName
    document.getElementById(tabName).style.display = "block";

    // Find and add the "active" class to the tab button associated with the selected tab
    var activeButton = document.querySelector(".tab-button[onclick=\"openTab('" + tabName + "')\"]");
    activeButton.classList.add("active");
}

// Call the openTab function to initially open the "about" tab
openTab("about");
