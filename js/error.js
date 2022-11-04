const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const getError = () => {
  const errorElement = errorTemplate.cloneNode(true);

  const button = errorElement.querySelector('.error__button');

  button.addEventListener('click', () => {
    errorElement.classList.add('visually-hidden');
  });

  document.body.append(errorElement);
};

getError();

// export { getError };
