/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var app = angular.module('myApp', []);

    app.controller('PersonController', function () {
        this.individuals = persons;
        showme = true;
    });

    app.controller("PanelController", function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller("AddController", function () {
        this.add = {};

        this.addPerson = function (persons) {
            persons.push(this.add);
            this.add = {};
        };
    });


    var persons = [
        {id: 1, name: "Jens", age: 18}
        , {id: 2, name: "Peter", age: 23}
        , {id: 3, name: "Hanne", age: 23}
    ];
})();

