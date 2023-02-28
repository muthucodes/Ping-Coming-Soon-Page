"use strict";

const form = document.querySelector(".form");
const emailInput = document.querySelector(".email-input-field");
const errorMsg = document.querySelector(".error-msg");

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  if (email === "") {
    errorMsg.innerHTML = "Please enter an email address";
    emailInput.style.border = "1px solid var(--Light-Red)";
    errorMsg.style.color = "var(--Light-Red)";
  } else if (!email.match(validRegex)) {
    errorMsg.innerHTML = "Please enter a valid email address";
    emailInput.style.border = "1px solid var(--Light-Red)";
    errorMsg.style.color = "var(--Light-Red)";
    errorMsg.style.transform = "translateY(0.2rem)";
  } else {
    emailInput.style.border = "1px solid green";
    errorMsg.innerHTML = "Entered email address is valid";
    errorMsg.style.color = "green";
    errorMsg.style.transform = "translateY(-0.2rem)";
    console.log(email);
  }
});
