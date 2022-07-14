import axios, { AxiosRequestConfig } from "axios";
import { AnyObject } from "immer/dist/internal";
import { TestHeaderFilter } from "store/testHeader/testHeader.types";

const MONGO_DATA_STORAGE_API_URL =
  "https://mongo-data-storage.uksouth.cloudapp.azure.com";

const axiosConfig: AxiosRequestConfig = {
  baseURL: MONGO_DATA_STORAGE_API_URL,
};

const getUrlQuery = (filters: TestHeaderFilter): string => {
  const queryObj: AnyObject = {};

  Object.values(filters).forEach(
    ({ name, value }) => value && (queryObj[name] = value)
  );

  const queryStr = Object.keys(queryObj)
    .map((key) =>
      Array.isArray(queryObj[key])
        ? queryObj[key].map((itm: string) => `${key}=${itm}`).join("&")
        : `${key}=${queryObj[key]}`
    )
    .join("&");

  return queryStr;
};

export const getTestHeaderApi = async (filters: TestHeaderFilter) => {
  const queryStr = getUrlQuery(filters);
  const res = await axios.get(`/api/test_results?${queryStr}`, {
    ...axiosConfig,
    headers: { "Admin-Token": "wdjslffskjfsgk" },
  });
  const { results } = res.data;
  return { results };
};
