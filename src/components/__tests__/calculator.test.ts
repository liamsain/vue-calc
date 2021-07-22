import { calculate } from "../calc";
describe('calculator', () => {
  test('calculate', () => {
    const tests = [
      {
        first: 1,
        second: 2,
        operator: '+',
        expected: 3
      },
      {
        first: 50,
        second: 100,
        operator: '-',
        expected: -50
      },
      {
        first: 50,
        second:500,
        operator: '*',
        expected: 25000
      },
      {
        first: 50,
        second: 10,
        operator: '/',
        expected: 5
      },
      {
        first: 10,
        second: 50,
        operator: '',
        expected: 0
      }
    ];
    tests.forEach(test => {
      expect(calculate(test.first, test.second, test.operator)).toBe(test.expected);
    });
  });
});