const fs = require("fs")

// module.exports=
// multiple file operations 

// Read
// Write
// Append
// Delete

//========Read File


// const data = (fs.readFileSync("text.txt", "utf-8"))
// console.log(data)

// fs.readFile("text.txt","utf-8", (arr, data) => {
//     if (arr){
//         if (err){
//             return
//         }
//     }
//     console.log(data)
// })


// -------------------------- IMP------------------
async function readDataPromise(){
    try{let data = await fs.promises.readFile(fileToPath,"utf-8")
    console.log(data)
    }catch(err){
        console.log(err)
    }
        
}
readDataPromise()



//===========Write File==============//

// fs.writeFileSync("text.txt", "Hello Bachoo") //overwrite ho jaayega run krne ke baad

// fs.writeFile(HomeWork)


//=============Append==============//
// HW
// 

//==============Delete==============//
// HW

// Readline input output kse work krta h Homework 
// and do from Node.js documentation
