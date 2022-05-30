import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.scss';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const updateBtn = () => {
    const isIdPwInputValid = idValue.includes('@') && pwValue.length >= 5;
    setIsValid(isIdPwInputValid);
  };

  const handleIdInput = (e) => {
    setIdValue(e.target.value);
  };

  const handlePwInput = (e) => {
    setPwValue(e.target.value);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/jinwooMain');
  };
  return (
    <div className="container">
      <h1>Justgram</h1>
      <div className="loginForm">
        <input
          type="text"
          onKeyUp={updateBtn}
          onChange={handleIdInput}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          type="password"
          onKeyUp={updateBtn}
          onChange={handlePwInput}
          placeholder="비밀번호"
        />
        <button
          disabled={isValid ? false : true}
          className={isValid ? 'activated' : 'deactivated'}
          onClick={goToMain}
        >
          로그인
        </button>
      </div>
      <Link to="/jinwooLogin" id="searchPw">
        비밀번호를 잊으셨나요?
      </Link>
    </div>
  );
}

export default Login;
