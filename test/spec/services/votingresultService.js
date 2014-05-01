/**
 * Created by Jon on 2014-04-27.
 */
'use strict';

(function () {
    describe('Service: votingresultService', function () {
        describe('Keep track of user votes', function () {
            var service, id;
            beforeEach(module('RostRecept'));
            beforeEach(inject(function(votingresultService){
                service = votingresultService;
                id = '0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7';
                service.addUserVote({id: id, result: 'Ja'});
                service.addGovermentVote(id,[{"votering_id":"0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7","punkt":"0","namn":"Susanne  Eberstein","intressent_id":"0235974887200","parti":"S","valkrets":"Västernorrlands län","valkretsnummer":"26","iort":null,"rost":"Ja","avser":"sakfrågan","votering":"huvud","banknummer":"1","fornamn":"Susanne","efternamn":"Eberstein","kon":"kvinna","fodd":"1948","rm":null,"beteckning":null,"källa":"distribution","datum":"2014-04-27 00:00:00", "randomNumber":"3"},{"votering_id":"0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7","punkt":"0","namn":"Ulf  Holm","intressent_id":"0584183916016","parti":"MP","valkrets":"Skåne läns södra","valkretsnummer":"13","iort":null,"rost":"Nej","avser":"sakfrågan","votering":"huvud","banknummer":"2","fornamn":"Ulf","efternamn":"Holm","kon":"man","fodd":"1969","rm":null,"beteckning":null,"källa":"distribution","datum":"2014-04-27 00:00:00"},{"votering_id":"0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7","punkt":"0","namn":"Jan  Ertsborn","intressent_id":"09812885803","parti":"FP","valkrets":"Hallands län","valkretsnummer":"15","iort":null,"rost":"Ja","avser":"sakfrågan","votering":"huvud","banknummer":"3","fornamn":"Jan","efternamn":"Ertsborn","kon":"man","fodd":"1944","rm":null,"beteckning":null,"källa":"distribution","datum":"2014-04-27 00:00:00"},{"votering_id":"0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7","punkt":"0","namn":"Mats  Odell","intressent_id":"0700424025906","parti":"KD","valkrets":"Stockholms län","valkretsnummer":"2","iort":null,"rost":"Frånvarande","avser":"sakfrågan","votering":"huvud","banknummer":"4","fornamn":"Mats","efternamn":"Odell","kon":"man","fodd":"1947","rm":null,"beteckning":null,"källa":"distribution","datum":"2014-04-27 00:00:00"},{"votering_id":"0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7","punkt":"0","namn":"Meeri  Wasberg","intressent_id":"0741225202024","parti":"S","valkrets":"Stockholms län","valkretsnummer":"2","iort":null,"rost":"Ja","avser":"sakfrågan","votering":"huvud","banknummer":"5","fornamn":"Meeri","efternamn":"Wasberg","kon":"kvinna","fodd":"1973","rm":null,"beteckning":null,"källa":"distribution","datum":"2014-04-27 00:00:00" }]);
            }));


            it('You add a new user votingresult',function () {
                expect(service.userVotes).toBeDefined();
                expect(Object.keys(service.userVotes).length).toBe(1);
                expect(service.userVotes[id]).toBeDefined();
            });

            it('You add new goverment votingresult', function() {
                expect(service.govermentVotes).toBeDefined();
                expect(Object.keys(service.govermentVotes).length).toBe(1);
                expect(service.govermentVotes[id]).toBeDefined();
            });

            it('You see your vote result comparison',function()
            {
                var result = service.resultOfVote(id);
                expect(result).toBeDefined();
                expect(result.length).toBe(3);
                var singleResult = result[0];

            });

            //this is not the right place either.

            it('The list of voterings information should be possible to order randomly',function()
            {
                var result = service.resultOfVote(id)[0];
                expect(result.randomNumber).toBeDefined();
            });

        });
    });
})();