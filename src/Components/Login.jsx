import React from 'react'
import '../CSS/Login.scss'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import userService from '../Services/userServices';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Button from 'react-bootstrap/Button';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => { val.length > 0 && (valid = false); });
    return valid;
};

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            email: null,
            password: null,

            errors: {
                email: "",
                password: "",
            },
            flags: {
                success: "",
                failed: "",
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        let flags = this.state.flags;
        let errors = this.state.errors;
        if (this.state.email === null) {
            errors.email = "Email Id Required";
        }

        if (this.state.password === null) {
            errors.password = "Password Required";
        }
        if (validateForm(this.state.errors)) {
            flags.failed = "";
            flags.success = "Success";
            console.info('Valid Form')
            if (this.state.email === null || this.state.password === null) {
                flags.success = "";
                flags.failed = "Failed";
                console.error("invalid Form");
            } else {
                const data = {
                    email: this.state.email,
                    password: this.state.password,
                };

                console.log("Calling Api");
                userService.login(data)
                    .then(data => {
                        localStorage.setItem("Token", data.data.id)
                        if (data.status === 200) {
                            console.log(data.data.id);
                            this.props.history.push('/dashboard');
                        }
                    })
                    .catch((error) => {
                        flags.success = "";
                        flags.failed = "Failed";
                        console.log(error);

                    })
            }
        }
        else {
            flags.success = "";
            flags.failed = "Failed";
            console.error('Invalid Form')
        }
        this.setState({ flags }, () => console.log(this.state));
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "email":
                errors.email = validEmailRegex.test(value) ? "" : "Email Id not valid";
                break;
            case "password":
                errors.password = value.length < 8 ? "Password Not valid" : "";
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => console.log(this.state));
    }

    render() {
        const { errors } = this.state;
        const { flags } = this.state;
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
                            name="email"
                            label="Username"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use EmailID or Mobile Number"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                            text-align="right"
                        />
                        <div className="error">
                            {errors.email.length > 0 && (<span className="errorMessage">{errors.email}</span>)}
                        </div>
                    </div>
                    <div className="textField2">
                        <TextField
                            name="password"
                            label="Password"
                            id="outlined-size-small"
                            variant="outlined"
                            ref="password"
                            type="password"
                            size="small"
                            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div className="error">
                            {errors.password.length > 0 && (<span className="errorMessage">{errors.password}</span>)}
                        </div>
                    </div>
                    <div>
                        <div className="Lbutton3">
                            <Button variant="link" href="/forgetPassword"><span class="Forgetpassword">Forget password?</span></Button>
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <Link to="/">
                            <Button variant="link"> Create account </Button>
                        </Link>
                        <Button variant="primary" onClick={this.handleSubmit}> Sign in </Button>
                    </div>
                </div>
                <div className="AlertMessage">
                    <div className="successAlert">
                        {flags.success.length > 0 && flags.failed == null && (
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                <strong>Congratulation, Login SuccessFull!</strong>
                            </Alert>
                        )}
                    </div>
                    <div className="failedAlert">
                        {flags.failed.length > 0 && (
                            <Alert severity="error">
                                <AlertTitle><strong>Enter Detail</strong></AlertTitle>

                            </Alert>
                        )}
                    </div>
                </div>

            </div>
        );
    }
}