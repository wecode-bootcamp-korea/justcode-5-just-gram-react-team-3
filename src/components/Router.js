import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YechanLogin from '../pages/yechanKim/Login/Login';
import YechanMain from '../pages/yechanKim/Main/Main';
import JinwooLogin from '../pages/jinwoo/Login/Login';
import JinwooMain from '../pages/jinwoo/Main/Main';
import SuhyeonLogin from '../pages/suhyeon/Login/Login';
import SuhyeonMain from '../pages/suhyeon/Main/Main';
import JieunkimLogin from '../pages/jieunkim/Login/Login';
import JieunkimMain from '../pages/jieunkim/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jinwooLogin" element={<JinwooLogin />} />
        <Route path="/jinwooMain" element={<JinwooMain />} />
        <Route path="/suhyeonLogin" element={<SuhyeonLogin />} />
        <Route path="/suhyeonMain" element={<SuhyeonMain />} />
        <Route path="/jieunkimLogin" element={<JieunkimLogin />} />
        <Route path="/jieunkimMain" element={<JieunkimMain />} />
        <Route path="/yechankimLogin" element={<YechanLogin />} />
        <Route path="/yechankimMain" element={<YechanMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
