type FloorBase = {
  hallway: 'A' | 'C';
  pass?: 'Guest';
};

type Floor1 = FloorBase & { number: 1; train: () => void };
type Floor2 = FloorBase & { number: 2; dine: () => void };
type Floor3 = FloorBase & { number: 3; sleep: () => void };

type simplified = Floor1 | Floor2 | Floor3;

function visitFloor(floor: simplified) {
  switch (floor.number) {
    case 1:
      floor.train();
      return;
    case 2:
      floor.dine();
      return;
    case 3:
      floor.sleep();
      return;
  }
}

visitFloor({ train() {}, number: 1, hallway: 'C', pass: 'Guest' });
