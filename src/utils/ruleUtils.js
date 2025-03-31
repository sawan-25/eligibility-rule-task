import { RULE_PRIORITIES } from '../constants/rules';

/**
 * Sorts rules based on their predefined priorities
 * Rules with lower priority numbers appear first in the list
 * Empty rule types are handled specially to maintain consistent ordering
 * 
 * @param {Array} rules - Array of rule objects to sort
 * @returns {Array} Sorted array of rules
 */
export const sortRulesByPriority = (rules) => {
  return [...rules].sort((a, b) => {
    // Handle cases where rule types are not yet selected
    if (!a.type && !b.type) return 0;
    if (!a.type) return 1;  // Empty types go to the end
    if (!b.type) return -1; // Non-empty types come first
    
    return RULE_PRIORITIES[a.type] - RULE_PRIORITIES[b.type];
  });
};

/**
 * Creates a new rule object with default values
 * Uses timestamp as ID to ensure uniqueness
 * 
 * @returns {Object} New rule object with default properties
 */
export const createNewRule = () => ({
  id: Date.now(),
  type: '',         // Selected rule type
  operator: '',     // Selected operator
  searchValue: []   // Selected values for the rule
});