import "./App.css";
import BreadcrumbComponent from "./ui/components/Breadcrumb/Breadcrumb";
import HeaderComponent from "./ui/screens/Header/Header";
import NavbarComponent from "./ui/screens/Navbar/Navbar";
import AppRoutes from "./ui/screens/Routes/Routes";

function App() {
  const title = "Applications";
  const path = ["Apps", "azpython", "Scans"];

  return (
    <>
      <HeaderComponent />
      <AppRoutes>
        <NavbarComponent />
        <BreadcrumbComponent title={title} path={path} />
      </AppRoutes>
    </>
  );
}

export default App;
