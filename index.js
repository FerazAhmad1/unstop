const fs = require("fs");
const bookingdata = fs.readFileSync(
  `${__dirname}/booking-data/data.json`,
  "utf-8"
);
const data = [
  { totalAvailable: 80 },
  { row: 1, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 2, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 3, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 4, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 5, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 6, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 7, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 8, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 9, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 10, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 11, start: 0, Available: 7, seat: [0, 0, 0, 0, 0, 0, 0] },
  { row: 12, start: 0, Available: 3, seat: [0, 0, 0] },
];

function calculate(Index, n) {
  const allocatedrow = data[Index];
  const start = allocatedrow.start;
  const seat = allocatedrow.seat;
  const providedseat = [`row-${allocatedrow.row} seat:`];
  for (let i = 0; i < n; i++) {
    seat[start + i] = 1;
    providedseat.push(start + i + 1);
  }
  allocatedrow.Available = allocatedrow.Available - n;
  allocatedrow.start = allocatedrow.start + n;
  data[0].totalAvailable = data[0].totalAvailable - n;
  return providedseat.join(" ");
}

const allocateSeat = (n) => {
  if (n > 7) return `you canot book moreThan 7 seat `;
  if (data[0].totalAvailable < n)
    return `we have only ${data[0].totalAvailable} seat left `;
  // try to find a row with atleast requested seat
  const Index = data.findIndex((row) => row.Available >= n);

  if (Index >= 0) {
    return calculate(Index, n);
  } else {
    let i = n;
    let l = 12;
    let result = [];
    while (i !== 0) {
      if (data[l].Available > 0) {
        result.push(l);
        i = i - data[l].Available;
      }
      l--;
    }
    const providedseat = result.map((index) => {
      return calculate(index, data[index].Available);
    });

    return providedseat.join(" ");
  }
};

console.log(allocateSeat(4));
console.log(allocateSeat(3));
console.log(allocateSeat(7));
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);
allocateSeat(6);

console.log(allocateSeat(6));
