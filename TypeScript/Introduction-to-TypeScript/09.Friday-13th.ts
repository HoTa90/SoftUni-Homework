function friday13(param: unknown[]): void {
  enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
  }

  for (let entry of param) {
    if (entry instanceof Date) {
      let year = entry.getFullYear();
      let monthDay = entry.getDate();
      let weeklyDay = entry.getDay();
      let month = entry.getMonth();

      if (weeklyDay === 5 && monthDay === 13) {
        console.log(`${monthDay}-${Month[month]}-${year}`);
      }
    }
  }
}

friday13([
  {},
  new Date(2025, 4, 13),
  null,
  new Date(2025, 5, 13),
  '13-09-2023',
  new Date(2025, 6, 13),
]);
friday13([
  new Date(2024, 0, 13),
  new Date(2024, 1, 13),
  new Date(2024, 2, 13),
  new Date(2024, 3, 13),
  new Date(2024, 4, 13),
  new Date(2024, 5, 13),
  new Date(2024, 6, 13),
  new Date(2024, 7, 13),
  new Date(2024, 8, 13),
  new Date(2024, 9, 13),
  new Date(2024, 10, 13),
  new Date(2024, 11, 13),
]);
