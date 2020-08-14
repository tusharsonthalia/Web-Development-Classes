import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, Button} from 'reactstrap';

export default class Demo extends Component {
    state = {
        books: [],
        newBookModal: false
    }

    toggleNewBookModal=()=> {
        this.setState({
            newBookModal:!this.state.newBookModal
        })
    }

    componentWillMount() {
        axios.get('http://localhost:3000/').then((response)=>{
            this.setState({
                books: response.data
            })
        })
    }

    addBook
    
    render() {
        return (
            <React.Fragment>
                <Button color="primary" onClick={this.toggleNewBookModal}>Add New Book</Button>
                <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal}>
                    <ModalHeader toggle={this.toggleNewBookModal}>Add a New Book</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="rating">Rating</Label>
                            <Input id="rating"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                            <Button color="primary" onClick={this.toggleNewBookModal}>Add Book</Button>{' '}
                            <Button color="secondary" onClick={this.toggleNewBookModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>The Hitchiker's Guide to the Galaxy</td>
                            <td>4.5</td>
                            <td>
                                <Button color="success" size="sm">Edit</Button>
                                <Button color="danger" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}