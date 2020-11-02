import React from 'react'
import '../CSS/Register.scss'
import logo from '../Assets/logo.svg'
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import userService from '../Services/userServices'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { Link } from 'react-router-dom';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => { val.length > 0 && (valid = false); });
    return valid;
};


export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirmPassword: null,

            errors: {

                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            flags : {
                status : "",
            },

            Responses : {
              Success : "",
              Message : "",  
            }

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let flags = this.state.flags;
        let errors = this.state.errors;
        if (this.state.firstName == null) {
            errors.firstName = "First Name Required";
        }
        if (this.state.lastName == null) {
            errors.lastName = "Last Name Required";
        }
        if (this.state.email == null) {
            errors.email = "Email Id Required";
        }
        if (this.state.password == null) {
            errors.password = "Password Required";
        }
        if (this.state.confirmPassword == null) {
            errors.confirmPassword = "Confirm Password Required";
        }
        if (validateForm(this.state.errors)) {
            flags.status = "Success";
            console.info('Valid Form')
            if(this.state.firstName === null || this.state.lastName === null || this.state.email === null || this.state.password === null || this.state.confirmPassword === null) {
                flags.status = "Failed";
                console.log("Invalid form");
            }
            else
            {
                const user = {
                    firstName : this.state.firstName,
                    lastName :this.state.lastName,
                    email : this.state.email,
                    password : this.state.password,
                    service : "advance",
                };

                if (this.state.password === this.state.confirmPassword) {
                    console.log("Calling Api");
                    userService.register(user)
                    .then(data => {
                        console.log(data);
                        const object = data.data;
                        console.log(object.success);
                        console.log(object.message);
                        if (data.status === 200) {
                            console.log(data.data);
                            this.props.history.push('/login');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
            }
        }
        else
        {
            
            flags.status = "Failed";
            console.error('Invalid Form')
        }

        this.setState( { flags }, ()=> console.log(this.state));
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "firstName":
                errors.firstName = value.length < 3 ? "First Name is not valid" : "";
                break;
            case "lastName":
                errors.lastName = value.length < 3 ? "Last Name is not valid" : "";
                break;
            case "email":
                errors.email = validEmailRegex.test(value) ? "" : "Email Id not valid";
                break;
            case "password":
                errors.password = value.length < 8 ? "Password Not valid" : "";
                break;
            case "confirmPassword":
                errors.confirmPassword = value.length < 8 ? "Confirm password not valid" : "";
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => console.log(this.state));
    }


    render() {
        const { errors } = this.state;
        const { flags } = this.state;
        const { Responses } = this.state;
        return (
            <div className="mainContainer">
                <div className="bodyContainer">
                    <div className="registrationContainer">
                        <div className="fundoofont">
                            <span class="f">F</span>
                            <span class="u">u</span>
                            <span class="n">n</span>
                            <span class="d">d</span>
                            <span class="o">o</span>
                            <span class="o1">o</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="textFieldBody">
                                <p className="p1">Create your Fundoo Account</p> <br />
                                <div className="text">
                                    <div className="text1">
                                        <div className="textRow1">
                                            <TextField
                                                name="firstName"
                                                label="First name"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className='error'>
                                                {errors.firstName.length > 0 && (<span className='errorMessage'>{errors.firstName}</span>)}
                                            </div>
                                        </div>
                                        <div className="textRow2">
                                            <TextField
                                                name="lastName"
                                                label="Last name"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className='error'>
                                                {errors.lastName.length > 0 && <span className='errorMessage'>{errors.lastName}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textColumn2">
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
                                            placeholder="@gmail.com"
                                            text-align="right"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                        <div className='error'>
                                            {errors.email.length > 0 && <span className='errorMessage'>{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className="text3">
                                        <div className="textRow1">
                                            <TextField
                                                label="Password"
                                                name="password"
                                                type="password"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className='error'>
                                                {errors.password.length > 0 && <span className='errorMessage'>{errors.password}</span>}
                                            </div>
                                        </div>
                                        <div className="textRow2">
                                            <TextField
                                                label="Confirm Password"
                                                type="password"
                                                name="confirmPassword"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                value={this.state.confirmPassword}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            <div className='error'>
                                                {errors.confirmPassword.length > 0 && <span className='errorMessage'>{errors.confirmPassword}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="passwordHint">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                                    <div className="button">
                                        <div className="button1">
                                            <Link to="/login">
                                                <Button variant="link">Sign in instead</Button>
                                            </Link>
                                        </div>

                                        <div className="button2">
                                            <Link to="/login">
                                            <Button variant="primary" onClick={this.handleSubmit}>Register</Button></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="sideImageBox">
                    <div className="figureBox">
                        <div className="image">
                            <img src={logo} class="tempimage" alt="Temperature" />
                            <figcaption className="figCaption">
                                One account. All of Fundoo working for you.
                                </figcaption>
                        </div>
                    </div>
                </div>
                <div className="AlertMessage">
                        <div className="successAlert">
                                { flags.status === "Success" && (
                                    <Alert severity="success">
                                    <AlertTitle>{Responses.Success}</AlertTitle>
                                        <strong></strong>
                                    </Alert>
                                    )}
                        </div>
                        <div className="failedAlert">
                                { flags.status === "Failed" && (
                                    <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                        <strong></strong>
                                    </Alert>

                                    )}
                        </div>
                        </div>
            </div>
            
        );
    }
}