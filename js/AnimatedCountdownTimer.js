// Declare variables to store elements and state
var timerInterval; // To store the interval ID for the countdown timer
var countdownElement = document.getElementById("countdown"); // The countdown timer display
var messageElement = document.getElementById("message"); // Display messages to the user
var startButton = document.getElementById("start-button"); // The button to start the countdown
var stopButton = document.getElementById("stop-button"); // The button to stop the countdown and get a discount
var discountApplied = false; // Keep track of whether the discount has been applied

// Initially, disable the stop button
stopButton.disabled = true;

// Add a click event listener to the "Start Countdown" button
startButton.addEventListener("click", function () {
    // Get the duration (in minutes) from the user's input
    var duration = parseInt(document.getElementById("duration").value);

    // Validate the user's input for the duration
    if (isNaN(duration) || duration < 1 || duration > 5) {
        messageElement.textContent = "Please enter a number from 1 to 5 for the duration in minutes.";
        return;
    }

    // Clear any previous messages
    messageElement.textContent = "";

    // Clear any existing countdown timer
    clearInterval(timerInterval);

    // Calculate the end time for the countdown
    var endTime = new Date().getTime() + (duration * 60 * 1000);

    // Function to update the countdown timer
    function updateCountdown() {
        // Enable the stop button
        stopButton.disabled = false;
        
        // Get the current time
        var currentTime = new Date().getTime();

        // Calculate the remaining time in milliseconds
        var timeRemaining = endTime - currentTime;

        if (timeRemaining <= 0) {
            // If time is up, disable the stop button, clear the timer, and show the "Time is up!" message
            clearInterval(timerInterval);
            countdownElement.textContent = "Time is up!";
            stopButton.disabled = true;
            // If the discount message is not shown yet, show it
            if (countdownElement.textContent == "Time is up!") {
                messageElement.textContent = "You didn't get a 20% discount.";
            }
        } else {
            // Calculate minutes and seconds and display them
            var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
            var seconds = Math.floor((timeRemaining / 1000) % 60);
            countdownElement.textContent = minutes + "m " + seconds + "s";

            if (timeRemaining <= 10000) {
                // If 10 seconds or less are remaining, change the countdown color to red
                countdownElement.style.color = "red"; 
                if (timeRemaining === 10000) {
                    // Show an alert when 10 seconds are left
                    alert("Hurry up! You have 10 seconds left!");
                }
            } else {
                // Reset the countdown color to white for normal time
                countdownElement.style.color = "white";
            }
        }
    }

    // Initial call to update the countdown
    updateCountdown();

    // Start the countdown timer
    timerInterval = setInterval(updateCountdown, 1000);
});

// Add a click event listener to the "Stop Countdown" button
stopButton.addEventListener("click", function () {
    // Clear the countdown timer
    clearInterval(timerInterval);

    // If the timer hasn't reached "Time is up!" yet, show a discount message
    if (countdownElement.textContent !== "Time is up!") {
        messageElement.textContent = "You have received a 20% discount.";
        discountApplied = true;
    }

    // Disable the stop button
    stopButton.disabled = true;
});
