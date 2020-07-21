$(document).ready(function() {
    // write your code here
        $.getJSON("data.json", function (data){
            var table_data = '';
            $.each(data, function(key, value){
                var mapLink = "https://www.google.com/maps?q=" + value.location[0] + "," + value.location[1];
                table_data += "<tr>";
                table_data += "<td>"+value.name+"</td>";
                table_data += "<td>"+value.description+"</td>";
                table_data += "<td>"+'<a href="' + mapLink + '">Open in Google Maps</a>'+"</td>";
                table_data += "</tr>";
            });
            $("#table").append(table_data);
        });
    });
