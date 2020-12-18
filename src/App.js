import React, { useState } from "react";
import "./App.css";

import Request from "./components/fetch/request";

function App() {
  const [isFetch, setIsFetch] = useState(false);

  return (
    <div className="app">
      <Request isFetch={isFetch} />
      <button className="button" onClick={() => setIsFetch((prev) => !prev)}>
        Get Data
      </button>
    </div>
  );
}

export default App;
