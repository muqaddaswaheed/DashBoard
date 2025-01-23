import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Table from './Components/Table'
import './App.css';
const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - 20% width */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ">
        {/* Header */}
        <Header />
        <Table />
      </div>
    </div>
  );
};
export default App;



