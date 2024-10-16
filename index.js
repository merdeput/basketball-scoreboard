let secCountEl = document.getElementById("second-count-el")
let countEl = document.getElementById("count-el")
let resultEl = document.getElementById("result-el")
let result=""
let count = 0
let secondCount = 0
function add1to1() {
    count += 1
    countEl.textContent = count
}
function add2to1() {
    count += 2
    countEl.textContent = count
}
function add3to1() {
    count += 3
    countEl.textContent = count
}
function add1to2() {
    secondCount += 1
    secCountEl.textContent = secondCount
}
function add2to2() {
    secondCount += 2
    secCountEl.textContent = secondCount
}
function add3to2() {
    secondCount += 3
    secCountEl.textContent = secondCount
}
function clear1(){
    count -= count
    countEl.textContent = count
}
function clear2(){
    secondCount -= secondCount
    secCountEl.textContent = secondCount
}
function checkResult(){
    if(count<secondCount){
        result="Right side wins!"
        resultEl.textContent=result
    }
    else if(count>secondCount){
        result="Left side wins!"
        resultEl.textContent=result
    }
    else{
        result="Tie?!"
        resultEl.textContent=result
    }
}
