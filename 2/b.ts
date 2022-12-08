import * as fs from 'fs';
import * as path from 'path';

fs.readFile(path.join(__dirname, './input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let points = 0;
  data.split(/\r?\n/).forEach((line) => {
    switch (line[0]) {
      // ROCK
      case 'A':
        if (line[2] === 'X') {
          // Lose - choose scissors
          points += 3 + 0;
        } else if (line[2] === 'Y') {
          // Draw - choose rock
          points += 1 + 3;
        } else if (line[2] === 'Z') {
          // win - choose paper
          points += 2 + 6;
        }
        break;
      // PAPER
      case 'B':
        if (line[2] === 'X') {
          // Lose - choose rock
          points += 1 + 0;
        } else if (line[2] === 'Y') {
          // Draw - choose paper
          points += 2 + 3;
        } else if (line[2] === 'Z') {
          // win - choose scissors
          points += 3 + 6;
        }
        break;
      // SCISSORS
      case 'C':
        if (line[2] === 'X') {
          // Lose - choose paper
          points += 2 + 0;
        } else if (line[2] === 'Y') {
          // Draw - choose scissors
          points += 3 + 3;
        } else if (line[2] === 'Z') {
          // win - choose rock
          points += 1 + 6;
        }
        break;
      default:
        break;
    }
  });
  console.log('points', points);
});
