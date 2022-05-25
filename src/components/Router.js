import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuhyeonLogin from "../pages/suhyeon/Login/Login";
import SuhyeonMain from "../pages/suhyeon/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/suhyeonLogin" element={<SuhyeonLogin />} />
        <Route path="/suhyeonMain" element={<SuhyeonMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
