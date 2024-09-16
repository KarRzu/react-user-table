import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./components/features/redux/UserReducer.tsx";
// import {
//   loadFromLocalStorage,
//   saveToLocalStorage,
// } from "./components/features/localStorageUtils.ts";

// const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
  // preloadedState: {
  //   users: preloadedState,
  // },
});

// store.subscribe(() => {
//   saveToLocalStorage(store.getState().users);
// });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
