import { getSuccess } from './success.js';
import { getError } from './error.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
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
        // onFail('Не удалось отправить форму. Попробуйте еще раз');
      }
    })
    .catch(() => {
      getError();
      // onFail('Не удалось отправить форму. Попробуйте еще раз');
    });
};

export { getData, sendData };
