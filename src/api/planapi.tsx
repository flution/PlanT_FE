import axios from 'axios';
import { Plan } from '../slices/planSlice';

const API_URL = 'http://localhost:8080/api/plans';

export const fetchPlans = async (): Promise<Plan[]> => {
  const response = await axios.get(API_URL, { withCredentials: true });
  return response.data;
};

export const createPlan = async (plan: Plan): Promise<void> => {
  await axios.post(API_URL, plan, { withCredentials: true });
};

export const fetchPlanById = async (p_id: string): Promise<Plan[]> => {
  const response = await axios.get(`${API_URL}/${p_id}`, {
    withCredentials: true,
  });
  return response.data;
};
