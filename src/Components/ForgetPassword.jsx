import React from 'react';
import "../CSS/ForgetPassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => { val.length > 0 && (valid = false); });
    return valid;
};

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            email: null,

            errors: {

                email: "",
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {

        }
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        if (validEmailRegex.test(value)) {
            errors.email = "";
        } else {
            errors.email = "Email Id not valid";
        }

        this.setState({ errors, [name]: value }, () => console.log(this.state));
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="forgetMainContainer" >
                <div className="forgetContainer" >
                    <div className="forgetfundoofont" align="center">
                        <span style={{ color: "#4885ed" }}>F</span>
                        <span style={{ color: "#db3236" }}>u</span>
                        <span style={{ color: "#f4c20d" }}>n</span>
                        <span style={{ color: "#4885ed" }}>d</span>
                        <span style={{ color: "#3cba54" }}>o</span>
                        <span style={{ color: "#db3236" }}>o</span>
                    </div>
                    <p className="forgettitle" align="center">
                        Find your Email
					</p>
                    <p className="forgetSubTitle" align="center">
                        Enter your phone number or recovery email
					</p>
                    <div className="textField1">
                        <TextField
                            fullWidth
                            type="email"
                            name="Username"
                            label="Phone number or email"
                            id="outlined-size-small"
                            variant="outlined"
                            helperText="Use Email or Phone"
                            size="medium"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                            text-align="right" />
                        <div className="error">
                            {errors.email.length > 0 && (<span className="errorMessage">{errors.email}</span>)}
                        </div>
                    </div>

                    <div className="buttonContainer">

                        <div className="Lbutton2">
                            <Button variant="primary">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 