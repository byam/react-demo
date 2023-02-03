import React from "react";
import Header from "./header/Header";
import PageRoutes from "./PageRoutes";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="header">
        <Header />
      </div>
      <div className="Posts">
        <PageRoutes />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
