import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", createPhoto(galleryItems));

galleryContainer.addEventListener("click", onPhotoClick);

function createPhoto(photos) {
  return photos
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class='gallery__link' href='${original}'>
      <img class="gallery__image" data-source='${original}' src="${preview}" alt="${description}"></img>
    </a>
      </div>`;
    })
    .join("");
}

function onPhotoClick(photo) {
  photo.preventDefault();
  console.log(photo.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src="${photo.target.dataset.source}">
`);
  instance.show();

  document.addEventListener("keydown", onEscClick);

  function onEscClick(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
      removeListener();
    }
  }

  function removeListener() {
    document.removeEventListener("keydown", onEscClick);
  }
}
