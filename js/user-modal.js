import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
// import { urlPhotos } from './data.js';

const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

// const addThumbnailClickHandler = function (thumbnail, photo) {
//   thumbnail.addEventListener('click', () => {
//     fullPhoto.src = photo;

//     smallPhoto.forEach((elem) => {
//       elem.style.backgroundImage = `url('${photo}')`;
//     });

//     openUserModal();
//   });
// };

// for (let i = 0; i < urlPhotos.length; i++) {
//   addThumbnailClickHandler(picture[i], urlPhotos[i]);
// }

function openUserModal() {
  imageUpload.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imageUpload.classList.add('hidden');
    }
  });
}

function closeUserModal() {
  resetScale();
  imageUpload.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
}

buttonCancel.addEventListener('click', () => {
  closeUserModal();
});

export { openUserModal, closeUserModal };

// function openUserModal() {
//   imageUpload.classList.remove('hidden');
//   body.classList.add('modal-open');

//   document.addEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//       evt.preventDefault();
//       imageUpload.classList.add('hidden');

//       fullPhoto.classList.remove(
//         'effects__preview--chrome',
//         'effects__preview--sepia',
//         'effects__preview--marvin',
//         'effects__preview--phobos',
//         'effects__preview--heat'
//       );
//     }
//   });
// }

// function closeUserModal() {
//   resetScale();
//   imageUpload.classList.add('hidden');
//   body.classList.remove('modal-open');

//   fullPhoto.classList.remove(
//     'effects__preview--chrome',
//     'effects__preview--sepia',
//     'effects__preview--marvin',
//     'effects__preview--phobos',
//     'effects__preview--heat'
//   );

//   document.removeEventListener('keydown', onModalEscKeydown);
// }

// export { openUserModal, closeUserModal, fullPhoto };
