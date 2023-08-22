import { markupCardFavorites } from './markup-card-favorites.js';
import { oopsMarkup } from './oops-favorites.js';

export function localStorageSet(dishArrBack) {
  const oops = oopsMarkup();
  oops.classList.add('visually-hidden');  
  
  let arrLocStorAdd;
  let dishArrMarkup = [];

  if (localStorageGet() === null) {
    arrLocStorAdd = [];
  } else {
    arrLocStorAdd = localStorageGet();
  }

  for (const objBack of dishArrBack) {
    arrLocStorAdd.push(objBack);
    dishArrMarkup.push(objBack);
  }

  markupCardFavorites(dishArrMarkup);
  localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));
}

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
