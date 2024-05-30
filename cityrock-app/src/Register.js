// Register.js
import { useState, useRef } from "react";
import Button from "./Button";
import server from "./server";
import './styles/Register.css';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function Register() {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const phonenumderRef = useRef("");

  const handleRegister = () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const phonenumder = phonenumderRef.current.value;

    if (!username || !email || !password || !phonenumder || !confirmPassword) {
      setErrMsg("모든 필드를 채워주세요");
      return;
    }

    if (password !== confirmPassword) {
      setErrMsg("비밀번호가 일치하지 않습니다");
      return;
    }

    // 서버로 회원가입 요청을 보냅니다.
    server.emit("register", { username, email, password, phonenumder }, (response) => {
      if (response.success) {
        setSuccessMsg("회원가입에 성공했습니다!");
        setErrMsg("");
      } else {
        setErrMsg(response.message || "회원가입에 실패했습니다");
        setSuccessMsg("");
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="register-form">
        <h2>회원가입</h2>
        {errMsg && <div className="error-message">{errMsg}</div>}
        {successMsg && <div className="success-message">{successMsg}</div>}
        <div className="accounttxt">이름</div>
        <input placeholder="이름을 입력해주세요" ref={usernameRef} />
        <div className="accounttxt">이메일</div>
        <input placeholder="이메일을 입력해주세요" ref={emailRef} />
        <div className="accounttxt">비밀번호</div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="10-20자의 영문, 숫자, 특수문자 모두 조합"
            ref={passwordRef}
            className="password-input"
          />
          <div className="icon-container" onClick={togglePasswordVisibility}>
            {showPassword ? <IoMdEyeOff className="icon" /> : <IoMdEye className="icon" />}
          </div>
        </div>
        <div>
          <input type="password" placeholder="비밀번호 확인" ref={confirmPasswordRef} />
        </div>
        <div className="accounttxt">휴대폰 번호</div>
        <div>
          <input type="phonenumder" placeholder="본인 인증이 필요합니다" ref={phonenumderRef} />
          <Button className="phone-button" btn="인증" click={handleRegister} />
        </div>
        <Button className="register-button" btn="가입하기" click={handleRegister} />
        <div className="loginq">이미 계정이 있습니까? <span>로그인하기</span> </div>
      </div>
    </>
  );
}

export default Register;
