document.addEventListener("DOMContentLoaded", function () {
    const passInput = document.getElementById("pass");
    const cpassInput = document.getElementById("cpass");
    const eye1 = document.getElementById("eye1");
    const eye2 = document.getElementById("eye2");
    const submitButton = document.getElementById("submit");
    const errorMessage = document.getElementById("error-message");

    function Password(input, eyeIcon) {
        if (input.type === "password") {
            input.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    }

    eye1.addEventListener("click", function () {
        Password(passInput, eye1);
    });

    eye2.addEventListener("click", function () {
        Password(cpassInput, eye2);
    });

    submitButton.addEventListener("click", function (event) {
        const password = passInput.value;
        const confirmPassword = cpassInput.value;

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            event.preventDefault();
        } else {
            errorMessage.textContent = "";
        }
    });
});