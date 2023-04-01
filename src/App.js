import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from "./componants/Tours";
const App = () => {
  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2 className="">No Tours Left</h2>
        <button className="btn-refresh" onClick={() => setTours(data)}>
          refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
