import galleryItems from "./gallery-items.js";

/*
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
*/

const refs = {
    galleryContainer: document.querySelector(".js-gallery"),
    lightbox: document.querySelector(".js-lightbox"),
    lightboxOverlay: document.querySelector(".lightbox__overlay"),
    lightboxContent: document.querySelector(".lightbox__content"),
    lightboxImage: document.querySelector(".lightbox__image"),
    lightboxCloseBtn: document.querySelector(".lightbox__button"),
};

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
          <a
            class="gallery__link"
            href="${original}"
          >
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
        `;
    }).join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
console.log(createGalleryMarkup(galleryItems));