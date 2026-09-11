const express = require('express')
// const express = require('fs/express')

const app = express();
const fs = require('fs')
const path = require('path')

const fileToPath = path.join(__dirname,'db.json')

// const data = fs.readFileSync(fileToPath, 'utf-8')
// console.log(data)


function readData(){
    fs.readFile(fileToPath,"utf-8", (err,data) => {
        if (err){
            console.log(err)
            return
        }
        console.log(data)
    })
    
}
// readData()

// -------------------------- IMP------------------
// async function readDataPromise(){
//     try{let data = await fs.promises.readFile(fileToPath,"utf-8")
//     console.log(data)
//     }catch(err){
//         console.log(err)
//     }
        
// }
// readDataPromise()

function addData(cont){
    let data= fs.readFileSync(fileToPath,"utf-8") 
    const arr = JSON.parse(data)
    arr.push(cont)
    fs.writeFile(fileToPath,JSON.stringify(arr),(err,data) => {
        console.log(data)
    })

}
addData()




// function appendData(){
//     const obj ={
//     id: "12345",
//     itemName: "1234r5t6y7u8",
//     type: "found"
//     }
//     fs.appendFile(fileToPath,JSON.stringify(obj),(err,data)=>{
//         if (err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     }
//     )
// }
// appendData()



module.exports = {readData,addData}