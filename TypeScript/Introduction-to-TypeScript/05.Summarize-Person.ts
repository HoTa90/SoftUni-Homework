function summarizePerson(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workinfo?: [string, number]
): [number, string, number, string, string] {
  const name = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
  const hobby = hobbies?.length ? hobbies.join(', ') : '-';
  const job = workinfo ? `${workinfo[0]} -> ${workinfo[1]}` : '-';

  return [id, name, age, hobby, job];
}

console.log(
  summarizePerson(
    12,
    'Eliot',
    'Des',
    20,
    'Braylen',
    ['tennis', 'football', 'hiking'],
    ['Sales Consultant', 2500]
  )
);
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
