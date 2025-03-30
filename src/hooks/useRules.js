import { useState, useCallback, useMemo } from 'react';
import { OPERATORS, RELATED_RULES, MAX_RULES } from '../constants/rules';
import { sortRulesByPriority, createNewRule } from '../utils/ruleUtils';

export const useRules = () => {
  const [rules, setRules] = useState([createNewRule()]);

  const sortedRules = useMemo(() => sortRulesByPriority(rules), [rules]);

  const getAvailableOperators = useCallback((currentRule) => {
    if (!currentRule.type || !RELATED_RULES[currentRule.type]) {
      return null;
    }

    const relatedRuleTypes = RELATED_RULES[currentRule.type];
    const relatedRules = rules.filter(r => relatedRuleTypes.includes(r.type));

    for (const relatedRule of relatedRules) {
      if (!relatedRule.operator) continue;

      if (OPERATORS.INCLUSION.includes(relatedRule.operator)) {
        return OPERATORS.EXCLUSION;
      }
      if (OPERATORS.EXCLUSION.includes(relatedRule.operator)) {
        return OPERATORS.INCLUSION;
      }
    }

    return null;
  }, [rules]);

  const handleRuleChange = useCallback((id, updatedRule) => {
    setRules(prevRules => {
      const newRules = prevRules.map(rule => {
        if (rule.id === id) {
          return { ...rule, ...updatedRule };
        }
        
        // Reset operator if it becomes invalid due to mutual exclusivity
        if (RELATED_RULES[rule.type]?.includes(updatedRule.type)) {
          const currentOperator = rule.operator;
          if (currentOperator && updatedRule.operator) {
            if (
              (OPERATORS.INCLUSION.includes(currentOperator) && OPERATORS.INCLUSION.includes(updatedRule.operator)) ||
              (OPERATORS.EXCLUSION.includes(currentOperator) && OPERATORS.EXCLUSION.includes(updatedRule.operator))
            ) {
              return { ...rule, operator: '' };
            }
          }
        }
        return rule;
      });
      return newRules;
    });
  }, []);

  const handleAddRule = useCallback(() => {
    setRules(prevRules => {
      if (prevRules.length >= MAX_RULES) {
        alert(`You can only have a maximum of ${MAX_RULES} rules.`);
        return prevRules;
      }
      return [...prevRules, createNewRule()];
    });
  }, []);

  const handleDeleteRule = useCallback((id) => {
    setRules(prevRules => prevRules.filter(rule => rule.id !== id));
  }, []);

  return {
    rules,
    sortedRules,
    getAvailableOperators,
    handleRuleChange,
    handleAddRule,
    handleDeleteRule
  };
};