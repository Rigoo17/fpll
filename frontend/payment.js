document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phoneNumber");
    const payButton = document.getElementById("payButton");
    const errorMessage = document.getElementById("errorMessage");

    phoneInput.addEventListener("input", function () {
        let phoneNumber = phoneInput.value.trim();

      
        if (/^\d{10}$/.test(phoneNumber)) {
            payButton.disabled = false;
            errorMessage.textContent = ""; 
        } else {
            payButton.disabled = true;
            errorMessage.textContent = "Enter a valid 10-digit phone number!";
        }
    });
});


    // Set the deadline (YYYY, MM-1, DD, HH, MM)
    const deadline = new Date(2025, 2, 22, 23, 59).getTime();


    function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        
        document.querySelector(".countdown-clock").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } 
    
    else {
        document.querySelector(".countdown-clock").innerHTML = "00d 00h 00m 00s";
        clearInterval(timer);
    }
}


      // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately