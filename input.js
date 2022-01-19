const handleUserInput = function (key, conn) {
  if (key === '\u0003') {
    process.exit();
  }
  switch(key.toLowerCase()) {
    case 'w':
    conn.write('Move: up');
      break;
    case 'a':
    conn.write('Move: left');
      break;
    case 's':
    conn.write('Move: down');
      break;
    case 'd':
    conn.write('Move: right');
      break;
  }
  switch(key.toLowerCase()) {
    case 'h':
    conn.write('Say: Ello Govna');
      break;
    case 'e':
    conn.write('Say: Im hunnngry');
      break;
    case 'y':
    conn.write('Say: Why are we here,');
    setTimeout(() => conn.write('Say: just to suffer?'), 2000);
      break;
    case 'q':
    conn.write('Say: Im a snek!');
      break;
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => handleUserInput(data, conn));
  return stdin;
};

module.exports = setupInput;