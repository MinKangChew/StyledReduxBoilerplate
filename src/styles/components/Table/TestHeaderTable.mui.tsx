import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectTestHeaderList } from "store/testHeader/testHeader.selector";
import { User } from "store/testHeader/testHeader.types";

const columnWidth = {
  flex: 1,
  minWidth: 200,
};

const columns: GridColDef[] = [
  {
    field: "_id",
    headerName: "ID",
    ...columnWidth,
    renderCell: (params: GridRenderCellParams<string>) => (
      <a
        href={`http://localhost:3001/${params.value}`}
        target={"_blank"}
        rel="noreferrer"
      >
        {params.value}
      </a>
    ),
  },
  { field: "requestId", headerName: "Test Request", ...columnWidth },
  { field: "testId", headerName: "Test ID", ...columnWidth },
  { field: "testDataStatus", headerName: "Status", ...columnWidth },
  {
    field: "testSiteLocation",
    headerName: "Test Site Location",
    ...columnWidth,
  },
  { field: "project", headerName: "Project", ...columnWidth },
  { field: "buildMilestone", headerName: "Build Milestone", ...columnWidth },
  {
    field: "requester",
    headerName: "Requester",
    ...columnWidth,
    valueGetter: (params: GridValueGetterParams<User>) => {
      return params.value.name;
    },
  },
];

const TestHeaderTable = (): ReactElement => {
  const testHeaderList = useSelector(selectTestHeaderList);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        getRowId={(row: any) => row._id}
        rows={testHeaderList}
        columns={columns}
        pageSize={12}
      />
    </div>
  );
};

export default TestHeaderTable;
