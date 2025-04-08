/*
 TS Generics
   1. Implement a "Nullable" generics type that allows a given type T to also be null or undefined.
   2. Modify demo1 so that it accepts a Nullable string as an argument.
   3. Modify demo2 to:
     - Use generics to accept any Nullable type with generic type T.
     - Ensure the return type is plain generic type or undefined.
*/

export function demo1(arg: string) {
	return arg ?? undefined;
}

export function demo2(arg: string) {
	return arg ?? undefined;
}
