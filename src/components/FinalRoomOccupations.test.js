import { render, screen } from '@testing-library/react';
import FinalRoomOccupations from './FinalRoomOccupations';

const roomOccupations = {
  usageEconomy: { rooms: 0, price: 0 },
  usagePremium: { rooms: 0, price: 0 },
}

describe('FinalRoomOccupations', () => {
  describe('calls setRoomOccupations', () => {
    test('when component renders', () => {
      render(<FinalRoomOccupations roomOccupations={roomOccupations} />);
      expect(screen.queryByTestId('finalRoomOccupations')).toMatchSnapshot()
    });
  });
});
