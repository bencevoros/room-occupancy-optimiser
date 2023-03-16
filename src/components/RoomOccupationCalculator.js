import { useCallback, useEffect, useState } from 'react';
import LabeledPositiveNumberInput from './LabeledPositiveNumberInput';
import roomOccupationsService from '../services/roomsOccupation.service';

function RoomOccupationCalculator({ setRoomOccupations }) {
  const [freeEconomyRooms, setFreeEconomyRooms] = useState(0);
  const [freePremiumRooms, setFreePremiumRooms] = useState(0);
  
  useEffect(() => {
    const roomOccupations = roomOccupationsService.getRoomOccupations(
      { freeEconomyRooms, freePremiumRooms }
    );
    setRoomOccupations(roomOccupations);
  }, [freeEconomyRooms, freePremiumRooms, setRoomOccupations]);

  const onEconomyRoomChange = useCallback((e) => setFreeEconomyRooms(Number(e.target.value)), []);
  const onPremiumRoomChange = useCallback((e) => setFreePremiumRooms(Number(e.target.value)), []);

  return (
    <div className="inputsContainer">
      <LabeledPositiveNumberInput
        id="freeEconomyRooms"
        label="Free economy rooms"
        onChange={onEconomyRoomChange}
        value={freeEconomyRooms}
      />
      <LabeledPositiveNumberInput
        id="freePremiumRooms"
        label="Free premium rooms"
        onChange={onPremiumRoomChange}
        value={freePremiumRooms}
      />
      <p className="info">The number of free rooms must be 0 or more.</p>
    </div>
  );
}

export default RoomOccupationCalculator;
