function showMessage() {
  let first = "Dave",
    last = "Rowe";
  first = prompt("Enter first name: ");
  last = prompt("Enter last name: ");
  alert(first + " " + last + "!!");
  //console.log("Hello developer world!");
}
//showMessage();
document.addEventListener("DOMContentLoaded", showMessage);
