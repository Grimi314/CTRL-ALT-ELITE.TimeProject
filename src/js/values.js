// Основной JavaScript файл для секции Values
document.addEventListener('DOMContentLoaded', function () {
  console.log('Philosophy section loaded');

  // Фикс горизонтального скролла
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';

  // Дополнительная проверка на скролл
  const checkOverflow = () => {
    const bodyWidth = document.body.scrollWidth;
    const viewportWidth = window.innerWidth;

    if (bodyWidth > viewportWidth) {
      console.log('Обнаружен скролл:', bodyWidth - viewportWidth, 'px лишних');
      // Автоматический фикс если обнаружен скролл
      document.body.style.width = viewportWidth + 'px';
    }
  };

  checkOverflow();
  window.addEventListener('resize', checkOverflow);

  // Добавление интерактивности для списка ценностей (если у вас есть .value-item)
  const valueItems = document.querySelectorAll('.value-item');

  valueItems.forEach(item => {
    item.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });

  // Опционально: Загрузка разных изображений для разных устройств
  function loadResponsiveImage() {
    const section = document.querySelector('.philosophy-section');
    const screenWidth = window.innerWidth;

    // Пример добавления фонового изображения
    if (screenWidth <= 768) {
      // Для мобильных
      section.style.backgroundImage = 'url("./img/philosophy-mobile.jpg")';
    } else if (screenWidth <= 1024) {
      // Для планшетов
      section.style.backgroundImage = 'url("./img/philosophy-tablet.jpg")';
    } else {
      // Для десктопов
      section.style.backgroundImage = 'url("./img/philosophy-desktop.jpg")';
    }
  }

  // Вызов функции при загрузке и изменении размера окна
  // Раскомментируйте если нужно:
  // window.addEventListener('load', loadResponsiveImage);
  // window.addEventListener('resize', loadResponsiveImage);
});
