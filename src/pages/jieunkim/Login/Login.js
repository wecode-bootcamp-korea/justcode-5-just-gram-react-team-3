import React from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom"
import { useState } from "react";
import "./Login.scss";

// class Login extends React.Component {
//   render() {
//     return();
//   }
// }


function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setPassword] = useState("");
  
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };

  const getUserId = () => {
    console.log(userId);
    return userId;
  }
  const isActiveLoginBtn = () => {
    if(userId.includes("@") && userPassword.length > 7) {
      return true;
    }
    return false;
  }
  
  const buttonOnclick = () => {
    console.log(isActiveLoginBtn())
    if (isActiveLoginBtn()) {
      navigate("/main");
    } else {
      navigate("/")
    }
  }
  
  return (
    <body className="Login">
      <div className="main-container-login">
        <header className="logo">
          <p>justgram</p>
        </header>
        <div className="login-container">
          <div className="input-container">
            <input
              type="text"
              id="user-id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={userId}
              onChange={(event) => {
                setUserId(event.target.value);
              }}
            />
            <input 
            type="password" 
            id="password" 
            placeholder="비밀번호"
            value={userPassword}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            />
          </div>
          <div className="login-btn-container">
              <button 
                id="login-btn"
                disabled={!(isActiveLoginBtn())}
                onClick={buttonOnclick}>
                  로그인
              </button>
          </div>
        </div>
        <div className="empty"></div>
        <div className="login-request">
          <p className="password-request">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
      </body>
  );
}

export default Login;
