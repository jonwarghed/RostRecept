/**
 * Created by Jon on 2014-04-26.
 */
'use strict';

angular.module('RostRecept').controller('voteCtrl', ['$scope', 'voteService','$q', 'votingresultService','forslagParser', function ($scope, voteService,$q, votingresultService,forslagParser) {
    $scope.next = {};
    $scope.searchText = '';
    $scope.currentFetch = [];
    $scope.initialized = false;

    voteService.init().then(function () {

        var promise = getnextVote().then(getnextVote).then(
            function()
            {
                $scope.initialized = true;
            });
        $scope.currentFetch.push(promise);
    });

    function fetchGovermentVote(vote) {
        var voterings_id = vote.voteringid;
        return voteService.fetchVoteResult(vote.votering_url_xml).then(function (data) {
            votingresultService.addGovermentVote(voterings_id, data);
            return vote;
        });
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

           var promise = voteService.fetchTextForMotion(parsedForslag.dokumentCode, parsedForslag.yrkande, parsedForslag.avslag).then(function(data)
           {
               data.forEach(function(forslag){
                   //xor operation if it is inverted or avslag change the text, but if it is both do not change it.
                   var negativeStatement = (!forslag.avslag != !vote.inverted)
                   var replaceString;
                   replaceString = negativeStatement ? "Jag är emot att " : "Jag anser att ";
                   forslag.summary = forslag.summary.replace('Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om att ', replaceString );
                   replaceString = negativeStatement ? "Jag tycker vi ska sluta fokuser på " : "Jag tycker att vi ska satsa på ";
                   forslag.summary = forslag.summary.replace('Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om', replaceString);
                   replaceString = negativeStatement ? "Vi bör inte diskutera möjlighete" : "Låt oss överväga möjlighete";
                   forslag.summary = forslag.summary.replace('Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om möjlighete', replaceString);
                   replaceString = negativeStatement ? "Jag är emot " : "Jag bifaller ";
                   forslag.summary = forslag.summary.replace('Riksdagen avslår regeringens', replaceString);
                   vote.parsedForslag.push(forslag);
               });
           });
            $scope.currentFetch.push(promise);
        });
    }


    function getnextVote() {
        //Wait for earlier requests
        $q.all($scope.currentFetch);
        $scope.currentFetch = [];
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
            console.log('It happened information was not loaded yet.');
            $scope.totalResult = votingresultService.totalResult();
            getnextVote();
            return;
        }
        $scope.voteringinformation.summary = $scope.vote.summary;
        $scope.voteringinformation.titel = $scope.vote.titel;
        $scope.totalResult = votingresultService.totalResult();
        var promise = getnextVote().then(function(){
            $scope.processingVote = false;
        });
        $scope.currentFetch.push(promise);

    }

    $scope.agreeWithVote = function () {
        $scope.processingVote = true;
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
        $scope.processingVote = true;
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