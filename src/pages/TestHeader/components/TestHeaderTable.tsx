import React, { ReactElement, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectTestHeaderList } from "store/testHeader/testHeader.selector";

import Table from "styles/components/Table/Table";

const TestHeaderTable = (): ReactElement => {
  const data = useSelector(selectTestHeaderList);
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Test Request",
        accessor: "requestId",
      },
      {
        Header: "Test ID",
        accessor: "testId",
      },
      {
        Header: "Status",
        accessor: "testDataStatus",
      },
      {
        Header: "Location",
        accessor: "testSiteLocation",
      },
      {
        Header: "Project",
        accessor: "project",
      },
      {
        Header: "Build Milestone",
        accessor: "buildMilestone",
      },
      //   {
      //     Header: "Requester",
      //     accessor: "Reviewer",
      //   },
      //   {
      //     Header: "Reviewer",
      //     accessor: "reviewer",
      //   },
      //   {
      //     Header: "Tester",
      //     accessor: "uploader",
      //   },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default TestHeaderTable;
