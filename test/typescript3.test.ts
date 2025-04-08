import {assertType, describe, it} from 'vitest';
import {demo1, demo2} from '../src/typescript3';

describe('typescript3', () => {
	it('should validate assertAccountName', function () {
		assertType<string | undefined>(demo1('test'));
		assertType<string | undefined>(demo1(null));
		assertType<string | undefined>(demo1(undefined));
	});
	it('should validate assertAccountName', function () {
		assertType<string | undefined>(demo2<string>('test'));
		assertType<string | undefined>(demo2<string>(null));
		assertType<string | undefined>(demo2<string>(undefined));
		assertType<number | undefined>(demo2<number>(10));
		assertType<number | undefined>(demo2<number>(null));
		assertType<number | undefined>(demo2<number>(undefined));
	});
});
