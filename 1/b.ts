import * as fs from 'fs';
import * as path from 'path';

console.time('time');
fs.readFile(path.join(__dirname, './input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let totals: number[] = [];
  let current = 0;
  data.split(/\r?\n/).forEach((line) => {
    if (line !== '') {
      current += parseInt(line);
    } else {
      totals.push(current);
      current = 0;
    }
  });

  totals.sort().reverse();
  console.log([totals[0] + totals[1] + totals[2]]);
});
console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
console.timeEnd('time');
