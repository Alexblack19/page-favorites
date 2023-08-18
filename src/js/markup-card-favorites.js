const dishListEl = document.querySelector('.favorites-cards');

export function markupCardFavorites(dishArr) {
    console.log(dishArr);
  const markup = dishArr
    .map(
      ({ _id, preview, thumb, title, description, rating }) =>
        `<li class="fav-card item">
            <button class="fav-card-heart-btn">
                <svg aria-label="heart" class="fav-card-heart icon">
                    <use href="./img/icons.svg#icon-heart"></use>
                </svg>
            </button>
            <img class="fav-card-img" src="${thumb}" alt="${title}">
            <div сlass-"fav-card-info">
                <p class="fav-card-title">${title}</p>
                <p class="fav-card-desc">${description}</p>
                <div>
                    <div>
                        <span class="fav-card-rating">${rating}</span>
                        <svg aria-label="star" class="fav-card-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="fav-card-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="fav-card-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="fav-card-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                        <svg aria-label="star" class="fav-card-star icon">
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>
                    </div>
                    <button class="fav-card-see-btn">See recipe</button>
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