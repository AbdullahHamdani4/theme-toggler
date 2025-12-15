let body = document.querySelector("body")
let passInput = document.getElementById("passInput")
let randomPassVal = "hdip$%#356!rt&*"
// console.log(randomPassVal.length);
function changeColor(params) {
    body.classList.toggle("black")
}
function suggestPass(e) {
    let pass = ""
    console.log(`before ${pass}`);
    for (let i = 0; i < 8; i++) {
    pass+=randomPassVal[Math.floor(Math.random() * randomPassVal.length)]
    }
    e.preventDefault()
    passInput.value=pass
 }