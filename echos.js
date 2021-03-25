let tab = process.argv;
let msg = '';

if (tab
  .length < 3) {
  console.log(`Error: Il n'y a pas de message a afficher`);
  process.exit(1);
}

for (let i = 2; i < tab.length; i++) {
  msg += tab[i] + ' ';
}

console.log(msg)
