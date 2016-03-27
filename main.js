const args = process.argv.slice(2);
if (args.length < 1) {
  console.log('Pass some 🚀 as an argument.');
}

// TODO: make this work - it doesn't seem to pass emoji right
const rocketEval = (code) => {
  const op = code[0];
  const rest = code.slice(1);
  switch(op) {
    case '💬':
      console.log(rest);
    default:
      throw 'Unrecognized operator: ' + op
  }
}

console.log(rocketEval(args[0]));
