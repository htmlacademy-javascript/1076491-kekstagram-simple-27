import { isEscapeKey } from './util.js';
import { urlPhotos } from './data.js';

const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');

const picture = document.querySelectorAll('.picture');

const fullPhoto = document.querySelector('img');
fullPhoto.classList.add('full-photo');

const scaleControlSmall = document.querySelector('.scale__control--smaller');
const scaleControlBig = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

let counter = 100;

const smallPhoto = document.querySelectorAll('.effects__preview');
const effectsPreviewNone = document.querySelector('.effects__preview--none');
const effectsPreviewChrome = document.querySelector(
  '.effects__preview--chrome'
);
const effectsPreviewSepia = document.querySelector('.effects__preview--sepia');
const effectsPreviewMarvin = document.querySelector(
  '.effects__preview--marvin'
);
const effectsPreviewPhobos = document.querySelector(
  '.effects__preview--phobos'
);
const effectsPreviewHeat = document.querySelector('.effects__preview--heat');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', () => {
    fullPhoto.src = photo;

    smallPhoto.forEach((elem) => {
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

effectsPreviewNone.addEventListener('click', () => {
  fullPhoto.classList.remove(
    'effects__preview--chrome',
    'effects__preview--sepia',
    'effects__preview--marvin',
    'effects__preview--phobos',
    'effects__preview--heat'
  );
});

effectsPreviewChrome.addEventListener('click', () => {
  fullPhoto.classList.add('effects__preview--chrome');
  fullPhoto.classList.remove(
    'effects__preview--none',
    'effects__preview--sepia',
    'effects__preview--marvin',
    'effects__preview--phobos',
    'effects__preview--heat'
  );
});

effectsPreviewSepia.addEventListener('click', () => {
  fullPhoto.classList.add('effects__preview--sepia');
  fullPhoto.classList.remove(
    'effects__preview--chrome',
    'effects__preview--none',
    'effects__preview--marvin',
    'effects__preview--phobos',
    'effects__preview--heat'
  );
});

effectsPreviewMarvin.addEventListener('click', () => {
  fullPhoto.classList.add('effects__preview--marvin');
  fullPhoto.classList.remove(
    'effects__preview--chrome',
    'effects__preview--sepia',
    'effects__preview--none',
    'effects__preview--phobos',
    'effects__preview--heat'
  );
});

effectsPreviewPhobos.addEventListener('click', () => {
  fullPhoto.classList.add('effects__preview--phobos');
  fullPhoto.classList.remove(
    'effects__preview--chrome',
    'effects__preview--sepia',
    'effects__preview--marvin',
    'effects__preview--none',
    'effects__preview--heat'
  );
});

effectsPreviewHeat.addEventListener('click', () => {
  fullPhoto.classList.add('effects__preview--heat');
  fullPhoto.classList.remove(
    'effects__preview--chrome',
    'effects__preview--sepia',
    'effects__preview--marvin',
    'effects__preview--phobos',
    'effects__preview--none'
  );
});

function closeUserModal() {
  imageUpload.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
}

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
