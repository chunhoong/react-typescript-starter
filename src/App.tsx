import React, { StrictMode, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadingPage from "@component/LoadingPage";

const DashboardPage = React.lazy(() => import(/* webpackChunkName: "dashboard" */ "@dashboard/DashboardPage"));
const AccountDetailPage = React.lazy(
  () => import(/* webpackChunkName: "account-detail" */ "@accountDetail/AccountDetailPage")
);

const App: React.FC = () => (
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/account-detail" component={AccountDetailPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

export default App;
