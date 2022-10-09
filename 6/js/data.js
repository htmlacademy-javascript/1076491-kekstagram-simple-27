import {
  getRandomLike,
  getRandomComment,
  getRandomArrayElement,
} from './util.js';

const PHOTOS_COUNT = 25;
const ID_PHOTOS = Array.from({ length: PHOTOS_COUNT }, (_, i) => i + 1);
const URL_PHOTOS = Array.from(
  { length: PHOTOS_COUNT },
  (_, i) => `photos/${i + 1}.jpg`
);

const DESCRIPTIONS = [
  'Получилась фотография лучше',
  'Всё отлично!',
  'Придумайте название самостоятельно',
  'Всё неплохо',
  'Такой неудачный момент!',
];

const createCard = (i) => ({
  id: ID_PHOTOS[i],
  url: URL_PHOTOS[i],
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomLike(),
  comments: getRandomComment(),
});

const totalCards = Array.from({ length: PHOTOS_COUNT }, (_, i) =>
  createCard(i)
);

export { totalCards };
