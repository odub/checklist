import React, { Component } from "react";
import "./App.css";
import Checklist from "./Checklist";
import { LIST_DATA, COLUMNS } from "./constants";
import { formatStatus } from "./utils";
import DownloadButton from "./DownloadButton";
import SelectAll from "./SelectAll";

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
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <div className="HeaderControls">
            <div className="HeaderControlsItem">
              <SelectAll
                items={LIST_DATA_FORMATTED}
                selection={this.state.selection}
                maxSelection={MAX_SELECTION}
                updateSelection={selection => this.setState({ selection })}
              />
            </div>
            <div className="HeaderControlsItem">
              <DownloadButton
                items={LIST_DATA_FORMATTED}
                selection={this.state.selection}
              />
            </div>
          </div>
          <Checklist
            items={LIST_DATA_FORMATTED}
            cols={COLUMNS}
            selection={this.state.selection}
            updateSelection={selection => this.setState({ selection })}
          />
        </div>
      </div>
    );
  }
}

export default App;
