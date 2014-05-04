/**
 * Created by Jon on 2014-04-26.
 */
'use strict';

angular.module('RostRecept').controller('voteCtrl', ['$scope', 'voteService', 'votingresultService','forslagParser', function ($scope, voteService, votingresultService,forslagParser) {
    $scope.next = {};
    $scope.searchText = '';
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
        vote.inverted = Math.random()<.5;
        $scope.next.vote = vote;
        return vote;
    }

    function splitForslag(vote)
    {
        var preParse = forslagParser.parse(vote.forslag);

        vote.parsedForslag = [];
        preParse.forEach(function(parsedForslag)
        {
           voteService.fetchTextForMotion(parsedForslag.dokumentCode, parsedForslag.yrkande, parsedForslag.avslag).then(function(data)
           {
               data.forEach(function(forslag){
                   var interjektion = '';
                   //xor operation if it is inverted or avslag change the text, but if it is both do not change it.
                   if(!forslag.avslag != !vote.inverted) {
                       interjektion = 'inte ';
                   }
                   forslag.summary = forslag.summary.replace('Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om att ', 'Jag anser '+ interjektion+ ' att '  );
                   forslag.summary = forslag.summary.replace('Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om', 'Vi borde '+  interjektion+ 'se över ');
                   forslag.summary = forslag.summary.replace('Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om möjlighete', 'Låt oss '+ interjektion+ 'överväga möjlighete');

                   vote.parsedForslag.push(forslag);
               });
           });
        });
    }


    function getnextVote() {
        if (undefined != $scope.next.vote) {
            $scope.vote = $scope.next.vote;
        }
        return voteService.fetchVote().then(preloadVote).then(fetchGovermentVote).then(splitForslag);
    };



    function handleVote(result) {
        var votering_id = $scope.vote.voteringid;
        votingresultService.addUserVote({id: votering_id, result: result });

        $scope.voteringinformation = votingresultService.resultOfVote(votering_id);
        //Sometimes this is undefined, say whaaaaat?
        if($scope.voteringinformation == null)
        {
            console.log('It happened');
            $scope.totalResult = votingresultService.totalResult();
            getnextVote();
            return;
        }
        $scope.voteringinformation.summary = $scope.vote.summary;
        $scope.voteringinformation.titel = $scope.vote.titel;
        $scope.totalResult = votingresultService.totalResult();
        getnextVote();
    }

    $scope.agreeWithVote = function () {
        if($scope.vote.inverted)
        {
            handleVote('Nej');
        }
        else
        {
            handleVote('Ja');
        }

    };

    $scope.disagreeWithVote = function () {

        if($scope.vote.inverted)
        {
            handleVote('Ja');
        }
        else
        {
            handleVote('Nej');
        }

    };

}]);