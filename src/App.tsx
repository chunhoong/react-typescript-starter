import React from "react";
import Card from "@component/Card";
import "./App.scss";

const App: React.FC = () => (
  <>
    <div className="container">
      <h1>My React application</h1>
      <div className="card-holder">
        <Card id="first" title="First title" description="Description of first title" />
        <Card id="second" title="Second title" description="Description of second title" />
        <Card id="third" title="Third title" description="Description of third title" />
        <Card id="forth" title="Forth title" description="Description of forth title" />
      </div>
    </div>
  </>
);

export default App;