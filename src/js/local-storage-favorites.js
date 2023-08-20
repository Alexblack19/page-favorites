import { markupCardFavorites } from './markup-card-favorites.js';

export function localStorageSet(dishArrBack) {
  let arrLocStorAdd;
  let dishArrMarkup = dishArrBack;
  
  if (localStorageGet() === null) {
    arrLocStorAdd = [];
  } else {
    arrLocStorAdd = localStorageGet();
  }

  for (const obj of dishArrBack) {
    if (arrLocStorAdd.includes(obj)) {
      const idxObj = dishArrMarkup.indexOf(obj);
      dishArrMarkup.splice(idxObj, 1);      
    } else {
      arrLocStorAdd.push(obj);
    }
  }
  console.log('kjfjgh',dishArrMarkup);


  console.log(dishArrBack);
  markupCardFavorites(dishArrMarkup);
  localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));
}

//Масив об'єктів модуль 3 заняття 5

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
