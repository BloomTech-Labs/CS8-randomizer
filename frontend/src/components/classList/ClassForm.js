import React from "react";
import { connect } from "react-redux";
import ReactDOM from 'react-dom'
import {CSVLink, CSVDownload} from 'react-csv';
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
  CardSubtitle,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ButtonDropdown
} from "reactstrap";

import { addClass, addStudent } from "../../actions";

import "./form.css";

import uuidv4 from "uuid/v4";
// const headers = [
//   {label: 'Classname', key: 'classname'},
//   {label: 'First Name', key: 'firstname'},
//   {label: 'Last Name', key: 'lastname'},
 
// ];
const data = [
  
  ['classname','firstname', 'lastname' ] 
  
];

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      classname: "",
      firstname: "",
      lastname: "",

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
  };

  compileStudentList = () => {
    // This runs every time the `Add` button is pressed
    const { firstname, lastname } = this.state;
    const newStudent = {
      first_name: firstname,
      last_name: lastname,
      component_state_id: uuidv4()
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

  removeStudent = (event) => {
    console.log('x', event.target._id);
    const students = this.state.students;
    students.splice(event.target.id, 1);

    this.setState({
      students: students
    })
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
          <Button id="Add-button">
<span>
 <CSVLink data={data} onClick={this.compileStudentList}>Import CSV</CSVLink>
</span>
</Button>
        </div>
        <div className="List-div">
          <h3>Student List</h3>
          <div>
          <div>
            {/* {this.props.classlist.map(item => { */}
            <div>
            <div>
              <Card>
                <CardImg />
                <CardBody className="List-display">
            {this.state.students.map(obj => {
              var first = obj.first_name;
              var last = obj.last_name;
              var id = obj.component_state_id;
              return (

                <Button 
                  id='student-button' 
                  onClick={this.removeStudent} 
                  _id={id}> 
                  x {first + " " + last} 
                </Button>

              );
            })}
            </CardBody>
              </Card>

            </div>
              </div>
            <Button
              id="Class-submit-button"
              onClick={this.handleAddClassAndStudents}
            >
              Submit
            </Button>
          </div>
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
