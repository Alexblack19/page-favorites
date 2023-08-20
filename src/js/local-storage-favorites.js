import { markupCardFavorites } from './markup-card-favorites.js';

export function localStorageSet(dishArrBack) {
  let arrLocStorAdd;
  let dishArrMarkup = [];

  if (localStorageGet() === null) {
    arrLocStorAdd = [];
  } else {
    arrLocStorAdd = localStorageGet();
  }

  for (const objBack of dishArrBack) {
    console.log(objBack);
    const idxObjBack = objBack._id;
    if ((arrLocStorAdd = [])) {
      arrLocStorAdd.push(objBack);
    }
    
    // arrLocStorAdd.forEach(objArr => {
    //   console.log(objArr);
    // });

    for (const objArr of arrLocStorAdd) {
      console.log('Hello');
      const idxObjArr = objArr._id;
      if (idxObjBack !== idxObjArr) {
        arrLocStorAdd.push(objBack);
        dishArrMarkup.push(objBack);
      }
    }
  }

  markupCardFavorites(dishArrBack);

  localStorage.setItem('dishLocalKey', JSON.stringify(arrLocStorAdd));
}

export function localStorageGet() {
  const dishArrLocStorGet = JSON.parse(localStorage.getItem('dishLocalKey'));
  return dishArrLocStorGet;
}
