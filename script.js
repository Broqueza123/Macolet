
document.addEventListener("DOMContentLoaded", function() {
  const lyrics = [
    "But darling, you are the only exception",
    "You are the only exception",
    "You are the only exception",
    "You are the only exception",
    "Maybe I know somewhere deep in my soul"
  ];

  const delay = 45; // adjust the speed here
  const lyricsElement = document.getElementById("lyrics");
  const button = document.getElementById("show-lyrics"); // Button to trigger lyrics display

  async function displayLyrics() {
    for (const line of lyrics) {
      for (const char of line) {
        const charElement = document.createElement("span");
        charElement.textContent = char;
        charElement.style.animation = "glow 2s ease-in-out";
        lyricsElement.appendChild(charElement);

        await new Promise((resolve) => setTimeout(resolve, delay));

        charElement.style.animation = "";
      }

      lyricsElement.appendChild(document.createElement("br"));

      await new Promise((resolve) => setTimeout(resolve, delay * 10));

      lyricsElement.textContent = "";

      await new Promise((resolve) => setTimeout(resolve, delay * 10));
    }

    setTimeout(function() {
      window.location.href = "/card.html"; // Set your next target HTML
    }, 700);
  }

  // Add a click event listener to the button
  button.addEventListener("click", displayLyrics);
});