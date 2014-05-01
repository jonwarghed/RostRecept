'use strict';
var riksdagensapi = angular.module('RostRecept');
riksdagensapi.factory('voteService', ['$http', '$q', function ($http, $q) {
    var votering = [], baseURL = 'http://data.riksdagen.se/', utskottsforslagFunction, voteringresultatFunction;
    //This hack solves the incorrect callbacks.
    window.rdjsonp = function (data) {
        if(data.votering != undefined)
        {
            voteringresultatFunction(data);
        }
        if(data.utskottsforslag != undefined)
        {
            utskottsforslagFunction(data);
        }

    };

    function fetchMotion(votering) {
        return $http.jsonp(baseURL + 'dokumentlista/?rm=' + votering.rm + '&bet=' + votering.bet + '&utformat=jsonp&callback=JSON_CALLBACK').then(function (result) {
            return result.data.dokumentlista.dokument;
        });

    }
    function fetchUtskottsforslag(motion, votering) {
        var deferred = $q.defer();
        //there is a URL to the dokument but make it JSONP
        var url = motion.dokumentstatus_url_xml.replace('.xml', '.jsonp');
        var utskottsurl = url.replace('dokumentstatus', 'utskottsforslag');
        $http.jsonp(utskottsurl).success(function (data) {
            var utskottsforslag = data.utskottsforslag.dokutskottsforslag.utskottsforslag.filter(function (element) {
                return element.punkt == votering.punkt;
            });
            deferred.resolve(utskottsforslag[0]);

        });
        //This is a hack due to incorrect callback method should be the above if correct
//        window.rdjsonp = function (data) {
//
//
//            var utskottsforslag = data.utskottsforslag.dokutskottsforslag.utskottsforslag.filter(function (element) {
//                return element.punkt == votering.punkt;
//            });
//            //There can only be one!
//            deferred.resolve(utskottsforslag[0]);
//        };


        utskottsforslagFunction = function (data) {
            var utskottsforslag = data.utskottsforslag.dokutskottsforslag.utskottsforslag.filter(function (element) {
                return element.punkt == votering.punkt;
            });
            //There can only be one!
            deferred.resolve(utskottsforslag[0]);
        };
        return deferred.promise;
    }

    function cleanforslag(forslag) {
        //var cleanCodes = forslag.forslag.match(/bifaller|avslår|201\d\/\d\d:\S*|yttrande(na)? \d/g, '');
        //var stringForslag = forslag.forslag + '';

        var documentCodes = forslag.forslag.match(/201\d\/\d\d:\S*/g, '');
        forslag.cleanCodes = [];
        documentCodes.forEach(function(code)
        {
            //if code contains any letter then it is a motion code 02
            if(code.match(/[A-Za-z]/))
            {
                code = code.replace(':','02')
            }
            else
            {
                code = code.replace(':','03')
            }
            code = code.replace(/2011\/12/g,'GZ');
            code = code.replace(/2012\/13/g,'H0');
            code = code.replace(/2013\/14/g,'H1');
            forslag.cleanCodes.push(baseURL+'dokument/'+code);
        });


        forslag.cleanforslag = forslag.forslag.replace(/av [^\)]*\)\s?/g, '').replace(/\s,\s/g, ', ');
    }

    function getVotesForYear(rm, target) {
        return $http.jsonp('http://data.riksdagen.se/voteringlista/?rm=' + rm + '&sz=5&utformat=jsonp&gruppering=bet&callback=JSON_CALLBACK').success(function (data) {
            data.voteringlista.votering.forEach(function (elem) {
                target.votering.push(elem);
            });
            return data.voteringlista;
        });
    }



    return {
        //Production value
        //years: ['2013%2F14', '2012%2F13', '2011%2F12'],
        //Testing value
        years: ['2013%2F14'],
        votering: votering,
        init: function () {
            var promises = [];
            var self = this;
            this.years.forEach(function (year) {
                var promise = getVotesForYear(year, self);
                promises.push(promise);
            });
            return $q.all(promises);
        },
        fetchVote: function () {            //Select a random vote

            var singlevotering = votering.splice(Math.floor(Math.random() * this.votering.length), 1)[0];
            return fetchMotion(singlevotering).then(function (motion) {
                return fetchUtskottsforslag(motion, singlevotering)
            }).then(function (forslag) {
                cleanforslag(forslag);
                return { summary: forslag.rubrik, forslag: forslag.cleanforslag, forslagurl: forslag.cleanCodes, voteringid: forslag.votering_id, votering_url_xml: forslag.votering_url_xml, orginalvotering: singlevotering.forslagspunkt};
            });
        },
        fetchVoteResult: function (votering_url_xml) {
                var deferred = $q.defer();
                //there is a URL to the dokument but make it JSONP
                var url =votering_url_xml +  '.jsonp';

                $http.jsonp(url).success(function (data) {
                    var voteringResult = data.votering.dokvotering.votering;
                    voteringResult.forEach(function(votering)
                    {
                        votering.randomNumber = Math.random();
                    });
                    deferred.resolve(voteringResult);
                });
                //This is a hack due to incorrect callback method should be the above if correct
//                window.rdjsonp = function (data) {
//
//                };
                voteringresultatFunction = function(data) {
                    var voteringResult = data.votering.dokvotering.votering;
                    voteringResult.forEach(function(votering)
                   {
                        votering.randomNumber = Math.random();
                   });
                   deferred.resolve(voteringResult);
                }

                return deferred.promise;
            }
        };
    }]);
