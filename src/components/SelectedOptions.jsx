import React, { memo } from 'react';
import { X } from 'lucide-react';

const SelectedOptions = memo(({ options, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <div
          key={option}
          className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md"
        >
          <span>{option}</span>
          <button
            onClick={() => onRemove(option)}
            className="hover:text-gray-700"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
});

export default SelectedOptions;