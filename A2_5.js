function ChkSum(a) {
    var b = a.split(" ");
    console.log(b);
    for (var i = 0; i < b.length; i++) {
        if (b[i] === "Marvellous") {
            return true;
        }
    }
    return false;
}
console.log(ChkSum("Pune Kothrud Marvellous Infosystems"));
