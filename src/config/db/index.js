const mongoose = require('mongoose');

 async function connect(){

    try{
        await mongoose.connect('mongodb://localhost:27017/blog_dev');
    
     console.log('Connet Ok!')
    }
    catch(error){
        console.log('Not connect!')
    }
}

module.exports={connect}
