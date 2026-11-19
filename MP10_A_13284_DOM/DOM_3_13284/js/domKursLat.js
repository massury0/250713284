var targetNode;

function init(){
    targetNode = document.getElementById("hasil").firstChild;
    hitungKurs("idr");
}

function hitungKurs(id){
    var inputE1 = document.getElementById(id);
    var hasilUsd = parseFloat(inputE1.value) / 18254;
    targetNode.data = hasilUsd.toFixed(2) ;

    var list = document.createElement("li");

    var catatan = document.createTextNode(
        "Rp " + inputE1.value + " = US$ " + hasilUsd.toFixed(2)
    );

    list.appendChild(catatan);

    document.getElementById("riwayat").appendChild(list);

} var targetNode;



