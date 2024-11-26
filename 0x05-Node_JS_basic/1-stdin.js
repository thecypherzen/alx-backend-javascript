/**
 * - Displays the message:
 *      'Welcome to Holberton School, what is your name?' followed
 *   by a new line
 * - Allows the user to inpu their name on the new line
 * - display 'Your name is: INPUT'
 * - When the user ends the program, it displays
 *    'This important software is now closing'
 *     (followed by a new line)
 */
const msg = 'Welcome to Holberton School, what is your name?';
process.stdout.write(`${msg}\n`);
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  let input = null;
  const chunck = process.stdin.read();
  if (chunck !== null) {
    if (input === null) {
      input = chunck;
    } else {
      input += chunck;
    }
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
