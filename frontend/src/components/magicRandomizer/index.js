import React, { Component } from "react";
// import Carousel from "./Carousel"; 
import {Button, FormGroup, Label, Input} from 'reactstrap'; 
import { Link } from 'react-router-dom';
import { getClasses } from '../../actions';
 
import "./magicRandomizer.css";
import { connect } from "react-redux";

class MagicRandomizer extends Component {

  constructor(props){
    super(props)
    this.state = {
      className: "",
      classid: this.props.match.params.id,
      // student: this.props.classes.stud
      class:this.props.location.state.class,
      students:this.props.location.state.class.students,
      studentPick:[],
      allstudents:[],
      allArr:[],
      allPick: false
      // participated: Number,
      // declined: Number
    }
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

  checkHandler = () => {
    this.setState({
      allPick: !this.state.allPick
    })

    console.log('check handler', this.state.allPick);
  }

  componentDidMount() {
    this.props.getClasses();
    console.log('mount', this.props)

  }





  randomHandler = () => {
    let studentPick = this.state.studentPick;
    let studentArray = this.state.students;
    studentPick = studentArray[Math.floor(Math.random() * studentArray.length)];
    this.setState({
      studentPick: studentPick
    })
  }

  allGoHandler = () => {
    let allArray = this.state.allstudents;
    if(allArray.length > 0){
      let pick = allArray.splice(Math.floor(Math.random() * allArray.length), 1);
      console.log('p', pick)
      this.setState({
        allArr: pick[0]
      })
    }
    else{
      alert('Please Reset!')
    }
  }

  resetHandler = () => {
    return this.state.allstudents = this.state.students.slice(0);
  }
  

  // componentDidUpdate()

  render() {
    console.log('radneee', this.studentPick)
    console.log('rander', this.props);
    let currentStudent = this.state.studentPick;
    let currentAll = this.state.allArr;
    console.log('current student', currentAll.first_name);
    return (

      <div className="main">
      
        <div className="classid"> {this.state.classid[0]}{this.state.classid[1]}{this.state.classid[2]}  </div>
        <div className="header">
        <Button className="participated" id="Rando-top-button">Participated</Button> 
          <div className="studentName">{currentStudent.first_name} {currentStudent.last_name}</div>
          {/* <div className="studentName">{currentAll.first_name} {currentAll.last_name}</div> */}
          <Button id="Rando-top-button"> Declined </Button>
        </div>
        <Button className="edit" id="Rando-top-button" href={`/${this.state.classid}/edit`}> Edit </Button>
        <div className="caro_container">
          <div className="reset">
          <Button className="reset_border" id="Rando-top-button" onClick={this.resetHandler} >Reset 'All Go'</Button>
            <FormGroup check>
              <Label check>
              <Input onClick={this.checkHandler} type='checkbox' /> {' '}
              Toggle All Go
              </Label>
              </FormGroup>
            <div className="date">DATE</div>
          </div>
          <div className="caros">
            {/* <Carousel /> */} 
            {/* <Button id="Randomize-button" onClick={this.allPick == false ? (this.randomHandler) : (this.allGoHandler) }> RANDOMIZE! </Button>   */}
            <Button id="Randomize-button" onClick={this.randomHandler }> RANDOMIZE! </Button>  
            <div className="ondeck">On Deck: Jane</div>
          </div>
         
          
        </div>
        <div className="part_data">
            <div className="part_data_title">Participation Rate Graph:</div>
            <div className="part_graph">Participation Graph Goes HERE</div>
            </div>
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
