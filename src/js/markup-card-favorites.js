import { fetchDishFavorites } from './fetch-dish-favorites.js';

async function objDataForMarkup(idDish) {
  try {
    const data = await fetchDishFavorites(idDish);
    const objData = {
      id: `${data._id}`,
      img: `${data.preview}`,
      title: `${data.title}`,
      description: `${data.description}`,
      category: `${data.category}`,
      rating: `${data.rating}`,
    };
    return objData;
  } catch (error) {
    console.log(error.message);
  }
}

async function markupCardFavorites(idArr) {
  try {
    const markup = idArr.map(async id => {
      const objData = await objDataForMarkup(id);
      console.log(objData);
    });
  } catch (error) {
    console.log(error.message);
  }
}

//   const objData = await objDataForMarkup(id);
//   console.log(objData);
//   const markup = `<li>  <button>
//                             <svg aria-label="heart" class="icon-star icon">
//                                 <use href="./img/icons.svg#icon-star"></use>
//                             </svg>
//                         </button>
//                         <img src="" alt="${objData.title}">
//                         <div>
//                             <p></p>
//                             <p></p>
//                             <div>
//                                 <div>
//                                     <svg aria-label="heart" class="icon-star icon">
//                                         <use href="./img/icons.svg#icon-star"></use>
//                                     </svg>
//                                     <svg aria-label="heart" class="icon-star icon">
//                                         <use href="./img/icons.svg#icon-star"></use>
//                                     </svg>
//                                     <svg aria-label="heart" class="icon-star icon">
//                                         <use href="./img/icons.svg#icon-star"></use>
//                                     </svg>
//                                     <svg aria-label="heart" class="icon-star icon">
//                                         <use href="./img/icons.svg#icon-star"></use>
//                                     </svg>
//                                     <svg aria-label="heart" class="icon-star icon">
//                                         <use href="./img/icons.svg#icon-star"></use>
//                                     </svg>
//                                 </div>
//                                 <button></button>
//                             </div>
//                         </div>
//                     </li>`;
// }

markupCardFavorites(['6462a8f74c3d0ddd28897fb8', '6462a8f74c3d0ddd28897fba']);

// export function createGalleryMarkup(photoArr) {
//     return photoArr
//       .map(
//         ({
//           webformatURL,
//           largeImageURL,
//           tags,
//           likes,
//           views,
//           comments,
//           downloads,
//         }) => `<div class="photo-card">
//                    <a class="card-link" href="${largeImageURL}">
//                       <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//                       <div class="info">
//                           <p class="info-item">
//                               <b>Likes ${likes}</b>
//                           </p>
//                           <p class="info-item">
//                               <b>Views ${views}</b>
//                           </p>
//                           <p class="info-item">
//                               <b>Comments ${comments}</b>
//                           </p>
//                           <p class="info-item">
//                               <b>Downloads ${downloads}</b>
//                           </p>
//                       </div>
//                    </a>
//                  </div>`
//       )
//       .join('');
//   }
