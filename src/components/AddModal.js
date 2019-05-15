import React,{ Component } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

class AddModal extends Component {

    render(){
        return(
            <>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new user</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="New user" onChange={this.props.changed} value={this.props.user}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>Close</Button>
                        <Button variant="primary" onClick={this.props.save}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default AddModal;