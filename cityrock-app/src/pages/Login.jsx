// Login.jsx
import React from "react";
import '../styles/Login.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons"

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [loginCheck, setLoginCheck] = useState(false);
    return (
        <div className="login-container">
            <h1>로그인</h1>
            <form action="post">
                <input type="text" name="email" placeholder="이메일"/>
                <input type="password" name="password" placeholder="비밀번호" />
                {/* <FontAwesomeIcon icon={faEye} /> */}
                <label htmlFor="remember-check">
                    <input type="checkbox" id="remeber-check" />
                    <p>로그인 상태 유지</p>
                </label>
                <section className="find-container">
                    <p>이메일/비밀번호 찾기</p>
                    <div className="find-line"></div>
                    <p>회원가입</p>
                </section>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;