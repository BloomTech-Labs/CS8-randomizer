import React, { Component } from "react";
// import Carousel from "./Carousel"; 
import {Button} from 'reactstrap'; 
 
import "./magicRandomizer.css";

class MagicRandomizer extends Component {

  

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
            <Button id="Randomize-button"> RANDOMIZE! </Button>  
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
