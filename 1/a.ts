import * as fs from 'fs';
import * as path from 'path';

console.time('time');
fs.readFile(path.join(__dirname, './input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let max = 0;
  let current = 0;
  data.split(/\r?\n/).forEach((line) => {
    if (line !== '') {
      current += parseInt(line);
    } else {
      if (max < current) {
        max = current;
      }
      current = 0;
    }
  });
  console.log(max);
});
console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
console.timeEnd('time');
