import { withRouter } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { CSVLink, CSVDownload } from "react-csv";
import {
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { addClass, addStudent } from "../../actions";
import swal from "sweetalert";
import "./form.css";

import uuidv4 from "uuid/v4";
// const headers = [
//   {label: 'Classname', key: 'classname'},
//   {label: 'First Name', key: 'firstname'},
//   {label: 'Last Name', key: 'lastname'},

// ];
const data = [["classname", "firstname", "lastname"]];

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      classname: "",
      firstname: "",
      lastname: "",

      participated: 0,

      allMode: false,
      partMode: false,
      students: [],
      btnDropleft: false
    };
  }

  toggle = () => {
    this.setState({ allMode: !this.state.allMode });
  };

  partToggle = () => {
    this.setState({ partMode: !this.state.partMode});
  }

  handleInputChange = event => {
    // console.log("handleInputChange");
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddClassAndStudents = () => {
    const { classname, students } = this.state;
    const collection = students;
    const full_name = [];
    collection.map(item => {
      full_name.push({
        first_name: item.first_name,
        last_name: item.last_name
      });
    });
    console.log("FULL_NAME ARRAY:", full_name);
    if (classname === "") {
      swal({
        icon: "error",
        text: "Oh no!! Looks like you forgot to add a Class Name!"
      });
      return;
    } else if (students === []) {
      swal({
        icon: "error",
        text: "Sorry! You must add at least one student to create a class!"
      });
      return;
    } else {
      this.props.addClass(
        { name: classname, students: full_name },
        this.props.history
      );
      this.setState({
        classname: "",
        students: [],
        firstname: "",
        lastname: ""
      });
    }
  };

  compileStudentList = () => {
    // This runs every time the `Add` button is pressed
    const { firstname, lastname, participated, allMode, partMode } = this.state;

    if (firstname === "") {
      swal({
        icon: "error",
        text: "Oops!! Looks like you forgot to add a first name!"
      });
      return;
    } else if (lastname === "") {
      swal({
        icon: "error",
        text: "Oops!! Looks like you forgot to add a last name!"
      });
      return;
    }else {
      const newStudent = {
        first_name: firstname,
        last_name: lastname,
        component_state_id: uuidv4(),
        participated: participated,
        allMode: allMode,
        partMode: partMode
      };
      const students = this.state.students;
      students.push(newStudent);
      this.setState({
        students: students,
        firstname: "",
        lastname: "",
        participated: 0,
        allMode: false
      });
      // console.log("compileStudentList running:", this.state.students);
    }

  };

  removeStudent = event => {
    console.log("x", event.target._id);
    const students = this.state.students;
    students.splice(event.target.id, 1);

    this.setState({
      students: students
    });
  };

  handleAddStudent = () => {
    // TODO: This will be used to add new students to a class AFTER it is made
  };

  render() {
    console.log('rand', this)
    return (
      <div className="Form-div">

        <div className="Form-container">
          <div className="Form-container_left">
            <div className="Classname-box">
              <div className="Classname-box_content">
                <div className="title">Settings</div>

                <input
                  className="Classname-input"
                  value={this.state.classname}
                  name="classname"
                  text="text"
                  placeholder="Class Name"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="Options-box">
              <div className="Options-box_content">
                <div className="title">Options</div>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Track Participation
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
            <div className="Add-box">
              <div className="Add-box_content">
                <div className="title">Add Students</div>

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
                    <CSVLink data={data} onClick={this.compileStudentList}>
                      Import CSV
                    </CSVLink>
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="List-box">
            <div className="List-box_content">
              <div className="title title_student-list">Student List</div>

              <div>
               
                {this.state.students.map(obj => {
                  var first = obj.first_name;
                  var last = obj.last_name;
                  var id = obj.component_state_id;
                  return (
                    <Button
                      id="student-button"
                      onClick={this.removeStudent}
                      _id={id}
                    >
                      x {first + " " + last}
                    </Button>
                  );
                })}
              
              </div>
            </div>

            <div className="submitButton-box">
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

export default withRouter(
  connect(
    mapStateToProps,
    { addClass, addStudent }
  )(ClassForm)
);
