import React,{ useEffect,useState } from "react";
import {Toast,Row,Col} from 'react-bootstrap';

export default function CustomToast(props) {
    const [show,setShow]=useState(false);
    useEffect(()=>{
        setShow(props.display)
    },[props.display]);
    return (        
      <Row>
          <Col xs={6}>
          <Toast onClose={()=>{setShow(false)}} show={show} delay={3000} autohide>
            <Toast.Header>              
              <strong className="mr-auto">Status</strong>              
            </Toast.Header>
            <Toast.Body>{props.message}!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }