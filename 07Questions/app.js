//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

// traversing the dom

// question-btn

// const queBtn = document.querySelectorAll(".question-btn");

// queBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement; //this is targeting the  parent class
//     question.classList.toggle("show-text");
//   });
// });
