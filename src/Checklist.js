import React, { Component } from "react";
import "./Checklist.css";
import ChecklistItem from "./ChecklistItem";
import ChecklistHeader from "./ChecklistHeader";

class Checklist extends Component {
  static defaultProps = {
    disabledCondition: () => false
  };

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
            handleToggleSelection={() => this.props.onToggleSelection(i)}
          />
        ))}
      </div>
    );
  }
}

export default Checklist;
