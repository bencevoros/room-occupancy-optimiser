function FinalRoomOccupations({ roomOccupations }) {
  return (
    <div data-testid="finalRoomOccupations">
      <p><b>Usage Economy:</b> {roomOccupations.usageEconomy.rooms} (EUR {roomOccupations.usageEconomy.price})</p>
      <p><b>Usage Premium:</b> {roomOccupations.usagePremium.rooms} (EUR {roomOccupations.usagePremium.price})</p>
    </div>
  );
}

export default FinalRoomOccupations;
