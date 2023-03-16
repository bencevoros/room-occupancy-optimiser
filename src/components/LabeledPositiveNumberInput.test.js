import { render, screen } from '@testing-library/react';
import LabeledPositiveNumberInput from './LabeledPositiveNumberInput';

const label = 'Label';
const id = 'id';
const onChange = () => {};
const value = 0;

describe('LabeledPositiveNumberInput', () => {
  describe('calls setRoomOccupations', () => {
    test('when component renders', () => {
      render(
        <LabeledPositiveNumberInput id={id} label={label} onChange={onChange} value={value} />
      );
      expect(screen.queryByTestId(id)).toMatchSnapshot();
    });
  });
});
