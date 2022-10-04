const idPhoto = [];
const urlPhoto = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];
const description = [
  'получилась фотография лучше',
  'Всё отлично!',
  'придумайте название самостоятельно',
  'В целом всё неплохо',
  'такой неудачный момент!',
];
const likes = [];
const comments = [];
const cardCount = 25;

for (let i = 1; i <= 25; i++) {
  idPhoto.push(i);
}

for (let i = 15; i <= 200; i++) {
  likes.push(i);
}

for (let i = 0; i <= 200; i++) {
  comments.push(i);
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

const createCard = () => ({
  id: getRandomArrayElement(idPhoto),
  url: getRandomArrayElement(urlPhoto),
  description: getRandomArrayElement(description),
  likes: getRandomArrayElement(likes),
  comments: getRandomArrayElement(comments),
});

const totalCards = Array.from({ length: cardCount }, createCard);

totalCards();

// console.log(totalCards);
