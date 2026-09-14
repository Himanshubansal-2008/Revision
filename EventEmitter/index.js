// Subject vo hota h jo event fire krta h
// observer vo hota h jo event ko listen kr rha hota h
// event isme CLUB_FAIR h


//-----------------BASIC CODE----------
// const EventEmitter = require('node:events');

// const emitter = new EventEmitter();
// // new EventEmitter(); ye ek object laake daake jisme saari powers h event fire krne ki emit krni etc etc

// emitter.on("CLUB_FAIR",() =>{          // CLUB_FAIR event ko listen kr rha h
//     console.log("Sending Email")
// })
// emitter.on("CLUB_FAIR",() =>{
//     console.log("Saving to DB")
// })

// function SignUp(){
//     emitter.emit("CLUB_FAIR")
// }

// SignUp();




//------------------
const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("CLUB_FAIR",(time,venue) =>{
    console.log("Sending Email")
    console.log(time,venue)
})
emitter.on("CLUB_FAIR",() =>{
    console.log("Saving to DB")
})

function SignUp(){
    emitter.emit("CLUB_FAIR","Sunday", "Auditorium")
}

SignUp();



// stream.on("data", () => {
//     console.log("--- New Chunk Received ---")
// })
// stream.on("end",() => {
//     console.log("--- Finished Reading Story ---")
// })