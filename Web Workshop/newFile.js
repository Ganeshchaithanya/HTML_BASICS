function validateForm() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let gender = document.querySelector('input[name="gender"]:checked');

  if (name.length < 5) {
      alert("Name must be at least 5 characters long.");
      return false;
  }
  if (!gender) {
      alert("Please select a gender.");
      return false;
  }
  if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
  }
  if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
  }

  alert("Form submitted successfully. Selected gender: " + gender.value);
  return true;
}