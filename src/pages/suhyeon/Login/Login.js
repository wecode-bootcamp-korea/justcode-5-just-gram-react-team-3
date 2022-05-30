import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });
  const [isActivate, setIsActivate] = useState(false);

  const navigate = useNavigate();
  const isValid = user.id.includes("@") && user.password.length > 7;

  const goToMain = () => {
    navigate("/suHyeonMain");
  };
  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    validationBtn();
  };

  const validationBtn = () => {
    setIsActivate(isValid);
  };

  return (
    <section className="login_container">
      <div className="login_logo-box">
        <span className="login_logo-text">Justgram</span>
      </div>
      <div className="input-box">
        <input
          onChange={handleInput}
          name="id"
          className="input-common identify"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={handleInput}
          name="password"
          className="input-common password"
          type="password"
          placeholder="비밀번호"
        />

        <button
          className={
            isActivate ? "activated-login-btn" : "deactivated-login-btn"
          }
          type="submit"
          onClick={goToMain}
          disabled={!isActivate}
        >
          로그인
        </button>
      </div>
      <div className="extra-box">
        <Link to="/suhyeonMain" className="find-password">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </section>
  );
}

export default Login;
