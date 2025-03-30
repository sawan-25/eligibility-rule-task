import React, { memo } from 'react';

const CartValueInputs = memo(({ value = [], onChange }) => {
  const [min = '', max = ''] = value;

  return (
    <div className="flex gap-2">
      <input
        type="number"
        value={min}
        onChange={(e) => onChange([e.target.value, max])}
        placeholder="Min"
        className="w-32 bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        value={max}
        onChange={(e) => onChange([min, e.target.value])}
        placeholder="Max"
        className="w-32 bg-white border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
      />
    </div>
  );
});

export default CartValueInputs;