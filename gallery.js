import galleryItems from "./src/gallery-items.js";

const refs = {
    galleryContainer: document.querySelector(".js-gallery"),
    lightboxContainer: document.querySelector(".js-lightbox"),
    lightboxOverlay: document.querySelector(".lightbox__overlay"),
    lightboxImage: document.querySelector(".lightbox__image"),
    lightboxCloseBtn: document.querySelector('button[data-action="close-lightbox"]'),
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

refs.galleryContainer.addEventListener('click', onImageClick);
function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

    refs.lightboxImage.src = e.target.dataset.source;
    refs.lightboxImage.alt = e.target.alt;

    refs.lightboxContainer.classList.add("is-open");
}

function closeModal() {
    refs.lightboxImage.src = "";
    refs.lightboxImage.alt = "";

    refs.lightboxContainer.classList.remove("is-open")
}

refs.lightboxContainer.addEventListener('click', closeLightboxBtn);
function closeLightboxBtn(e) {
    if (e.target !== refs.lightboxCloseBtn) {
        return;
    }
    
    closeModal()
}

// Дополнительные требования

refs.lightboxOverlay.addEventListener('click', onOverlayClick);
function onOverlayClick(e) {
    if (e.target !== refs.lightboxOverlay) {
        return;
    }
    
    closeModal()
}

window.addEventListener('keydown', onEscClose, true);
function onEscClose(e) {
    if (e.code === 'Escape') {
        closeModal()
    }
}

// refs.lightboxContainer.addEventListener('keydown',ModalKeySwipe, true);
// function ModalKeySwipe(e) {
//     if (e.code === 37) {
//         console.log('Left was pressed');
//     }
//     else if (e.code === 39) {
//         console.log('Right was pressed');
//     }
// }