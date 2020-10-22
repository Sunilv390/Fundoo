import React from 'react';
import {ReactComponent as NoteLogo}  from '../Assets/NoteLogo.svg';
import {ReactComponent as ReminderLogo}  from '../Assets/ReminderLogo.svg';
import {ReactComponent as EditLabel}  from '../Assets/EditLabel.svg';
import {ReactComponent as Archive}  from '../Assets/Archive.svg';
import {ReactComponent as Delete}  from '../Assets/Delete.svg';

export default function Drawar(props){

    return(
        <div className="drawar">                                        
                    <div className="drawar-icon">
                        <NoteLogo className="icon"/>                        
                     </div>
                     <div className="drawar-icon">
                        <ReminderLogo className="icon"/>                            
                     </div >                           
                     <div className="drawar-icon">
                        <EditLabel className="icon"/>                        
                     </div>                           
                     <div className="drawar-icon">
                        <Archive className="icon"/>                          
                     </div>
                     <div className="drawar-icon">
                        <Delete className="icon"/>                                                                               
                     </div>                                                              
        </div>        
    );
} 