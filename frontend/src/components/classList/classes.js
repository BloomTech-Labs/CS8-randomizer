import React from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';

import './index.css'

export default class ClassNotes extends React.Component {
    constructor(){
        super();
        this.state={
            classes: []
        }
    }
 
    render(){
        return(
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Add a new class</h1>
                        <Button className="NewClass"> + </Button>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}