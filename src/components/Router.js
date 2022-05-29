import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/jieunkim/Login/Login";
import Main from "../pages/jieunkim/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
