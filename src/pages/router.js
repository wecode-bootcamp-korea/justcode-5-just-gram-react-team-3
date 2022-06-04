// Code Kim's 컴포넌트
import LoginKim from './pages/codeKim/Login/Login';
import MainKim from './pages/codeKim/Main/Main';

// Code Lee's 컴포넌트
import LoginLee from './pages/codeLee/Login/Login';
import MainLee from './pages/codeLee/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
<Route path='/login-kim' element={<LoginKim />} />
<Route path='/main-kim' element={<MainKim />} />
<Route path='/login-lee' element={<LoginLee />} />
<Route path='/main-lee' element={<MainLee />} />