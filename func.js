var start, stop;
function counttime() {
    if (start) {
        stop = new Date().getTime();
        this.document.getElementById("seconds").innerHTML += "<tr>" + (stop - start) / 1000 + "</tr>";
        start = new Date().getTime();
    } else {
        start = new Date().getTime();
    }
}
window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        counttime();
    }
})
window.addEventListener("mousedown", function (e) {
    if (e.button == 0) {
        counttime();
    }
})