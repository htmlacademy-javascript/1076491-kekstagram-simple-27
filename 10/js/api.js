import { getSuccess } from './success.js';
import { getError } from './error.js';
import { getErrorServer } from './error-server.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      getErrorServer();
    });
};

const sendData = (onSuccess, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        getSuccess();
      } else {
        getError();
      }
    })
    .catch(() => {
      getError();
    });
};

export { getData, sendData };
