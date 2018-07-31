import React from 'react';
import { Button, Jumbotron, Container, NavLink, Nav, Card, CardImg, CardText, 
    CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClasses } from '../../actions';
// import { ClassCard } from '../classCard';

import './index.css';

function mapStateToProps(state){
    return { 
        classes: state.classes,
        user: state.user    
    };
}

// classAmount = this.state.classes.length();

class ClassList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // classlist: state.classes,
            // classEmpt: true,
            // classes: this.state.classes,
            // user: this.state.user
        };
    }




    componentDidMount() {

        console.log('mounted', this.state)
    //     // this.props.getClasses(this.props.user);

    //     this.props.getClasses(this.props.user);



    //     if(this.state.classes.length == 0){
    //         this.setState({
    //             classEmpt: 'true'
    //         })

    //         console.log(this.state.classes.length)
    //     }
        
    //     else if(this.state.classes.length < 0){
    //         alert('You have done something really bad to get here, please contact the devs with this message...');
    //         console.log(this.state.classes.length)
    //     }
        
    //     else{
    //         this.setState({
    //             classEmpt: 'false'
    //         })
    //         console.log(this.state.classes.length)
        // }
    }
    
    render(){


        return(
            <div className='jumbo-div'>
            { this.state.classEmpt == 'true' ?  (
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
                        <Link to="/classes/:id">

                        <CardBody>
                            <CardTitle>(Insert Class Name){classitem.classname}</CardTitle>
                            <CardSubtitle>(Insert Class Size){classitem.students.length()}</CardSubtitle>
                            <CardSubtitle>(Insert Participation Amount)</CardSubtitle>
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

export default connect(mapStateToProps, { getClasses })(ClassList);