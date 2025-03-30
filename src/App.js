// import React, { useState, useCallback, useMemo } from 'react';
// import { Plus } from 'lucide-react';
// import RuleRow from './components/RuleRow';

// // Define rule priorities (lower number = higher priority)
// const RULE_PRIORITIES = {
//   'Specific Collections': 1,
//   'Product Tags': 2,
//   'Specific Product': 3,
//   'Product Subscribed': 4,
//   'Specific Discount Codes': 5,
//   'Cart Value Range': 6
// };

// // Define mutually exclusive operator groups
// const INCLUSION_OPERATORS = ['contains any', 'equals anything'];
// const EXCLUSION_OPERATORS = ['is not'];

// // Define related rules that should have opposite operators
// const RELATED_RULES = {
//   'Specific Collections': ['Specific Product'],
//   'Specific Product': ['Specific Collections']
// };

// function App() {
//   const [rules, setRules] = useState([
//     { id: 1, type: '', operator: '', searchValue: [] }
//   ]);

//   // Sort rules based on their priority
//   const sortedRules = useMemo(() => {
//     return [...rules].sort((a, b) => {
//       // Handle empty types
//       if (!a.type && !b.type) return 0;
//       if (!a.type) return 1;
//       if (!b.type) return -1;
      
//       return RULE_PRIORITIES[a.type] - RULE_PRIORITIES[b.type];
//     });
//   }, [rules]);

//   // Get available operators for a rule based on other rules' selections
//   const getAvailableOperators = useCallback((currentRule) => {
//     if (!currentRule.type || !RELATED_RULES[currentRule.type]) {
//       return null;
//     }

//     const relatedRuleTypes = RELATED_RULES[currentRule.type];
//     const relatedRules = rules.filter(r => relatedRuleTypes.includes(r.type));

//     for (const relatedRule of relatedRules) {
//       if (!relatedRule.operator) continue;

//       if (INCLUSION_OPERATORS.includes(relatedRule.operator)) {
//         return EXCLUSION_OPERATORS;
//       }
//       if (EXCLUSION_OPERATORS.includes(relatedRule.operator)) {
//         return INCLUSION_OPERATORS;
//       }
//     }

//     return null;
//   }, [rules]);

//   const handleRuleChange = useCallback((id, updatedRule) => {
//     setRules(prevRules => {
//       const newRules = prevRules.map(rule => {
//         if (rule.id === id) {
//           return { ...rule, ...updatedRule };
//         }
        
//         // Reset operator if it becomes invalid due to mutual exclusivity
//         if (RELATED_RULES[rule.type]?.includes(updatedRule.type)) {
//           const currentOperator = rule.operator;
//           if (currentOperator && updatedRule.operator) {
//             if (
//               (INCLUSION_OPERATORS.includes(currentOperator) && INCLUSION_OPERATORS.includes(updatedRule.operator)) ||
//               (EXCLUSION_OPERATORS.includes(currentOperator) && EXCLUSION_OPERATORS.includes(updatedRule.operator))
//             ) {
//               return { ...rule, operator: '' };
//             }
//           }
//         }
//         return rule;
//       });
//       return newRules;
//     });
//   }, []);

//   const handleAddRule = useCallback(() => {
//     setRules(prevRules => [
//       ...prevRules,
//       { id: Date.now(), type: '', operator: '', searchValue: [] }
//     ]);
//   }, []);

//   const handleDeleteRule = useCallback((id) => {
//     setRules(prevRules => prevRules.filter(rule => rule.id !== id));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold text-gray-800">Rule</h2>
//           <p className="text-gray-600">The offer will be triggered based on the rules in this section</p>
//         </div>

//         <div className="border rounded-lg p-6">
//           <h3 className="text-lg font-medium mb-4">Show offer if</h3>

//           <div className="space-y-6">
//             {sortedRules.map((rule, index) => (
//               <div key={rule.id}>
//                 <RuleRow
//                   rule={rule}
//                   onRuleChange={(updatedRule) => handleRuleChange(rule.id, updatedRule)}
//                   onDelete={handleDeleteRule}
//                   availableOperators={getAvailableOperators(rule)}
//                   showAnd={index > 0}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleAddRule}
//               className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
//             >
//               <Plus size={20} />
//               AND
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useCallback, useMemo } from 'react';
// import { Plus } from 'lucide-react';
// import RuleRow from './components/RuleRow';

// // Define rule priorities (lower number = higher priority)
// const RULE_PRIORITIES = {
//   'Specific Collections': 1,
//   'Product Tags': 2,
//   'Specific Product': 3,
//   'Product Subscribed': 4,
//   'Specific Discount Codes': 5,
//   'Cart Value Range': 6
// };

// // Define mutually exclusive operator groups
// const INCLUSION_OPERATORS = ['contains any', 'equals anything'];
// const EXCLUSION_OPERATORS = ['is not'];

// // Define related rules that should have opposite operators
// const RELATED_RULES = {
//   'Specific Collections': ['Specific Product'],
//   'Specific Product': ['Specific Collections']
// };

// // Set the maximum allowed rules
// const MAX_RULES = 6;

// function App() {
//   const [rules, setRules] = useState([
//     { id: 1, type: '', operator: '', searchValue: [] }
//   ]);

//   // Sort rules based on their priority
//   const sortedRules = useMemo(() => {
//     return [...rules].sort((a, b) => {
//       // Handle empty types
//       if (!a.type && !b.type) return 0;
//       if (!a.type) return 1;
//       if (!b.type) return -1;
      
//       return RULE_PRIORITIES[a.type] - RULE_PRIORITIES[b.type];
//     });
//   }, [rules]);

//   // Get available operators for a rule based on other rules' selections
//   const getAvailableOperators = useCallback((currentRule) => {
//     if (!currentRule.type || !RELATED_RULES[currentRule.type]) {
//       return null;
//     }

//     const relatedRuleTypes = RELATED_RULES[currentRule.type];
//     const relatedRules = rules.filter(r => relatedRuleTypes.includes(r.type));

//     for (const relatedRule of relatedRules) {
//       if (!relatedRule.operator) continue;

//       if (INCLUSION_OPERATORS.includes(relatedRule.operator)) {
//         return EXCLUSION_OPERATORS;
//       }
//       if (EXCLUSION_OPERATORS.includes(relatedRule.operator)) {
//         return INCLUSION_OPERATORS;
//       }
//     }

//     return null;
//   }, [rules]);

//   const handleRuleChange = useCallback((id, updatedRule) => {
//     setRules(prevRules => {
//       const newRules = prevRules.map(rule => {
//         if (rule.id === id) {
//           return { ...rule, ...updatedRule };
//         }
        
//         // Reset operator if it becomes invalid due to mutual exclusivity
//         if (RELATED_RULES[rule.type]?.includes(updatedRule.type)) {
//           const currentOperator = rule.operator;
//           if (currentOperator && updatedRule.operator) {
//             if (
//               (INCLUSION_OPERATORS.includes(currentOperator) && INCLUSION_OPERATORS.includes(updatedRule.operator)) ||
//               (EXCLUSION_OPERATORS.includes(currentOperator) && EXCLUSION_OPERATORS.includes(updatedRule.operator))
//             ) {
//               return { ...rule, operator: '' };
//             }
//           }
//         }
//         return rule;
//       });
//       return newRules;
//     });
//   }, []);

//   // Only add a rule if we have not reached the max limit
//   const handleAddRule = useCallback(() => {
//     setRules(prevRules => {
//       if (prevRules.length >= MAX_RULES) {
//         // Optional: You can show a toast, alert, or just do nothing
//         alert(`You can only have a maximum of ${MAX_RULES} rules.`);
//         return prevRules; 
//       }
//       return [
//         ...prevRules,
//         { id: Date.now(), type: '', operator: '', searchValue: [] }
//       ];
//     });
//   }, []);

//   const handleDeleteRule = useCallback((id) => {
//     setRules(prevRules => prevRules.filter(rule => rule.id !== id));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold text-gray-800">Rule</h2>
//           <p className="text-gray-600">
//             The offer will be triggered based on the rules in this section
//           </p>
//         </div>

//         <div className="border rounded-lg p-6">
//           <h3 className="text-lg font-medium mb-4">Show offer if</h3>

//           <div className="space-y-6">
//             {sortedRules.map((rule, index) => (
//               <div key={rule.id}>
//                 <RuleRow
//                   rule={rule}
//                   onRuleChange={(updatedRule) => handleRuleChange(rule.id, updatedRule)}
//                   onDelete={handleDeleteRule}
//                   availableOperators={getAvailableOperators(rule)}
//                   showAnd={index > 0}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-6">
//             {/* Disable the button if we have 6 or more rules */}
//             <button
//               onClick={handleAddRule}
//               disabled={rules.length >= MAX_RULES}
//               className={`flex items-center gap-2 font-medium
//                 text-blue-600 hover:text-blue-700
//                 ${rules.length >= MAX_RULES ? 'opacity-50 cursor-not-allowed' : ''}
//               `}
//             >
//               <Plus size={20} />
//               AND
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useCallback, useMemo } from 'react';
import { Plus } from 'lucide-react';
import RuleRow from './components/RuleRow';

// Define rule priorities (lower number = higher priority)
const RULE_PRIORITIES = {
  'Specific Collections': 1,
  'Product Tags': 2,
  'Specific Product': 3,
  'Product Subscribed': 4,
  'Specific Discount Codes': 5,
  'Cart Value Range': 6
};

// Define mutually exclusive operator groups
const INCLUSION_OPERATORS = ['contains any', 'equals anything'];
const EXCLUSION_OPERATORS = ['is not'];

// Define related rules that should have opposite operators
const RELATED_RULES = {
  'Specific Collections': ['Specific Product'],
  'Specific Product': ['Specific Collections']
};

// Set the maximum allowed rules
const MAX_RULES = 6;

function App() {
  const [rules, setRules] = useState([
    { id: 1, type: '', operator: '', searchValue: [] }
  ]);

  // Sort rules based on their priority
  const sortedRules = useMemo(() => {
    return [...rules].sort((a, b) => {
      // Handle empty types
      if (!a.type && !b.type) return 0;
      if (!a.type) return 1;
      if (!b.type) return -1;
      
      return RULE_PRIORITIES[a.type] - RULE_PRIORITIES[b.type];
    });
  }, [rules]);

  // Get available operators for a rule based on other rules' selections
  const getAvailableOperators = useCallback((currentRule) => {
    if (!currentRule.type || !RELATED_RULES[currentRule.type]) {
      return null;
    }

    const relatedRuleTypes = RELATED_RULES[currentRule.type];
    const relatedRules = rules.filter(r => relatedRuleTypes.includes(r.type));

    for (const relatedRule of relatedRules) {
      if (!relatedRule.operator) continue;

      if (INCLUSION_OPERATORS.includes(relatedRule.operator)) {
        return EXCLUSION_OPERATORS;
      }
      if (EXCLUSION_OPERATORS.includes(relatedRule.operator)) {
        return INCLUSION_OPERATORS;
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
              (INCLUSION_OPERATORS.includes(currentOperator) && INCLUSION_OPERATORS.includes(updatedRule.operator)) ||
              (EXCLUSION_OPERATORS.includes(currentOperator) && EXCLUSION_OPERATORS.includes(updatedRule.operator))
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

  // Only add a rule if we have not reached the max limit
  const handleAddRule = useCallback(() => {
    setRules(prevRules => {
      if (prevRules.length >= MAX_RULES) {
        // Optional: You can show a toast, alert, or just do nothing
        alert(`You can only have a maximum of ${MAX_RULES} rules.`);
        return prevRules; 
      }
      return [
        ...prevRules,
        { id: Date.now(), type: '', operator: '', searchValue: [] }
      ];
    });
  }, []);

  const handleDeleteRule = useCallback((id) => {
    setRules(prevRules => prevRules.filter(rule => rule.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Rule</h2>
          <p className="text-gray-600">
            The offer will be triggered based on the rules in this section
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Show offer if</h3>

          <div className="space-y-6">
            {sortedRules.map((rule, index) => (
              <div key={rule.id}>
                <RuleRow
                  rule={rule}
                  onRuleChange={(updatedRule) => handleRuleChange(rule.id, updatedRule)}
                  onDelete={handleDeleteRule}
                  availableOperators={getAvailableOperators(rule)}
                  showAnd={index > 0}
                  existingRules={rules}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            {/* Disable the button if we have 6 or more rules */}
            <button
              onClick={handleAddRule}
              disabled={rules.length >= MAX_RULES}
              className={`flex items-center gap-2 font-medium
                text-black-600 hover:text-black-700 border border-neutral-500 rounded-lg py-2 px-3
                ${rules.length >= MAX_RULES ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <Plus size={20} />
              AND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;