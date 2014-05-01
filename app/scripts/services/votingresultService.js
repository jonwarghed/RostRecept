'use strict';
angular.module('RostRecept').factory('votingresultService',[function(){
    var userVotes = {};
    var govermentVotes = {};
    return {
        userVotes : userVotes,
        //these should be a dictionary of votes?
        govermentVotes : govermentVotes,
        addUserVote: function(vote){
            userVotes[vote.id] = vote;
        },
        addGovermentVote:  function(id,votes){
            govermentVotes[id] = votes;
        },
        resultOfVote: function(id){
            //var promise = new Promise(function(resolve,reject)
            //{

                var userVote = userVotes[id];
                var govermentVotesforID = govermentVotes[id];
                //this is still sync until redone;
                if(null == govermentVotesforID) {
                    return;
                }
                var votes = govermentVotesforID.filter(function(govermentVote){
                        if(govermentVote.rost == userVote.result)
                            return true;
                    });
            //    resolve(votes);
            //});

            return votes;
        }

    };
}]);