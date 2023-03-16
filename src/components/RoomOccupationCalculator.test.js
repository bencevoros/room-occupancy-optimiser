import { render, screen, fireEvent } from '@testing-library/react';
import RoomOccupationCalculator from './RoomOccupationCalculator';

describe('RoomOccupationCalculator', () => {
  describe('calls setRoomOccupations', () => {
    let setRoomOccupationsMock = jest.fn();

    beforeEach(() => {
      setRoomOccupationsMock.mockClear();
    });

    test('when component renders', () => {
      render(<RoomOccupationCalculator setRoomOccupations={setRoomOccupationsMock} />);
      expect(setRoomOccupationsMock).toHaveBeenCalledTimes(1);
    });

    test('when economy room input changes', () => {
      render(<RoomOccupationCalculator setRoomOccupations={setRoomOccupationsMock} />);
      const inputElement = screen.queryByLabelText('Free economy rooms');
      fireEvent.change(inputElement, {
        target: { value: 1 }
      });
      expect(inputElement.value).toBe('1');
      expect(setRoomOccupationsMock).toHaveBeenCalledTimes(2);
    });

    test('when premium room input changes', () => {
      render(<RoomOccupationCalculator setRoomOccupations={setRoomOccupationsMock} />);
      const inputElement = screen.queryByLabelText('Free premium rooms');
      fireEvent.change(inputElement, {
        target: { value: 1 }
      });
      expect(inputElement.value).toBe('1');
      expect(setRoomOccupationsMock).toHaveBeenCalledTimes(2);
    });
  });
});
