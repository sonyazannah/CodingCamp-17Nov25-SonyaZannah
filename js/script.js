welcomeMessage();

// Function to display welcome message
function welcomeMessage() {
    /// Prompt user for their name
    let username = prompt("Please enter your name:"); 

    /// Handle case where user cancels or enters empty name
    if (!username) {
        username = "Guest";
    }
    /// Display welcome message
    document.getElementById("welcome-speech").innerText = "Welcome, " + username + "!";

}   