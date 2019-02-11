import React, { Component } from "react";
import "./ChecklistItem.css";
import { colsToTemplate } from "./utils";

class ChecklistItem extends Component {
  render() {
    return (
      <div
        className="ChecklistRow ChecklistItem"
        style={{
          gridTemplateColumns: colsToTemplate(this.props.cols)
        }}
      >
        <div className="ChecklistCell">
          <input type="checkbox" />
        </div>
        {this.props.cols.map(({ id }) => {
          const content = this.props[id];
          return (
            <div className="ChecklistCell" title={content}>
              {content}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChecklistItem;
