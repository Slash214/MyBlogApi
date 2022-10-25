const fs = require('fs')
const o = fs.readFileSync('../public/name.txt', 'utf-8')
let arr = o.split('\r\n')
let filename = '../public/name.json'
fs.writeFileSync(filename, JSON.stringify(arr))
