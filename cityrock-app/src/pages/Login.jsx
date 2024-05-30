// Login.jsx
import React from "react";
import '../styles/Login.css';

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
                <label htmlFor="remember-check">
                    <input type="checkbox" id="remeber-check" />
                    <p>비밀번호 기억하기</p>
                </label>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;