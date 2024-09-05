// Function to play sound
function playSound(key) {
    const audio = new Audio(`sounds/${key}.mp3`); // Adjust sound path if necessary
    audio.play();
}

// Function to highlight the pressed button
function highlightKey(keyCode) {
    const pad = document.querySelector(`.drum-pad[data-key="${keyCode}"]`);
    if (!pad) return;
    pad.classList.add('playing');
    setTimeout(() => pad.classList.remove('playing'), 200); // Remove the effect after 200ms
}

// Event listener for key press
document.addEventListener('keydown', function(event) {
    const key = event.keyCode;
    const sound = document.querySelector(`.drum-pad[data-key="${key}"]`).dataset.sound;
    if (sound) {
        playSound(sound);
        highlightKey(key);   
    }
});

// Event listener for clicking buttons
document.querySelectorAll('.drum-pad').forEach(pad => {
    pad.addEventListener('click', function() {
        const sound = this.dataset.sound;
        const key = this.dataset.key;
        playSound(sound);
        highlightKey(key);
    });
});
