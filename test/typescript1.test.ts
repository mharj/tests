import {assertType, describe, it} from 'vitest';
import {type AccountName, assertAccountName, isAccountName} from '../src/typescript1';

describe('typescript1', () => {
	it('should validate isAccountName', function () {
		const data: string = 'someaccount';
		if (isAccountName(data)) {
			assertType<AccountName>(data);
		}
	});
	it('should validate assertAccountName', function () {
		const data = 'someaccount';
		assertAccountName(data);
		assertType<AccountName>(data);
	});
});
