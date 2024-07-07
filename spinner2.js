let phases = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let timeTaken = 0;
for (let i = 0; i < phases.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${phases[i]}`)
  }, (i + 1) * 200);
  timeTaken += 200;
};
setTimeout(() => process.stdout.write('\n'), timeTaken);