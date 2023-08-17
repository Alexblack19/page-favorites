const dishListEl = document.querySelector('.favorites-cards');

export function markupCardFavorites(dishArr) {
    console.log(dishArr);
  const markup = dishArr
    .map(
      ({ _id, preview, title, description, rating }) =>
        `<li>
            <button>
                <svg aria-label="heart" class="icon-heart icon">
                    <use href="./img/icons.svg#icon-heart"></use>
                </svg>
            </button>
            <img src="${preview}" alt="${title}">
            <div>
                <p>${title}</p>
                <p>${description}</p>
                <div>
                    <div>
                        <span>${rating}</span>
                        <svg aria-label="star" class="icon-star icon" width=18 height=18>
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="icon-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="icon-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="icon-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="icon-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                    </div>
                    <button></button>
                </div>
            </div>
        </li>`
    )
    .join('');
  dishListEl.insertAdjacentHTML('beforeend', markup);
  localStorageSet(dishArr);
}


function localStorageSet(dishArr){
    console.log(dishArr);
    localStorage.setItem("dishArr", `${dishArr}`);
}

function localStorageGet(){
    const local = localStorage.getItem("dishArr");
    console.log(local);
}
localStorageGet()