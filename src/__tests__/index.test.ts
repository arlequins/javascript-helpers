import { utils } from '../index'

test('regex-1', () => {
	expect(utils.replaceAll('test-replace-test', 'test', 'pass')).toBe('pass-replace-pass')
})

test('regex-2', () => {
	expect(utils.replaceAll('test-replace-test', 'test', '')).toBe('test-replace-test')
})
