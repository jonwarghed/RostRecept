'use strict';
var riksdagensapi = angular.module('RostRecept.riksdagenAPI',[]);
riksdagensapi.factory('voteService', ['$http', '$q', function ($http, $q) {
       var votering = [];
       function fetchMotion(votering)
       {
           return $http.jsonp('http://data.riksdagen.se/dokumentlista/?rm=' + votering.rm + '&bet=' + votering.bet + '&utformat=jsonp&callback=JSON_CALLBACK').then(function (result) {
               return result.data.dokumentlista.dokument;
           });

       };

        function fetchUtskottsforslag(motion,votering) {
            var deferred = $q.defer();
            //there is a URL to the dokument but make it JSONP
            var url = motion.dokumentstatus_url_xml.replace('.xml', '.jsonp');
            var utskottsurl = url.replace('dokumentstatus', 'utskottsforslag');
            var promise = $http.jsonp(utskottsurl).success(function (data) {
                var utskottsforslag = data.utskottsforslag.dokutskottsforslag.utskottsforslag.filter(function (element) {
                    return element.punkt == votering.punkt;
                });
                deferred.resolve(utskottsforslag);

            });
            //This is a hack due to incorrect callback method should be the above if correct
            window.rdjsonp = function (data) {
                var utskottsforslag = data.utskottsforslag.dokutskottsforslag.utskottsforslag.filter(function (element) {
                    return element.punkt == votering.punkt;
                });
                deferred.resolve(utskottsforslag);
            };
            return deferred.promise;
        };
      function cleanforslag (forslag) {
        //var cleanCodes = forslag.forslag.match(/bifaller|avslår|201\d\/\d\d:\S*|yttrande(na)? \d/g, '');
//          console.log(forslag);
        var cleanCodes = forslag.forslag.match(/201\d\/\d\d:\S*/g, '');
        var clean = forslag.forslag.replace(/av [^\)]*\)\s?/g, '').replace(/\s,\s/g, ', ');
        forslag.cleanforslag = clean;
        forslag.cleanCodes = cleanCodes;
    };

       return {
            years: ['2013%2F14', '2012%2F13', '2011%2F12'],
            votering: votering,
            getVotesForYear: function (rm)
            {
                var self = this;
                var promise = $http.jsonp('http://data.riksdagen.se/voteringlista/?rm=' + rm + '&sz=5&utformat=jsonp&gruppering=bet&callback=JSON_CALLBACK').success(function (data) {
                    data.voteringlista.votering.forEach(function (elem) {
                        self.votering.push(elem);
                    });
                    return data.voteringlista;
                });
                return promise;
            },
            init: function ()
            {
                var promises = [];
                var self = this;
                this.years.forEach(function (year)
                {
                    var promise = self.getVotesForYear(year);
                    promises.push(promise);
                });
                return $q.all(promises);
            },
            fetchVote: function()
            {
                //Select a random vote
                var singlevotering = votering[Math.floor(Math.random() * this.votering.length)];
                return fetchMotion(singlevotering).then(function(motion)
                {
                    return fetchUtskottsforslag(motion,singlevotering)
                }).then(function(forslag)
                {
                    var voteringDivided = [];
                    forslag.forEach(function(f)
                    {
                        cleanforslag(f);
                        voteringDivided.push({ summary: f.rubrik, forslag: f.cleanforslag, forslagurl : [], voteringid : f.votering_id, votering_url_xml: f.votering_url_xml});
                    });
                    return voteringDivided;

                });

            }
            };
        }
]);
