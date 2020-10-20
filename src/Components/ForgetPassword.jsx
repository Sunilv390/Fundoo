import React from 'react';
import "../CSS/ForgetPassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                            size="medium"
                            required
                            text-align="right"/>
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