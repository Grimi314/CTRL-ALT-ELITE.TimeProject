const galleryButtonList = document.querySelector('.gallery-list-order');
const galleryButton = galleryButtonList.querySelectorAll(
  '.gallery-order-button'
);

galleryButtonList.addEventListener('click', handleGalleryButton);

function handleGalleryButton(event) {
  const btn = event.target.closest('.gallery-order-button');
  if (!btn) return;

  galleryButton.forEach(b => {
    b.classList.remove('gallery-button-active');
  });
  btn.classList.add('gallery-button-active');
}
