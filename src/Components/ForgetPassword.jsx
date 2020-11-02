import React from 'react';
import "../CSS/ForgetPassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';
import userService from '../Services/userServices';

const emailValidation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: null,
    
          formErrors: {
            errorEmail: "",
          },
        };
      }
    
      onValueChange = (e) => {
        
    
        this.setState({
          [e.target.name]: e.target.value,
        });
        
    
        let inputs = this.state.formErrors;
        inputs.errorEmail =
          emailValidation.test(e.target.value) === true ? "" : "Enter valid email";
      };
    
      onSubmit = (event) => {
        event.preventDefault();
        let userData = {
          email: this.state.email,
        };
        if (
          this.state.formErrors.errorEmail !== "" 
        ) {
          console.log("Input Fields are not properly filled");
        } else {
          userService.forgotPass(userData).then((data) => {
            console.log("Reset password link sent to the registered Email address",data);
          }).catch((error) => {
            console.log("Invalid Entry",error);
          });
        }
      };
    
      render() {
        return (
          <div className="fpOuterdiv">
            <div className="fpInnerdiv">
              <div className="fpFundooAlign">
              <span style={{ color: "#4885ed" }}>F</span>
                    <span style={{ color: "#db3236" }}>u</span>
                    <span style={{ color: "#f4c20d" }}>n</span>
                    <span style={{ color: "#4885ed" }}>d</span>
                    <span style={{ color: "#3cba54" }}>o</span>
                    <span style={{ color: "#db3236" }}>o</span>
              </div>
              <div className="font1" style={{display:"flex",justifyContent:"center"}}>
                <h5>Find your Email</h5>
              </div>
              <div className="fptextmargin">
                <h6>Enter your phone number or recovery email</h6>
              </div>
              <div className="fpinput">
                <div className="fpEmail">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={this.onValueChange}
                  />
                  <span className="errorMessage">
                    {this.state.formErrors.errorEmail}
                  </span>
                </div>
              </div>
              <div className="fpbutton">
                <Button type="submit" onClick={this.onSubmit} variant="primary">
                  Next
                </Button>
              </div>
            </div>
          </div>
        );
      }
    }