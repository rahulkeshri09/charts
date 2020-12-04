import {useState} from 'react';
import Charts from './Charts';
function App() {
  const [chart,setChart]=useState("home");
  const showChart = (parameter) => (event) => {
    setChart((parameter));
}
  function homepage(){
    setChart(("home"));
  }
  return (
    <div className="App">
      {chart==="home" &&
      <div>
        <h1>Select Chart Type</h1>
        <div className="charts">
          <div onClick={showChart("bar")}>Bar Chart</div>
          <div onClick={showChart("line")}>Line Chart</div>
          <div onClick={showChart("area")}>Polar Area Chart</div>
          <div onClick={showChart("radar")}>Radar Chart</div>
          <div onClick={showChart("pie")}>Pie Chart</div>
          <div onClick={showChart("drill")}>Drill Pie Chart </div>
        </div>
      </div>}
      {!(chart==="home") && <Charts chart={chart} back={homepage} />}
    </div>
  );
}

export default App;
