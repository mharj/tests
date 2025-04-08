import {assertType, describe, expect, it} from 'vitest';
import {type CloudPlatform as C, dataMapping, type GID as E, type NetworkType as D} from '../src/typescript2';
type B = `Cloud`;
type A<K extends keyof any, T> = {[P in K]: T};

const rawTarget =
	'eyJDbG91ZF9BV1NfUHJpdmF0ZSI6IkNsb3VkX0FXU19Qcml2YXRlIiwiQ2xvdWRfQVdTX1B1YmxpYyI6IkNsb3VkX0FXU19QdWJsaWMiLCJDbG91ZF9BenVyZV9Qcml2YXRlIjoiQ2xvdWRfQXp1cmVfUHJpdmF0ZSIsIkNsb3VkX0F6dXJlX1B1YmxpYyI6IkNsb3VkX0F6dXJlX1B1YmxpYyIsIkNsb3VkX0dDUF9Qcml2YXRlIjoiQ2xvdWRfR0NQX1ByaXZhdGUiLCJDbG91ZF9HQ1BfUHVibGljIjoiQ2xvdWRfR0NQX1B1YmxpYyIsIkNsb3VkX09yYWNsZV9Qcml2YXRlIjoiQ2xvdWRfT3JhY2xlX1ByaXZhdGUiLCJDbG91ZF9PcmFjbGVfUHVibGljIjoiQ2xvdWRfT3JhY2xlX1B1YmxpYyJ9';

const validMap = JSON.parse(atob(rawTarget));

describe('typescript2', () => {
	it('should validate dataMapping', function () {
		expect(Object.keys(dataMapping)).to.be.eql(Object.keys(validMap));
		assertType<A<`${B}_${C}_${D}`, E>>(dataMapping);
	});
});
