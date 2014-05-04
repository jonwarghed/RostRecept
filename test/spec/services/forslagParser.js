'use strict';

(function () {
    describe('Service: forslagParser', function () {
       describe('parsing TestString 1',function (){
           var inputString =  'Riksdagen avslår motionerna 2013/14:Sf264 av Åsa Romson m.fl. (MP) yrkande 9, 2013/14:So624 av Hillevi Larsson m.fl. (S) yrkande 2, 2013/14:N351 av Lars Eriksson m.fl. (S) yrkande 2, 2013/14:A373 av Jan-Olof Larsson m.fl. (S) yrkandena 1 och 2 samt 2013/14:A409 av Ylva Johansson m.fl. (S) yrkandena 2 och 3.';
           var result;

           beforeEach(module('RostRecept'));
           beforeEach(inject(function(forslagParser){
               result = forslagParser.parse(inputString);
           }));
           it('Should create 5 forslag',function(forslagParser){
               expect(result).toBeDefined();
               expect(result.length).toBe(5);

           });
           it('Forslag 1 should be correctly parsed',function(forslagParser){
               //avslår 2013/14:Sf264 av Åsa Romson m.fl. (MP) yrkande 9

               expect(result[0].dokumentCode).toBe('H102Sf264');
               expect(result[0].yrkande[0]).toBe('9');
               expect(result[0].avslag).toBe(true);
           });
           it('Forslag 4 should be correctly parsed',function(forslagParser){
               //avslår 2013/14:A373 av Jan-Olof Larsson m.fl. (S) yrkandena 1 och 2

               expect(result[3].dokumentCode).toBe('H102A373');
               expect(result[3].yrkande[0]).toBe('1');
               expect(result[3].yrkande[1]).toBe('2');
               expect(result[3].avslag).toBe(true);
           });
       });

        describe('parsing TestString 2',function (){
            var inputString =  "Riksdagen avslår motionerna \n2013/14:Fi271 av Lars Johansson m.fl. (S) yrkande 5 i denna del, \n2013/14:C419 av Åsa Romson m.fl. (MP) yrkande 29 och \n2013/14:So321 av Hillevi Larsson (S) yrkandena 1–3.\r\n";
            var result;

            beforeEach(module('RostRecept'));
            beforeEach(inject(function(forslagParser){
                result = forslagParser.parse(inputString);
            }));
            it('Should create 3 forslag',function(forslagParser){
                expect(result).toBeDefined();
                expect(result.length).toBe(3);

            });
            it('Forslag 1 should be correctly parsed',function(forslagParser){
                //2013/14:Fi271 av Lars Johansson m.fl. (S) yrkande 5 i denna del
                expect(result[0].dokumentCode).toBe('H102Fi271');
                expect(result[0].yrkande[0]).toBe('5');
                expect(result[0].avslag).toBe(true);
            });
            it('Forslag 2 should be correctly parsed',function(forslagParser){
                //2013/14:C419 av Åsa Romson m.fl. (MP) yrkande 29 och
                expect(result[1].dokumentCode).toBe('H102C419');
                expect(result[1].yrkande[0]).toBe('29');
                expect(result[1].avslag).toBe(true);
            });

            it('Forslag 3 should be correctly parsed',function(forslagParser){
                //2013/14:So321 av Hillevi Larsson (S) yrkandena 1–3.

                expect(result[2].dokumentCode).toBe('H102So321');
                expect(result[2].yrkande[0]).toBe('1');
                expect(result[2].yrkande[1]).toBe('2');
                expect(result[2].yrkande[2]).toBe('3');
                expect(result[2].avslag).toBe(true);
            });
        });

        describe('parsing TestString 3',function (){
            var inputString =  "Riksdagen antar regeringens förslag till lag om ändring i lagen (2004:629) om trängselskatt.\r\nDärmed bifaller riksdagen proposition 2013/14:76 punkt 1 och avslår motionerna \n2013/14:Sk4 av Thoralf Alfsson och David Lång (båda SD) yrkandena 1–3 och \n2013/14:Sk7 av Åsa Romson m.fl. (MP) yrkande 2.\r\n";
            var result;

            beforeEach(module('RostRecept'));
            beforeEach(inject(function(forslagParser){
                result = forslagParser.parse(inputString);
            }));
            it('Should create 3 forslag',function(forslagParser){
                expect(result).toBeDefined();
                expect(result.length).toBe(3);

            });
            it('Forslag 1 should be correctly parsed',function(forslagParser){
                //Därmed bifaller riksdagen proposition 2013/14:76 punkt 1
                expect(result[0].dokumentCode).toBe('H10376');
                expect(result[0].yrkande[0]).toBe('1');
                expect(result[0].avslag).toBe(false);
            });
            it('Forslag 2 should be correctly parsed',function(forslagParser){
                //2013/14:Sk4 av Thoralf Alfsson och David Lång (båda SD) yrkandena 1–3
                expect(result[1].dokumentCode).toBe('H102Sk4');
                expect(result[1].yrkande[0]).toBe('1');
                expect(result[1].yrkande[1]).toBe('2');
                expect(result[1].yrkande[2]).toBe('3');
                expect(result[1].avslag).toBe(true);
            });

            it('Forslag 3 should be correctly parsed',function(forslagParser){
                //2013/14:Sk7 av Åsa Romson m.fl. (MP) yrkande 2.
                expect(result[2].dokumentCode).toBe('H102Sk7');
                expect(result[2].yrkande[0]).toBe('2');
                expect(result[2].avslag).toBe(true);
            });
        });



    });
})();

