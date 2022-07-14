import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";
import testHeaderSaga from "./testHeader/testHeader.saga";

export function* rootSaga() {
  yield all([testHeaderSaga()]); // add more redux saga in the array !
}

export default createSagaMiddleware();
