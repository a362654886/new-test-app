import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { testMiddleWare } from "redux/middlewares/animeMiddleware";
import testSlices from "../slices/testSlices";

/*const reducers = combineReducers({
  testSlices,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: any = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, testMiddleWare],
});
persistStore(store);*/

export const store: any = configureStore({
  reducer: {
    testSlices,
  },
  middleware: [thunk, testMiddleWare],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
