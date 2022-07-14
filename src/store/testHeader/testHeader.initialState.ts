import { TestHeader } from "./testHeader.types";

const commonFields = {
  options: [],
  value: "",
};

const filter = {
  project: {
    name: "project",
    ...commonFields,
  },
  buildMilestone: {
    name: "buildMilestone",
    ...commonFields,
  },
  requestId: {
    name: "requestId",
    ...commonFields,
  },
  testId: {
    name: "testId",
    ...commonFields,
  },
  status: {
    name: "testDataStatus",
    ...commonFields,
  },
};

const initialState: TestHeader = {
  list: [],
  filter: filter,
  meta: {
    error: null,
    isLoading: false,
  },
};

export default initialState;
