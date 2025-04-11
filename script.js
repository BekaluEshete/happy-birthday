// Continuous confetti in the background
window.addEventListener('load', () => {
    setInterval(() => {
        confetti({
            particleCount: 50, // Fewer particles for subtlety
            spread: 100,      // Wider spread for background effect
            origin: { y: 0.6 },
            colors: ['#ff6b6b', '#4ecdc4', '#ffe66d']
        });
    }, 1000); // Fires every 1 second for continuous effect
});

// Video toggle on click
const video = document.getElementById('birthday-video');

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});