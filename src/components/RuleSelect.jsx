import React, { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import { RULE_TYPES } from '../constants/rules';

/**
 * Component for selecting rule types
 * Implements rule selection logic and handles already selected rules
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - Currently selected rule type
 * @param {Function} props.onChange - Handler for rule type changes
 * @param {Array} props.existingRules - List of all current rules
 */
const RuleSelect = memo(({ value, onChange, existingRules = [] }) => {
  // Get list of already selected rule types to prevent duplicates
  const selectedRuleTypes = existingRules.map(rule => rule.type).filter(Boolean);
  const ruleTypes = Object.values(RULE_TYPES);

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