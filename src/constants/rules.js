// Rule Types
export const RULE_TYPES = {
    SPECIFIC_COLLECTIONS: 'Specific Collections',
    PRODUCT_TAGS: 'Product Tags',
    SPECIFIC_PRODUCT: 'Specific Product',
    PRODUCT_SUBSCRIBED: 'Product Subscribed',
    SPECIFIC_DISCOUNT_CODES: 'Specific Discount Codes',
    CART_VALUE_RANGE: 'Cart Value Range'
  };
  
  // Rule Priorities (lower number = higher priority)
  export const RULE_PRIORITIES = {
    [RULE_TYPES.SPECIFIC_COLLECTIONS]: 1,
    [RULE_TYPES.PRODUCT_TAGS]: 2,
    [RULE_TYPES.SPECIFIC_PRODUCT]: 3,
    [RULE_TYPES.PRODUCT_SUBSCRIBED]: 4,
    [RULE_TYPES.SPECIFIC_DISCOUNT_CODES]: 5,
    [RULE_TYPES.CART_VALUE_RANGE]: 6
  };
  
  // Operator Groups
  export const OPERATORS = {
    INCLUSION: ['contains any', 'equals anything'],
    EXCLUSION: ['is not']
  };
  
  // Related Rules Configuration
  export const RELATED_RULES = {
    [RULE_TYPES.SPECIFIC_COLLECTIONS]: [RULE_TYPES.SPECIFIC_PRODUCT],
    [RULE_TYPES.SPECIFIC_PRODUCT]: [RULE_TYPES.SPECIFIC_COLLECTIONS]
  };
  
  // Maximum allowed rules
  export const MAX_RULES = 6;
  
  // Mock data for dropdowns
  export const MOCK_OPTIONS = {
    [RULE_TYPES.SPECIFIC_COLLECTIONS]: ['Automated Collection', 'Summer Collection', 'Winter Collection'],
    [RULE_TYPES.PRODUCT_TAGS]: ['black', 'blue', 'red', 'white'],
    [RULE_TYPES.SPECIFIC_PRODUCT]: ['Air jordan-(1)variant(s)', 'Nike Air Max', 'Adidas Superstar']
  };