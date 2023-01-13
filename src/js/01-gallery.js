
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(`.gallery`);
galleryMarkup();

function galleryMarkup() {
  const markup = galleryItems.reduce((acc, {
    preview,
    original,
    description
}) => acc + `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-source="${original}"
    />
</a>
</div>`,"");
  list.insertAdjacentHTML("beforeend", markup);
}
