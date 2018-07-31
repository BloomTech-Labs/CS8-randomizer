import React, { Component } from "react";
// import Carousel from "./Carousel"; 
import {Button} from 'reactstrap'; 
 
import "./magicRandomizer.css";

class MagicRandomizer extends Component {

  constructor(props){
    super(props)
    this.state = {
      className: "",
      students: [1, 2, 3, 4],
      participated: Number,
      declined: Number
    }
  }

  randomHandler = () => {
    // const stat = this.state
    let studentArray = this.state.students;
    let studentPick = studentArray[Math.floor(Math.random() * studentArray.length)];
    console.log(studentPick);
    return studentPick;
  }

  allGoHandler = () => {
    let allArray = this.state.students;
    let pickedArray = allArray;
    let allPick = Math.ceil(Math.random() * pickedArray.length);

    if(pickedArray.length > 0){
    pickedArray.splice(allPick - 1, allPick);
    console.log('allArray:', pickedArray);
    console.log('allPick', allPick);
    return allPick;
    }
    else if(pickedArray.length == 0){
      console.log('Restarting...')
      pickedArray = allArray;
    }


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
        <Button className="edit" id="Rando-top-button"> Edit </Button>
        <div className="caro_container">
          <div className="reset">
          <Button className="reset_border" id="Rando-top-button">Reset 'All Go'</Button>
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
