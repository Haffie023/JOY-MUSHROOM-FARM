// Simulate a simple user database
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ];
  
  // Function to show a specific form and hide others
  function showForm(formId) {
    const forms = ["signupForm", "loginForm", "resetPasswordForm"];
    forms.forEach((form) => {
      if (form === formId) {
        document.getElementById(form).style.display = "block";
      } else {
        document.getElementById(form).style.display = "none";
      }
    });
  }
  
  // Function to sign up a new user
  function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the username is already taken
    const isUsernameTaken = users.some((user) => user.username === username);
    if (isUsernameTaken) {
      alert("Username already taken. Please choose a different one.");
      return false;
    }
  
    // Add the new user to the users array (in a real-world scenario, this should be saved to a database)
    users.push({ username, password });
    alert("Sign up successful. You can now log in.");
    showForm("loginForm");
    return false;
  }
  
  // Function to log in an existing user
  function logIn() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // Check if the user exists and the password is correct
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
      alert("Invalid username or password. Please try again.");
      return false;
    }
  
    alert("Log in successful!");
    // Perform any additional actions you want when the user logs in
    // For example, you can redirect to a different page here.
  
    return false;
  }
  
  // Function to reset the password of an existing user
  function resetPassword() {
    const username = document.getElementById("resetUsername").value;
    const newPassword = document.getElementById("newPassword").value;
  
    // Find the user in the users array
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex === -1) {
      alert("User not found. Please check the username and try again.");
      return false;
    }
  
    // Update the user's password
    users[userIndex].password = newPassword;
    alert("Password reset successful. You can now log in with the new password.");
    showForm("loginForm");
    return false;
  }
  
  // Function to log out the user
  function logOut() {
    // Perform any necessary actions when the user logs out
    alert("Log out successful!");
    // For simplicity, we'll just reload the page
    location.reload();
  }
  