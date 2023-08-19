import { markupCardFavorites } from './markup-card-favorites.js';

export function localStorageSet(dishArrBack) {
  const arrLocStorAdd = localStorageGet();
  dishArrBack.forEach(element => {
    arrLocStorAdd.push(element);
  });
  localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));
  console.log(arrLocStorAdd);
  markupCardFavorites(dishArrBack);
}

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
