function validateForm() {
  const name = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const Pno = document.getElementById("Pno").value.trim();
  const Pw = document.getElementById("pw").value;
  const Cpw = document.getElementById("Cpw").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !lname || !email || !Pno || !Pw || !Cpw) {
    alert("All fields are required.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (isNaN(Pno) || Pno.length !== 10) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  if (Pw !== Cpw) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Form Submitted Successfully!");
  return true; // allow submission
}
