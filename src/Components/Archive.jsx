import React from 'react'
import DisplayNotes from '../Components/DisplayNotes';
import noteServices from '../Services/noteServices';
import '../CSS/Dashboard.scss';

export default class Archive extends React.Component{

    constructor(props){
        super(props)
        this.state={            
            notes:[],
            isDeleted:true
        }
    }

    getNotes(){
        let note=[];
        noteServices.getNotes().then(response=>{
            console.log(response.data.data.data);
            note=response.data.data.data.filter(note=>note.isArchived);
            this.setState({notes:note});
        })
        .catch(error=>{
            console.log(error);
        });
    }

    componentDidMount(){
       this.getNotes();       
    }

    render(){

        return(
            <div className="create-note-container">                
                <DisplayNotes parent={"archive"} GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/>  
            </div> 
        );
    }
} 