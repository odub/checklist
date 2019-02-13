import React, { Component } from "react";
import "./App.css";
import Checklist from "./Checklist";
import { LIST_DATA, COLUMNS } from "./constants";
import { formatStatus } from "./utils";
import DownloadButton from "./DownloadButton";

const LIST_DATA_FORMATTED = LIST_DATA.map(item => ({
  ...item,
  status: formatStatus(item.status),
  disabled: item.status !== "available"
}));

const MAX_SELECTION = LIST_DATA_FORMATTED.reduce(
  (acc, item, i) => (item.disabled ? acc : acc.add(i)),
  new Set()
);

class App extends Component {
  state = {
    selection: new Set()
  };
  constructor(props) {
    super(props);
    this.selectAllCheckbox = React.createRef();
  }
  setIndeterminate = () => {
    this.selectAllCheckbox.current.indeterminate =
      !!this.state.selection.size &&
      this.state.selection.size !== LIST_DATA_FORMATTED.length;
  };
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <div className="SelectionStatus">
            <label>
              <input
                type="checkbox"
                ref={this.selectAllCheckbox}
                checked={
                  !!this.state.selection.size &&
                  this.state.selection.size === LIST_DATA_FORMATTED.length
                }
                onClick={() => {
                  if (MAX_SELECTION.size === this.state.selection.size) {
                    this.setState({ selection: new Set() }, () =>
                      this.setIndeterminate()
                    );
                    return;
                  }
                  this.setState({ selection: MAX_SELECTION }, () =>
                    this.setIndeterminate()
                  );
                }}
                readOnly
              />
              {this.state.selection.size} Selected
            </label>
          </div>
          <DownloadButton
            items={LIST_DATA_FORMATTED}
            selection={this.state.selection}
          />
          <Checklist
            items={LIST_DATA_FORMATTED}
            cols={COLUMNS}
            selection={this.state.selection}
            onToggleSelection={i => {
              const selection = new Set(this.state.selection);
              selection.has(i) ? selection.delete(i) : selection.add(i);
              this.setState({ selection }, () => this.setIndeterminate());
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
