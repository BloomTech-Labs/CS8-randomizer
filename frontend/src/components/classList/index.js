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
            classes: [],
            classEmpt: true
        };
    }

    componentDidMount() {
        this.props.getClasses();
        console.log("this.props.classes from componentDidMount:", this.props.classes)
        console.log("this.state.classes.length", this.state.classes.length)
        console.log("this.state.classEmpt:", this.state.classEmpt)
        if(this.state.classes.length === 0){
            this.setState({classEmpt: true
            })
    }

    else{
        this.setState({classEmpt:  false
        })
    }
    }
    
    render(){


        

        console.log('this.state.classEmpt inside render', this.state.classEmpt);

        return(
            <div className='jumbo-div'>
            { this.state.classEmpt == true ?  (
            <div className='jumbo-div'>
                <Jumbotron fluid id="jumb">
                    <Container fluid>
                        <div className="display-3">Start By Adding A Class</div>
                        <Nav id="add-button">
                        <NavLink className="NewClass" id="add-plus"><Link to="/create"> + </Link></NavLink>
                        </Nav>
                        <Nav id="createClass">
                        <NavLink id = 'addButton' href='/create'> add </NavLink>
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
                        <NavLink id = 'addButton' href='/create'> add </NavLink>
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