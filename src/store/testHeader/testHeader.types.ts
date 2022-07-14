import { Nullable, StateMeta } from "utils/common/types";
import { TEST_DATA_STATUS } from "./testHeader.enum";

export type User = {
  name: Nullable<string>;
  email: Nullable<string>;
};

export type PhysicalQuantity = {
  name: Nullable<string>;
  uom: Nullable<string>;
  prefix: Nullable<string>;
};

export type Results = {
  type: Nullable<string>;
  name: Nullable<string>;
  sequence: Nullable<string>;
  description: Nullable<string>;
  value: Nullable<string>;
  actionRef: Nullable<string>;
  physicalQuantity: Nullable<PhysicalQuantity>;
};
export type TestHeaderItems = {
  _id: Nullable<string>;
  testId: Nullable<string>;
  testSiteLocation: Nullable<string>;
  testMethodId: Nullable<string>;
  testMethodOption: Nullable<string>;
  status: Nullable<string>;
  testDataStatus: Nullable<TEST_DATA_STATUS>;
  uploader: Nullable<User>;
  requester: Nullable<User>;
  reviewer: Nullable<User[]>;
  uutId: Nullable<string>;
  project: Nullable<string>;
  buildMilestone: Nullable<string>;
  results: Nullable<Results[]>;
  requestId: Nullable<string>;
  testType: Nullable<string>;
  REQs: Nullable<string[]>;
  PRs: Nullable<string[]>;
  createdAt: Nullable<Date>;
  updatedAt: Nullable<Date>;
};

export type Filter<T> = {
  name: string;
  options: T[];
  value: T | T[];
};

export type TestHeaderFilter = {
  project: Filter<string>;
  buildMilestone: Filter<string>;
  requestId: Filter<string>;
  testId: Filter<string>;
  status: Filter<string>;
};

export type TestHeader = {
  list: TestHeaderItems[];
  filter: TestHeaderFilter;
  meta: StateMeta;
};
