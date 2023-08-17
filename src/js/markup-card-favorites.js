import { fetchDishFavorites } from './fetch-dish-favorites.js';

async function objDataForMarkup(idDish) {
  try {
    const data = await fetchDishFavorites(idDish);
    const objData = {
      id: `${data._id}`,
      img: `${data.preview}`,
      title: `${data.title}`,
      description: `${data.description}`,
      rating: `${data.rating}`,
    };
    return objData;
  } catch (error) {
    console.log(error.message);
  }
}

async function markupCardFavorites(id) {
  const objData = await objDataForMarkup(id);
  console.log(objData);
  const markup = `<li>  <button>
                            <svg aria-label="heart" class="icon-star icon">
                                <use href="./img/icons.svg#icon-star"></use>
                            </svg>
                        </button>
                        <img src="" alt="${objData.title}">
                        <div>
                            <p></p>
                            <p></p>
                            <div>
                                <div>
                                    <svg aria-label="heart" class="icon-star icon">
                                        <use href="./img/icons.svg#icon-star"></use>
                                    </svg>
                                    <svg aria-label="heart" class="icon-star icon">
                                        <use href="./img/icons.svg#icon-star"></use>
                                    </svg>
                                    <svg aria-label="heart" class="icon-star icon">
                                        <use href="./img/icons.svg#icon-star"></use>
                                    </svg>
                                    <svg aria-label="heart" class="icon-star icon">
                                        <use href="./img/icons.svg#icon-star"></use>
                                    </svg>
                                    <svg aria-label="heart" class="icon-star icon">
                                        <use href="./img/icons.svg#icon-star"></use>
                                    </svg>                                    
                                </div>
                                <button></button>
                            </div>
                        </div>
                    </li>`.join('');
}

markupCardFavorites('6462a8f74c3d0ddd28897fb8');
