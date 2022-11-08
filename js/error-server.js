import { isEscapeKey } from './util.js';

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const getErrorServer = () => {
  const errorElement = errorTemplate.cloneNode(true);

  const errorTitle = errorElement.querySelector('.error__title');
  errorTitle.textContent = 'Произошла ошибка запроса';

  const button = errorElement.querySelector('.error__button');
  button.textContent = 'Попробуйте еще раз';

  button.addEventListener('click', () => {
    errorElement.classList.add('visually-hidden');
  });

  errorElement.addEventListener('click', () => {
    errorElement.classList.add('visually-hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorElement.classList.add('visually-hidden');
    }
  });

  document.body.append(errorElement);
};

export { getErrorServer };
