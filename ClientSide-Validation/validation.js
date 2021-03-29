function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  if (name === "") {
    alert("Name field is empty.");
    document.getElementById("name").focus();
    return false;
  }
  if (name.length < 3) {
    alert("Name is too short.");
    return false;
  }
  if (name.length > 20) {
    alert("Name is too long.");
    return false;
  }
  if (name.match(/[^A-Z][^a-z]/i)) {
    alert("Name must consist of English alphabets.");
    return false;
  }

  if (email === "") {
    alert("Email field is empty.");
    document.getElementById("email").focus();
    return false;
  }
  if (email.indexOf("@") <= 0) {
    alert("Invalid email! position of '@' is invalid");
    return false;
  }
  if (email.charAt(email.length - 4) !== ".") {
    alert("Invalid email! position of '.' is invalid");
    return false;
  }
  if (phone === "") {
    alert("Phone field is empty.");
    document.getElementById("phone").focus();
    return false;
  }
  if (isNaN(phone)) {
    alert("Only numbers are allowed in phone.");
    return false;
  }
  if (phone.length !== 10) {
    alert("Phone number should have exactly 10 digits.");
    return false;
  }
}
