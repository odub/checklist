import React, { Component } from "react";
import "./Checklist.css";
import ChecklistItem from "./ChecklistItem";
import ChecklistHeader from "./ChecklistHeader";

class Checklist extends Component {
  state = {
    selected: new Set()
  };

  static defaultProps = {
    disabledCondition: () => false
  };

  render() {
    return (
      <div className="Checklist">
        <ChecklistHeader cols={this.props.cols} />
        {this.props.items.map((item, i) => (
          <ChecklistItem
            {...item}
            key={`row-${i}`}
            cols={this.props.cols}
            disabled={this.props.disabledCondition(item)}
            selected={this.state.selected.has(i)}
            handleToggleSelection={() => {
              const selected = new Set(this.state.selected);
              selected.has(i) ? selected.delete(i) : selected.add(i);
              this.setState({ selected });
            }}
          />
        ))}
      </div>
    );
  }
}

export default Checklist;
