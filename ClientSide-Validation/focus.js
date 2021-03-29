
const inputs = document.querySelectorAll(".input"); //select all the class name ".input"

function focusFunc() {
  let parent = this.parentNode;  // stores ".input" class parent ("input-box") in parent
  parent.classList.add("focus"); // will add focus css on all selected parent class
}

function blurFunc() {
  let parent = this.parentNode;  // stores ".input" class parent ("input-box") in parent
  if(this.value==""){
  parent.classList.remove("focus"); // will add blur css on all selected parent class
  }
}

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
