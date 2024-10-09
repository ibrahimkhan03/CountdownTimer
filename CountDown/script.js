// Store the required elements in variables
const minuteLabel = document.getElementById('minuteLabel');
const secondLabel = document.getElementById('secondLabel');
const secondInput = document.getElementById('secondInput');
const startButton = document.getElementById('startButton');

let countdown;
startButton.addEventListener('click', countdownTimer);
startButton.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
        countdownTimer();
    }
});

function countdownTimer() {
    let totalSeconds = parseInt(secondInput.value);

    if (totalSeconds > 0) {
        clearInterval(countdown);

        countdown = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;

                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;

                minuteLabel.textContent = String(minutes).padStart(2, '0');
                secondLabel.textContent = String(seconds).padStart(2, '0');
            } else {
                clearInterval(countdown);
                alert("Time's up!");
            }
        }, 1000);
    } else {
        alert("Please enter a valid number of seconds.");
    }
}