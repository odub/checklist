import React, { Component } from "react";
import "./Checklist.css";
import ChecklistItem from "./ChecklistItem";
import ChecklistHeader from "./ChecklistHeader";

class Checklist extends Component {
  render() {
    return (
      <div className="Checklist">
        <ChecklistHeader cols={this.props.cols} />
        {this.props.items.map(item => (
          <ChecklistItem {...item} cols={this.props.cols} />
        ))}
      </div>
    );
  }
}

export default Checklist;
