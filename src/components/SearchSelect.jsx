import React, { memo, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const mockOptions = {
  'Specific Collections': ['Automated Collection', 'Summer Collection', 'Winter Collection'],
  'Product Tags': ['black', 'blue', 'red', 'white'],
  'Specific Product': ['Air jordan-(1)variant(s)', 'Nike Air Max', 'Adidas Superstar']
};

const SearchSelect = memo(({ type, value, onChange }) => {
  const options = useMemo(() => mockOptions[type] || [], [type]);

  return (
    <div className="w-full">
      <div className="relative">
        <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
        <div className="relative">
          <select
            value={value}
            onChange={(e) => {
              const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
              onChange([...value, ...selectedValues.filter(v => !value.includes(v))]);
            }}
            className="w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-8 leading-tight focus:outline-none focus:border-blue-500 appearance-none"
          >
            <option value="">Search options</option>
            {options.filter(option => !value.includes(option)).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <ChevronDown size={20} className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SearchSelect;