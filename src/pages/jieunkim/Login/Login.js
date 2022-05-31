import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";



function Login() {
  const signupAPI = "http://52.79.143.176:8000/users/signup";
  const loginAPI = "http://52.79.143.176:8000/users/login";
  const [userId, setUserId] = useState("");
  const [userPassword, setPassword] = useState("");

  const navigate = useNavigate();
 
  const isActiveLoginBtn = () => {
    return (userId.includes("@") && userPassword.length > 7);
  }

  // const buttonOnclick = () => {
  //   if (isActiveLoginBtn()) {
  //     navigate("/main",
  //     {state: userId});
  //   } else {
  //     navigate("/");
  //   }
  // }

  const buttonOnclick = () => {
    if (isActiveLoginBtn()) {
      fetch(loginAPI, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userId,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("결과: ", result)
          let msg = result.message;
          if (msg.includes("SUCCESS")) {
            navigate("/main",
            {state: userId});
          } else if (msg.includes('client input invalid')) {
            alert("please check your id and password")
            navigate("/");
          } else {
            navigate("/");
          }
        });
    }
  }

  const buttonOnclickSignup = () => {
    if (isActiveLoginBtn()) {
      fetch(signupAPI, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userId,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("결과: ", result)
          let msg = result.message;
          if (msg.includes("SUCCESS")) {
            navigate("/main",
            {state: userId});
          } else if (msg.includes('EXISTING_USER')) {
            alert("SignUp failed. id exist")
            navigate("/");
          } else if (msg.includes('INVALID_PASSWORD')) {
            alert('SignUp failed. Over 8 letter…ain capital letters, numbers, and special letters');
            navigate("/");
          } else {
            alert('SignUp failed.')
            navigate("/");
          }
        });
    }
  }


  return (
    <div className="Login">
      <div className="main-container-login container-align">
        <header className="logo">
          <p>justgram</p>
        </header>
        <div className="login-container container-align">
          <div className="input-container container-align">
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
          <div className="login-btn-container container-align">
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
    </div>
  );
}

export default Login;
