//using selectors inside the element
// traversing the dom

// question-btn

const queBtn = document.querySelectorAll(".question-btn");

queBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement; //this is targeting the  parent class
    question.classList.toggle("show-text");
  });
});
