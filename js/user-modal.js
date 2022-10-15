import { isEscapeKey } from './util.js';
import { idPhotos } from './data.js';

const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');

const picture = document.querySelectorAll('.picture');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

for (let i = 0; i < idPhotos.length; i++) {
  picture[i].addEventListener('click', () => {
    openUserModal();
  });
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

buttonCancel.addEventListener('click', () => {
  closeUserModal();
});

export { openUserModal };
