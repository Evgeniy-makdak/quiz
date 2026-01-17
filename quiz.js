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

function deleteEffects(spanElement, inputElement) {
  setTimeout(() => {
    spanElement.textContent = "";
    inputElement.value = "";
    inputElement.style.border = "";
  }, 3000);
}

function addEffects(
  messageText,
  messageColor,
  borderStyle,
  inputElement,
  buttonElement,
) {
  const newSpan = document.createElement("span");
  newSpan.textContent = messageText;
  newSpan.style.color = messageColor;
  inputElement.style.border = borderStyle;
  buttonElement.parentNode.appendChild(newSpan);
  return newSpan;
}

for (let i = 0; i < button.length; i++) {
  question[i].textContent = questionData[i].label;
  button[i].addEventListener("click", function () {
    if (input[i].value.toLowerCase() === questionData[i].value.toLowerCase()) {
      const span = addEffects(
        "правильный ответ",
        "green",
        "2px solid green",
        input[i],
        button[i],
      );
      deleteEffects(span, input[i]);
    } else {
      const span = addEffects(
        "вы ошиблись, попробуйте ещё раз...", 
        "red", 
        "2px solid red",
        input[i],
        button[i],
      );
      deleteEffects(span, input[i]);
    }
  });
}
