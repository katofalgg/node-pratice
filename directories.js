const fs = require("fs");
//rename directory
// fs.renameSync("./storage-files", "./storage");

// delete files from this directory
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
}); 

//remove dir
fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
    console.log("./storage directory removed");
})