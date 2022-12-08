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
        // Win
        if (line[2] === 'Y') {
          points += 2 + 6;
        }
        // Draw
        else if (line[2] === 'X') {
          points += 1 + 3;
        }
        // Lose
        else if (line[2] === 'Z') {
          points += 3 + 0;
        }
        break;
      // PAPER
      case 'B':
        // Win
        if (line[2] === 'Z') {
          points += 3 + 6;
        }
        // Draw
        else if (line[2] === 'Y') {
          points += 2 + 3;
        }
        // Lose
        else if (line[2] === 'X') {
          points += 1 + 0;
        }
        break;
      // SCISSORS
      case 'C':
        // Win
        if (line[2] === 'X') {
          points += 1 + 6;
        }
        // Draw
        else if (line[2] === 'Z') {
          points += 3 + 3;
        }
        // Lose
        else if (line[2] === 'Y') {
          points += 2 + 0;
        }
        break;
      default:
        break;
    }
  });
  console.log('points', points);
});
