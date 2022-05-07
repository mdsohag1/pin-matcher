//genarete btn

document.getElementById("genarate-btn").addEventListener("click", function(){

    const pin = Math.random() * 9999
    const newpin = parseInt(pin)
    let genaratePin = newpin;
    if(newpin < 1000){
        genaratePin = newpin + 1000;
    }
    document.getElementById("genarate-pin").value = genaratePin

})

// input Btn

function calculate(newvalue) {
    document.getElementById("cal-input").value += newvalue
    document.getElementById("submit").disabled = false
}
function delate() {
    const a = document.getElementById("cal-input").value = ""
    document.getElementById("submit").disabled = true
}
function backBtn() {
    let backBtn = document.getElementById("cal-input").value
    backBtn = backBtn.substr(0, backBtn.length-1)
    document.getElementById("cal-input").value = backBtn
    if(backBtn == ""){
        document.getElementById("submit").disabled = true
    }
}
var submitBtn =  document.getElementById("submit")
submitBtn.disabled = true

// pin matched

    document.getElementById("submit").addEventListener("click", function(){
        const genarateNum = document.getElementById("genarate-pin").value
        const pinNum = document.getElementById("cal-input").value

        if(genarateNum == pinNum){
            document.getElementById("notify-true").style.display = "block"
            document.getElementById("notify-false").style.display = "none"
        }else{
            document.getElementById("notify-true").style.display = "none"
            document.getElementById("notify-false").style.display = "block"
        }

        const tryValue = document.getElementById("try").innerText
        const tryNum = parseFloat(tryValue)
        let tryNew = tryNum
        if(genarateNum != pinNum && tryNum > 0){
            tryNew = tryNum - 1
            document.getElementById("try").innerText = tryNew
        }
        if(tryNew == 0){
            document.getElementById("submit").disabled = true
            document.getElementById("notify-true").style.display = "none"
            document.getElementById("notify-false").style.display = "block"
        }
        if(genarateNum == pinNum && tryNew > 0){
            document.getElementById("try").innerText = "3"
        }
            
    })

   