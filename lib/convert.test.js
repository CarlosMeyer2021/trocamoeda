const { TestWatcher } = require('@jest/core')
const convert = require('./convert')

test('covert cotacao 4 and quantidade 4', () => {
  expect(convert.convert(4, 4)).toBe(16)
})

test('covert cotacao 4 and quantidade 4', () => {
  expect(convert.convert(4, 4)).toBe(16)
})

test('toMoney converts float', () => {
  expect(convert.toMoney(2)).toBe('2.00')
})