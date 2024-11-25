const switchElement = document.getElementById('switch');
const toggleText = document.getElementById('toggle-text');

switchElement.addEventListener('click', () => {
  // Переключение класса "active"
  switchElement.classList.toggle('active');

  // Обновление текста внутри кнопки
  if (switchElement.classList.contains('active')) {
    toggleText.textContent = 'ON';
  } else {
    toggleText.textContent = 'OFF';
  }
});
