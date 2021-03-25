const fs = require('fs')

if (process.argv.length < 3) {
  console.log('usage: node cat.js file.txt (file2.txt...)')
  process.exit(1)
}

for (let i = 2; i < process.argv.length; i++) {

  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} does not exist`)
    continue
  }

  if (!fs.statSync(process.argv[i]).isFile()) {
    console.log(`Error: ${process.argv[i]} is not a file`)
    continue
  }

  let text = fs.readFileSync(process.argv[i], 'utf-8')
  process.stdout.write(text)
}