import { createReducer } from '@reduxjs/toolkit';
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

const planReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPlanById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loadPlanById.fulfilled, (state, action) => {
      state.loading = false;
      state.plans = action.payload;
    })
    .addCase(loadPlanById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to load plans';
    });
});

export default planReducer;
