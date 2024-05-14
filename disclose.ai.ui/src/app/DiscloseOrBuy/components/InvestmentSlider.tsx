import { useState } from 'react';
import { currencyFormatter } from '../../utils/formatter';

const InvestmentSlider = ({ name, maxAmount }: { name: string; maxAmount: number }) => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue as number);
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-xl mb-2">{name}</div>
        <div className={`badge ${value > 0 ? 'badge-primary font-bold' : ''}`}>{currencyFormatter(value)}</div>
      </div>
      <input
        name={name}
        type="range"
        min="0"
        max={maxAmount}
        value={value}
        className="range range-primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default InvestmentSlider;
