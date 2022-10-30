import './setup.js';
// import './user-modal.js';
// import './form.js';
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
