import React, { Component } from "react";
import "./ChecklistHeader.css";
import { colsToTemplate } from "../utils";

class ChecklistHeader extends Component {
  render() {
    return (
      <div
        className="ChecklistHeader ChecklistRow"
        style={{
          gridTemplateColumns: colsToTemplate(this.props.cols)
        }}
      >
        <div className="ChecklistCell" />
        {this.props.cols.map(({ name }, i) => {
          return (
            <div className="ChecklistCell" title={name} key={i}>
              {name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChecklistHeader;
