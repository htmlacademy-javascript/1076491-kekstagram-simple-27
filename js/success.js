import { isEscapeKey } from './util.js';

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');

const getSuccess = () => {
  const successElement = successTemplate.cloneNode(true);

  const button = successElement.querySelector('.success__button');

  button.addEventListener('click', () => {
    successElement.classList.add('visually-hidden');
  });

  successElement.addEventListener('click', () => {
    successElement.classList.add('visually-hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successElement.classList.add('visually-hidden');
    }
  });

  document.body.append(successElement);
};

export { getSuccess };
