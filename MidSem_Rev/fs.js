const fs = require('fs')

//PATH
const path = require('path')
const FilePath = path.join(__dirname, "data.txt")

const data = fs.readFileSync(FilePath, "utf8");
console.log(data);

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return; // if return nhi krte toh niche ka bhi execute ho jaayega
    }
    console.log(data);
});

fs.writeFileSync("data.txt", "Hello World") //sync way
fs.writeFile("data.txt", "Hello World", (err) => {
    if (err) console.log(err);
    else console.log("File written");
});

fs.appendFile("data.txt", "\nNew data", (err) => {
    if (err) console.log(err);
});

// deletes the file (Not in Syllabus but usefull)
fs.unlink("data.txt", (err) => {
    if (err) console.log(err);
});


