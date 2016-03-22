angular.module('myRoster').factory('GridService', function() {
    var service = {
        getOptions: function() {
            // options is a huge list of things to configure
            return {
                enableFiltering: true,
                enableSorting: true
            };
        },

        getColumnDefs: function() {
            var defs = [];
            defs.push({
                field: "fullname"
            });

            defs.push({
                field: "position"
            });

            defs.push({
                field: "jersey"
            });
            return defs;
        },
    };
    return service;
});