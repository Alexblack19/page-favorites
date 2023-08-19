import {markupCardFavorites} from './markup-card-favorites.js'

export function localStorageSet(dishArr) {
  localStorage.setItem('dishArr', JSON.stringify(dishArr));
  markupCardFavorites();
}

export function localStorageGet() {
  const dishArrLocalStorage = JSON.parse(localStorage.getItem('dishArr'));
  return dishArrLocalStorage;
}
