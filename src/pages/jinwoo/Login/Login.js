import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Login.scss';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const updateBtn = () => {
    if (idValue.includes('@') && pwValue.length >= 5) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  const handleIdInput = (e) => {
    setIdValue(e.target.value);
  }

  const handlePwInput = (e) => {
    setPwValue(e.target.value);
  }

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  return (
      <div className="container">
        <h1>Justgram</h1>
        <div className="login-form">
          <input type="text" id="id-input" onKeyUp={updateBtn} onChange={handleIdInput} placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input type="password" id="pw-input" onKeyUp={updateBtn} onChange={handlePwInput} placeholder="비밀번호"/>
          <button 
            disabled={isValid ? false : true} 
            style={{
              backgroundColor: isValid ? 'rgb(115,180,226)': 'rgb(172,212,234)', 
              cursor: isValid ? 'pointer' : 'auto'}} 
            onClick={goToMain}>
              로그인
          </button>
        </div>
        <a href="/" id="search-pw">비밀번호를 잊으셨나요?</a>
      </div>
  )
}

export default Login;