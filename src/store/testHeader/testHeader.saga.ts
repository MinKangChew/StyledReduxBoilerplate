import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { getTestHeaderApi } from "services/mongoStorage.api";
import { AnyGenerator } from "utils/common/types";

import {
  getTestHeader,
  getTestHeaderFail,
  getTestHeaderSuccess,
} from "./testHeader.slice";
import { TestHeaderFilter } from "./testHeader.types";

export default function* testHeaderSaga(): AnyGenerator {
  yield takeLatest(getTestHeader, getTestHeaderSaga);
}

function* getTestHeaderSaga({
  payload,
}: PayloadAction<{ filters: TestHeaderFilter }>) {
  try {
    const { results } = yield call(getTestHeaderApi, payload.filters);

    yield put(getTestHeaderSuccess({ results }));
  } catch (error: any) {
    yield put(
      getTestHeaderFail({ error: error.reponse.data.message || error.message })
    );
  }
}
