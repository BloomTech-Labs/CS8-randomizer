import React, { Component } from "react";
// import Carousel from "./Carousel"; 
import {Button} from 'reactstrap'; 
import { Link } from 'react-router-dom';
 
import "./magicRandomizer.css";

class MagicRandomizer extends Component {

  constructor(props){
    super(props)
    this.state = {
      className: "",
      students: ['1', '2', '3', '4'],
      allstudents: ['1', '2', '3', '4'],
      participated: Number,
      declined: Number
    }
  }

  log = () => {
    console.log(this.state.students);
  }

  randomHandler = () => {
    // const stat = this.state
    let studentArray = this.state.students;
    let studentPick = studentArray[Math.floor(Math.random() * studentArray.length)];
    console.log(studentPick);
    return studentPick;
  }

  allGoHandler = () => {
    let allArray = this.state.allstudents;
    // let pickArray = [];

    console.log('pick', allArray);
    
    if(allArray.length > 0){
      let pick = allArray.splice(Math.floor(Math.random() * allArray.length), 1);
      console.log('p', pick)
      return pick;
    }

    else{
      console.log('Please Reset!')
    }
    
  }

  resetHandler = () => {
    console.log('Reset', this.state.allstudents, this.state.students);
    return this.state.allstudents = this.state.students.slice(0);
  }
  

  // componentDidUpdate()

  render() {
    return (
      <div className="main">
        <div className="classid"> FSW438 </div>
        <div className="header">
        <Button className="participated" id="Rando-top-button">Participated</Button> 
          <div className="studentName"> Chris Smith </div>
          <Button id="Rando-top-button"> Declined </Button>
        </div>
        <Button className="edit" id="Rando-top-button" href="/:id/edit"> Edit </Button>
        <div className="caro_container">
          <div className="reset">
          <Button className="reset_border" id="Rando-top-button" onClick={this.resetHandler} >Reset 'All Go'</Button>
            <div className="date">DATE</div>
          </div>
          <div className="caros">
            {/* <Carousel /> */} 
            <Button id="Randomize-button" onClick={this.allGoHandler}> RANDOMIZE! </Button>  
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

export default MagicRandomizer;
