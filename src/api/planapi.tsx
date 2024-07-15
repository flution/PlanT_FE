import axios from 'axios';
import { Plan } from '../features/plan/planSlice';

export const fetchPlans = async (): Promise<Plan[]> => {
  const response = await axios.get<Plan[]>('/api/plans');
  return response.data;
};
