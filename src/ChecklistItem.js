import React, { Component } from "react";
import "./ChecklistItem.css";
import { colsToTemplate } from "./utils";

class ChecklistItem extends Component {
  render() {
    return (
      <div
        className={[
          "ChecklistRow",
          "ChecklistItem",
          this.props.selected ? "selected" : "",
          this.props.disabled ? "disabled" : ""
        ].join(" ")}
        style={{
          gridTemplateColumns: colsToTemplate(this.props.cols)
        }}
        onClick={() => !this.props.disabled && this.props.toggleSelection()}
      >
        <div className="ChecklistCell">
          <input
            type="checkbox"
            disabled={this.props.disabled}
            checked={this.props.selected}
            readOnly
          />
        </div>
        {this.props.cols.map(({ id }, i) => {
          const content = this.props[id];
          return (
            <div
              className={["ChecklistCell", id].join(" ")}
              title={content}
              key={`cell-${i}`}
            >
              {content}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChecklistItem;
