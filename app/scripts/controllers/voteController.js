/**
 * Created by Jon on 2014-04-26.
 */
'use strict';

angular.module('RostRecept').controller('voteCtrl', ['$scope', 'voteService', 'votingresultService', function ($scope, voteService, votingresultService) {
    $scope.next = {};
    voteService.init().then(function () {
        getnextVote().then(getnextVote);
    });


    function fetchGovermentVote(vote) {

        var voterings_id = vote.voteringid;
        voteService.fetchVoteResult(vote.votering_url_xml).then(function (data) {
            votingresultService.addGovermentVote(voterings_id, data);
        });
        return vote;
    }

    function preloadVote(vote) {
        $scope.next.vote = vote;
        return vote;
    }


    function getnextVote() {
        if (undefined != $scope.next.vote) {
            $scope.vote = $scope.next.vote;
        }
        return voteService.fetchVote().then(preloadVote).then(fetchGovermentVote);
    };

    function handleVote(result) {
        var votering_id = $scope.vote.voteringid;
        votingresultService.addUserVote({id: votering_id, result: result });
        $scope.voteringinformation = votingresultService.resultOfVote(votering_id);
        getnextVote();
    }

    $scope.agreeWithVote = function () {
        handleVote('Ja')

    };

    $scope.disagreeWithVote = function () {
        handleVote('Nej')
    };

    $scope.random = function(){
            return 0.5 - Math.random();
    };
}]);