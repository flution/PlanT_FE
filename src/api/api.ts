import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const fetchPlans = async (p_id: string) => {
  try {
    const response = await api.get(`/detail/${p_id}`);
    console.log('Fetched detail from API:', response.data); // API 호출 로그 추가
    return response.data;
  } catch (error) {
    console.error('Error fetching detail:', error);
    throw error;
  }
};

export default api;
