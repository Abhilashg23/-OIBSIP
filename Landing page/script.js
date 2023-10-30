document.addEventListener('DOMContentLoaded', function() {
    // Set the countdown date (e.g., December 31, 2023)
    const countdownDate = new Date('December 31, 2023 00:00:00').getTime();

    // Update the countdown every second
    const countdown = document.getElementById('countdown');

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            clearInterval(interval);
            countdown.innerHTML = 'Countdown Expired';
        }
    }, 1000);
});
