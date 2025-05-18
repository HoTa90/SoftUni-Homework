function formatPerson(arg: [string, number]): string {
  return `Hello, my name is ${arg[0]} and my age is ${arg[1]}`;
}

console.log(formatPerson(['Ivan', 20]));
