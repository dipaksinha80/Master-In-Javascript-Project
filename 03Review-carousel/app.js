// local reviews data
const reviews = [
  // Individual review objects with properties like id, name, job, img, and text
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  // Additional review objects...
];
// Selecting elements from the HTML document
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Buttons for navigation
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Initializing the index of the current review
let currentItem = 0;

// Loading initial review when the window is loaded
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// Function to display a review based on the current index

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//  event listener for next
//this will only goes incrementing the index and at last it give some error

// nextBtn.addEventListener("click", function () {
//   currentItem++;
//   showPerson(currentItem);
// });

// the best practice is
// after reaching the last index it goes automatically to the first index

// Event listener for the "Next" button
nextBtn.addEventListener("click", function () {
  currentItem++;
  // If the index exceeds the length of the reviews array, loop back to the first review
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  // Display the review
  showPerson();
});

// Event listener for the "Previous" button
prevBtn.addEventListener("click", function () {
  currentItem--;
  // If the index becomes negative, loop to the last review
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  // Display the review
  showPerson();
});

// Event listener for the "Surprise Me" button
randomBtn.addEventListener("click", function () {
  // Generate a random index within the range of the reviews array
  currentItem = Math.floor(Math.random() * reviews.length);
  // Display the randomly selected review
  showPerson(currentItem);
});
