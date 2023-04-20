function reset() {
    document.getElementById("out").innerText= "";
    document.getElementById("principal").innerText= "";
    document.getElementById("interest").innerText= "";
    document.getElementById("years").innerText= "";
    document.getElementById("payment").innerText= "";
}

function calc() {
    var P = Number(document.getElementById("principal").value);
    var r = Number(document.getElementById("interest").value);
    var t = Number(document.getElementById("years").value);
    var m = Number(document.getElementById("payment").value);
    var n = 12;
    var B = 0;
    var out = document.getElementById("out");
    out.innerText= "";

    B = P * (1 + r / n) ** (n * t) - (m * ((1 + r / n) ** (n * t) - 1) / (r / n));

    if(B == "NaN") {
        alert("Please enter a valid input.");
    } else {
        out.innerText += "$" + B.toFixed(2);
    }
}