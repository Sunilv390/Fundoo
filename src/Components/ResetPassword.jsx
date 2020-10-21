import React from 'react';
import "../CSS/ResetPassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';
import userService from '../Services/userServices';


const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => {val.length > 0 && (valid = false);});
    return valid;
};

export default class ResetPassword extends React.Component {

	constructor(props) {
        super(props);
        this.state = {

            password : null ,
            passwordConfirm : null,

            errors : {

               password : "",
               passwordConfirm : "",

            }
       }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        let errors=this.state.errors;
        if (this.state.password == null) {
            errors.password = "Password required";
        }
        if (this.state.passwordConfirm == null) {
            errors.passwordConfirm = "Confirm Password required";
        }
        let token = this.props.match.params.token;
        localStorage.setItem('token', token);

        const user = {
            newPassword : this.state.password
        }

        console.log("Calling Api");
        userService.resetPass(user)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })

        if (validateForm(this.state.errors)) {
        }
    }

    handleChange = event => {
        event.preventDefault();
        const { name , value } = event.target;
        let errors = this.state.errors;

        switch(name) {
            case "passwordConfirm":
                errors.passwordConfirm = value.length < 8 ? "Confirm Password not valid" : "" ;
                break;
            case "password":
                errors.password = value.length < 8 ? "Password Not valid" : "" ;
                break;
            default:
                break;
        }

            this.setState( { errors , [name] : value }, ()=> console.log(this.state));
    }

	render() {
        const { errors } = this.state;
		return (
			<div className="resetMainContainer" >
				<div className="resetContainer" >
					<div className="resetfundoofont" align="center">
                    <span style={{ color: "#4885ed" }}>F</span>
                        <span style={{ color: "#db3236" }}>u</span>
                        <span style={{ color: "#f4c20d" }}>n</span>
                        <span style={{ color: "#4885ed" }}>d</span>
                        <span style={{ color: "#3cba54" }}>o</span>
                        <span style={{ color: "#db3236" }}>o</span>
                    </div>
					<p className="resettitle" align="center">
						Account recovery
					</p>
					<p className="resetSubTitle" align="center">
						Use your Google Account
					</p>
					<div className="textField1">
						<TextField
                            fullWidth
                            type="email"
                            name="password"
                            label="Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            required
                            text-align="right"
                            value = {this.state.password}
                            onChange = {this.handleChange}
                        />
                        <div className="error">
                            { errors.password.length > 0 && (<span className="errorMessage">{errors.password}</span>)}
                        </div>
					</div>
					<div className="textField2">
                        <TextField
                            name="confirmPassword"
                            label="Confirm Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                            required
                            value = {this.state.passwordConfirm}
                            onChange = {this.handleChange}
                        />
                        <div className="error">
                            { errors.passwordConfirm.length > 0 && (<span className="errorMessage">{errors.passwordConfirm}</span>)}
                        </div>
                    </div>
                    <div className="buttonContainer">


                    	<div className="Lbutton2">
                    		<Button
                                variant="primary" onClick={this.handleSubmit}>
                                Reset
                            </Button>
                    	</div>
                    </div>		
				</div>
			</div>	
			);
	}
} 