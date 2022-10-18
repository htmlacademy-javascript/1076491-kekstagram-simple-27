import { isEscapeKey } from './util.js';
import { urlPhotos } from './data.js';

const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');

const picture = document.querySelectorAll('.picture');

const fullPhoto = document.querySelector('img');
fullPhoto.classList.add('full-photo');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', () => {
    fullPhoto.src = photo;

    document.querySelectorAll('.effects__preview').forEach((elem) => {
      elem.style.backgroundImage = `url('${photo}')`;
    });

    openUserModal();
  });
};

for (let i = 0; i < urlPhotos.length; i++) {
  addThumbnailClickHandler(picture[i], urlPhotos[i]);
}

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
  imageUpload.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
}

const scaleControlSmall = document.querySelector('.scale__control--smaller');
const scaleControlBig = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let counter = 100;

scaleControlSmall.addEventListener('click', () => {
  if (counter > 25) {
    counter -= 25;

    if (counter === 25) {
      fullPhoto.style.transform = 'scale(0.25)';
    }
    if (counter === 50) {
      fullPhoto.style.transform = 'scale(0.5)';
    }
    if (counter === 75) {
      fullPhoto.style.transform = 'scale(0.75)';
    }
    if (counter === 100) {
      fullPhoto.style.transform = 'scale(1)';
    }
  }
  scaleControlValue.value = counter + String('%');
  scaleControlSmall.classList.toggle('added');
});

scaleControlBig.addEventListener('click', () => {
  if (counter < 100) {
    counter += 25;

    if (counter === 25) {
      fullPhoto.style.transform = 'scale(0.25)';
    }
    if (counter === 50) {
      fullPhoto.style.transform = 'scale(0.5)';
    }
    if (counter === 75) {
      fullPhoto.style.transform = 'scale(0.75)';
    }
    if (counter === 100) {
      fullPhoto.style.transform = 'scale(1)';
    }
  }

  scaleControlValue.value = counter + String('%');
  scaleControlBig.classList.toggle('added');
});

buttonCancel.addEventListener('click', () => {
  closeUserModal();
});

export { openUserModal };
