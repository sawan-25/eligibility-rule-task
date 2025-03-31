/**
 * Constants and configurations for the rules system
 * This file centralizes all rule-related constants to make maintenance easier
 * and ensure consistency across the application
 */

// Define all available rule types as constants to prevent typos and enable autocomplete
export const RULE_TYPES = {
  SPECIFIC_COLLECTIONS: 'Specific Collections',
  PRODUCT_TAGS: 'Product Tags',
  SPECIFIC_PRODUCT: 'Specific Product',
  PRODUCT_SUBSCRIBED: 'Product Subscribed',
  SPECIFIC_DISCOUNT_CODES: 'Specific Discount Codes',
  CART_VALUE_RANGE: 'Cart Value Range'
};

// Define the order in which rules should be displayed
// Lower numbers indicate higher priority in the display order
export const RULE_PRIORITIES = {
  [RULE_TYPES.SPECIFIC_COLLECTIONS]: 1,
  [RULE_TYPES.PRODUCT_TAGS]: 2,
  [RULE_TYPES.SPECIFIC_PRODUCT]: 3,
  [RULE_TYPES.PRODUCT_SUBSCRIBED]: 4,
  [RULE_TYPES.SPECIFIC_DISCOUNT_CODES]: 5,
  [RULE_TYPES.CART_VALUE_RANGE]: 6
};

// Group operators by their logical function to manage mutual exclusivity
export const OPERATORS = {
  INCLUSION: ['contains any', 'equals anything'], // Operators that include items
  EXCLUSION: ['is not']                          // Operators that exclude items
};

// Define which rules are related and should affect each other's operator choices
// This prevents conflicting rules from being created
export const RELATED_RULES = {
  [RULE_TYPES.SPECIFIC_COLLECTIONS]: [RULE_TYPES.SPECIFIC_PRODUCT],
  [RULE_TYPES.SPECIFIC_PRODUCT]: [RULE_TYPES.SPECIFIC_COLLECTIONS]
};

// Maximum number of rules that can be created
export const MAX_RULES = 6;

// Mock data for dropdown options in development/testing
// In production, this would be replaced with API calls
export const MOCK_OPTIONS = {
  [RULE_TYPES.SPECIFIC_COLLECTIONS]: ['Automated Collection', 'Summer Collection', 'Winter Collection'],
  [RULE_TYPES.PRODUCT_TAGS]: ['black', 'blue', 'red', 'white'],
  [RULE_TYPES.SPECIFIC_PRODUCT]: ['Air jordan-(1)variant(s)', 'Nike Air Max', 'Adidas Superstar']
};