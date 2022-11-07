import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';

const body = document.querySelector('body');
const imageUpload = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

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

  resetEffects();

  document.removeEventListener('keydown', onModalEscKeydown);
}

buttonCancel.addEventListener('click', () => {
  closeUserModal();
});

export { openUserModal, closeUserModal };
