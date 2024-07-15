import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
}

const initialState: PlanState = {
  plans: [],
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlans(state, action: PayloadAction<Plan[]>) {
      state.plans = action.payload;
    },
  },
});

export const { setPlans } = planSlice.actions;
export default planSlice.reducer;
