import React from "react";

import { RootNavigation } from "./route";
import { GrandLayout } from "./components/grandlayout";
import Homepage from "./screen/homepage";
import Body from "./components/body";
import { UserContent } from "./components/userContent";

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
