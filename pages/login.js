import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const usernameHandler =  (e) => {
        setUsername(e.target.value);
    }

    const passwordHandler =  (e) => {
        setPassword(e.target.value);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
            </div>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required
                    onChange={usernameHandler}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                    onChange={passwordHandler}/>

                <button type="submit">Login</button>
            </div>
        </form>
    </div>;
}
