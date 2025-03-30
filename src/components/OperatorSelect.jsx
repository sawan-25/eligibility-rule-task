import React, { memo, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

const OperatorSelect = memo(({ ruleType, value, onChange, availableOperators }) => {
  const operators = useMemo(() => {
    switch (ruleType) {
      case 'Specific Collections':
        return ['contains any', 'is not'];
      case 'Product Tags':
        return ['contains any', 'is not'];
      case 'Specific Product':
        return ['equals anything', 'contains any', 'is not'];
      case 'Product Subscribed':
        return ['yes', 'no'];
      case 'Cart Value Range':
        return ['is equal or greater than', 'is between', 'is less than'];
      default:
        return [];
    }
  }, [ruleType]);

  if (!ruleType) return null;

  return (
    <div className="w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 appearance-none"
      >
        <option value="">Select Operator</option>
        {operators.map(op => (
          <option 
            key={op} 
            value={op}
            disabled={availableOperators ? !availableOperators.includes(op) : false}
          >
            {op}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <ChevronDown size={20} className="text-gray-400" />
      </div>
    </div>
  );
});

export default OperatorSelect;