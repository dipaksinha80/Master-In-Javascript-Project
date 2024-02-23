//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {

    //this will only show the clicked question , previous question will be closed after clicking new question
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


// traversing the dom
// question-btn

// const queBtn = document.querySelectorAll(".question-btn");

// queBtn.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement; //this is targeting the  parent class

//     // //not working
//     // queBtn.forEach(function (e) {
//     //   if (e !== btn) {
//     //     e.classList.remove("show-text");
//     //   }
//     // });

//     question.classList.toggle("show-text");
//   });
// });
