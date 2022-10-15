import {
  getRandomLike,
  getRandomComment,
  getRandomArrayElement,
} from './util.js';

const PHOTOS_COUNT = 25;
const idPhotos = Array.from({ length: PHOTOS_COUNT }, (_, i) => i + 1);
const urlPhotos = Array.from(
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

const createCard = (index) => ({
  id: idPhotos[index],
  url: urlPhotos[index],
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomLike(),
  comments: getRandomComment(),
});

const createCards = () =>
  Array.from({ length: PHOTOS_COUNT }, (_, index) => createCard(index));

export { createCards, idPhotos };
