import React from "react";
import "./DashboardPage.scss";
import Card from "@component/Card";

const DashboardPage: React.FC = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="card-holder">
        <Card id="first" title="First title" description="Description of first title" />
        <Card id="second" title="Second title" description="Description of second title" />
        <Card id="third" title="Third title" description="Description of third title" />
        <Card id="forth" title="Forth title" description="Description of forth title" />
      </div>
    </div>
  );
};

export default DashboardPage;
