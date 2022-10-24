const path = require('path') ;
const { readFileSync, writeFileSync } = require('fs') ;
const { text } = require('stream/consumers');

const requirement = path.join('/templates', 'text', 'requirement.txt') ;
const absolutePath = path.resolve(__dirname, 'templates', 'text', 'requirement.txt') ;

console.log(readFileSync(absolutePath, 'utf8')) ;

// const textFolder = path.resolve(__dirname, 'templates', 'text')
// writeFileSync(
//     path.join(textFolder, 'warning'),
//     'You are already strong to attract whatever you want.',
// ) ;
