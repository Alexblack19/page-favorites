import { fetchDishFavorites } from './fetch-dish-favorites.js';

// async function objDataForMarkup(idDish) {
//   try {
//     const data = await fetchDishFavorites(idDish);
//     const objData = {
//       id: `${data._id}`,
//       img: `${data.preview}`,
//       title: `${data.title}`,
//       description: `${data.description}`,
//       category: `${data.category}`,
//       rating: `${data.rating}`,
//     };
//     return objData;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// async function markupCardFavorites(idDish) {
//   try {
//     const objData = await objDataForMarkup(idDish);
//     const { id, img, title, description, rating } = objData;
//     const markup = `<li>
//           <button>
//               <svg aria-label="heart" class="icon-star icon">
//                   <use href="./img/icons.svg#icon-star"></use>
//               </svg>
//           </button>
//           <img src="${img}" alt="${title}">
//           <div>
//               <p></p>
//               <p></p>
//               <div>
//                   <div>
//                       <svg aria-label="heart" class="icon-star icon">
//                           <use href="./img/icons.svg#icon-star"></use>
//                       </svg>
//                       <svg aria-label="heart" class="icon-star icon">
//                           <use href="./img/icons.svg#icon-star"></use>
//                       </svg>
//                       <svg aria-label="heart" class="icon-star icon">
//                           <use href="./img/icons.svg#icon-star"></use>
//                       </svg>
//                       <svg aria-label="heart" class="icon-star icon">
//                           <use href="./img/icons.svg#icon-star"></use>
//                       </svg>
//                       <svg aria-label="heart" class="icon-star icon">
//                           <use href="./img/icons.svg#icon-star"></use>
//                       </svg>
//                   </div>
//                   <button></button>
//               </div>
//           </div>
//       </li>`;
//     console.log(markup);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// markupCardFavorites('6462a8f74c3d0ddd28897fb8');
//=================================================

const dishIds = [
  '6462a8f74c3d0ddd28897fb8',
  '6462a8f74c3d0ddd28897fba',
  '6462a8f74c3d0ddd28897fbb',
];

const fetchUsers = async () => {
  try {
    // 1. Створюємо масив промісів
    const arrayOfPromises = dishIds.map(async dishId => {
      const response = await fetchDishFavorites(dishId);
      return response;
    });
    // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
    const dishArr = await Promise.all(arrayOfPromises);
    markupCardFavorites(dishArr);
  } catch (error) {
    console.log(error.message);
  }
};
fetchUsers();

function markupCardFavorites(dishArr) {  
  const markup = dishArr
    .map(
      ({ _id, preview, title, description, rating }) =>
        `<li>
            <button>
                <svg aria-label="heart" class="icon-star icon">
                    <use href="./img/icons.svg#icon-star"></use>
                </svg>
            </button>
            <img src="${preview}" alt="${title}">
            <div>
                <p>${title}</p>
                <p>${description}</p>
                <div>
                    <div>
                        <span>${rating}</span>
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
        </li>`
    )
    .join('');
    userList.innerHTML = markup;
}

//===============

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", async () => {
//   try {
//     const users = await fetchUsers();
//     renderUserListItems(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchUsers() {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3, 4, 5];

//   const arrayOfPromises = userIds.map(async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// function renderUserListItems(users) {
//   const markup = users
//     .map(
//       (user) => `<li class="item">
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//       </li>`
//     )
//     .join("");
//   userList.innerHTML = markup;
// }
