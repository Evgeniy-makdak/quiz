const [question_1, question_2, question_3] = document.querySelectorAll('#test p')
const [input_1, input_2, input_3] = document.querySelectorAll('#test input');
const [button_1, button_2, button_3] = document.querySelectorAll('#test button');

const questionData = [
    'Напишите название языка типизации для JavaScript',
    'Начиная с какого стандарта ES в JS не рекомендуется использовать var для объявления переменной?',
    'С помощью какой браузерной функции можно вывести сообщение на экран?'
];

const quizData = [
    'TypeScript',
    'ES6',
    'alert'
];

const newParagraph_1 = document.createElement('p');
newParagraph_1.textContent = questionData[0];
question_1.parentNode.appendChild(newParagraph_1);

button_1.addEventListener('click', function() {
    if (input_1.value === quizData[0]) {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'ответ правильный!';
        newSpan.style.color = 'green';
        input_1.style.border = '2px solid green';
        button_1.parentNode.appendChild(newSpan);
        setTimeout(() => {
            newSpan.textContent = '';
            input_1.value = '';
            input_1.style.border = '';
        }, 5000)
    }
    else {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'вы ошиблись, попробуйте ещё раз...';
        newSpan.style.color = 'red';
        input_1.style.border = '1px solid red';
        button_1.parentNode.appendChild(newSpan);
        setTimeout(() => {
            newSpan.textContent = '';
            input_1.value = '';
            input_1.style.border = '';
        }, 5000)
    }
})

const newParagraph_2 = document.createElement('p');
newParagraph_2.textContent = questionData[1];
question_2.parentNode.appendChild(newParagraph_2);

button_2.addEventListener('click', function() {
    if (input_2.value === quizData[1]) {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'ответ правильный!';
        newSpan.style.color = 'green';
        input_2.style.border = '2px solid green';
        button_2.parentNode.appendChild(newSpan);
        setTimeout(() => {
            newSpan.textContent = '';
            input_2.value = '';
            input_2.style.border = '';
        }, 5000)
    }
    else {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'вы ошиблись, попробуйте ещё раз...';
        newSpan.style.color = 'red';
        input_2.style.border = '2px solid red';
        button_2.parentNode.appendChild(newSpan);
        setTimeout(() => {
            newSpan.textContent = '';
            input_2.value = '';
            input_2.style.border = '';
        }, 5000)
    }
})

const newParagraph_3 = document.createElement('p');
newParagraph_3.textContent = questionData[2];
question_3.parentNode.appendChild(newParagraph_3);

button_3.addEventListener('click', function() {
    if (input_3.value === quizData[2]) {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'ответ правильный!';
        newSpan.style.color = 'green';
        input_3.style.border = '2px solid green';
        button_3.parentNode.appendChild(newSpan);
        setTimeout(() => {
            newSpan.textContent = '';
            input_3.value = '';
            input_3.style.border = '';
        }, 5000)
    }
    else {
        const newSpan = document.createElement('span');
        newSpan.textContent = 'вы ошиблись, попробуйте ещё раз...';
        newSpan.style.color = 'red';
        input_3.style.border = '2px solid red';
        button_3.parentNode.appendChild(newSpan);
        setTimeout(() => {
            newSpan.textContent = '';
            input_3.value = '';
            input_3.style.border = '';
        }, 5000)
    }
})