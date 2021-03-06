import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";



function Login() {
  const navigate = useNavigate();
  const signUpAPI = "http://52.79.143.176:8000/users/signup";
  const loginAPI = "http://52.79.143.176:8000/users/login";
  
  const [userId, setUserId] = useState("");
  const [userPassword, setPassword] = useState("");
 
  const isActiveLoginBtn = () => {
    return (userId.includes("@") && userPassword.length > 7);
  }

  const handleEnterKey = (e) => {
    return e.key === "Enter";
  };

  const handleKey = (classId) => {
    if (handleEnterKey && isActiveLoginBtn) {
      loginWithAPI();
    }
  }

  const login = () => {
    if (isActiveLoginBtn()) {
      navigate("/jieunkimMain",
      {state: userId});
    } else {
      navigate("/jieunkimLogin");
    }
  }

  const buttonOnclick = () => {
    if (isActiveLoginBtn()) {
      //login();
      loginWithAPI();
    }
  }

  const buttonOnclickSignup = () => {
    if (isActiveLoginBtn()) {
      signUp();
    }
  }

  const loginWithAPI = () => {
      fetchAPI(loginAPI)
  }

  const signUp= () => {
    fetchAPI(signUpAPI)
}

  const fetchAPI = (address) => {
    fetch(address, {
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
        if (address.includes('login')) {
          isLoginValid(result)
        } else if (address.includes('signup')) {
          isSignUpValid(result)
        } else {
          alert("target not valid")
        }
      }); 
  }

  const isLoginValid = (fetchResult) => {
    let msg = fetchResult.message;
    if (msg.includes("SUCCESS")) {
      navigate("/jieunkimMain",
      {state: userId});
    // Todo : alert message fn 
    //} else if (msg.includes('client input invalid')) {
    //alert("please check your id and password")
    //navigate("/jieunkimLogin");
    } else {
      navigate("/jieunkimLogin");
    }
  }

  const isSignUpValid = (fetchResult) => {
          let msg = fetchResult.message;
          if (msg.includes("SUCCESS")) {
            navigate("/jieunkimMain",
            {state: userId});
          } else if (msg.includes('EXISTING_USER')) {
            alert("SignUp failed. id exist")
            navigate("/jieunkimLogin");
          } else if (msg.includes('INVALID_PASSWORD')) {
            alert('SignUp failed. Over 8 letter???ain capital letters, numbers, and special letters');
            navigate("/jieunkimLogin");
          } else {
            alert('SignUp failed.')
            navigate("/jieunkimLogin");
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
              placeholder="????????????, ????????? ?????? ?????? ?????????"
              value={userId}
              onChange={(event) => {
                setUserId(event.target.value);
              }}
              onKeyUp={handleKey}
            />
            <input
              type="password"
              id="password"
              placeholder="????????????"
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
              ?????????
            </button>
          </div>
        </div>
        <div className="empty"></div>
        <div className="login-request">
          <p className="password-request">??????????????? ????????????????</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
