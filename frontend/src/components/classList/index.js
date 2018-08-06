import React from "react";
import {
  Jumbotron,
  Container,
  NavLink,
  Nav,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClasses } from "../../actions";
// import { ClassCard } from '../classCard';

import "./index.css";

class ClassList extends React.Component {

  componentDidMount() {
    this.props.getClasses();

    console.log(
      "this.props.classes from componentDidMount:",
      this.props.classes
    );
  }

  render() {
    console.log(
      "this.props.classes outside componentDidMount:",
      this.props.classes
    );

    return (
      <div className="jumbo-div">
        {this.props.classes.length === 0 ? (
          <div className="jumbo-div">
            <Jumbotron fluid id="jumb">
              <Container fluid>
                <div className="display-3">Start By Adding A Class</div>
                <Nav id="add-button">
                  <NavLink className="NewClass" id="add-plus">
                    <Link to="/create"> + </Link>
                  </NavLink>
                </Nav>
                <Nav id="createClass">
                  <NavLink id="addButton" href="/create">
                    {" "}
                    add{" "}
                  </NavLink>
                </Nav>
              </Container>
            </Jumbotron>
          </div>
        ) : (
          <div className="Class-div">
            {this.props.classes.map(classitem => {
              return (
                <Card id="Class-card">
                  <Link
                    to={{
                      pathname: `/classes/${classitem._id}`,
                      state: {
                        classid: classitem._id,
                        class: classitem
                      }
                    }}
                  >
                    <CardBody>
                      <CardTitle>{classitem.name}</CardTitle>
                      <br />

                      <CardSubtitle>
                        Students: {classitem.students.length}
                      </CardSubtitle>
                    </CardBody>
                  </Link>
                </Card>
              );
            })}
            <Nav id="add-button">
              <NavLink className="NewClass" >
                <Link to="/create" id="add-plus"> + </Link>
              </NavLink>
            </Nav>
            <Nav id="createClass">
              <NavLink id="addButton" href="/create">
                {" "}
                add{" "}
              </NavLink>
            </Nav>
          </div>
        )}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    classes: state.classes,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getClasses }
)(ClassList);
