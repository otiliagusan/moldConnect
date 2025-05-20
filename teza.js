 // Get the modal
const modal = document.getElementById("phoneModal");
// Get the close button
const closeBtn = document.querySelector(".close-btn");
//get the input from the modal
const phoneModalInput = document.querySelector("#phoneModalInput");
//get the ajutor button
const ajutorInput = document.querySelector("#ajutorInput")

// Get all buttons that open the modal and add click event to each
document.querySelectorAll(".open-modal-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    modal.style.display = "flex";
  });
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}
// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function phoneNumberValidation(input) {
  const value = input.value;
  const span = input.nextElementSibling;
  const phonePattern = /^\d{9}$/;

  if (value === "") {
      span.textContent = 'Introduceți un număr de telefon';
      span.style.color = 'red'; 
      input.style.border = '2px solid red';
      return false;
  } else if (!phonePattern.test(value)) {
      span.textContent = 'Introduceți un număr valid';
      span.style.color = 'red';
      input.style.border = '2px solid red';
      return false;
  } else {
    span.textContent = 'Număr valid';
    input.style.border = '2px solid green';
      return true;
  }
}
document.querySelector(".submit-btn").addEventListener("click", function () {
  const isPhoneNumberValid = phoneNumberValidation(phoneModalInput);
  if (isPhoneNumberValid) {
    alert("În scurt timp vă va apela un operator.");
    modal.style.display = "none";
  }
});
// Submit button functionality
document.querySelector("#ajutorBtn").addEventListener("click", function() {
  const isPhoneNumberValid = phoneNumberValidation(ajutorInput);
  if (isPhoneNumberValid) {
    alert("În scurt timp vă va apela un operator.");
    modal.style.display = "none";
  }
});
// Function to open the modal (can be called from anywhere)
function openPhoneModal() {
  modal.style.display = "flex";
}
// Select the hamburger menu and the menu section
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active'); // Toggle the 'active' class on the menu
});

// Select all anchor links inside the menu
const menuLinks = menu.querySelectorAll('a');

// Close the menu after clicking any anchor link
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active'); // Remove the 'active' class to close the menu
  });
});

