import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlans } from '../api/api';

export const loadPlanById = createAsyncThunk(
  'plans/loadById',
  async (p_id: string) => {
    const response = await fetchPlans(p_id);
    return response;
  },
);
