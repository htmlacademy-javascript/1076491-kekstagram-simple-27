import { createCards } from './data.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('a');

const pictures = createCards();

const pictureListFragment = document.createDocumentFragment();

pictures.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureListElement.appendChild(pictureElement);
  pictureElement.querySelector('img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  pictureListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(pictureListFragment);
