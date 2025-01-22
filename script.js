
// Countdown Timer
document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const weddingDate = new Date('2025-05-31 16:30:00 GMT-3').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.textContent = `Faltan ${days} días, ${hours} horas y ${minutes} minutos para el gran día!`;
        } else {
            countdownElement.textContent = "The big day is here!";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
