const cardListElement = document.querySelector('.pictures');
const cardTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const renderCardList = (cards) => {
  const cardListFragment = document.createDocumentFragment();

  cards.map(({ url, likes, comments }) => {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('img').src = url;
    cardElement.querySelector('.picture__comments').textContent = comments;
    cardElement.querySelector('.picture__likes').textContent = likes;

    cardListFragment.appendChild(cardElement);
  });

  cardListElement.appendChild(cardListFragment);
};

export { renderCardList };
