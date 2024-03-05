// Simple function to play a song
function playSong() {
  // ... existing code ...

  // Update state description
  const stateElement = document.getElementById('play-state');
  stateElement.textContent = isPlaying ? "Song is playing." : "Song is paused.";
}
// Get the button element
const playPauseButton = document.getElementById('play-pause-button');

// Define initial playing state (optional)
let isPlaying = false;

// Function to play or pause the song
function playSong() {
  // Replace this with the actual logic to play/pause a song (e.g., using audio element)
  console.log(isPlaying ? "Pausing song..." : "Playing song...");
  isPlaying = !isPlaying; // Toggle playing state
}

// Add event listener for button click
playPauseButton.addEventListener('click', playSong);

// Add event listener for keyboard press
document.addEventListener('keydown', function(event) {
  if (event.key === ' ' || event.key === 'Enter') { // Spacebar or Enter key
    playSong();
  }
});
