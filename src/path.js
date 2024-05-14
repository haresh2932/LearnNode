const path=require('path')

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));



console.log(path.join(__dirname,'assets','fonts','sanserif'));
console.log(path.resolve('assets','fonts','sanserif'));
console.log(path.resolve('src','assets','fonts','sanserif'));
console.log(path.parse(__filename));







