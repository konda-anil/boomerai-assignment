import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ApplicationsComponent from "../Applications/Applications";
import DashboardComponent from "../Dashboard/Dashboard";
import ReportsComponent from "../Reports/Reports";
import IntegrationsComponent from "../Integrations/Integrations";
import VulnerabilityComponent from "../Vulnerability/Vulnerability";

type AppRouteProps = {
  children: JSX.Element[];
};

const AppRoutes = (props: AppRouteProps) => {
  return (
    <BrowserRouter>
      {props.children}
      <Routes>
        <Route path="/dashboard" Component={DashboardComponent}></Route>
        <Route path="/applications/:application" Component={VulnerabilityComponent}/>
        <Route path="/applications" Component={ApplicationsComponent}></Route>
        <Route path="/reports" Component={ReportsComponent}></Route>
        <Route path="/integrations" Component={IntegrationsComponent}></Route>
        <Route path="/" element={<Navigate replace to="/applications" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
