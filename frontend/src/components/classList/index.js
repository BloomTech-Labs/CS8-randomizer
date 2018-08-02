import React from 'react';
import { Button, Jumbotron, Container, NavLink, Nav, Card, CardImg, CardText, 
    CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClasses } from '../../actions';
// import { ClassCard } from '../classCard';

import './index.css';

class ClassList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            classes: this.props.classes,
            classEmpt: "true"
        };
    }

    componentDidMount() {
        this.props.getClasses();
    }
    
    render(){
        
        // let x = this.props.classes[0]

        // console.log('a', x.name)

        let classEmpt = true;

        if(this.props.classes.length == 0){
                classEmpt = true
        }

        else{
                classEmpt = false
        }

        console.log('Am I empty inside?', classEmpt);

        return(
            <div className='jumbo-div'>
            { this.classEmpt == true ?  (
            <div className='jumbo-div'>
                <Jumbotron fluid id="jumb">
                    <Container fluid>
                        <h1 className="display-3">Start By Adding A Class</h1>
                        <Nav id="add-button">
                        <NavLink className="NewClass" id="add-plus"><Link to="/create"> + </Link></NavLink>
                        </Nav>
                        <Nav id="createClass">
                        <NavLink id = 'addButton' href='/classes/create'> add </NavLink>
                        </Nav>
                    </Container>
                </Jumbotron>
        </div>
            ):(
                <div className='Class-div'> 
                {this.props.classes.map(classitem => {
                 return(  
                    <Card id='Class-card'>
                <Link to={{ 
                    pathname: `/classes/${classitem._id}`, 
                    state: {classid: classitem._id,
                            class: classitem
                            } 
                    }}>

                        <CardBody>
                            <CardTitle>{classitem.name}</CardTitle>
                            <CardSubtitle>{classitem.students.length}</CardSubtitle>
                            <CardSubtitle></CardSubtitle>
                        </CardBody>

                        
                        </Link>
                    </Card>
                             );
                        }
                    )
                } 
                    <Nav id="add-button">
                        <NavLink className="NewClass" id="add-plus"><Link to="/create"> + </Link></NavLink>
                        </Nav>
                        <Nav id="createClass">
                        <NavLink id = 'addButton' href='/classes/create'> add </NavLink>
                        </Nav>
                </div>
            )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        classes: state.classes,
        user: state.user    
    };
    
}

export default connect(mapStateToProps, { getClasses })(ClassList);