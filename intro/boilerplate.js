// const fs = require('fs');
// console.log(fs)

// fs.mkdir('dogs', { recursive: true }, (err) => {
// 	console.log('in callback!')
// 	if (err) throw err;
// });
// console.log('after function!')

// fs.mkdirSync('cats');
// console.log('after function!');



const fs = require('fs');
const folderName = process.argv[2] || 'Project';


fs.mkdirSync(folderName);
// fs.writeFileSync(`${folderName}/index.html`);
// fs.writeFileSync(`${folderName}/app.js`);
// fs.writeFileSync(`${folderName}/style.css`);
