export function calculate(first: number, second: number, operator: string): number {
  let result = 0;
  if (operator.length) {
    switch (operator) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;
      default:
        break;
    }
  }
  return result;
}