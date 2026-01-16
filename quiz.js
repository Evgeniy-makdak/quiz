const [question_1, question_2, question_3] = document.querySelectorAll('#test p')
const [input_1, input_2, input_3] = document.querySelectorAll('#test input');
const [button_1, button_2, button_3] = document.querySelectorAll('#test button');

const questionData = [
    { label: 'Напишите название языка типизации для JavaScript', value: 'TypeScript' },
    { label: 'Начиная с какого стандарта ES в JS не рекомендуется использовать var для объявления переменной?', value: 'ES6' },
    { label: 'С помощью какой браузерной функции можно вывести сообщение на экран?', value: 'alert' }
];

question_1.textContent = questionData[0].label;

button_1.addEventListener('click', function () {
    if (input_1.value.toLowerCase() === questionData[0].value.toLowerCase()) {
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

question_2.textContent = questionData[1].label;

button_2.addEventListener('click', function () {
    if (input_2.value.toLowerCase() === questionData[1].value.toLowerCase()) {
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

question_3.textContent = questionData[2].label;

button_3.addEventListener('click', function () {
    if (input_3.value.toLowerCase() === questionData[2].value.toLowerCase()) {
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