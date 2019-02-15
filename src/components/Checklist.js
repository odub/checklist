import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Checklist.css";
import ChecklistItem from "./ChecklistItem";
import ChecklistHeader from "./ChecklistHeader";

/**
 * A responsive checklist component.
 */
class Checklist extends Component {
  static propTypes = {
    /** Defines column parameters, ordering and display names. */
    cols: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        width: PropTypes.number
      })
    ).isRequired,
    /** Defines column parameters, ordering and display names. */
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** Defines a set containing the indexes of selected rows. */
    selection: PropTypes.instanceOf(Set).isRequired,
    /** A function to handle updates to the selection set. */
    updateSelection: PropTypes.func.isRequired
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
