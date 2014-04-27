/**
 * Created by Jon on 2014-04-26.
 */
'use strict';

angular.module('RostRecept').controller('voteCtrl', ['$scope', 'voteService','votingresultService', function ($scope, voteService,votingresultService) {
        voteService.init().then(getnextvote);

        function getnextvote()
        {
            voteService.fetchVote().then(function(result)
            {
                $scope.vote = result;
            });
        };

        $scope.agreeWithVote = function () {
            var votering_id = $scope.vote.voteringid;

            votingresultService.addUserVote({id:votering_id, result: 'Ja' });
            voteService.fetchVoteResult($scope.vote.votering_url_xml).then(function(data)
            {
                votingresultService.addGovermentVote(votering_id,data);
                //Sync until rdjsonp is fixed from their data.

                $scope.voteringinformation = votingresultService.resultOfVote(votering_id);
                getnextvote();
            });

        };

        $scope.disagreeWithVote = function () {
            getnextvote();
        };
    }]);