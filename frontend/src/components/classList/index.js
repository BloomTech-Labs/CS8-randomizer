import React from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getClasses } from '../../actions'

import './index.css'

export default class ClassList extends React.Component {
 
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