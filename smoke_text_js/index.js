// разбиваем текст на буквы

const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');


//добавляем класс active на каждый span при наведении

const letters = document.querySelectorAll('span');
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('mouseover', () => {
        letters[i].classList.add('active');
    })
}