import { RootState } from "store";

export const selectTestHeaderMeta = (state: RootState) => state.testHeader.meta;

export const selectTestHeaderFilter = (state: RootState) =>
  state.testHeader.filter;

export const selectTestHeaderList = (state: RootState) => state.testHeader.list;
