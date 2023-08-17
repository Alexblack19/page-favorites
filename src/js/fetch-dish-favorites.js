// Підключення бібліотеки
import axios from 'axios';
//========================

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
export async function fetchDishFavorites(ID) {
  const response = await axios.get(`${BASE_URL}/recipes/${ID}`);
  return response.data;
}
