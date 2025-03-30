import React, { memo } from 'react';
import { X } from 'lucide-react';
import RuleSelect from './RuleSelect';
import OperatorSelect from './OperatorSelect';
import SearchSelect from './SearchSelect';
import CartValueInputs from './CartValueInputs';
import SelectedOptions from './SelectedOptions';

const RuleRow = memo(({ rule, onRuleChange, onDelete, availableOperators, showAnd, existingRules }) => {
  const handleRuleTypeChange = (newType) => {
    onRuleChange({ ...rule, type: newType, operator: '', searchValue: [] });
  };

  const handleOperatorChange = (newOperator) => {
    onRuleChange({ ...rule, operator: newOperator });
  };

  const handleSearchChange = (newValue) => {
    onRuleChange({ ...rule, searchValue: Array.isArray(newValue) ? newValue : [newValue] });
  };

  const renderValueInput = () => {
    if (rule.type === 'Cart Value Range') {
      return (
        <CartValueInputs
          value={rule.searchValue}
          onChange={handleSearchChange}
        />
      );
    }

    if (['Product Subscribed', 'Specific Discount Codes'].includes(rule.type)) {
      return null;
    }

    return (
      <SearchSelect
        type={rule.type}
        value={rule.searchValue}
        onChange={handleSearchChange}
      />
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {showAnd && (
        <div className="text-gray-500 font-medium pl-2">AND</div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex-1 min-w-[200px] relative">
            <RuleSelect 
              value={rule.type} 
              onChange={handleRuleTypeChange}
              existingRules={existingRules}
            />
          </div>
          <div className="flex-1 min-w-[200px] relative">
            <OperatorSelect 
              ruleType={rule.type} 
              value={rule.operator} 
              onChange={handleOperatorChange}
              availableOperators={availableOperators}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            {renderValueInput()}
          </div>
          <button
            onClick={() => onDelete(rule.id)}
            className="p-2 hover:bg-gray-100 rounded shrink-0"
          >
            <X size={20} />
          </button>
        </div>
        {rule.searchValue?.length > 0 && !['Cart Value Range', 'Product Subscribed', 'Specific Discount Codes'].includes(rule.type) && (
          <SelectedOptions 
            options={rule.searchValue} 
            onRemove={(value) => {
              const newValues = rule.searchValue.filter(v => v !== value);
              handleSearchChange(newValues);
            }}
          />
        )}
      </div>
    </div>
  );
});

export default RuleRow;