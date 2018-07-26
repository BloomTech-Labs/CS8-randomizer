import React, { Component } from "react";
import Carousel from "./Carousel";
import "./magicRandomizer.css";

class MagicRandomizer extends Component {
  render() {
    return (
      <div className="main">
        <div className="classid"> FSW438 </div>
        <div className="header">
          <div className="participated">Participated</div>
          <div className="studentName"> Chris Smith </div>
          <div className="declined"> Declined </div>
        </div>
        <div className="edit"> Edit </div>
        <div className="caro_container">
          <div className="reset">
            <div className="reset_border">Reset 'All Go'</div>
            <div className="date">DATE</div>
          </div>
          <div className="caros">
            <Carousel />
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
