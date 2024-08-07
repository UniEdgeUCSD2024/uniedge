import React from "react";
import OriginalHome from "../components/OriginalHome";

const LandingPage = () => {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <OriginalHome />
        <div className="main"></div>
      </div>
    </>
  );
};
export default LandingPage;
