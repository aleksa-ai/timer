const args = process.argv.slice(2);

for(let arg of args){
  if (arg !== undefined && arg > 0 && arg !== NaN ) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg*1000);
  }
};