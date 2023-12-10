// Get the date inputs and buttons
var date1Input = document.getElementById('date1');
var date2Input = document.getElementById('date2');
var startButton = document.getElementById('startCountdown');
var stopButton = document.getElementById('stopCountdown');

var countdown; // To hold the countdown interval

// Function to start the countdown
function startCountdown() {
  // Get the dates
  var date1 = new Date(date1Input.value);
  var date2 = new Date(date2Input.value);

  // Calculate the difference in milliseconds
  var diff = date2 - date1;

  // Clear any existing countdown
  if (countdown) {
    clearInterval(countdown);
  }

  // Start the countdown
  countdown = setInterval(function() {
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('countdown').innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Decrease the difference by one second
    diff -= 1000;

    // If the countdown is finished, clear the interval
    if (diff < 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerText = "Countdown finished!";
    }
  }, 1000);
}

// Function to stop the countdown
function stopCountdown() {
  if (countdown) {
    clearInterval(countdown);
    document.getElementById('countdown').innerText = "";
  }
}

// Add event listeners to the buttons
startButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);