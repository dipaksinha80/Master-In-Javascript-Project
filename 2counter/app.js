// Initialize a variable 'count' to keep track of the current count
let count = 0;

// Get a reference to the HTML element with the id "value"
const value = document.querySelector("#value");

// Get references to all HTML elements with the class "btn"
const btns = document.querySelectorAll(".btn");

// Loop through each button and add a click event listener
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Get the classList of the clicked button
    const styles = e.currentTarget.classList;

    // Check if the clicked button has the class "decrease"
    if (styles.contains("decrease")) {
      // If so, decrease the count
      count--;
    } else if (styles.contains("increase")) {
      // Check if the clicked button has the class "increase"
      // If so, increase the count
      count++;
    } else {
      // If neither "decrease" nor "increase" is present, reset the count to 0
      count = 0;
    }

    // Update the color of the displayed count based on its value
    if (count > 0) {
      value.style.color = "green"; // Set color to green if count is positive
    }
    if (count < 0) {
      value.style.color = "red"; // Set color to red if count is negative
    }
    if (count == 0) {
      value.style.color = "#222"; // Set color to blackish if count is zero
    }

    // Update the text content of the element with the count value
    value.textContent = count;
  });
});
