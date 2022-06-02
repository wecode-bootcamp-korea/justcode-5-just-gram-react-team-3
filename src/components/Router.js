import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/jieunkim/Login/Login";
import Main from "../pages/jieunkim/Main/Main";
import JieunkimLogin from '../pages/jieunkim/Login/Login';
import JieunkimMain from '../pages/jieunkim/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/jieunkimLogin" element={<JieunkimLogin />} />
        <Route path="/jieunkimMain" element={<JieunkimMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
