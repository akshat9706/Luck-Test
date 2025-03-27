let imges = [];
let nums = []; 

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("roll").click(); // Triggers button click
    }
});

document.getElementById("roll").onclick = function(){
    let iters = Number(document.getElementById("num").value);
    let ans = "Results : "
    while(iters > 0){
        let rand = Math.floor((Math.random() * 6) + 1);
        nums.push(rand);
        imges.push(`<img src="dice faces/${rand}.png" alt="Dice ${rand}">`)
        iters--;
    }
    ans += nums.join(", ");
    document.getElementById("diceResult").textContent = ans;
    document.getElementById("images").innerHTML = imges;
} 