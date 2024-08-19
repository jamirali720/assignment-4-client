import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { router } from "./routes/router";
import { Toaster } from "sonner";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
