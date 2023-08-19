import { markupCardFavorites } from './markup-card-favorites.js';

export function localStorageSet(dishArrBack) {
  if (dishArrBack !== [] && dishArrBack !== null) {
    const arrLocStorAdd = localStorageGet();
    dishArrBack.forEach(element => {
      arrLocStorAdd.push(element);
    });
    localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));
  } else {
    localStorage.setItem('dishLocalKey', JSON.stringify(dishArrBack));
  }

  if (dishArrBack !== []) {
    markupCardFavorites(dishArrBack);
  }
}

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
