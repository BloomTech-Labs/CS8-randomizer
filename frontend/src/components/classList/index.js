import React from 'react';
import { Button, Jumbotron, Container, NavLink, Nav, Card, CardImg, CardText, 
    CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getClasses } from '../../actions';
// import { ClassCard } from '../classCard';

import './index.css';

// function mapStateToProps(state){
//     return { 
//         classes: state.classes,
//         user: state.user    
//     };
// }

// classAmount = this.state.classes.length();

export default class ClassList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            classlist: [],
            classEmpt: "true"
        }
    }



    componentDidMount() {
        // this.props.getClasses(this.props.user);
        if(this.state.classlist.length == 0){
            this.setState({
                classEmpt: 'true'
            })

            console.log(this.state.classlist.length)
        }
        
        else if(this.state.classlist.length < 0){
            alert('You have done something really bad to get here, please contact the devs with this message...');
            console.log(this.state.classlist.length)
        }
        
        else{
            this.setState({
                classEmpt: 'false'
            })
            console.log(this.state.classlist.length)
        }
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
                
                    <Card id='Class-card'>
                        <Link to="/classes/:id">

                        <CardBody>
                            <CardTitle id='Class-title'>Class Name</CardTitle>
                            <CardSubtitle id='Class-subtitle'>Students</CardSubtitle>
                            <CardSubtitle>Participation</CardSubtitle>
                        </CardBody>
                        {/* <CardImg>A graph</CardImg> */}
                </Link>
                    </Card>
                </div>
            )}
            </div>
        );
    }
}