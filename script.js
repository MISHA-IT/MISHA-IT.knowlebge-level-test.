function submitQuiz() {
  var score = 0;
  var totalQuestions = 16;

  var answer1 = document.querySelector('input[name="q1"]:checked');
  if (answer1 && answer1.value === "b") {
    score++;
  }

  var answer2 = document.querySelector('input[name="q2"]:checked');
  if (answer2 && answer2.value === "b") {
    score++;
  }

  var answer3 = document.querySelector('input[name="q3"]:checked');
  if (answer3 && answer3.value === "d") {
    score++;
  }

  var answer4 = document.querySelector('input[name="q4"]:checked');
  if (answer4 && answer4.value === "b") {
    score++;
  }

  var answer5 = document.querySelector('input[name="q5"]:checked');
  if (answer5 && answer5.value === "a") {
    score++;
  }

  var answer6 = document.querySelector('input[name="q6"]:checked');
  if (answer6 && answer6.value === "a") {
    score++;
  }

  var answer7 = document.querySelector('input[name="q7"]:checked');
  if (answer7 && answer7.value === "c") {
    score++;
  }

  var answer8 = document.querySelector('input[name="q8"]:checked');
  if (answer8 && answer8.value === "b") {
    score++;
  }

  var answer9 = document.querySelector('input[name="q9"]:checked');
  if (answer9 && answer9.value === "d") {
    score++;
  }

  var answer10 = document.querySelector('input[name="q10"]:checked');
  if (answer10 && answer10.value === "c") {
    score++;
  }

  var answer11 = document.querySelector('input[name="q11"]:checked');
  if (answer11 && answer11.value === "a") {
    score++;
  }

  var answer12 = document.querySelector('input[name="q12"]:checked');
  if (answer12 && answer12.value === "c") {
    score++;
  }

  var answer13 = document.querySelector('input[name="q13"]:checked');
  if (answer13 && answer13.value === "b") {
    score++;
  }

  var answer14 = document.querySelector('input[name="q14"]:checked');
  if (answer14 && answer14.value === "b") {
    score++;
  }

  var answer15 = document.querySelector('input[name="q15"]:checked');
  if (answer15 && answer15.value === "a") {
    score++;
  }

  var answer16 = document.querySelector('input[name="q16"]:checked');
  if (answer16 && answer16.value === "c") {
    score++;
  }

  var result = document.getElementById("result");
  result.innerHTML = `Ваш результат: ${score} из ${totalQuestions}`;
}
const button = document.getElementById("bttn");
const tableContainer = document.getElementById("tableContainer");

button.addEventListener("click", function () {
  if (tableContainer.style.display === "none") {
    tableContainer.style.display = "block";
    button.textContent = "Скрыть таблицу";
  } else {
    tableContainer.style.display = "none";
    button.textContent = "Показать оценку результатов";
  }
});

function toggleText() {
  const textElement = document.getElementById("text");
  const button = document.getElementById("toggleButton");

  if (textElement.style.display === "none") {
    textElement.style.display = "block";
    button.textContent = "Скрыть ответы";
  } else {
    textElement.style.display = "none";
    button.textContent = "Показать правильные ответы?";
  }
}
