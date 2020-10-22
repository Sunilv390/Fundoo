import React from 'react';
import {ReactComponent as NoteLogo}  from '../Assets/NoteLogo.svg';
import {ReactComponent as ReminderLogo}  from '../Assets/ReminderLogo.svg';
import {ReactComponent as EditLabel}  from '../Assets/EditLabel.svg';
import {ReactComponent as Archive}  from '../Assets/Archive.svg';
import {ReactComponent as Delete}  from '../Assets/Delete.svg';

export default function DrawarOpen(props){

    return(
        <div className="drawar">                                                             
                     <div className="drawar-icon-contener-open">
                        <NoteLogo className="drawar-icon-open"/>
                        <spam className="icon-lable">Notes</spam>   
                     </div>
                     <div className="drawar-icon-contener-open">
                        <ReminderLogo className="drawar-icon-open"/>    
                        <spam className="icon-lable">Reminder</spam>  
                     </div >                           
                     <div className="drawar-icon-contener-open">
                        <EditLabel className="drawar-icon-open"/>
                        <spam className="icon-lable">Edit Lable</spam>  
                     </div>                           
                     <div className="drawar-icon-contener-open">
                        <Archive className="drawar-icon-open"/>  
                        <spam className="icon-lable">Archive</spam>                                                         
                     </div>
                     <div className="drawar-icon-contener-open">
                        <Delete className="drawar-icon-open"/>   
                        <spam className="icon-lable">Trash</spam>                                                        
                     </div>                                                            
        </div>        
    );
} 