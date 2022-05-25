import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/suhyeon/Login/Login";
import Main from "../pages/suhyeon/Main/Main";
import JinwooLogin from "../pages/jinwoo/Login/Login";
import JinwooMain from "../pages/jinwoo/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/jinwooLogin" element={<JinwooLogin />} />
        <Route path="/jinwooMain" element={<JinwooMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
