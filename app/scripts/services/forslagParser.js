'use strict';
angular.module('RostRecept').factory('forslagParser',[function(){

    function convert(code)
    {
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
        return code;
    };
    return{
        convert: convert,
        parse: function(forslag)
        {
            var parsed = [];
            var avslag = false, dokumentCode = '', yrkande = [], collectYrkandeMode = false, bifaller = false;
            var textByWord = forslag.split(/[\s,\.]/g);
            textByWord.forEach(function(word)
            {
                    if(word == 'avslår')
                    {
                        //Check if we already have parsed positiv then save first
                        if(dokumentCode != '')
                        {
                            parsed.push({dokumentCode: dokumentCode, yrkande : yrkande, avslag : avslag});
                            dokumentCode = '';
                            yrkande = [];
                        }
                        avslag = true;
                    }
                if(word.match(/201\d\/\d\d:\S*/))
                {
                    //we reached a point where we should save the information
                    if(dokumentCode != '')
                        parsed.push({dokumentCode: dokumentCode, yrkande : yrkande, avslag : avslag});
                    //Clean up old and set new
                    collectYrkandeMode = false;
                    yrkande = [];
                    dokumentCode = convert(word);
                }
                if(word.match(/yrkande/) || word.match(/punkt/))
                {
                    collectYrkandeMode = true;
                }
                if(collectYrkandeMode && word.match(/[\d-]+/g))
                {
                    //Note this is not a regular - but a –
                    var index = word.indexOf('–');
                    //if this word contains a hyphen it is for example 1-3 so we need to add [1,2,3] to yrkande
                    if(index > -1)
                    {
                        var lowNum = Number(word.substring(0,index));
                        var highNum = Number(word.substring(index+1));
                        while(lowNum <= highNum)
                        {
                            yrkande.push(lowNum+'');
                            lowNum++;
                        }
                    }
                    if(index < 0) {
                        yrkande.push(word);
                    }
                }

            });

            //push information gathered so far;
            if(dokumentCode != '') {
                parsed.push({dokumentCode: dokumentCode, yrkande: yrkande, avslag: avslag});
            }
            return parsed;
        }
    };
}]);