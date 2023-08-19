import { markupCardFavorites } from './markup-card-favorites.js';

export function localStorageSet(dishArrBack) {
  if (dishArrBack.length) {
    const arrLocStorAdd = localStorageGet();
    dishArrBack.forEach(obj => {
      arrLocStorAdd.push(obj);
    });
    localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));
  } else {
    localStorage.setItem('dishLocalKey', JSON.stringify(dishArrBack));
  }

  if (dishArrBack.length) {
    markupCardFavorites(dishArrBack);
  }
}

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
