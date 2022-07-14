import { configureStore } from "@reduxjs/toolkit";
import sagaMiddleware, { rootSaga } from "./rootSaga";
import testHeader from "./testHeader/testHeader.slice";

export const store = configureStore({
  reducer: { testHeader }, // add reducer
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
