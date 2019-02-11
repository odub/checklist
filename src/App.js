import React, { Component } from "react";
import "./App.css";
import Checklist from "./Checklist";
import { LIST_DATA, COLUMNS } from "./constants";
import { formatStatus } from "./utils";

const LIST_DATA_FORMATTED = LIST_DATA.map(item => ({
  ...item,
  status: formatStatus(item.status)
}));

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <Checklist items={LIST_DATA_FORMATTED} cols={COLUMNS} />
        </div>
      </div>
    );
  }
}

export default App;
