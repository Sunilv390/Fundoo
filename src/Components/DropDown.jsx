import React from 'react';
import { Dropdown } from 'react-bootstrap'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import noteServices from '../Services/noteServices';


export default function DropDown(props) {


    const DeleteNote = () => {
        const Data =
        {
            isDeleted: true,
            noteIdList: [props.notesId]
        }
        console.log(props.notesId)
        noteServices.DeleteNotes(Data)
        .then(response => {
            console.log(response);
            props.GetNotes();
        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <Dropdown>
            <Dropdown.Toggle style={{ padding: "0px", backgroundColor: "transparent", border: "none" }} variant="light" id="dropdown-basic">
                <MoreVertIcon style={{ color: "#5f6368" }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => { DeleteNote() }}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
} 