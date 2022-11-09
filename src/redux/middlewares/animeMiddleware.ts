import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export type actionBody = ActionCreatorWithPayload<
  number,
  "counter/incrementByAmount"
>;

export type nextAction = (action: actionBody) => void;

export const testMiddleWare =
  (store: RootState) =>
  (next: nextAction) =>
  async (action: actionBody): Promise<void> => {
    next(action);
    console.log(action);
  };
