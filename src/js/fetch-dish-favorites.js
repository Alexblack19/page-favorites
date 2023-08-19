// Підключення бібліотеки
import axios from 'axios';
//========================
import { localStorageSet } from './local-storage-favorites.js';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
async function fetchDishFavorites(ID) {
  const response = await axios.get(`${BASE_URL}/recipes/${ID}`);
  return response.data;
}
//=================================================
//todo=============================================
const addBtn = document.querySelector('.add-btn');

const arr = [
  '6462a8f74c3d0ddd28897fb8',
  '6462a8f74c3d0ddd28897fba',
  '6462a8f74c3d0ddd28897fbb',
  '6462a8f74c3d0ddd28897fb9',
  '6462a8f74c3d0ddd28897fdf',
  '6462a8f74c3d0ddd28897fc2',
  '6462a8f74c3d0ddd28897fbf',
  '6462a8f74c3d0ddd28897fde',
  '6462a8f74c3d0ddd28897feb',
];

function onClickBtn(e) {
  console.log(e);
  const inputDataArr = [];
  const i = Math.floor(Math.random() * arr.length);
  inputDataArr.push(arr[i]);
  if (inputDataArr !== []) {
    fetchDishes(inputDataArr);
  }
  return;
}
addBtn.addEventListener('click', onClickBtn);
//todo=============================================
//=================================================
const fetchDishes = async arrID => {
  try {
    // 1. Створюємо масив промісів
    const arrayOfPromises = arrID.map(async dishId => {
      const response = await fetchDishFavorites(dishId);
      return response;
    });
    // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
    const dishArr = await Promise.all(arrayOfPromises);
    localStorageSet(dishArr);
    return dishArr;
  } catch (error) {
    console.log(error.message);
  }
};
