const { 
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_UP_COMMAND,
  MOVE_DOWN_COMMAND,
  MOVE_RIGHT_COMMAND,
  MOVE_LEFT_COMMAND,
} = require('./constants');

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key, conn);
  });
  return stdin;
};

const handleUserInput = function(input, conn) {
  if (input === '\u0003') {
    process.exit();
  }
  if (input === MOVE_UP_KEY) {
    conn.write(MOVE_UP_COMMAND);
  }
  if (input === MOVE_DOWN_KEY) {
    conn.write(MOVE_DOWN_COMMAND);
  }
  if (input === MOVE_LEFT_KEY) {
    conn.write(MOVE_LEFT_COMMAND);
  }
  if (input === MOVE_RIGHT_KEY) {
    conn.write(MOVE_RIGHT_COMMAND);
  }
  if (input === 'p') {
    conn.write('Say: It\s ME!');
  }
};

module.exports = {
  setupInput,
  handleUserInput
};