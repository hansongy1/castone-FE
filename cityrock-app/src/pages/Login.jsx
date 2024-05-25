import React from "react";
// import './Login.css';

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [loginCheck, setLoginCheck] = useState(false);
    return (
        <div className="login-container">
            <h1>로그인</h1>
            <form action="">
                <section className="user-id">
                    <label>아이디</label>
                    <input type="text" name="email" />
                </section>
                <section className="user-password">
                    <label>비밀번호</label>
                    <input type="password" name="password"/>
                </section>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default Login;