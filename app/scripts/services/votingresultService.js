'use strict';
angular.module('RostRecept').factory('votingresultService',[function(){
    var userVotes = {};
    var govermentVotes = {};
    var currentTally = {};
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

            var userVote = userVotes[id];
            var govermentVotesforID = govermentVotes[id];
            if(null == govermentVotesforID) {
                return;
            }

            var votes = govermentVotesforID.filter(function(govermentVote){
                    var currentTallySlice;
                    if(currentTally[govermentVote.intressent_id] == null)
                    {
                        currentTally[govermentVote.intressent_id] = {namn: govermentVote.namn ,intressent_id :govermentVote.intressent_id, parti: govermentVote.parti, valkrets: govermentVote.valkrets, score : 0 }
                    }
                    currentTallySlice = currentTally[govermentVote.intressent_id];
                    if(govermentVote.rost == userVote.result) {
                        currentTallySlice.score++;
                        return true;
                    }
                });

            //Todo parse and add to current tally.



            return votes;
        },
        totalResult: function()
        {
            return _.values(currentTally);
        }

    };
}]);