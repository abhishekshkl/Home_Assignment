angular.module("myApp",[])
    .controller("MyCtrl", function ($scope, $http) {

        $(document).ready(function () {
            $("#grid").kendoGrid({
                dataSource: {
                    type: "json",
                    transport: {
                        read:
                            function (readOptions) {
                                $http.post("http://localhost:58011/api/data", null).then(function (data) {
                                    console.log(data);
                                    readOptions.success(data.data);
                                })
                            }

                    },
                    pageSize: 20,
                },
                height: 550,
                filterable: true,
                sortable: true,
                pageable: true,
                columns: [{
                    field: "Name",
                },
                {
                    field: "Age",
                    title: "Age"
                },{
                    field: "Hobbies",
                    filterable: false,
                    title: "Hobbies",
                    template: function (dataItem) {
                        return dataItem.Hobbies.filter(c => c != undefined).toString()
                    }
                },

                ]
            });
        });
    })