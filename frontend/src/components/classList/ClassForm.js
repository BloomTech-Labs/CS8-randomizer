import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input, Card, CardText, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import { addClass } from '../../actions';

import './form.css';

class ClassForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            classname: '',
            firstname: '',
            lastname: '',
            classlist: []
        }
    }
    
    handleInputChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    handleAddClass = event => {
        const {classname, firstname, lastname} = this.state;
        this.props.addClass({classname, firstname, lastname});
        this.setState({classname: '', firstname: '', lastname: ''})
    };

    render(){
        return(
            
            <div className="Form-div">
                <div className="Classform-div">
                    <div className='Classname-box'>
                        <h3>Settings</h3>
                        
                                <input 
                                    className='Classname-input' 
                                    value={this.state.classname}
                                    name="classname"
                                    text="text"
                                    placeholder="Class Name"
                                    onChange={this.handleInputChange}    
                                />
                            </div>
                    <div className='Options-box'>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                    Track Participation
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                    Show On Deck
                            </Label>
                        </FormGroup>
                        <Button id="Reset-button">
                            Reset Participation
                        </Button>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                    All Go
                            </Label>
                        </FormGroup>
                    </div>
                </div>

                <div className="Add-div">
                    <h3>Add Students</h3>
                        <input
                            className='lastname-input'
                            value={this.state.lastname}
                            name="lastname"
                            text="text"
                            placeholder="Last Name"
                            onChange={this.handleInputChange}
                        />
                        <input 
                            className='firstname-input'
                            value={this.state.firstname}
                            name="firstname"
                            text="text"
                            placeholder="First Name"
                            onChange={this.handleInputChange}
                        />
                        <Button id="Add-button">
                            Add
                        </Button>
                        <Button id="Add-button">
                            Import CSV
                        </Button>

                </div>
                <div className="List-div">
                    <h3>Student List</h3>
                    <div >
                        {/* {this.props.classlist.map(item => { */}
                            {/* return( */}
                                <div>
                                    <Card>
                                        <CardImg />
                                            <CardBody className="List-display">
                                                <CardTitle></CardTitle>
                                                <CardSubtitle></CardSubtitle>
                                            </CardBody>
                                    </Card>
                                </div>
                        <Button id="Class-submit-button">Submit</Button>
                            {/* ) */}
                    

                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        error: state.errorMessage,
        addingClass: state.addingClass
    }
}

export default connect(mapStateToProps, {addClass})(ClassForm)