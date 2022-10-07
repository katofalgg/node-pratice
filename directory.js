const fs = require("fs");

if (fs.existsSync("storage-files")) {
  console.log("Already exist");
} else {
  fs.mkdir("storage-files", (err) => {
    if (err) {
      throw err.message;
    }
    console.log("directory created");
  });
}
