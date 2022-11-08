import { getSuccess } from './success.js';
import { getError } from './error.js';
import { getErrorServer } from './error-server.js';
import { URL_GET, URL_POST } from './util.js';

const getData = (onSuccess) => {
  // fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
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
  // fetch('https://27.javascript.pages.academy/kekstagram-simple', {
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
