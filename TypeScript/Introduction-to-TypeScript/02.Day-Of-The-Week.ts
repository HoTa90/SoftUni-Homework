enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function printWeekDay(num: number): void {
  console.log(Days[num] || 'error');
}

printWeekDay(9);
