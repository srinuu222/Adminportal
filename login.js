document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting the default way (page reload)

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example users (you can add more here)
    const users = [
        { username: 'pallesrinivas46@gmail.com', password: 'password123' },
        { username: 'user1', password: 'password456' },
    ];

    // Check if the username and password match any user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', true);  // Set login status in localStorage
        window.location.href = 'dashboard.html';    // Redirect to the dashboard page
    } else {
        alert('Incorrect username or password!');    // Show error message if login fails
    }
});


function togglePassword() {
    const passwordField = document.getElementById("password");
    const icon = document.getElementById("toggle-password");

    if (passwordField.type === "password") {
      passwordField.type = "text"; // Show password
      icon.name = "eye-outline"; // Change icon to "eye"
    } else {
      passwordField.type = "password"; // Hide password
      icon.name = "eye-off-outline"; // Change icon back to "eye-off"
    }
  }

  // Enable Log in button only when all required fields are filled
  function checkFormValidity() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginBtn = document.getElementById("login-btn");

    // Check if both fields are filled
    if (username && password) {
      loginBtn.disabled = false;
    } else {
      loginBtn.disabled = true;
    }
  }

  // Function to validate the login form
  function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please fill out all fields.");
      return false; // Prevent form submission if validation fails
    }

    return true; // Proceed with form submission if validation passes
  }

  // Event listener for toggling password visibility
  document
    .getElementById("toggle-password")
    .addEventListener("click", togglePassword);

  // Watch for changes in the form to check validity
  document
    .getElementById("username")
    .addEventListener("input", checkFormValidity);
  document
    .getElementById("password")
    .addEventListener("input", checkFormValidity);

  document
    .getElementById("user-btn")
    .addEventListener("click", function () {
      document.querySelector(".login-register").style.display = "block";
      document.getElementById("user-btn").classList.add("active");
      document.getElementById("admin-btn").classList.remove("active");
    });

  document
    .getElementById("admin-btn")
    .addEventListener("click", function () {
      document.querySelector(".login-register").style.display = "none";
      document.getElementById("admin-btn").classList.add("active");
      document.getElementById("user-btn").classList.remove("active");
    });

  // Function to reset form fields
  function resetFormFields() {
    document.getElementById("username").value = ""; // Clear email field
    document.getElementById("password").value = ""; // Clear password field
    document.getElementById("remember").checked = false; // Uncheck 'remember me'
    document.getElementById("login-btn").disabled = true; // Disable login button
  }