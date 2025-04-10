/**
 * Testing for TS type guards and type assertions with type predicates.
 */

export type AccountName = string & {__brand: 'AccountName'};

/*
 1. Create a validation and type guard function for AccountName:
   - Ensure the value is a string.
   - Require a minimum length of 6 characters and a maximum of 12 characters.
 2. Use the type guard function to build a type assertion function, which:
   - Throws a TypeError if the value is invalid.
*/

export function isAccountName() {}

export function assertAccountName() {}
