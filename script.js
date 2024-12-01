const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const submitButton = document.querySelector('button[type="submit"]');
const passwordErrorMessage = document.querySelector(".password-error");

function validatePasswords() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordErrorMessage.textContent = "Passwords do not match.";
    passwordErrorMessage.style.display = "block";
    confirmPasswordInput.value = "";
    passwordInput.value = "";
    return false;
  } else {
    passwordErrorMessage.style.display = "none";
    return true;
  }
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validatePasswords()) {
    // Passwords match, submit the form
    console.log("Passwords match, form can be submitted.");
  } else {
    // Passwords don't match, don't submit the form
    console.log("Passwords don't match, form not submitted.");
  }
});
