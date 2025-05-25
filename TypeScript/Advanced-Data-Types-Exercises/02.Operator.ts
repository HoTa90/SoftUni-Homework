function operator(
  param: string | number | string[],
  operation: 'Index' | 'Length' | 'Add',
  operand: number
): any {
  switch (operation) {
    case 'Index':
      return (param as string | string[])[operand];
    case 'Length':
      return (param as string | string[]).length;
    case 'Add':
      return Number(param) + operand;
  }
}
console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
