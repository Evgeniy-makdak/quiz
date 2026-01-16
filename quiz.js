const question = document.querySelectorAll("#test p");
const input = document.querySelectorAll("#test input");
const button = document.querySelectorAll("#test button");

const questionData = [
  {
    label: "Напишите название языка типизации для JavaScript",
    value: "TypeScript",
  },
  {
    label:
      "Начиная с какого стандарта ES в JS не рекомендуется использовать var для объявления переменной?",
    value: "ES6",
  },
  {
    label:
      "С помощью какой браузерной функции можно вывести сообщение на экран?",
    value: "alert",
  },
];

const newSpan = document.createElement("span");

for (let i = 0; i < button.length; i++) {
  function deleteEffects() {
    setTimeout(() => {
      newSpan.textContent = "";
      input[i].value = "";
      input[i].style.border = "";
    }, 3000);
  }

  function addEffects(messageText, messageColor, inputElement) {
    newSpan.textContent = messageText;
    newSpan.style.color = messageColor;
    input[i].style.border = inputElement;
    button[i].parentNode.appendChild(newSpan);
  }
  question[i].textContent = questionData[i].label;
  button[i].addEventListener("click", function () {
    if (input[i].value.toLowerCase() === questionData[i].value.toLowerCase()) {
      addEffects("правильный ответ", "green", "2px solid green");
      deleteEffects();
    } else {
      addEffects("вы ошиблись, попробуйте ещё раз...", "red", "2px solid red");
      deleteEffects();
    }
  });
}
