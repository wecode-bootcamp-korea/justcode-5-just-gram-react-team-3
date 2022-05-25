import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  let [userId, setUserId] = useState("");
  let [userPw, setUserPw] = useState("");

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };
  const handleIdInput = (e) => {
    setUserId(e.target.value);
    // validationBtn(e.target.value, userPw);
    validationBtn();
  };

  const handlePwInput = (e) => {
    setUserPw(e.target.value);
    // validationBtn(userId, e.target.value);
    validationBtn();
  };

  const validationBtn = () => {
    if (userId.includes("@") && userPw.length > 7) {
      return true;
    } else {
      return false;
    }
  };
  // console.log(userId, userPw);
  return (
    <section className="login_container">
      <div className="login_logo-box">
        <span className="login_logo-text">Justgram</span>
      </div>
      <div className="input-box">
        <input
          onChange={handleIdInput}
          className="input-common identify"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={handlePwInput}
          className="input-common password"
          type="password"
          placeholder="비밀번호"
        />

        <button
          style={{
            backgroundColor: validationBtn() === true ? "blue" : "#c0dffd",
          }}
          className="login-btn"
          type="submit"
          onClick={goToMain}
          disabled={!validationBtn()}
        >
          로그인
        </button>
      </div>
      <div className="extra-box">
        <a className="find-password" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </section>
  );
}

export default Login;
