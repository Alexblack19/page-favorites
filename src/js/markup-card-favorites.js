const dishListEl = document.querySelector('.favorites-cards');

export function markupCardFavorites(dishArr) {
  console.log(dishArr);  
  const markup = dishArr
    .map(
      ({ _id, preview, thumb, title, description, rating }) =>
        `<li class="fav-card item">
            <button class="fav-card-heart-btn">
                <svg aria-label="heart" class="fav-card-heart icon">
                <path d="M15.992 6.848c-2.666-3.117-7.111-3.955-10.451-1.101s-3.81 7.625-1.187 11c2.181 2.806 8.781 8.725 10.944 10.641 0.242 0.214 0.363 0.321 0.504 0.364 0.123 0.037 0.258 0.037 0.381 0 0.141-0.042 0.262-0.149 0.504-0.364 2.163-1.916 8.763-7.834 10.944-10.641 2.623-3.375 2.21-8.177-1.187-11.001s-7.785-2.015-10.451 1.101z"></path>
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
