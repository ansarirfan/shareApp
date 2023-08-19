const File = require('./models/filesModels')
const fs = require('fs')
const connectDB = require('./config/db')

connectDB();

const deleteData = async () =>{
    const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const files = await File.find({createdAt: {$lt:pastDate}});

    if(files.length){
       for(const file of files){
        try {
            fs.unlinkSync(file.path);
        await file.remove();
        console.log(`successfully deleted ${file.filename}`)

        } catch (err) {
            console.log(`error while deleting file  ${err}`)

        }
       } 
       console.log('job done!');

  
    }
}

deleteData().then( process.exit);
