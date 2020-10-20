import React from 'react'
import '../CSS/Login.scss'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from 'react-bootstrap/Button';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loginMainContainer">
                <div className="loginContainer">
                    <div className="loginFont" align="center" >
                        <span style={{ color: "#4885ed" }}>F</span>
                        <span style={{ color: "#db3236" }}>u</span>
                        <span style={{ color: "#f4c20d" }}>n</span>
                        <span style={{ color: "#4885ed" }}>d</span>
                        <span style={{ color: "#3cba54" }}>o</span>
                        <span style={{ color: "#db3236" }}>o</span>
                    </div>
                    <p className="logintitle" align="center">
                        Sign in
					</p>
                    <p className="loginSubTitle" align="center">
                        Use your Google Account
					</p>
                    <div className="textField">
                        <TextField
                            fullWidth
                            type="email"
                            name="Username"
                            label="Username"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use EmailID or Mobile Number"
                            required
                            text-align="right"
                        />
                    </div>
                    <div className="textField2">
                        <TextField
                            name="password"
                            label="Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                            required
                        />
                    </div>
                    <div className="buttonContainer">
                        <Link to="/">
                            <Button variant="link"> Create account </Button>
                        </Link>
                        <Button variant="primary"> Sign in </Button>
                    </div>
                </div>
            </div>
        );
    }
}
