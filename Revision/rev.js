// //=======================FS========================

// import fs from "fs";

// const data = fs.readFileSync("data.txt", "utf8");
// console.log(data);

// fs.readFile("data.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// fs.writeFile("data.txt", "Hello World", (err) => {
//     if (err) console.log(err);
//     else console.log("File written");
// });

// fs.appendFile("data.txt", "\nNew data", (err) => {
//     if (err) console.log(err);
// });

// // deletes the file (Not in Syllabus but usefull)
// fs.unlink("data.txt", (err) => {
//     if (err) console.log(err);
// });




//========================HTTP=========================

// GET --> Get Data 
// POST --> Post Data
// PUT --> Update Data
// PATCH --> Partially update
// DELETE --> Delete data




const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    res.end("Hello World");
});
server.listen(3000, () => {console.log("Server running")});


