import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Plan } from '../types';

export const loadPlanById = createAsyncThunk(
  'plans/loadPlanById',
  async (p_id: string) => {
    const response = await axios.get<Plan[]>(
      `http://localhost:8080/api/details/${p_id}`,
    );
    return response.data;
  },
);
