import './setup.js';
import './upload-file.js';
import './effect.js';

import { closeUserModal } from './user-modal.js';
import { setUserFormSubmit } from './form.js';
import { renderCardList } from './setup.js';
import { getData } from './api.js';

getData((photos) => {
  renderCardList(photos);
});

setUserFormSubmit(closeUserModal);

// const pic = document.querySelector('.pictures');
// const pic2 = pic.querySelector('a');
// console.log(pic);
// console.log(pic2);
