import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import noteServices from '../Services/noteServices'
import '../CSS/CreateNote.scss';
import '../CSS/Update.scss'
import Menubar from '../Components/MenuBar';



export default function CustomDialog(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const clear = () => {
        setTitle('');
        setDescription();
    }

    useEffect(() => {
        setDescription(props.notes.description);
        setTitle(props.notes.title);
    }, [props.notes.description, props.notes.title]);
    const updateNotes = () => {
        const data = {
            noteId: props.notes.id,
            title: title,
            description: description
        }
        noteServices.UpdateNotes(data).then(response => {
            console.log(response);
            clear();
            props.GetNotes();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <Modal {...props} size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered  >
            <div style={{ backgroundColor: props.notes.color, width: "100%", height: "100%", borderRadius: "3px" }}>
                <div className="update-title" >
                    <input
                        className="create-note"
                        type="text"
                        value={title}
                        placeholder="Title"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="update-title">

                    <textarea
                        className="update-note-description"
                        type="text"
                        value={description}
                        placeholder="Discription"
                        onChange={(e) => { setDescription(e.target.value) }}
                        multiline
                    />

                </div>
                <div className="update-footer">
                    <div style={{ width: "68%", marginLeft: "2%" }}> 
                    <Menubar parent={"archive"} GetNotes={props.GetNotes} notesId={props.notes.id} />
                    </div>
                    <Button style={{
                        marginRight: "2%", backgroundColor: "transparent",
                        border: "none"
                    }} variant="light" onClick={() => { updateNotes(); props.onHide() }}>
                        Close
                    </Button>
                </div>
            </div>
        </Modal >
    );
}