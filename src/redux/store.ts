import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartSlice from "./features/cartSlice";
import { productsApi } from "./api/productsApi";
import filterSlice from "./features/filterSlice";
import storageSession from "redux-persist/lib/storage/session";
import { FLUSH, persistReducer,PAUSE, PERSIST, PURGE, REGISTER, persistStore, REHYDRATE } from "redux-persist";
import { ordersApi } from "./api/orderApi";


const persistConfig = {
  key: "cart",
  storage: storageSession,
  blacklist: ["filter", ordersApi.reducerPath], // Exclude filter slice from persisting
};
const rootReducer = combineReducers({
  cart: cartSlice,
  filter: filterSlice,  
  [productsApi.reducerPath]: productsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([productsApi.middleware, ordersApi.middleware]),
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);