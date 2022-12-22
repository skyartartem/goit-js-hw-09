// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

// Change code below this line
// console.log(SimpleLightbox)
// console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

const galleryMarkup = creategalleryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", galleryMarkup);

function creategalleryMarkup(items) {
    return items
        .map(({ preview, description, original }) => {
            return `
                <a class="gallery__item" href="${original}">
                     <img class="gallery__image"
                     src="${preview}" 
                     alt="${description}"
                </a>
            `;
        })
    .join("");
}
// console.dir(galleryContainerRef);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});
