
// Countdown Timer
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const weddingDate = new Date('[Insert Wedding Date]').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.textContent = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
        } else {
            countdownElement.textContent = "The big day is here!";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
