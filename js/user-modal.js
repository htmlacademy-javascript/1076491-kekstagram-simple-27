import { isEscapeKey } from './util.js';
// import { urlPhotos } from './data.js';

const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');

// const picture = document.querySelectorAll('.picture');

const fullPhoto = document.querySelector('img');
fullPhoto.classList.add('full-photo');

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let counter = 100;

// const smallPhoto = document.querySelectorAll('.effects__preview');
const smallPhoto = document.querySelector('.effects__preview');

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
  scaleControlValue.value = `${counter}%`;

  // smallPhoto.style.backgroundImage = 'url("../img/upload-button-bg.png")';

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imageUpload.classList.add('hidden');
      fullPhoto.style.transform = '';
      counter = 100;

      fullPhoto.classList.remove(
        'effects__preview--chrome',
        'effects__preview--sepia',
        'effects__preview--marvin',
        'effects__preview--phobos',
        'effects__preview--heat'
      );
    }
  });
}

function closeUserModal() {
  imageUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  fullPhoto.style.transform = '';
  counter = '100';

  fullPhoto.classList.remove(
    'effects__preview--chrome',
    'effects__preview--sepia',
    'effects__preview--marvin',
    'effects__preview--phobos',
    'effects__preview--heat'
  );

  document.removeEventListener('keydown', onModalEscKeydown);
}

scaleControlSmaller.addEventListener('click', () => {
  if (counter > 25) {
    counter -= 25;
    scaleControlValue.value = `${counter}%`;
    fullPhoto.style.transform = `scale(${counter / 100})`;
  }
});

scaleControlBigger.addEventListener('click', () => {
  if (counter < 100) {
    counter += 25;
    scaleControlValue.value = `${counter}%`;
    fullPhoto.style.transform = `scale(${counter / 100})`;
  }
});

buttonCancel.addEventListener('click', () => {
  closeUserModal();
});

export { openUserModal, closeUserModal, fullPhoto, smallPhoto };
