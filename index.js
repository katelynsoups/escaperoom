var password = "12345";
var timeLeft = 1500; // 25 minutes in seconds
var timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById("timer").innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Game Over! Time's up.");
        document.getElementById("pass1").disabled = true; // Lock input
    }
    timeLeft--;
}

function passcheck() {
    var inputPassword = document.getElementById("pass1").value;
    
    if (inputPassword !== password) {
        alert("Wrong Password, Try Again.");
        return false; // Prevents form submission
    } else {
        clearInterval(timerInterval);
        localStorage.setItem("gameStatus", "won"); // Store win state properly
        window.location.href = "webpage.html"; // Redirect to success page
        return false; // Prevents default form action
    }
}