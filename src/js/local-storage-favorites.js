import { markupCardFavorites } from './markup-card-favorites.js';

export function localStorageSet(dishArrBack) {
  let arrLocStorAdd;
  if (localStorageGet() === null) {
    arrLocStorAdd = [];
  } else {
    arrLocStorAdd = localStorageGet();
  }

  for (const obj of dishArrBack) {
    if (arrLocStorAdd.includes(obj)) {
      return;
    } else {
      arrLocStorAdd.push(obj);
      markupCardFavorites(dishArrBack);
    }
  }
  localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));  
}

//Масив об'єктів модуль 3 заняття 5

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
