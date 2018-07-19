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
                        <div className="add_new_class">Add a new class</div>
                        <Link className="plus_button" to={`/classes/create/`}> + </Link>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}