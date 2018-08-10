import React from "react";
import {
  Jumbotron,
  Container,
  NavLink,
  Nav,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClasses } from "../../actions";
// import { ClassCard } from '../classCard';
import { LineChart } from "react-easy-chart";
import "./index.css";

class ClassList extends React.Component {
  componentDidMount() {
    this.props.getClasses();
    console.log(
      "this.props.classes from componentDidMount:",
      this.props.classes
    );
    // if (this.props.classes.length === 0) {
    //   this.setState({
    //     classes_empty: true
    //   });
    // } else if (this.props.classes.length > 0) {
    //   this.setState({
    //     classes_empty: false
    //   });
    // }
  }

  render() {
    console.log("this.props.classes in render:", this.props.classes);

    // console.log("classes_empty:", this.state.classes_empty);

    return (
      <div className="jumbo-div">
        {this.props.classes.length === 0 ? (
          <div className="jumbo-div">
            <Jumbotron fluid id="jumb">
              <Container fluid>
                <div className="display-3">Start By Adding A Class</div>
                <Nav id="add-button" className="Empty-create">
                  <NavLink href="/create" className="NewClass" id="add-plus">
                    +
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
                        // classid: classitem._id,
                        class: classitem
                      }
                    }}
                  >
                    <CardBody>
                      <CardTitle>{classitem.name}</CardTitle>
                      <br />

                      <CardSubtitle>
                        Students: {classitem.students.length}
                        <br />
                        Participation: {classitem.participation}%
                      </CardSubtitle>
                      
                    </CardBody>
                    {/* <CardFooter> */}
                    <LineChart
                        // xDomainRange={[0, 100]}
                        yDomainRange={[-5, 150]}
                        xType={"time"}
                        // dataPoints
                        // axes
                        grid
                        verticalGrid
                        // interpolate={"cardinal"}
                        lineColors={["white"]}
                        width={210}
                        height={100}
                        data={[
                          classitem.graph_data
                        ]}
                        style={
                          {
                            // backgroundColor: "#584573",
                            display: "flex",
                            justifyContent: "center"
                          }
                        }
                      />
                      {/* </CardFooter> */}
                  </Link>
                </Card>
              );
            })}
            <Nav id="add-button">
              <NavLink className="NewClass">
                <Link to="/create" id="add-plus">
                  {" "}
                  +{" "}
                </Link>
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
    user: state.user,
    classes_empty: state.classes_empty
  };
};

export default connect(
  mapStateToProps,
  { getClasses }
)(ClassList);
