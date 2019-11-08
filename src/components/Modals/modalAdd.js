import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const addProject = (props) => {
   
        return (
            <>
                <Modal show={props.show} onHide={props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder="Description" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Url"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Choose an image for your project</Form.Label>
                            <Form.Control type="file" placeholder="Image"/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>Close</Button>
                        <Button variant="primary" onClick={props.save}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    
};

export default addProject;