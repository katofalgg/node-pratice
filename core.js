const path = require("path");
const util = require("util");
const v8 = require("v8");

const dirUpLoad = path.join(__dirname, "www", "files", "upload");

console.log(dirUpLoad); // C:\Git\node-js-practice\www\files\upload

util.log(path.basename(__filename));
util.log("^ The name of the current file");
//27 Sep 15:59:54 - core.js
//27 Sep 15:59:54 - ^ The name of the current file

util.log(v8.getHeapStatistics());

