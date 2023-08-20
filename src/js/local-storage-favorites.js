import { markupCardFavorites } from './markup-card-favorites.js';

export function localStorageSet(dishArrBack) {
  let arrLocStorAdd;
  if(localStorageGet() === null){
    arrLocStorAdd = [];
  } else {arrLocStorAdd = localStorageGet();}  
  
  if (!dishArrBack.length) {
    return;
  }
  dishArrBack.forEach(obj => {
    arrLocStorAdd.push(obj);
  });
  localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));
  markupCardFavorites(dishArrBack);
}

//Масив об'єктів модуль 3 заняття 5

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
