import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TipCalculatorHistory } from "type";

export interface TipCalculatorState {
  value: TipCalculatorHistory[];
}

const initialState: TipCalculatorState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTipCalculator: (state, action: PayloadAction<TipCalculatorHistory>) => {
      state.value.push(action.payload);

      return state;
    },
    removeTipCalculator: (state, action: PayloadAction<{ index: number }>) => {
      //state.value.slice(action.payload.index, 1);
      const newArray: any[] = [];
      state.value.forEach((e, index) => {
        if (index !== action.payload.index) {
          newArray.push(e);
        }
      });
      state.value = newArray;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTipCalculator, removeTipCalculator } = counterSlice.actions;

export default counterSlice.reducer;
