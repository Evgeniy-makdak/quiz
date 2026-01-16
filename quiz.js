const [input_1, input_2, input_3] = document.querySelectorAll('#test input');
const [button_1, button_2, button_3] = document.querySelectorAll('#test button');

const quizData = [
    'TypeScript',
    'ES6',
    'alert'
]


button_1.addEventListener('click', function () {
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

button_2.addEventListener('click', function () {
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

button_3.addEventListener('click', function () {
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