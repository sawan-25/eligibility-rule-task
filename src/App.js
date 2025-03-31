import React from 'react';
import { Plus } from 'lucide-react';
import RuleRow from './components/RuleRow';
import { useRules } from './hooks/useRules';

/**
 * Main application component that manages the rule builder interface
 * Implements a dynamic form for creating and managing offer rules
 */
function App() {
  // Use custom hook to manage all rule-related logic
  const {
    sortedRules,
    handleRuleChange,
    handleAddRule,
    handleDeleteRule,
    getAvailableOperators
  } = useRules();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        {/* Header section with title and description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Rule</h2>
          <p className="text-gray-600">
            The offer will be triggered based on the rules in this section
          </p>
        </div>

        {/* Main rules container */}
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Show offer if</h3>

          {/* Rules list */}
          <div className="space-y-6">
            {sortedRules.map((rule, index) => (
              <div key={rule.id}>
                <RuleRow
                  rule={rule}
                  onRuleChange={(updatedRule) => handleRuleChange(rule.id, updatedRule)}
                  onDelete={handleDeleteRule}
                  availableOperators={getAvailableOperators(rule)}
                  showAnd={index > 0}
                  existingRules={sortedRules}
                />
              </div>
            ))}
          </div>

          {/* Add rule button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleAddRule}
              disabled={sortedRules.length >= 6}
              className={`flex items-center gap-2 font-medium
                text-blue-600 hover:text-blue-700
                ${sortedRules.length >= 6 ? 'opacity-50 cursor-not-allowed' : ''}
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