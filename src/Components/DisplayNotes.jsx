import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../CSS/CreateNote.scss';
import { useDispatch, useSelector } from 'react-redux'
import MenuBar from '../Components/MenuBar';
import CustomDialog from './CustomDialog'

export default function DisplayNotes(props) {
    const dispatch = useDispatch()
    const Note = useSelector(state => state.notes)
    const [show, setShow] = useState(false);
    const [currentNote, setNote] = useState('');

    const handleOnClick = (object) => {
        setShow(true)
        setNote(object);
    }
    const Notes = Note.map(note =>
        note.isDeleted ? "" :
            <div className="notes-style" style={{ backgroundColor: note.color }}>
                <div onClick={() => { handleOnClick(note) }} className="notes-title">{note.title}
                </div>
                <div className="notes-body">{note.description}
                </div>
                <div className="notes-footer"><MenuBar GetNotes={props.GetNotes} notesId={note.id} className="note-menu" />
                </div>
            </div>
    );

    return (
        <div className="display-notes">
            {() => dispatch(setNote())}
            {Notes}
            <CustomDialog GetNotes={props.GetNotes} notes={currentNote} show={show} onHide={() => { setShow(false) }} />
        </div>
    );

}  