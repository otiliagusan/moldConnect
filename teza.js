 // Get the modal
const modal = document.getElementById("phoneModal");
// Get the close button
const closeBtn = document.querySelector(".close-btn");

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
// Submit button functionality
document.querySelector(".submit-btn").addEventListener("click", function() {
  const phoneInput = document.querySelector("#phoneModalInput");
  if (phoneInput.value) { // Check the value of the input
    alert("În scurt timp vă va apela un operator.");
    modal.style.display = "none";
  } else {
    alert("Vă rugăm să introduceți un număr de telefon");
  }
});
// Submit button functionality
document.querySelector("#ajutorBtn").addEventListener("click", function() {
  const ajutorInput = document.querySelector("#ajutorInput");
  if (ajutorInput.value) { // Check the value of the input
    alert("În scurt timp vă va apela un operator.");
  } else {
    alert("Vă rugăm să introduceți un număr de telefon");
  }
});

// Function to open the modal (can be called from anywhere)
function openPhoneModal() {
  modal.style.display = "flex";
}