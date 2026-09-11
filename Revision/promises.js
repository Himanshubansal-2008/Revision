//------------------Array HOF----------------------//


function greet(name) {
    return "Hello " + name;
}
function process(callback) {
    callback("MKB");
}
process(greet);
//process is HOF and greet is Callback