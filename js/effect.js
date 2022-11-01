const fullPhoto = document.querySelector('img');
const smallPhoto = document.querySelectorAll('.effects__preview');

const effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

for (let i = 0; i < smallPhoto.length; i++) {
  smallPhoto[i].addEventListener('click', () => {
    fullPhoto.classList = effects[i];
  });
}
