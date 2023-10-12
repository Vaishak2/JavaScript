

function getRandom() {

    const lotteryNo = [10020, 10021, 10022, 10023, 10025, 10026, 10027, 10028, 10029];

    const displayVal = document.getElementById('displayVal');
    
    let index = Math.floor(Math.random() * lotteryNo.length);

    var randLot = (lotteryNo[index]);

    console.log("Winner lottery No is " + randLot);

    winner.innerText , modelResult.innerText  = "Winner lottery No is " + randLot;
    
    displayVal.value = randLot;

}
var cursor1 = document.querySelector(".cursor_1");
var cursor2 = document.querySelector(".cursor_2");
document.addEventListener("mousemove",function(axis){
    cursor1.style.cssText = cursor2.style.cssText = "left: " + axis.clientX +"px; top: " + axis.clientY + "px;";
})



