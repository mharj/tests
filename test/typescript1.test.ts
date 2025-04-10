import {assertType, describe, it} from 'vitest';
import {type AccountName, assertAccountName, isAccountName} from '../src/typescript1';

describe('typescript1', () => {
	it('should validate isAccountName', function () {
		const data: string = 'account';
		if (isAccountName(data)) {
			assertType<AccountName>(data);
		}
	});
	it('should validate assertAccountName', function () {
		const data = 'account';
		assertAccountName(data);
		assertType<AccountName>(data);
	});
});
