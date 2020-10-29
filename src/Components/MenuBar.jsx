import React from 'react';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import '../CSS/CreateNote.scss';
import noteServices from '../Services/noteServices'
import {Dropdown} from 'react-bootstrap';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import {ReactComponent as ArchiveIcon} from '../Assets/Archive.svg';
import { propTypes } from 'react-bootstrap/esm/Image';
import DropDown from './DropDown';

export default function Menubar(props){
    const changeColor=(color)=>{
        console.log(props.notes);
        const Data={
            color:color,
            noteIdList: [props.notesId]
        }
        noteServices.changeColor(Data).then(response=>{
            console.log(response)
            props.GetNotes();
        }).catch(error=>{
            console.log(error);
        });

    }

    return(
        <div className={propTypes.className} style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"60%"}}>
           <AddAlertIcon className="icon-design"/>
            <PersonAddIcon className="icon-design"/>           
           <Dropdown>
            <Dropdown.Toggle style={{ padding:"0px",border:"none",backgroundColor:"transparent"}} variant="light" id="dropdown-basic">                
                <ColorLensIcon className="icon-design"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item  >
                    <div style={{display: "flex",flexWrap: "wrap"}}>
                        <div onClick={()=>{changeColor("#ff8000")}} style={{border:"1px solid red",backgroundColor: "ff8000"}} className="color-chooser" ></div>
                        <div onClick={()=>{changeColor("#bf00ff")}} style={{backgroundColor: "purple"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#FFFF00")}} style={{border:"1px solid yellow",backgroundColor: "yellow"}} className="color-chooser" ></div>
                        <div onClick={()=>{changeColor("#00ffff")}} style={{border:"1px solid blue",backgroundColor: "blue"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#16db93")}} style={{border:"1px solid green",backgroundColor: "16db93"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#C0C0C0")}} style={{border:"1px solid silver",backgroundColor: "silver"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#FFFFFF")}} style={{border:"1px solid whitesmoke",backgroundColor: "whitesmoke"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#a65959")}} style={{border:"1px solid maroon",backgroundColor: "maroon"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#ADD8E6")}} style={{border:"1px solid lightblue",backgroundColor: "lightblue"}} className="color-chooser"></div>
                    </div>
                </Dropdown.Item>            
            </Dropdown.Menu>
            </Dropdown>
           <CropOriginalIcon className="icon-design"/>
            <ArchiveIcon style={{fill:"#5f6368"}}className="icon-design" />
            <DropDown GetNotes={props.GetNotes} notesId={props.notesId}/>
        </div>
    )
} 