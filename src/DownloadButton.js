import React, { Component } from "react";
import "./DownloadButton.css";

class DownloadButton extends Component {
  render() {
    return (
      <button
        className="DownloadButton"
        disabled={!this.props.selection.size}
        onClick={() => {
          window.alert(
            Array.from(this.props.selection)
              .sort()
              .map(i => {
                const { path, device } = this.props.items[i];
                return [path, device].join("\n");
              })
              .join("\n\n")
          );
        }}
      >
        Download Selected
      </button>
    );
  }
}

export default DownloadButton;
