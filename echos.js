let tab = process.argv;
let msg = '';

if (tab
  .length < 3) {
  console.log(`Error: votre message n'est pas valide`);
  process.exit(1);
}

for (let i = 2; i < tab.length; i++) {
  msg += tab[i] + ' ';
}

console.log(msg)
