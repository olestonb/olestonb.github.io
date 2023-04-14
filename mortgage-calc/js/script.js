function reset() {
    var out = document.getElementById("out");
    out.innerText= "";
}

function calc() {
    var P = Number(document.getElementById("principal").value);
    var r = Number(document.getElementById("interest").value);
    var t = Number(document.getElementById("years").value);
    var m = Number(document.getElementById("payment").value);
}