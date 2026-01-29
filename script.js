//  references of elements
const toggleBtn = document.getElementById("theme"); 
const textEl = document.querySelector(".animated-text");


//after clicking the button
toggleBtn.onclick = () => {
  // Toggle the "dark-theme" class on the body
  document.body.classList.toggle("dark-theme");

  // save the current theme choice in storage
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
};

// On page load, check saved theme is "dark"
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme"); // Apply dark theme if previously selected
}


// Array of words to display one by one
const words = [
   "MCA Student",
  "Machine Learning & Cloud Enthusiast",
  "Problem Solver"
];

let w = 0, // Index of the current word
    c = 0; // Index of the current character in that word

function type() {
  // Check if there are still words left to type
  if (w < words.length) {
    if (c === 0 && w !== 0) textEl.textContent += " | ";

    // Type characters one by one
    if (c < words[w].length) {
      textEl.textContent += words[w][c++]; // Add next character
      setTimeout(type, 90); // Delay between characters
    } else {
      // Move to the next word after finishing the current one
      w++; 
      c = 0;
      setTimeout(type, 600); //  pause before starting the next word
    }
  }
}
//fuction call
type();
