import React, { ReactElement } from "react";

interface Props {}

const Home = (props: Props): ReactElement => {
  console.log("home");
  return <div>Home</div>;
};

export default Home;
