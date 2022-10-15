import { openUserModal } from './user-modal.js';

const uploadFile = document.querySelector('#upload-file');

const preview = document.querySelector('.img-upload__overlay');

uploadFile.style.opacity = 0;

uploadFile.addEventListener('change', () => {
  updateImageDisplay();
  openUserModal();
});

function updateImageDisplay() {
  const curFiles = uploadFile.files;

  for (const file of curFiles) {
    if (validFileType(file)) {
      const image = document.createElement('img');

      image.src = URL.createObjectURL(file);

      preview.appendChild(image);
    }
  }
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
