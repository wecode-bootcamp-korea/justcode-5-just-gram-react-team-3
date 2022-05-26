import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/suhyeon/Login/Login";
import Main from "../pages/suhyeon/Main/Main";

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
