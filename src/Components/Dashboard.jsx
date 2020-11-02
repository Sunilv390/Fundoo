import { Navbar, Button, Dropdown } from 'react-bootstrap';
import React from 'react';
import '../CSS/Dashboard.scss'
import DrawarOpen from './DrawarOpen'
import { ReactComponent as SearchLogo } from '../Assets/Search.svg';
import { ReactComponent as ClearIcon } from '../Assets/Clear.svg';
import Notes from '../Components/Notes'
import Trash from '../Components/Trash'
import Archive from '../Components/Archive'
import ProtectedRoute from '../Components/ProtectedRoute'

export default class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            active: false,
            drawarWidth: "drawar-width",
        }
    }

    componentDidMount() {
        this.props.history.push("/dashboard/notes")
    }

    handleClick() {
        !this.state.open ? this.setState({ drawarWidth: "drawar-width-open-relative" }) : this.setState({ drawarWidth: "drawar-width" });
    }

    displayDrawar() {
        if (!this.state.open) {
            return (<DrawarOpen className={"icon-lable-hide"} />)
        }
        if (this.state.open) {
            return (<DrawarOpen className={"icon-lable"} />)
        }
    }



    render() {
        return (
            <>
                <Navbar variant="light" style={{ border: "1px solid silver" }}>
                    <Navbar.Brand >
                        <Button id="button" type="menu-fold" onClick={() => {
                            this.setState({ open: !this.state.open, active: !this.state.active },
                                this.handleClick())
                        }} aria-controls="example-collapse-text"
                            aria-expanded={this.state.open}
                            variant="light"><img height="27px" alt="MenuLogo" src={require('../Assets/Menu.png')} />
                        </Button></Navbar.Brand>
                    <navigationBar />
                    <div className="logo" >
                        <img className="keep" alt="MenuLogo" src={require('../Assets/Keep.png')} />
                    </div>
                    <div className="FundooTitle">
                        <span>Fundoo</span>
                    </div>
                    <div className="search-bar">
                        <SearchLogo className="search-logo" />
                        <input className="search-text" type="text" placeholder="Search" />
                        <ClearIcon className="clear" />
                    </div>
                    <div className="Account" >
                        <Dropdown>
                            <Dropdown.Toggle variant="light" className="profile-button">
                                <img height="40px" alt="MenuLogo" src={require('../Assets/profile.png')} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="profile-menu">
                                <div className="profile-details">
                                    <div className="profile-image">
                                        <img height="100%" alt="MenuLogo" src={require('../Assets/profile.png')} />
                                    </div>
                                    <div>
                                        <span style={{ fontFamily: "sans-serif", fontSize: "16px", fontWeight: "bold" }}>Sunil Verma</span>
                                    </div>
                                    <div>
                                        <span >sunilv390@gmail.com</span>
                                    </div>
                                    <div className="sign-out">
                                        <Button onClick={() => { localStorage.clear(); this.props.history.push("/login"); }} variant="light">Sign out</Button>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar>
                <div className="drawar-container">
                    <div className={this.state.drawarWidth}>
                        {this.displayDrawar()}
                    </div>
                    <ProtectedRoute path="/dashboard/notes" component={Notes} />
                    <ProtectedRoute path="/dashboard/trash" component={Trash} />
                    <ProtectedRoute path="/dashboard/archive" component={Archive}/>
                </div>
            </>
        );
    }
}

