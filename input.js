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
  if (input === 'w') {
    conn.write('Move: up');
  }
  if (input === 's') {
    conn.write('Move: down');
  }
  if (input === 'a') {
    conn.write('Move: left');
  }
  if (input === 'd') {
    conn.write('Move: right');
  }
  if (input === 'p') {
    conn.write('Say: It\s ME!');
  }
};

module.exports = {
  setupInput,
  handleUserInput
};