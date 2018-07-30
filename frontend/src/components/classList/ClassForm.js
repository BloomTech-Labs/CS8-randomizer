import React from "react";
import { connect } from "react-redux";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import { addClass, addStudent } from "../../actions";

import "./form.css";

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classname: "",
      firstname: "",
      lastname: "",
      students: []
    };
  }

  handleInputChange = event => {
    console.log("handleInputChange");
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

<<<<<<< HEAD
  handleAddClass = event => {
    const { classname } = this.state;
    this.props.addClass(classname);
    this.setState({ classname: "" });
=======
  handleAddClassAndStudents = () => {
    const { classname, students } = this.state;
    this.props.addClass({name: classname, students: students});
    this.setState({ classname: "", students: [] });
>>>>>>> 12c8f22a0d08d9d57e3b371731bf34ac573ee233
  };

  compileStudentList = () => { // This runs every time the `Add` button is pressed
    const { firstname, lastname } = this.state;
<<<<<<< HEAD
    this.props.addStudent({ first_name: firstname, last_name: lastname });
    this.setState({ firstname: "", lastname: "" });
=======
    this.setState({
      ...this.state,
      students: [...this.state.students, ...[{ first_name: firstname, last_name: lastname }]]
    });
    console.log("compileStudentList running:", this.state.students)
>>>>>>> 12c8f22a0d08d9d57e3b371731bf34ac573ee233
  };

  handleAddStudent = () => { // TODO: This will be used to add new students to a class AFTER it is made

  };

<<<<<<< HEAD
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

                    <Button id="Class-submit-button" onClick={this.handleAddClass}>Submit</Button>

                        {/* ) */}
                
=======
  render() {
    return (
      <div className="Form-div">
        <div className="Classform-div">
          <div className="Classname-box">
            <h3>Settings</h3>
>>>>>>> 12c8f22a0d08d9d57e3b371731bf34ac573ee233

            <input
              className="Classname-input"
              value={this.state.classname}
              name="classname"
              text="text"
              placeholder="Class Name"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="Options-box">
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Track Participation
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Show On Deck
              </Label>
            </FormGroup>
            <Button id="Reset-button">Reset Participation</Button>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> All Go
              </Label>
            </FormGroup>
          </div>
        </div>

        <div className="Add-div">
          <h3>Add Students</h3>
          <input
            className="lastname-input"
            value={this.state.lastname}
            name="lastname"
            text="text"
            placeholder="Last Name"
            onChange={this.handleInputChange}
          />
          <input
            className="firstname-input"
            value={this.state.firstname}
            name="firstname"
            text="text"
            placeholder="First Name"
            onChange={this.handleInputChange}
          />
          <Button id="Add-button" onClick={this.compileStudentList}>
            Add
          </Button>
          <Button id="Add-button">Import CSV</Button>
        </div>
        <div className="List-div">
          <h3>Student List</h3>
          <div>
            {/* {this.props.classlist.map(item => { */}
            {/* return( */}
            <div>
              <Card>
                <CardImg />
                <CardBody className="List-display">
                  <CardTitle />
                  <CardSubtitle />
                </CardBody>
              </Card>
            </div>
            <Button id="Class-submit-button" onClick={this.handleAddClassAndStudents}>
              Submit
            </Button>
            {/* ) */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.errorMessage,
    addingClass: state.addingClass,
    students: state.students
  };
};

export default connect(
  mapStateToProps,
  { addClass, addStudent }
)(ClassForm);
