var app = (function () {

    var getBlueprintsByAuthor = function (author) {
        return apimock.getBlueprintsByAuthor(author, function (err, data) {
            if (err) {
                return new Error("Error obteniendo los blueprints:" + err)
            }
            $('#table-author').html(author + "'s blueprints");
            var table = $('#bluePrints')
            table.empty();
            table.append(`
            <thead>
                <tr>
                    <th>Blueprint name</th>
                    <th>Number of points</th>
                    <th>Open</th>
                </tr>
            </thead>
            `)
            var totalPoints = 0;
            for(var i = 0; i < data.length; i++){
                table.append(`
                <tr>
                    <td>` + data[i].name + `</td>
                    <td>` + data[i].points.length + `</td>
                    <td>
                        <button class='btn btn-primary' onClick="app.getBlueprintsByNameAndAuthor('` + data[i].name + `', '` + data[i].author + `')">
                            Open
                        </button>
                    </td>
                </tr>
                `)
                totalPoints = totalPoints + data[i].points.length;
            }
            table.append('</tbody>');
            $('#total-points').html('Total user points: ' + totalPoints);
            
        });
    }

    var getBlueprintsByNameAndAuthor = function (author, name) {
        return apimock.getBlueprintsByNameAndAuthor(author, name, function (err, data) {
            if (err) {
                return new Error("Error obteniendo el blueprint:" + err)
            }
            $('#current-name').html("Current blueprint: " + name);
            var canvas = $('#myCanvas');
            var context = canvas[0].getContext("2d");
            context.clearRect(0, 0, canvas[0].width, canvas[0].height);
            context.beginPath();
            context.moveTo(data.points[0].x, data.points[0].y);
            data.points.forEach(function (point) {
                context.lineTo(point.x, point.y);
                context.moveTo(point.x, point.y);
            })
            context.stroke();
        })
    }

    return {
        getBlueprintsByAuthor: getBlueprintsByAuthor,
        getBlueprintsByNameAndAuthor: getBlueprintsByNameAndAuthor
    }

})();