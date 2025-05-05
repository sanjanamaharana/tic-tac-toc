console.log("hello js");
async function main(){
let a =await fetch("http://127.0.0.1:5500/songs/O%20O%20Jaane%20Jaana.mp3")
let response= await a.text();
console.log(response);
}