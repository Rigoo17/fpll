const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click' , () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click' , () => {
    container.classList.remove('active');
})


let eyeIcons = document.querySelectorAll("#eye-icon"); // Select all eye icons
let passwords = document.querySelectorAll("input[type='password']"); // Select all password fields

eyeIcons.forEach((eyeIcon, index) => {
    eyeIcon.addEventListener("click", function () {
        if (passwords[index].type === "password") {
            passwords[index].type = "text";
            eyeIcon.src = "eye-open.png"; // Change to an open-eye image if available
        } else {
            passwords[index].type = "password";
            eyeIcon.src = "eye-close.png"; // Change back to the closed-eye image
        }
    });
});



function redirectToPayment() {
    window.location.href = "payment.html"; // Redirects to the payment page
}



