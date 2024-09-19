import React from "react";

import { RootNavigation } from "./route";
import { GrandLayout } from "./components/grandlayout";

function App() {
  return (
    <div className="App">
      <GrandLayout>
        <RootNavigation />
      </GrandLayout>
    </div>
  );
}

export default App;
