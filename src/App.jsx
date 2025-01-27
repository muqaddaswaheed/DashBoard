import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Table from "./Components/Table";
const App = () => {
  const [collapsed, setCollapsed] = useState(false); // Manage the state here

  return (
    <div className="flex h-screen">
      {/* Sidebar - 20% width */}
      <Sidebar collapsed={collapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ">
        {/* Header */}
        <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
     <Table/>
      </div>
    </div>
  );
};
export default App;



