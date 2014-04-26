/**
 * Created by Jon on 2014-04-26.
 */
'use strict';

angular.module('RostRecept').controller('voteCtrl', ['$scope', 'voteService', function ($scope, voteService) {
        voteService.init().then(function(){
        voteService.fetchVote().then(function(result)
        {
            $scope.vote = result;
        });
        });

        function getnextvote()
        {
            voteService.fetchVote().then(function(result)
            {
                $scope.vote = result;
            });
        }

        $scope.agreeWithVote = function () {
            getnextvote();
        };

        $scope.disagreeWithVote = function () {
            getnextvote();
        };
    }]);