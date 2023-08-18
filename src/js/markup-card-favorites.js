const dishListEl = document.querySelector('.favorites-cards');

export function markupCardFavorites(dishArr) {
  console.log(dishArr);  
  const markup = dishArr
    .map(
      ({ _id, preview, thumb, title, description, rating }) =>
        `<li class="fav-card item">
            <button class="fav-card-heart-btn">
                <svg aria-label="heart" class="fav-card-heart icon" viewBox="0 0 32 32">
                <path d="M27.787 6.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559-1.917 0.19-2.807 0.559c-0.89 0.369-1.699 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.559-1.844 0.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38v0z"></path>
                </svg>
            </button>
            <img class="fav-card-img" src="${thumb}" alt="${title}">            
            <h3 class="fav-card-title">${title}</h3>
            <p class="fav-card-desc">${description}</p>
            <div сlass="fav-card-info-wrap">
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
        </li>`
    )
    .join('');
  dishListEl.insertAdjacentHTML('beforeend', markup);
  localStorageSet(dishArr);
}

function localStorageSet(dishArr) {
  console.log(dishArr);
  localStorage.setItem('dishArr', `${dishArr}`);
}

function localStorageGet() {
  const local = localStorage.getItem('dishArr');
  console.log(local);
}
localStorageGet();
