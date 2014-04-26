/**
 * Created by Jon on 2014-04-26.
 */
'use strict';

angular.module('RostRecept.controllers',['RostRecept.riksdagenAPI'])
    .controller('VoteCtrl', ['$scope', 'riksdagensAPI', function ($scope, riksdagensAPI) {
        var p  = riksdagensAPI.init();

        p.then(function()
        {
            $scope.vote = riksdagensAPI.fetchVote();
        });

        $scope.agreeWithVote = function () {

        };

        $scope.disagreeWithVote = function () {

        };
    }]);