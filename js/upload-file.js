import { openUserModal } from './user-modal.js';

const uploadFile = document.querySelector('#upload-file');

const preview = document.querySelector('.img-upload__overlay');

uploadFile.style.opacity = 0;

const fullPhoto = document.querySelector('img');

const smallPhoto = document.querySelectorAll('.effects__preview');

uploadFile.addEventListener('change', () => {
  updateImageDisplay();

  // smallPhoto.style.backgroundImage = 'url("../img/upload-button-bg.png")';

  openUserModal();
});

// function small() {
//   smallPhoto.forEach((elem) => {
//     elem.style.backgroundImage = './img/sprite.png';
//   });

//   return smallPhoto;
// }

function updateImageDisplay() {
  const curFiles = uploadFile.files;

  for (const file of curFiles) {
    if (validFileType(file)) {
      const image = document.createElement('img');

      image.src = URL.createObjectURL(file);

      // preview.appendChild(image);

      fullPhoto.src = URL.createObjectURL(file);
    }
  }

  // return fullPhoto;
}

const fileTypes = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon',
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
