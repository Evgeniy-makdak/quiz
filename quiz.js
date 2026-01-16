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

for (let i = 0; i < button.length; i++) {
  question[i].textContent = questionData[i].label;
  button[i].addEventListener("click", function () {
    if (input[i].value.toLowerCase() === questionData[i].value.toLowerCase()) {
      const newSpan = document.createElement("span");
      newSpan.textContent = "ответ правильный!";
      newSpan.style.color = "green";
      input[i].style.border = "2px solid green";
      button[i].parentNode.appendChild(newSpan);
      setTimeout(() => {
        newSpan.textContent = "";
        input[i].value = "";
        input[i].style.border = "";
      }, 3000);
    } else {
      const newSpan = document.createElement("span");
      newSpan.textContent = "вы ошиблись, попробуйте ещё раз...";
      newSpan.style.color = "red";
      input[i].style.border = "1px solid red";
      button[i].parentNode.appendChild(newSpan);
      setTimeout(() => {
        newSpan.textContent = "";
        input[i].value = "";
        input[i].style.border = "";
      }, 5000);
    }
  });
};
