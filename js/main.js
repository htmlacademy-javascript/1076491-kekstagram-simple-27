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

function getRandomLike(min = 15, max = 200) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomComment(min = 0, max = 200) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

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

// totalCards();

// console.log(totalCards);
