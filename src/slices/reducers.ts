import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadPlanById } from './actions';
import { Plan } from '../types';

interface PlanState {
  plans: Plan[];
  loading: boolean;
  error: string | null;
}

const initialState: PlanState = {
  plans: [],
  loading: false,
  error: null,
};

const planDetailSlice = createSlice({
  name: 'planDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPlanById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loadPlanById.fulfilled,
        (state, action: PayloadAction<Plan[]>) => {
          state.loading = false;
          state.plans = action.payload;
        },
      )
      .addCase(loadPlanById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default planDetailSlice.reducer;
