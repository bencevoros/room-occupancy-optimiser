import './LabeledPositiveNumberInput.css';

function LabeledPositiveNumberInput({ id, label, onChange, value }) {
  return (
    <label htmlFor={id} data-testid={id}>
      {label}
      <input
        id={id}
        type="number"
        min="0"
        onChange={onChange}
        value={value}
      />
    </label>
  );
}

export default LabeledPositiveNumberInput;
