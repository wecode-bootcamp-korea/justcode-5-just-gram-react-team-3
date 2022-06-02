import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/suhyeon/Login/Login';
import Main from '../pages/suhyeon/Main/Main';
import JinwooLogin from '../pages/jinwoo/Login/Login';
import JinwooMain from '../pages/jinwoo/Main/Main';
import SuhyeonLogin from '../pages/suhyeon/Login/Login';
import SuhyeonMain from '../pages/suhyeon/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/jinwooLogin" element={<JinwooLogin />} />
        <Route path="/jinwooMain" element={<JinwooMain />} />
        <Route path="/suhyeonLogin" element={<SuhyeonLogin />} />
        <Route path="/suhyeonMain" element={<SuhyeonMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
