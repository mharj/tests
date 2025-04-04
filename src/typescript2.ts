export type GID = string & {__brand: 'GroupId'};

/**
 * Group ID constructor
 * @example
 * const value: GID = GID('value')
 * @param {string | null | undefined} value - group id
 * @returns {GID} verified group id
 * @throws {TypeError} if group id is not provided
 */
export function GID(value: string | null | undefined): GID {
	if (!value) {
		throw new TypeError('Group ID is required');
	}
	return value as GID;
}

export type CloudPlatform = 'AWS' | 'GCP' | 'Azure' | 'Oracle';
export type NetworkType = 'Public' | 'Private';

// 1. Build a mapping for each unique combination of CloudPlatform and NetworkType. The key format should be "Cloud_<CloudPlatform>_<NetworkType>"", and the value should be of type GID (the actual value inside is not relevant).
// 2. Enforce type safety so that when a new CloudPlatform or NetworkType is introduced, TypeScript will produce a compile-time error if the mapping is incomplete.

// build working mapping example here
