import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

const addProject = (props) => {
   
        return (
            <>
                <Modal show={props.show} onHide={props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new project</Modal.Title>
                    </Modal.Header>
                    <Form method="POST" action="http://localhost:9000/upload-project" encType="multipart/form-data">
                    <Modal.Body>
                        <Form.Group>
                            <Form.Control type="text" name="title" placeholder="Name" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" name="content" rows="3" placeholder="Description" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" name="projectUrl" placeholder="Url" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Choose an image for your project</Form.Label>
                            <Form.Control type="file" name="image" placeholder="Image" required/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>Close</Button>
                        <Button type="submit" variant="primary">Save</Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </>
        )
    
};

export default addProject;