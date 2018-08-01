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
  CardSubtitle,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

import { addClass, addStudent } from "../../actions";

import "./form.css";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      classname: "",
      firstname: "",
      lastname: "",
      students: [
        {
        firstname: String,
        lastname: String,
        }

      ],
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }))
}

  handleInputChange = event => {
    console.log("handleInputChange");
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };


  handleAddClass = event => {
    const { classname } = this.state;
    this.props.addClass(classname);
    this.setState({ classname: "" });

  };

  compileStudentList = () => { // This runs every time the `Add` button is pressed
    const { firstname, lastname } = this.state.students;
    console.log('add')

    this.props.addStudent({ first_name: firstname, last_name: lastname });
    this.setState({ firstname: "", lastname: "" });

  };

  handleAddStudent = () => { // TODO: This will be used to add new students to a class AFTER it is made

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
            className="lastname-input"
            value={this.state.students.lastname}
            name="lastname"
            text="text"
            placeholder="Last Name"
            onChange={this.handleInputChange}
          />
          <input
            className="firstname-input"
            value={this.state.students.firstname}
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
            <div>
            <div>
              <Card>
                <CardImg />
                <CardBody className="List-display">
            {this.state.students.map(student => {
            return(
              <div>
                <Dropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}>
                <DropdownToggle>
                  {student.firstname}{student.lastname}
                  {/* mark */}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Remove</DropdownItem>
                </DropdownMenu>
              </Dropdown> 
              </div>
                )
              }
            )
          }
                </CardBody>
              </Card>

            </div>
              </div>
          {/* </div> */}
            <Button id="Class-submit-button" onClick={this.handleAddClassAndStudents}>
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
)(EditForm);
