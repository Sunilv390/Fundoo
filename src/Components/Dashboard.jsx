import { Navbar, Button, Dropdown } from 'react-bootstrap';
import React from 'react';
import '../CSS/Dashboard.scss'
import Drawar from './Drawar'
import DrawarOpen from './DrawarOpen'
import { ReactComponent as SearchLogo } from '../Assets/Search.svg';
import { ReactComponent as ClearIcon } from '../Assets/Clear.svg';
import CreateNote from '../Components/CreateNote'
import noteServices from '../Services/noteServices'
import DisplayNotes from '../Components/DisplayNotes'
import { setNote } from '../Redux/actions/NoteAction';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {
    return {
        notes:state.notes
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        setNote: function (payload) {
            dispatch(setNote(payload));
        }
    }
}

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            active: false,
            drawarWidth: "drawar-width",
            notes: []
        }
        this.wrapperRef = React.createRef();
    }

    getNotes() {
        noteServices.getNotes()
            .then(response => {
                console.log(response.data.data.data);
            //    ({ notes: response.data.data.data });
                this.props.setNote(response.data.data.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getNotes();
        this.setState({ notes: this.props.notes})
        console.log(this.props.notes)
    }

    handleClick() {
        !this.state.open ? this.setState({ drawarWidth: "drawar-width-open-relative" }) : this.setState({ drawarWidth: "drawar-width" });
    }

    // handleMouseHover = () => {

    //     console.log(true);
    //     if (!this.state.active && this.state.open === false) {
    //         this.setState({ open: true })
    //         this.setState({ drawarWidth: "drawar-width-open drawar-position" })
    //     }
    //     if (!this.state.active && this.state.open === true) {
    //         this.setState({ open: false })
    //         this.setState({ drawarWidth: "drawar-width drawar-position" })
    //     }
    // }

    displayDrawar() {
        if (!this.state.open) {
            return (<Drawar />)
        }
        if (this.state.open) {
            return (<DrawarOpen />)
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
                                        <Button onClick={() => { localStorage.clear(); window.location.reload('/') }} variant="light">Sign out</Button>
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
                    <div className="create-note-container">
                        <CreateNote GetNotes={() => { this.getNotes() }} />
                        <DisplayNotes GetNotes={() => { this.getNotes() }} notes={this.state.notes}/>
                    </div>
                </div>
            </>
        );
    }
} 

export default connect(mapStatetoProps,mapDispatchtoProps) (DashBoard);