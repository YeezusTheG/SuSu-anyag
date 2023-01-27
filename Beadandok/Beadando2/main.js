function $(x){return document.getElementById(x);}

function generateTable(){
    var oszlopszam = $("oszlopszam").value;
    var sorszam = $("sorszam").value;
    var caption = "Table Caption";
    var fejlec = ["Header1", "Header2", "Header3", "Header4", "Header5"];
    var adatok = [
        ["data1","data1","data1","data1","data1"],
        ["data2","data2","data2","data2","data2"],
        ["data3","data3","data3","data3","data3"],
        ["data4","data4","data4","data4","data4"],
        ["data5","data5","data5","data5","data5"]
    ];

    var table = "<table>";
    table += "<caption>" + caption + "</caption>";

    table += "<tr>";
    for(var i = 0; i < oszlopszam; i++){
        table += "<th>" + fejlec[i] + "</th>";
    }
    table += "</tr>";

    for(var i = 0; i < sorszam; i++){
        table += "<tr>";
        for(var j = 0; j < oszlopszam; j++){
            table += "<td>" + adatok[i][j] + "</td>";
        }
        table += "</tr>";
    }

    table += "</table>";

    $("tablazat").innerHTML = table;
}