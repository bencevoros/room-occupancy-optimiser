import { useState } from 'react';
import RoomOccupationCalculator from './components/RoomOccupationCalculator';
import FinalRoomOccupations from './components/FinalRoomOccupations';
import './App.css';

function App() {
  const [roomOccupations, setRoomOccupations] = useState(undefined);

  return (
    <div className="appContainer">
      <h1>Room occupancy optimiser</h1>
      <RoomOccupationCalculator setRoomOccupations={setRoomOccupations} />
      <div className="separator"/>
      {roomOccupations ? <FinalRoomOccupations roomOccupations={roomOccupations} /> : <></>}
    </div>
  );
}

export default App;
