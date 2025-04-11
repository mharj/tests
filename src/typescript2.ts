/*
 * Tests for TypeScript literal string types and mapped object structures using literal string keys.
 */

/**
 * Group ID Branded type
 */
export type GID = string & {__brand: 'GroupId'};

/**
 * Group ID constructor as a branded type.
 * @example
 * const value: GID = GID('value');
 * @param {string | null | undefined} value - Group ID.
 * @returns {GID} A validated Group ID.
 * @throws {TypeError} If the Group ID is not provided.
 */
export function GID(value: string | null | undefined): GID {
	if (!value) {
		throw new TypeError('Group ID is required');
	}
	return value as GID;
}

export type CloudPlatform = 'AWS' | 'GCP' | 'Azure' | 'Oracle';
export type NetworkType = 'Public' | 'Private';

/*
 * 1. Create a mapping for each unique combination of CloudPlatform and NetworkType.
 *    The key format should follow the pattern: "Cloud_<CloudPlatform>_<NetworkType>".
 *    The value should be of type GID (the actual value doesn't matter).
 * 2. Enforce type safety so that adding a new CloudPlatform or NetworkType will
 *    result in a compile-time error if the mapping is incomplete.
 */

// Define the type for the mapping keys here.

// Define the type for the mapping values here.
export const dataMapping = {
	Cloud_AWS_Public: GID('Cloud_AWS_Public'),
	// Add the rest of the required mappings here.
	// Use TypeScript to enforce completeness and type safety.
};
