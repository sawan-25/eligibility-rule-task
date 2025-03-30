import { RULE_PRIORITIES } from '../constants/rules';

export const sortRulesByPriority = (rules) => {
  return [...rules].sort((a, b) => {
    // Handle empty types
    if (!a.type && !b.type) return 0;
    if (!a.type) return 1;
    if (!b.type) return -1;
    
    return RULE_PRIORITIES[a.type] - RULE_PRIORITIES[b.type];
  });
};

export const createNewRule = () => ({
  id: Date.now(),
  type: '',
  operator: '',
  searchValue: []
});