// Variable Declaration
const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const usernameBox = document.querySelector(".username-box"); // Username input box
const forgotPassword = document.querySelector("#forgotPassword"); // Forgot Password Link
const rememberMe = document.querySelector(".remember-me"); // Remember Me checkbox

const colContainer = document.querySelector(".col-2");

// Function to handle login button click
loginBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "#a855f7"; // Keep button color same after clicking
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";

    colContainer.style.borderRadius = "0 30% 20% 0";

    // Hide the username field when switching back to login
    usernameBox.style.display = "none";

    // Show Remember Me & Hide Forgot Password
    forgotPassword.style.display = "none";
    rememberMe.style.display = "flex";
});

// Function to handle register button click
registerBtn.addEventListener("click", () => {
    registerBtn.style.backgroundColor = "#a855f7"; // Keep button color same after clicking
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    colContainer.style.borderRadius = "0 20% 30% 0";

    // Show the username field when clicking "Sign Up"
    usernameBox.style.display = "block";

    // Show Forgot Password & Hide Remember Me
    forgotPassword.style.display = "flex";
    rememberMe.style.display = "none";
});
