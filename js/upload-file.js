import { openUserModal } from './user-modal.js';

const uploadFile = document.querySelector('#upload-file');
uploadFile.style.opacity = 0;

const imgUploadFile = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

uploadFile.addEventListener('change', () => {
  updateImageDisplay();
  updateImageEffect();

  openUserModal();
});

function updateImageDisplay() {
  const curFiles = uploadFile.files;

  for (const file of curFiles) {
    if (validFileType(file)) {
      const image = document.createElement('img');

      image.src = URL.createObjectURL(file);

      imgUploadFile.src = image.src;
    }
  }
}

function updateImageEffect() {
  effectsPreview.forEach((elem) => {
    elem.style.backgroundImage = `url(${imgUploadFile.src})`;
  });
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
