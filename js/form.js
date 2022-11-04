import { sendData } from './api.js';
import { getSuccess } from './success.js';
// import { getError } from './error.js';

// const submitButton = document.querySelector('.img-upload__submit');
const imageForm = document.querySelector('.img-upload__form');
document.querySelector('.img-upload__text');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

// const blockSubmitButton = () => {
//   submitButton.disabled = true;
// };

// const unblockSubmitButton = () => {
//   submitButton.disabled = false;
// };

const setUserFormSubmit = (onSuccess) => {
  imageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // pristine.validate();

    const isvalid = pristine.validate();

    getSuccess();

    if (isvalid) {
      // blockSubmitButton();
      // getError();
      sendData(() => {
        onSuccess();
        // unblockSubmitButton();
      }, new FormData(evt.target));
    }
    evt.target.reset();
  });
};

export { setUserFormSubmit };
