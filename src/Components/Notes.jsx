import React from 'react'
import CreateNote from '../Components/CreateNote';
import DisplayNotes from '../Components/DisplayNotes';
import noteServices from '../Services/noteServices'
import '../CSS/Dashboard.scss';
import { setNote } from '../Redux/actions/NoteAction';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        setNote: function (payload) {
            dispatch(setNote(payload));
        }
    }
}

class Note extends React.Component{

    constructor(props){
        super(props)
        this.state={            
            notes:[],
            // isDeleted:false
        }
    }

    getNotes(){
        let note=[]
        noteServices.getNotes().then(response=>{
            console.log(response.data.data.data);
            note=this.props.setNote(response.data.data.data.filter(note=>note.isDeleted===false && note.isArchived===false));
            this.setState({notes:note});
        })
        .catch(error=>{
            console.log(error);
        });
    }

    componentDidMount() {
        this.getNotes();
        this.setState({ notes: this.props.notes })
        console.log(this.props.notes)
    }

    render(){

        return(
            <div className="create-note-container">
                <CreateNote GetNotes={()=>{this.getNotes()}} />
                <DisplayNotes parent={"display"} GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/>                    
            </div> 
        );
    }
} 

export default  connect(mapStatetoProps, mapDispatchtoProps) (Note);