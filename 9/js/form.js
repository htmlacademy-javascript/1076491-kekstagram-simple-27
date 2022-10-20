const imageForm = document.querySelector('.img-upload__form');
document.querySelector('.img-upload__text');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

imageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();

  evt.target.reset();
});
