/**
 * Created by dennis on 21.08.15.
 */
function PrimzahlCheck(zahl) {
    zahl = parseInt(zahl, 10);
    if (isNaN(zahl)) {
        alert("zahl eingeben bitte");
        return;

    }
    var grenzahl = zahl / 2;
    var check = 1;
    for (var i = 2; i <= grenzahl; i++) {
        if (zahl % i == 0) {
            document.getElementById("txt").innerHTML = zahl +
                " ist keine primzahl weil teilbar durch " + i;
            check = 0;
        }
        if (check == 1) {
            var number = 1;
            document.getElementById('foo').innerHTML = Boolean(number) + " huhu";
            document.getElementById('txt').innerHTML = zahl + " ist eine primzahl";
            alert("primzahl");

            return;
        }
    }
}
var count = 1;
function aenderFarbe() {
    if (count == 0) {
        document.body.style.backgroundColor = "red";
        count = 1
    } else {
        document.body.style.backgroundColor = "lightblue";
        count = 0;
    }
}