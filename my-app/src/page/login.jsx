import '../style/login.scss'
import React, { useState } from "react";



function Login({ onClose }) {

    const [isChecked, setIsChecked] = useState(false);

    return ( <>

        <div className="power">

            <button onClick={onClose}></button>
            
            <div className="main">
                <input
                    type="checkbox"
                    id="chk"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    aria-hidden="true"
                />

                <div className="signup">
                    <form>
                        <label htmlFor="chk">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="number" name="broj" placeholder="Phone Number" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <button>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk">Login</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    
    </> );
}

export default Login;