document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Hash the password for security
    const hashedPassword = btoa(password); // Simple base64 encoding, not secure for production

    // You can add a database to store this data for production purposes

    alert('User registered successfully!');
});
