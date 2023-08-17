// Підключення бібліотеки
import axios from 'axios';
//========================
import {markupCardFavorites} from './markup-card-favorites.js'

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
async function fetchDishFavorites(ID) {
  const response = await axios.get(`${BASE_URL}/recipes/${ID}`);
  return response.data;
}

const dishIds = [
  '6462a8f74c3d0ddd28897fb8',
  '6462a8f74c3d0ddd28897fba',
  '6462a8f74c3d0ddd28897fbb',
];

const fetchDishes = async () => {
  try {
    // 1. Створюємо масив промісів
    const arrayOfPromises = dishIds.map(async dishId => {
      const response = await fetchDishFavorites(dishId);
      return response;
    });
    // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
    const dishArr = await Promise.all(arrayOfPromises);
    markupCardFavorites(dishArr);
    return dishArr;
  } catch (error) {
    console.log(error.message);
  }
};
fetchDishes();
