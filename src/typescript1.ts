/**
 * Testing for TS type guards and type assertions with type predicates.
 */

export type AccountName = string & {__brand: 'AccountName'};

/*
 * Use the Typescript type guard functionality to build a type guard function, which:
 * - Ensure the value type is a string.
 * - Require a minimum length of 6 characters and a maximum of 12 characters.
 * - Outcome (true/false) should satisfy actual type guard to indicate if the value is actual AccountName type or not.
 */
export function isAccountName(value?: string) {}

/*
 * Use the Typescript type guard functionality to build a type assertion function, which:
 *  - Uses the isAccountName type guard function to validate the value.
 *  - Throws a TypeError if the value is invalid based on outcome from isAccountName function.
 *  - Outcome should satisfy actual type assertion to indicate if the value is valid AccountName type.
 */
export function assertAccountName(value?: string) {}
