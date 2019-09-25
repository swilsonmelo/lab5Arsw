var apimock = (function () {

    var mockdata = [];

    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "nelson",
            points: [
                {
                    x: 10,
                    y: 10
                },
                {
                    x: 20,
                    y: 20
                },
                {
                    x: 30,
                    y: 30
                },
                {
                    x: 20,
                    y: 10
                },
                {
                    x: 30,
                    y: 20
                },
                {
                    x: 40,
                    y: 30
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "niIdea",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]


    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(null, mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }

})();