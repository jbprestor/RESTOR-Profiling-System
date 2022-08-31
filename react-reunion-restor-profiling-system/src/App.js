import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/autentication/authentication.components";
/* const SideBar = () => {
  return (
    <div>
      <div>
        <h1>I am navigation page</h1>
      </div>
      <Outlet />
    </div>
  );
}; */

const FamilyList = () => {
  return <h1>yawa</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="familylist" element={<FamilyList />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
