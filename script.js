// Elements
const loginBox = document.getElementById("login-box");
const loginScreen = document.getElementById("login-screen");
const magicMessage = document.getElementById("magic-message");
const letterEnvelope = document.getElementById("letter-envelope");
const letterCard = document.getElementById("letter-card");

// Show magic message when input is focused
const inputs = loginBox.querySelectorAll("input");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    loginBox.style.display = "none";
    magicMessage.style.display = "block";
    setTimeout(() => {
      loginScreen.style.display = "none";
    }, 3000); // Transition to main page after 3 seconds
  });
});

// Envelope click opens the letter
letterEnvelope.addEventListener("click", () => {
  letterCard.style.display = "block";
  letterEnvelope.style.animation = "none";
});

// Countdown timer (update the date below to your 1-year goal)
const countdownElement = document.getElementById("countdown");
const anniversaryDate = new Date("2025-06-14T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = anniversaryDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "Happy 1 Year, my love!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until 1 Year ❤️`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
