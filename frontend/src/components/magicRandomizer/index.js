import React, { Component } from "react";
// import Carousel from "./Carousel";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { getClasses } from "../../actions";
import swal from "sweetalert";

import "./magicRandomizer.css";
import { connect } from "react-redux";

class MagicRandomizer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      className: "",
      classid: this.props.match.params.id,
      // student: this.props.classes.stud
      class: this.props.location.state.class,
      students: this.props.location.state.class.students,
      studentPick: [],
      allstudents: [],
      allArr: [],
      allMode: this.props.location.state.class.allMode,
      trackMode: this.props.location.state.class.trackMode,
      randInit: false,
      participated: this.props.location.state.class.participation,
      // declined: 0,
      partDecCheck: false,
      // participated: Number,
      // declined: Number
      call_record: [],
      participation_rate: 0,
      mounted: false,
    };
  }

  toggle = () => {
    // this
    (this.props.location.state.class.allMode = !this.props.location.state.class
      .allMode),
      this.setState({ allMode: this.props.location.state.class.allMode });
    console.log(this.state.allMode);
  };

  idGetter = () => {
    let classes = this.props.classes;
    let id;

    for (let i = 0; i < classes.length; i++) {
      // console.log('updating', classes[i]._id);
      if (classes[i]._id === this.props.match.params.id) {
        id = classes[i]._id;
        this.setState({
          class: id
        });

        console.log("mounted id", this.state.class);
      }
    }
  };

  // checkHandler = () => {
  //   this.setState({
  //     allMode: !this.state.allMode
  //   })

  //   console.log('check handler', this.state.allMode);
  // }

  componentDidMount() {
    this.props.getClasses();
    console.log("mount", this.props);
    if (this.props.classes.length === 1){
    swal({
      title: "Getting Started with Randomizer",
      text:
        "If ` Tracking Mode ` is ON (graph is visible):\n\nClick `Reset All Go` to fill your deck.\nOnce the `RANDOMIZER` button is clicked, the name of the first student to call on will appear.\nClick the appropriate button for whether the student `Participated` or `Declined`.\n\n  If ` Tracking Mode` is OFF (no graph visible):\n\nSimply use the `RANDOMIZER` button to randomly select a student in the class."
    });
    }

    this.setState({
      mounted: true,
    })

    console.log("I'm mounting my horse...", this.state.mounted)

    if(this.state.allMode == false){
    this.randomHandler();
    }

    if(this.state.allMode == true){
      this.resetHandler();
      this.allGoHandler();
    }
  }

  randomHandler = () => {
    let studentPick = this.state.studentPick;
    let studentArray = this.state.students;
    studentPick = studentArray[Math.floor(Math.random() * studentArray.length)];
    this.setState({
      studentPick: studentPick,
      partDecCheck: false
    });
  };

  allGoHandler = () => {
    let allArray = this.state.allstudents;
    if (allArray.length > 0) {
      let pick = allArray.splice(
        Math.floor(Math.random() * allArray.length),
        1
      );
      console.log("p", pick);
      this.setState({
        allArr: pick[0],
        partDecCheck: false
      });
    }

    // if(this.trackMode == true){

        if (allArray.length <= 0 && this.state.mounted == true) {
        // this.resetHandler()
        if(this.state.trackMode == true){
        swal({
          // icon: "success",
          className: "out_of_students",
          title: `${Math.floor(this.state.participation_rate)}% of your class participated this round! Please Press Reset!`,
        });
      } else if(this.state.trackMode == false){
          swal({
            // icon: "success",
            className: "out_of_students",
            title: `Please Press Reset!`,
          });
        }
        this.setState({
          call_record: []
        });
      }
    // }}

    // if(this.trackMode == false){
    //   if (allArray.length <= 0 && this.state.mounted == true) {
    //     // this.resetHandler()
    //     swal({
    //       // icon: "success",
    //       className: "out_of_students",
    //       title: `Please Press Reset!`,
    //     });
    //     this.setState({
    //       call_record: []
    //     });
    // }}
  };

  resetHandler = () => {
    let studentsCopy = this.state.students.slice(0);
    this.setState({
      allstudents: studentsCopy
    });
    return (this.state.allstudents = this.state.students.slice(0));
  };

  participatedHandler = () => {
    if (this.state.partDecCheck == false) {
      // let participateAdd = this.state.participated;
      // let participateAdd = this.props.location.state.class.participation;
      ++this.props.location.state.class.participation;
      let update_call_record = this.state.call_record;
      update_call_record.push("1");
      // ++participateAdd
      this.setState({
        participated: this.props.location.state.class.participation,
        partDecCheck: true,
        call_record: update_call_record,
        participation_rate: (update_call_record.filter(item => item === "1").length /
        update_call_record.length) *
        100

        // randInit: true,
      });
      console.log(this.state);
    } else {
      swal({
        icon: "warning",
        text:
          "Participation Already Tracked. Please Continue To The Next Student!"
      });
    }
    this.auto_randomize();

    // console.log(this.state.participated);
  };

  declinedHandler = () => {
    if (this.state.partDecCheck == false) {
      // let participateSub = this.state.participated;
      --this.props.location.state.class.participation;
      let update_call_record = this.state.call_record;
      update_call_record.push("0");
      this.setState({
        participated: this.props.location.state.class.participation,
        partDecCheck: true,
        randInit: true,
        call_record: update_call_record,
        participation_rate: (update_call_record.filter(item => item === "1").length /
        update_call_record.length) *
        100
      });
    } else {
      swal({
        icon: "warning",
        text:
          "Declination Already Tracked. Please Continue To The Next Student!"
      });
    }

    this.auto_randomize();
  };

  auto_randomize = () => {
    if (this.state.allMode === true) {
      this.allGoHandler();
    } else if (this.state.allMode === false) {
      this.randomHandler();
    }
  };

  participationTracker = () => {
    // let declined = this.state.declined;
    let participated = this.state.participated;

    // if(participated === 0){
    //   return 0;
    // }
    // else{
    //   return Math.floor(participated / this.state.students.length * 100);
    // }
    console.log("CALL_RECORD", this.state.call_record);

    if (this.state.call_record.length === 0) {
      return "";
    } else {
      console.log(
        this.state.call_record.filter(item => item === "1").length,
        "/",
        this.state.call_record.length
      );
      return (
        Math.floor(
          (this.state.call_record.filter(item => item === "1").length /
            this.state.call_record.length) *
            100
        ) + "%"
      );
    }
  };

  // componentDidUpdate()

  render() {
    let currentStudent = this.state.studentPick;
    let currentAll = this.state.allArr;

    let trackState;
    let allState;

    // this.state.mounted = true;
    console.log("Saddle up...", this.state.mounted);
    

    if(this.state.trackMode == false){
      trackState = 
          <div className="caro_container">
                    <div className="caros">
                        {this.state.allMode == true ? (
                          <Button id="Randomize-button" onClick={this.allGoHandler}>
                            {" "}
                            RANDOMIZE!{" "}
                          </Button>
                        ) : (
                          <Button id="Randomize-button" onClick={this.randomHandler}>
                            {" "}
                            RANDOMIZE!{" "}
                          </Button>
                        )}
                      </div>
            </div>
    }

    if(this.state.trackMode == true){
      trackState = 
              
        <div className="caro_container">
            <div className="caros">
                    <Button className="participated"  id="Rando-top-button" onClick={this.participatedHandler}>
                      {""}
                        Participated
                      {""}
                    </Button>
                  <Button id="declined" onClick={this.declinedHandler}>
                    {" "}
                        Declined
                    {" "}
                  </Button>
                </div>
          </div>

    }
    
    if(this.state.allMode == true){

      console.log('allMode on');
      allState = 
      <div>
          <div className="reset">
            <Button
              className="reset_border"
              id="AllGo-button"
              onClick={this.resetHandler}
            >
              Reset 'All Go'
            </Button>
            <div className="allgo-tracker">
            Students in Deck:
            <br/>
            <div className="allgo-tracker-num">
            {this.state.allstudents.length}
            </div>
            
            </div>
          </div>
                  
      </div>
    }
    if(this.state.allMode == false){
      console.log("allMode off")
      allState = 
                "Remove this test message"
  
      }
    

    return (
      <div className="main">
         <div className="classid">{this.state.class.name}</div>
        <div className="header">

          {this.state.allMode == true ? (
            <div className="studentName">
              {currentAll.first_name} {currentAll.last_name}
            </div>
          ) : (
            <div className="studentName">
              {currentStudent.first_name} {currentStudent.last_name}
            </div>
          )}

         </div> 
        
        <Link 
                    to={{
                      pathname: `/${this.state.classid}/edit`,
                      state: {
                        // classid: classitem._id,
                        class: this.state.class
                      }
                    }}
          >
        <Button
          className="edit"
          id="Rando-top-button"
          // href={`/${this.state.classid}/edit`}
        >
          {" "}
          Edit{" "}
        </Button>
        </Link>
        <div className="caro_container">

            {trackState}
            {allState}
   
        </div>
        {this.state.trackMode == true ? (
          <div className="part_data">
            <div className="part_data_title">
              Overall Class Participation Rate <br /> ↓{" "}
            </div>
            <div className="part_graph">{this.participationTracker()}</div>
          </div>
        ) : (
          <div className="part_data part_data_off">
            <div className="part_data_title part_data_title_off" />
            <div className="part_graph part_graph_off" />
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
)(MagicRandomizer);

// export default MagicRandomizer;
