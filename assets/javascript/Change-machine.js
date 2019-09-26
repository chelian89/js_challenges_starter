var calculate = function ()
{ 
    var cents = $("cents").value;
    if (cents > 24){
        var quarters = Math.floor(cents/0.25);
        $("quarters").value = quarters;
        document.getElementById("quarter").innerHTML = quarters;
    }
    if (cents > 9){
        var dimes = Math.floor(cents/0.1);
        $("dimes").value = dimes
    }
    if (cents > 4){
        var nickels = Math.floor(cents/0.05);
        $("nickels").value = nickels
    }
    if (cents > 0) {
        var pennies = Math.floor(cents/0.01);
        $("pennies").value = pennies
    }
}