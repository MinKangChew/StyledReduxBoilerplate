// import TestHeaderTable from "styles/components/Table/TestHeaderTable.mui";
import React, { ReactElement, useEffect } from "react";
import TestHeaderTable from "./components/TestHeaderTable";
import {
  getTestHeader,
  setBuildMilestoneFilter,
  setProjectFilter,
} from "store/testHeader/testHeader.slice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectTestHeaderFilter } from "store/testHeader/testHeader.selector";

const TestHeader = (): ReactElement => {
  const dispatch = useDispatch();
  const filters = useSelector(selectTestHeaderFilter);
  const { project, buildMilestone } = useParams();

  useEffect(() => {
    project && dispatch(setProjectFilter({ project }));
    buildMilestone && dispatch(setBuildMilestoneFilter({ buildMilestone }));
    dispatch(getTestHeader({ filters }));
  }, [filters]);
  return (
    <>
      <div>TestHeader</div>
      {/* <TestHeaderTable /> */}
      <TestHeaderTable />
    </>
  );
};

export default TestHeader;
