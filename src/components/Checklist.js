import React, { Component } from "react";
import "./Checklist.css";
import ChecklistItem from "./ChecklistItem";
import ChecklistHeader from "./ChecklistHeader";

class Checklist extends Component {
  render() {
    return (
      <div className="Checklist">
        {!!this.props.cols && this.props.cols.length && (
          <ChecklistHeader cols={this.props.cols} />
        )}
        {this.props.items.map((item, i) => (
          <ChecklistItem
            {...item}
            key={`row-${i}`}
            cols={this.props.cols}
            disabled={item.disabled}
            selected={this.props.selection.has(i)}
            toggleSelection={() => {
              const selection = new Set(this.props.selection);
              selection.has(i) ? selection.delete(i) : selection.add(i);
              this.props.updateSelection(selection);
            }}
          />
        ))}
      </div>
    );
  }
}

export default Checklist;
