import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", createPhoto(galleryItems));

// galleryContainer.addEventListener("click", onPhotoClick);

function createPhoto(photos) {
  return photos
    .map(({ preview, original, description }) => {
      return `<a class='gallery__item' href='${original}'>
      <img class="gallery__image" src="${preview}" alt="${description}"></img>
    </a>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  disableRightClick: true,
  captionsData: "alt",
  captionDelay: 250,
});
