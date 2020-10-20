import React from 'react'
import '../CSS/Register.scss'
import logo from '../Assets/logo.svg'
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
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
        				<div className="textFieldBody">
                            <p className="p1">Create your Fundoo Account</p> <br />
                                <div className="text">
                                    <div className="text1">
                                        <div className="textRow1">
                                            <TextField
                                                name="First name"
                                                label="First name"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                required
                                            />
                                        </div>
                                        <div className="textRow2">
                                            <TextField
                                              	name="Last name"
                                                label="Last name"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                                required
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                        <div className="textColumn2">
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
                                                placeholder="@gmail.com"
                                                text-align="right"
                                            />
                                      	</div>
                                        <div className="text3">
                                            <div className="textRow1">
                                                <TextField
                                                    label="Password"
                                                    type="password"
                                                    id="outlined-size-small"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                         		/>
                                            </div>
                                            <div className="textRow2">
                                                <TextField
                                                    label="Confirm"
                                                    type="password"
                                                    id="outlined-size-small"
                                                    variant="outlined"
                                                    size="small"
                                                    required
                                                />
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
                                                    <Button variant="primary">Register</Button>{' '}

                                                </div>
                                            </div>
                                </div>
                        </div>
                    </div>    
                    <div className="sideImageBox">
                        <div className="figureBox">
                            <div className="image">
                                <img src={logo} class="tempimage" alt="Temperature"/>   
                                <figcaption className="figCaption">
                                    One account. All of Fundoo working for you.
                                </figcaption>
                            </div>
                        </div>
                    </div>    
                </div>    
            </div>
			);
    }
}