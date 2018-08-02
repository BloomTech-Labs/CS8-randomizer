import React from "react";
import { connect } from "react-redux";
import {
  Button,
  FormGroup,
  Label,
  Input,
<<<<<<< HEAD

  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
=======
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
>>>>>>> 3ac3100bd25ec06aad139664716fb14e60da6438
  UncontrolledButtonDropdown
} from "reactstrap";

import { addClass, addStudent } from "../../actions";

import "./form.css";

import uuidv4 from "uuid/v4";

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      classname: "",
      firstname: "",
      lastname: "",
<<<<<<< HEAD

=======
>>>>>>> 3ac3100bd25ec06aad139664716fb14e60da6438
      students: [],
      btnDropleft: false
    };
  }

  toggle = () => {
    this.setState({ btnDropleft: !this.state.btnDropleft });
  };

  handleInputChange = event => {
    // console.log("handleInputChange");
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

<<<<<<< HEAD

  handleAddClassAndStudents = () => {
    const { classname, students } = this.state;
    const collection = students
    const full_name = [] 
    collection.map(item=> {
      full_name.push({first_name: item.first_name, last_name: item.last_name})
    })
    console.log("FULL_NAME ARRAY:", full_name)
    if (classname === ""){
      alert("Oh no!! Looks like you forgot to add a Class Name!")
      return
    } else {
    this.props.addClass({ name: classname, students: full_name });
    this.setState({ classname: "", students: [], firstname: "", lastname: "" });
    }
=======
  handleAddClassAndStudents = () => {
    const { classname, students } = this.state;
    this.props.addClass({ name: classname, students: students });
    this.setState({ classname: "", students: [] });
>>>>>>> 3ac3100bd25ec06aad139664716fb14e60da6438
  };

  compileStudentList = () => {
    // This runs every time the `Add` button is pressed
    const { firstname, lastname } = this.state;
    const newStudent = {
      first_name: firstname,
      last_name: lastname,
<<<<<<< HEAD
      component_state_id: uuidv4()
=======
      state_id: uuidv4()
>>>>>>> 3ac3100bd25ec06aad139664716fb14e60da6438
    };
    const students = this.state.students;
    students.push(newStudent);
    this.setState({
      students: students,
      firstname: "",
      lastname: ""
    });
    // console.log("compileStudentList running:", this.state.students);
  };

  removeStudent = id => {
    console.log("id from removeStudent:", id);
    const students = this.state.students;
  };

  handleAddStudent = () => {
    // TODO: This will be used to add new students to a class AFTER it is made
  };

  render() {
    return (
      <div className="Form-div">
        <div className="Classform-div">
          <div className="Classname-box">
            <h3>Settings</h3>

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

<<<<<<< HEAD

=======
>>>>>>> 3ac3100bd25ec06aad139664716fb14e60da6438
          <input
            className="firstname-input"
            value={this.state.firstname}
            name="firstname"
            text="text"
            placeholder="First Name"
            onChange={this.handleInputChange}
          />
          <input
            className="lastname-input"
            value={this.state.lastname}
            name="lastname"
            text="text"
            placeholder="Last Name"
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
<<<<<<< HEAD

            {this.state.students.map(obj => {
              var first = obj.first_name;
              var last = obj.last_name;
              var id = obj.component_state_id;
=======
            {this.state.students.map(obj => {
              var first = obj.first_name;
              var last = obj.last_name;
              var id = obj.state_id;
>>>>>>> 3ac3100bd25ec06aad139664716fb14e60da6438
              return (
                <UncontrolledButtonDropdown
                  direction="left"
                  onClick={this.toggle}
                  value={first}
                >
                  <DropdownToggle caret>{first + " " + last}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <div onClick={this.removeStudent(id)}>Remove</div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              );
            })}
            <Button
              id="Class-submit-button"
              onClick={this.handleAddClassAndStudents}
            >
              Submit
            </Button>
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
