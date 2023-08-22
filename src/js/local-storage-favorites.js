import { markupCardFavorites } from './markup-card-favorites.js';
import { oopsDivEl } from './oops-favorites.js';

export function localStorageSet(dishArrBack) { 
  
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

  localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd)); 

  if (!localStorageGet().length) {
    oopsDivEl.classList.remove('visually-hidden');
  } else {
    markupCardFavorites(dishArrMarkup);
    oopsDivEl.classList.add('visually-hidden');
  }  
}

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
