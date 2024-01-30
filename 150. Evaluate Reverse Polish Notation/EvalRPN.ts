function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  for (let token of tokens) {
    if (token === "+") {
      stack.push(stack.pop()! + stack.pop()!);
    } else if (token === "-") {
      stack.push(-stack.pop()! + stack.pop()!);
    } else if (token === "*") {
      stack.push(stack.pop()! * stack.pop()!);
    } else if (token === "/") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(Math.trunc(num2! / num1!));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop()!;
}

export default evalRPN;
