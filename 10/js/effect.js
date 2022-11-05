const imgUploadFile = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

for (let i = 0; i < effectsPreview.length; i++) {
  effectsPreview[i].addEventListener('click', () => {
    imgUploadFile.classList = effects[i];
  });
}

function resetEffect() {
  imgUploadFile.classList = effects[0];
}

export { resetEffect };
