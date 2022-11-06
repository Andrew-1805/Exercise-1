function display() {
    let d = new Date();
    let hour = parseInt(d.getHours());
    let min = d.getMinutes();
    let sec = d.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById('clock').innerHTML = hour + ':' + min + ':' + sec;

} setInterval(display, 1000);
function bgcolor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    var color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById('dynamic').style.backgroundColor = color;

} setInterval(bgcolor, 1000);
function incSIZE() {
    document.getElementById("texte").style.fontSize = "3em";
}
function decSIZE() {
    document.getElementById("texte").style.fontSize = "1em";

}
var t;
var c;
var pos = 0;
function init() {
    t = setInterval('moveCar()', 100);
}
function initl() {
    c = setInterval('moveCarl()', 100);
}

function moveCar() {
    var car = document.getElementById('car');
    pos += 10;
    car.style.left = pos + 'px';
}
function moveCarl() {

    var car = document.getElementById('car');
    pos -= 10;
    if (pos >= 0) {
        car.style.left = pos + 'px';
    }
    else {
        pos = 0;
        return;
    }
}
function stopCar() {
    clearTimeout(t);
    clearTimeout(c);
    car.style.left = pos + 'px';
    car.style.right = pos + 'px';
}
function resetcar() {
    clearTimeout(t);
    clearTimeout(c);
    pos = 0
    car.style.left = pos + 'px';
}
function display1() {

    var dicg = [{ name: "Neil", r_No: "20cs1037", dob: "19-05-1922" },
    { name: "david", r_No: "20cs2041", dob: "19-06-2003" }];

    for (var i = 0; i < dicg.length; i++) {
        if (parseInt(dicg[i].dob.split("-")[2]) < 2000) {
            document.getElementById('Std1').innerHTML += "<b>Student Name: </b>" + dicg[i].name + ",<b> Register_Number: </b> "
                + dicg[i].r_No + ",<b> Date of Brith: </b>" + dicg[i].dob + "<br>";
        }
        else{
            document.getElementById('Std2').innerHTML += "<b>Student Name: </b>" + dicg[i].name + ",<b> Register_Number: </b> "
                + dicg[i].r_No + ",<b> Date of Brith: </b>" + dicg[i].dob + "<br>";
        }}}
