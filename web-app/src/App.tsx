import "./App.css";
import Layout from "./Layout";
import Menu from "./mainMenu/Menu";
import Login from "./Login/login";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Account from "./Account/Account";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Layout>
  );
}

export default App;
