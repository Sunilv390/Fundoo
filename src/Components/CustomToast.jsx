import React from "react";
import {Toast,Row,Col} from 'react-bootstrap';

export default function CustomToast(props) {

    return (        
      <Row>
          <Col xs={6}>
          <Toast onClose={()=>{props.onClose()}} show={props.display} delay={3000} autohide>
            <Toast.Header>              
              <strong className="mr-auto">Status</strong>              
            </Toast.Header>
            <Toast.Body>{props.message}!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }