import React, { memo } from 'react';
import { ChevronDown } from 'lucide-react';

const ruleTypes = [
  'Specific Collections',
  'Product Tags',
  'Specific Product',
  'Product Subscribed',
  'Specific Discount Codes',
  'Cart Value Range'
];

const RuleSelect = memo(({ value, onChange, existingRules = [] }) => {
  // Get array of already selected rule types
  const selectedRuleTypes = existingRules.map(rule => rule.type).filter(Boolean);

  return (
    <div className="w-full relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 appearance-none"
      >
        <option value="">Select Rule Type</option>
        {ruleTypes.map(type => (
          <option 
            key={type} 
            value={type}
            disabled={selectedRuleTypes.includes(type) && type !== value}
          >
            {type} {selectedRuleTypes.includes(type) && type !== value ? '(Already selected)' : ''}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <ChevronDown size={20} className="text-gray-400" />
      </div>
    </div>
  );
});

export default RuleSelect;