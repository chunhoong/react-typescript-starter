import React, { StrictMode, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import LoadingPage from "@component/LoadingPage";

const DashboardPage = React.lazy(() => import("@dashboard/DashboardPage"));

const App: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <BrowserRouter>
      <StrictMode>
        <Route exact path="/dashboard" component={DashboardPage} />
      </StrictMode>
    </BrowserRouter>
  </Suspense>
);

export default App;