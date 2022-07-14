import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./testHeader.initialState";
import { TestHeaderFilter, TestHeaderItems } from "./testHeader.types";

export const testHeaderSlice = createSlice({
  name: "testHeader",
  initialState,
  reducers: {
    getTestHeader: (
      state,
      { payload }: PayloadAction<{ filters?: TestHeaderFilter }>
    ) => {
      state.meta.error = null;
      state.meta.isLoading = false;
    },
    getTestHeaderSuccess: (
      state,
      { payload }: PayloadAction<{ results: TestHeaderItems[] }>
    ) => {
      state.meta.error = null;
      state.meta.isLoading = false;
      state.list = payload.results;
    },
    getTestHeaderFail: (state, { payload }: PayloadAction<{ error: any }>) => {
      state.meta.error = payload.error;
      state.meta.isLoading = false;
    },
    setProjectFilter: (
      state,
      { payload }: PayloadAction<{ project: string }>
    ) => {
      state.filter.project.value = payload.project;
    },
    setBuildMilestoneFilter: (
      state,
      { payload }: PayloadAction<{ buildMilestone: string }>
    ) => {
      state.filter.buildMilestone.value = payload.buildMilestone;
    },
    setRequestIdFilter: (
      state,
      { payload }: PayloadAction<{ requestId: string }>
    ) => {
      state.filter.requestId.value = payload.requestId;
    },
    setTestIdFilter: (
      state,
      { payload }: PayloadAction<{ testId: string }>
    ) => {
      state.filter.testId.value = payload.testId;
    },
    setStatusFilter: (
      state,
      { payload }: PayloadAction<{ status: string }>
    ) => {
      state.filter.status.value = payload.status;
    },
  },
});

export const {
  getTestHeader,
  getTestHeaderSuccess,
  getTestHeaderFail,
  setProjectFilter,
  setBuildMilestoneFilter,
  setRequestIdFilter,
  setStatusFilter,
  setTestIdFilter,
} = testHeaderSlice.actions;

export default testHeaderSlice.reducer;
