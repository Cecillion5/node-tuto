const { readFile, writeFile } = require('fs') ;
const path = require('path') ;

readFile(
    path.resolve('./templates/text/requirement.txt'), 
    'utf8',
    (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result) ;
    }
);