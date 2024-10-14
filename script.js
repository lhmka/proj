// JavaScript for basic page functionality

document.getElementById('learnMoreBtn').addEventListener('click', function() {
    // Scroll smoothly to the About section
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Platform section interactions (if you want to add more details when clicking platforms)
document.querySelectorAll('.platform').forEach(function(platform) {
    platform.addEventListener('click', function() {
        alert("More info about this platform coming soon!");
    });
});

// For Games Section: Add functionality to display video when clicked
document.querySelectorAll('.game').forEach(function(game) {
    game.addEventListener('click', function() {
        alert("Displaying more about the game!");
    });
});