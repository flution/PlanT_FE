import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlans, fetchPlanById } from '../api/planapi';

export interface Plan {
  date: string;
  startTime: string;
  endTime: string;
  schedule: string;
  place: string;
  cost: string;
  content: string;
}

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

export const loadPlans = createAsyncThunk('plan/loadPlans', async () => {
  const plans = await fetchPlans();
  return plans;
});

export const loadPlanById = createAsyncThunk(
  'plan/loadPlanById',
  async (p_id: string) => {
    const plans = await fetchPlanById(p_id);
    return plans;
  },
);

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlans(state, action: PayloadAction<Plan[]>) {
      state.plans = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPlans.fulfilled, (state, action: PayloadAction<Plan[]>) => {
        state.plans = action.payload;
        state.loading = false;
      })
      .addCase(loadPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load plans';
      })
      .addCase(loadPlanById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loadPlanById.fulfilled,
        (state, action: PayloadAction<Plan[]>) => {
          state.plans = action.payload;
          state.loading = false;
        },
      )
      .addCase(loadPlanById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load plan';
      });
  },
});

export const { setPlans } = planSlice.actions;

export default planSlice.reducer;
