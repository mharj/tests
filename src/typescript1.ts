/**
 * Tests for TypeScript type guards and type assertions using type predicates and type narrowing.
 */

/**
 * This is a branded type, intended to be used by type guard and type assertion functions.
 */
export type AccountName = string & {__brand: 'AccountName'};

/*
 * Use TypeScript’s type guard functionality to implement a type guard function that:
 * - Ensures the value is of type string.
 * - Requires a minimum length of 6 characters and a maximum of 12 characters.
 * - Returns a boolean result that acts as a type guard, narrowing the type to AccountName if true.
 */
export function isAccountName(value?: string) {}

/*
 * Use TypeScript’s type assertion functionality to implement a type assertion function that:
 * - Uses the isAccountName type guard to validate the value.
 * - Throws a TypeError if the value is invalid according to isAccountName.
 * - Acts as a type assertion, narrowing the type to AccountName if no error is thrown.
 */
export function assertAccountName(value?: string) {}
