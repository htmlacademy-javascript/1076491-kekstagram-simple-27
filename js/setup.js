import { createCards } from './data.js';

const cardListElement = document.querySelector('.pictures');
const catdTemplate = document
  .querySelector('#picture')
  .content.querySelector('a');

const cards = createCards();

const cardListFragment = document.createDocumentFragment();

cards.map(({ url, likes, comments }) => {
  const cardElement = catdTemplate.cloneNode(true);
  cardListElement.appendChild(cardElement);
  cardElement.querySelector('img').src = url;
  cardElement.querySelector('.picture__comments').textContent = comments;
  cardElement.querySelector('.picture__likes').textContent = likes;

  cardListFragment.appendChild(cardElement);
});

cardListElement.appendChild(cardListFragment);
