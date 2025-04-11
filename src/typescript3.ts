/*
 * Testing the use of TypeScript generics in types and functions.
 * 1. Implement a "Nullable" type using a generic type T, which allows T to also be null or undefined.
 * 2. Update demo1 to accept a Nullable string as an argument.
 * 3. Update demo2 to:
 *    - Use generics to accept any Nullable type (generic type T) as an argument.
 *    - Ensure the return type is the plain (non-nullable) generic type or undefined.
 */

export function demo1(arg: string) {
	return arg ?? undefined;
}

export function demo2(arg: string) {
	return arg ?? undefined;
}
