'use strict';
var riksdagensapi = angular.module('RostRecept');
riksdagensapi.factory('voteService', ['$http', '$q', function ($http, $q) {
    var votering = [], baseURL = 'http://data.riksdagen.se/', utskottsforslagFunction, voteringresultatFunction, relatedMotionFunction, rdjsonPromiseContainer = {};
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
        if(data.dokumentstatus != undefined)
        {
            var dokid = data.dokumentstatus.dokument.dok_id;
            var promise = rdjsonPromiseContainer[dokid];
            //TODO: There can be several promises to resolve here.
            if(!promise)
                console.warn(promise + ' promise for dokid '+ dokid +' was undefined');
            relatedMotionFunction(data,promise.promise,promise.avslag);
            delete rdjsonPromiseContainer[dokid];
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
        var url = motion.dokumentstatus_url_xml.replace('.xml', '.jsonp?callback=JSON_CALLBACK');
        var utskottsurl = url.replace('dokumentstatus', 'utskottsforslag');
        $http.jsonp(utskottsurl).success(function (data) {
            utskottsforslagFunction(data);
        });
        utskottsforslagFunction = function (data) {
            var utskottsforslag = [];
            var temp = data.utskottsforslag.dokutskottsforslag.utskottsforslag;
            if(Array.isArray(temp)) {
                var utskottsforslag = temp.filter(function (element) {
                    return element.punkt == votering.punkt;
                });
            }
            else
            {
                utskottsforslag.push(temp);
            }
            utskottsforslag[0].titel = data.utskottsforslag.dokument.titel;
            deferred.resolve(utskottsforslag[0]);
        };
        return deferred.promise;
    }

    function cleanforslag(forslag) {
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
                return { titel: forslag.titel, summary: forslag.rubrik, forslag: forslag.cleanforslag, forslagurl: forslag.cleanCodes, voteringid: forslag.votering_id, votering_url_xml: forslag.votering_url_xml, orginalvotering: singlevotering.forslagspunkt};
            });
        },
        fetchVoteResult: function (votering_url_xml) {
                var deferred = $q.defer();
                //there is a URL to the dokument but make it JSONP callback does not work
                var url =votering_url_xml +  '.jsonp';

                $http.jsonp(url).success(function (data) {
                    voteringresultatFunction(data);

                });
                voteringresultatFunction = function(data) {
                    var voteringResult = data.votering.dokvotering.votering;
                    voteringResult.forEach(function(votering)
                   {
                        votering.randomNumber = Math.random();
                   });
                   deferred.resolve(voteringResult);
                };

                return deferred.promise;
            },
        fetchTextForMotion: function(dokumenstatusID,yrkande,avslag)
        {
            var deferred = $q.defer();
            if(dokumenstatusID == null)
            {
                console.warn(dokumenstatusID + yrkande + avslag);
                return;
            }
            var utskottsurl  = baseURL + 'dokumentstatus/' + dokumenstatusID + '.jsonp';
            $http.jsonp(utskottsurl).success(function (data) {
                relatedMotionFunction(data,deferred,avslag);
            });

            relatedMotionFunction = function (data, promise, avslag) {
                if(data.dokumentstatus.dokforslag == null)
                    promise.fail();
                var forslag = data.dokumentstatus.dokforslag.forslag;
                if(Array.isArray(forslag)) {
                    var temp = [];
                    if(yrkande != null)
                    {
                        forslag = forslag.filter(function(ettForslag)
                        {
                            return yrkande.indexOf(ettForslag.nummer) > -1;
                        });
                    }
                    forslag.forEach(function(lydelse)
                    {
                        temp.push({dokumentCode: dokumenstatusID, yrkande: lydelse.nummer, summary: lydelse.lydelse, avslag : avslag});
                    });
                    promise.resolve(temp);
                }
                else
                {
                    promise.resolve([{dokumentCode: dokumenstatusID, yrkande: forslag.nummer, summary: forslag.lydelse + (forslag.lydelse2|| ' '), avslag : avslag}]);
                }
            };
            rdjsonPromiseContainer[dokumenstatusID] = {promise: deferred, avslag: avslag};
            return deferred.promise;
        }
        };
    }]);
