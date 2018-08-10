import React, { Component } from "react";
// import Carousel from "./Carousel";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import {
  getClasses,
  updateParticipation,
  updateGraphData
} from "../../actions";
import swal from "sweetalert";

import "./magicRandomizer.css";
import { connect } from "react-redux";
import { LineChart } from "react-easy-chart";

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

      graph_data: [],

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
    if (this.props.classes.length <= 1) {
      swal({
        title: "Getting Started with Randomizer",
        text:
          "If ` Tracking Mode ` is ON (graph is visible):\n\nClick `Reset All Go` to fill your deck.\nOnce the `RANDOMIZER` button is clicked, the name of the first student to call on will appear.\nClick the appropriate button for whether the student `Participated` or `Declined`.\n\n  If ` Tracking Mode` is OFF (no graph visible):\n\nSimply use the `RANDOMIZER` button to randomly select a student in the class."
      });
    }

    this.setState({
      graph_data: this.make_graph_data()
    })
  console.log("this.props.location.state.class.graph_data", this.props.location.state.class.graph_data)


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
      console.log("student picked:", pick[0].first_name);
      this.setState({
        allArr: pick[0],
        partDecCheck: false
      });
    }


    if (allArray.length <= 0) {
      // this.resetHandler()
      swal({
        // icon: "success",
        className: "out_of_students",
        title: `${Math.floor(
          this.state.participation_rate
        )}% of your class participated this round!`
      });
     
      console.log("UPDATINGINGINING")
     
      // updates mLab participation property for this class
      this.props.updateParticipation({
        class_id: this.props.match.params.id,
        participation: Math.floor(
          this.state.graph_data[this.state.graph_data.length - 1].y
        )
      });
      this.props.updateGraphData({
        class_id: this.props.match.params.id,
        graph_data: this.state.graph_data
      });

      this.setState({
        graph_data: this.make_graph_data()
      })

      this.date_format();
    

      // [DO NOT DELETE THIS NOTE!!] TODO: The above only updates a single value for participation, which
      // satisfies the MVP however if you wanted to keep track of your daily participation values, you
      // would need something like what is written below -- an array of objects with a participation value
      // for each school day:
      // this.props.updateParticipation({class_id: this.props.match.params.id, participation: [{date: this.state.graph_data[this.state.graph_data.length - 1].x,  percent: Math.floor(this.state.graph_data[this.state.graph_data.length - 1].y)}]})
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
      let update_call_record = this.state.call_record;
      update_call_record.push("1");
      this.setState({
        partDecCheck: true,
        call_record: update_call_record,
        participation_rate:
          Math.floor((update_call_record.filter(item => item === "1").length /
            update_call_record.length) *
          100)

        // randInit: true,
      });
      console.log("this.state in participateHandler", this.state);
    } else {
      swal({
        icon: "warning",
        text:
          "Participation Already Tracked. Please Continue To The Next Student!"
      });
    }
    this.auto_randomize();
  };

  declinedHandler = () => {
    if (this.state.partDecCheck == false) {
      let update_call_record = this.state.call_record;
      update_call_record.push("0");
      this.setState({
        partDecCheck: true,
        randInit: true,
        call_record: update_call_record,
        participation_rate:
          (update_call_record.filter(item => item === "1").length /
            update_call_record.length) *
          100
      });
      console.log("this.state in declinedHandler", this.state);
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

  recalculate_participation_rate = () => {
    console.log("INSIDE THE BELLY OF REC_PART_RATE");
    const updated_graph_data = this.state.graph_data;
    console.log(
      "updated_graph_data[this.state.graph_data.length-1]:",
      updated_graph_data[this.state.graph_data.length - 1]
    );
    updated_graph_data[this.state.graph_data.length - 1].y = Math.floor(
      (updated_graph_data[this.state.graph_data.length - 1].y +
        this.state.participation_rate) /
        2
    );
    this.setState({
      call_record: [],
      graph_data: updated_graph_data
    });
  };

  make_graph_data = () => {
    if (this.props.location.state.class.graph_data.length < 2){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    var years = (mm = months[mm - 1]);
    yyyy = (yyyy + "").slice(2);

    today = dd + "-" + mm + "-" + yyyy;

    const fake_data = [
      { x: dd - 8 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 },
      { x: dd - 7 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 },
      { x: dd - 6 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 },
      { x: dd - 5 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 },
      { x: dd - 4 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 },
      { x: dd - 3 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 },
      { x: dd - 2 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 },
      { x: dd - 1 + "-" + mm + "-" + yyyy, y: Math.random()*80+10 }
    ];
    return fake_data;
  } else {
    return this.props.location.state.class.graph_data
  }
  };

  date_format = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    var years = (mm = months[mm - 1]);
    yyyy = (yyyy + "").slice(2);

    // if (dd < 10) {
    //   dd = "0" + dd;
    // }

    // if (mm < 10) {
    //   mm = "0" + mm;
    // }

    today = dd + "-" + mm + "-" + yyyy;

    if (this.state.graph_data[this.state.graph_data.length - 1].x === today) {
      console.log("SAME DAY!!!!");
      this.recalculate_participation_rate();
    } else if (
      this.state.graph_data[this.state.graph_data.length - 1].x !== today
    ) {
      const new_graph_data = this.state.graph_data;
      new_graph_data.push({
        x: today,
        y: Math.floor(this.state.participation_rate)
      });
      this.setState({
        call_record: [],
        graph_data: new_graph_data
      });
    }
    console.log("this.state.graph_data", this.state.graph_data);
  };

  render() {

    let currentStudent = this.state.studentPick;
    let currentAll = this.state.allArr;


    let trackState;
    let allState;

    // this.state.mounted = true;
    console.log("Saddle up...", this.state.mounted);
    

    // NO TRACK

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


    // Track On

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
    
    // AllMode

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

    // No All

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
              {/* Overall Class Participation Rate <br /> ↓{" "} */}
              <div className="line_chart">
                <LineChart
                  // xDomainRange={[0, 100]}
                  yDomainRange={[0, 100]}
                  xType={"time"}
                  dataPoints
                  axes
                  grid
                  verticalGrid
                  // interpolate={"cardinal"}
                  lineColors={["pink", "purple"]}
                  width={750}
                  height={300}
                  data={[this.state.graph_data]}
                  style={
                    {
                      // backgroundColor: "#584573"
                    }
                  }
                />
              </div>
            </div>
            {/* <div className="part_graph">{this.participationTracker()}</div> */}
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
  { getClasses, updateParticipation, updateGraphData }
)(MagicRandomizer);

// export default MagicRandomizer;
