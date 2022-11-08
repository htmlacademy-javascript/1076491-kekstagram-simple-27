import { getSuccess } from './success.js';
import { getError } from './error.js';
import { getErrorServer } from './error-server.js';

const URL_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const URL_POST = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(URL_GET)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      getErrorServer();
    });
};

const sendData = (onSuccess, body) => {
  fetch(URL_POST, {
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
