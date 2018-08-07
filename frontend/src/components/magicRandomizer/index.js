import React, { Component } from "react";
// import Carousel from "./Carousel"; 
import {Button, FormGroup, Label, Input} from 'reactstrap'; 
import { Link } from 'react-router-dom';
import { getClasses } from '../../actions';
import swal from "sweetalert";

 
import "./magicRandomizer.css";
import { connect } from "react-redux";



class MagicRandomizer extends Component {

  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      className: "",
      classid: this.props.match.params.id,
      // student: this.props.classes.stud
      class:this.props.location.state.class,
      students:this.props.location.state.class.students,
      studentPick:[],
      allstudents:[],
      allArr:[],
      allMode: this.props.location.state.class.allMode,
      trackMode: this.props.location.state.class.trackMode,
      randInit: false,
      participated: this.props.location.state.class.participation,
      // declined: 0,
      partDecCheck: false,
      // participated: Number,
      // declined: Number
    }
  }

  toggle = () => {
    // this
    this.props.location.state.class.allMode = !this.props.location.state.class.allMode,
    this.setState({ allMode: this.props.location.state.class.allMode, })
    console.log(this.state.allMode);
  }

  idGetter = () => {
    let classes = this.props.classes;
    let id;


    for(let i = 0; i < classes.length; i++){
      // console.log('updating', classes[i]._id);
        if(classes[i]._id === this.props.match.params.id){
          id = classes[i]._id;
          this.setState({
            class: id
          })

          console.log('mounted id', this.state.class)
        }
      } 
  }

  // checkHandler = () => {
  //   this.setState({
  //     allMode: !this.state.allMode
  //   })

  //   console.log('check handler', this.state.allMode);
  // }

  componentDidMount() {
    this.props.getClasses();
    console.log('mount', this.props)

  }

  randomHandler = () => {
    let studentPick = this.state.studentPick;
    let studentArray = this.state.students;
    studentPick = studentArray[Math.floor(Math.random() * studentArray.length)];
    this.setState({
      studentPick: studentPick,
      partDecCheck: false
    })
  }

  allGoHandler = () => {
    let allArray = this.state.allstudents;
    if(allArray.length > 0){
      let pick = allArray.splice(Math.floor(Math.random() * allArray.length), 1);
      console.log('p', pick)
      this.setState({
        allArr: pick[0],
        partDecCheck: false
      })
    }
    else{
      // this.resetHandler()
      swal({icon: "warning", text: `"Please reset ${this.props.location.state.class.name}" Randomizer!`})
    }
  }

  resetHandler = () => {
    let studentsCopy = this.state.students.slice(0);
    this.setState({
      allstudents: studentsCopy
    })
    return this.state.allstudents = this.state.students.slice(0);
  }

  participatedHandler = () => {
    
    if(this.state.partDecCheck == false){
      // let participateAdd = this.state.participated;
      // let participateAdd = this.props.location.state.class.participation;
      ++this.props.location.state.class.participation;
      // ++participateAdd
      this.setState({
        participated: this.props.location.state.class.participation,
        partDecCheck: true,
        // randInit: true,
      })
      console.log(this.state);
    }
    else{
      alert('Participation Already Tracked. Please Continue To The Next Student!')
    }

    // console.log(this.state.participated);
  }

  declinedHandler = () => {
    if(this.state.partDecCheck == false){
      // let participateSub = this.state.participated;
      --this.props.location.state.class.participation;
      this.setState({
        participated: this.props.location.state.class.participation,
        partDecCheck: true,
        randInit: true,
      })
    }
    else{
      alert('Declination Already Tracked. Please Continue To The Next Student!')
    }
  }

  participationTracker = () => {
    // let declined = this.state.declined;
    let participated = this.state.participated;

    if(participated == 0){
      return 0;
    }
    else{
      return participated / this.state.students.length * 100;
    }
  }
  

  // componentDidUpdate()

  render() {
    console.log('radneee', this.studentPick)
    console.log('rander', this
  );
    let currentStudent = this.state.studentPick;
    let currentAll = this.state.allArr;
    // let trackerDisplay;

    // if(this.state.trackMode == true)

    // let partDecTrack = ((this.state.declined / this.state.participated) * 100);

    // let allTracker = this.state.allstudents.length / this.state.students.length;
    console.log('current student', currentAll.first_name);
    return (

      <div className="main">
      
        <div className="classid">{this.state.class.name}</div>
        <div className="header">
        <Button className="participated" id="Rando-top-button" onClick={this.participatedHandler}>Participated</Button> 
        {this.state.allMode == true ? (
          <div className="studentName">{currentAll.first_name} {currentAll.last_name}</div>
        ) : (
          <div className="studentName">{currentStudent.first_name} {currentStudent.last_name}</div>
        ) }
          {/* <div className="studentName">{currentAll.first_name} {currentAll.last_name}</div> */}
          <Button id="declined" onClick={this.declinedHandler}> Declined </Button>
        </div>
        <Button className="edit" id="Rando-top-button" href={`/${this.state.classid}/edit`}> Edit </Button>
        <div className="caro_container">
          <div className="reset">
            

           <Button className="reset_border" id="AllGo-button" onClick={this.resetHandler} >Reset 'All Go'</Button>
           <Button id="AllGo-button" onClick={this.toggle}>Toggle All Go:{this.state.allMode == false ? (<div>Off</div>):(<div>On</div>)}</Button>

           
            {/* <FormGroup check>
              <Label check>
              <Input onClick={this.toggle} type='checkbox' /> {' '}
              Toggle All Go
              </Label>
              </FormGroup>  */}

            <div className="allgo-tracker">{this.state.allstudents.length} / {this.state.students.length}<br/> (?) 
              <p>Participated / Total Students</p>
            </div>
          </div>
          <div className="caros">
            {/* <Carousel /> */} 
            {/* <Button id="Randomize-button" onClick={this.allMode == false ? (this.randomHandler) : (this.allGoHandler) }> RANDOMIZE! </Button>   */}
            {this.state.allMode == true ? 
            (<Button id="Randomize-button" onClick={this.allGoHandler }> RANDOMIZE! </Button> ) 
            :
            (<Button id="Randomize-button" onClick={this.randomHandler}> RANDOMIZE! </Button>
            )} 
          </div>
         
          
        </div>
        {this.state.trackMode == true ? (
        <div className="part_data">
          
            <div className="part_data_title">Overall Class Participation Rate <br/> ↓ </div>
            <div className="part_graph">{this.participationTracker()}%</div>
            </div>
        ) 
        : 
          (
            <div className="part_data part_data_off">
          
          <div className="part_data_title part_data_title_off"></div>
          <div className="part_graph part_graph_off"></div>
          </div>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    classes: state.classes,
    user: state.user
  }
}



export default connect(mapStateToProps, { getClasses })(MagicRandomizer);

// export default MagicRandomizer;
