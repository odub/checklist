import React, { Component } from "react";
import "./SelectAll.css";

class SelectAll extends Component {
  constructor(props) {
    super(props);
    this.selectAllCheckbox = React.createRef();
  }
  setIndeterminate = () => {
    this.selectAllCheckbox.current.indeterminate =
      !!this.props.selection.size &&
      this.props.selection.size !== this.props.items.length;
  };
  componentDidUpdate = prevProps => {
    if (prevProps.selection !== this.props.selection) {
      return this.setIndeterminate();
    }
  };
  render() {
    return (
      <label className="SelectAll">
        <input
          className="SelectAllCheckbox"
          type="checkbox"
          ref={this.selectAllCheckbox}
          checked={
            !!this.props.selection.size &&
            this.props.selection.size === this.props.items.length
          }
          onClick={() => {
            if (this.props.maxSelection.size === this.props.selection.size) {
              this.props.updateSelection(new Set());
              return;
            }
            this.props.updateSelection(this.props.maxSelection);
          }}
          readOnly
        />
        <span>Selected {this.props.selection.size}</span>
      </label>
    );
  }
}

export default SelectAll;
