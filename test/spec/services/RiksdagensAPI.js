/*global describe, it */
'use strict';

(function () {
    describe('Service: RiksdagensAPI', function () {
        describe('Queries riksdagen API for votes', function () {
            var $httpBackend;

            beforeEach(module('RostRecept'));
            beforeEach(inject(function (_$httpBackend_) {
                $httpBackend = _$httpBackend_;
                $httpBackend.whenJSONP(/voteringlista/).respond(200, { "voteringlista": { "votering": [
                    { "forslagspunkt": "2013/14:AU2p16", "rm": "2013/14", "bet": "AU2", "punkt": "16", "Ja": "301", "Nej": "17", "Frånvarande": "31", "Avstår": null },
                    { "forslagspunkt": "2013/14:AU2p2", "rm": "2013/14", "bet": "AU2", "punkt": "2", "Ja": "276", "Nej": "41", "Frånvarande": "32", "Avstår": null },
                    { "forslagspunkt": "2013/14:AU2p3", "rm": "2013/14", "bet": "AU2", "punkt": "3", "Ja": "175", "Nej": "101", "Frånvarande": "33", "Avstår": "40" }
                ] } });
                $httpBackend.whenJSONP(/dokumentlista/).respond(200, { "dokumentlista": { "index": { "avdelning": [
                    { "namn": "bilder", "antal": "218092" },
                    { "namn": "cms", "antal": "11902" },
                    { "namn": "dokument", "antal": "226169" },
                    { "namn": "en", "antal": "1758" },
                    { "namn": "funkar", "antal": "857" },
                    { "namn": "lagar", "antal": "9401" },
                    { "namn": "ledamot", "antal": "1523" }
                ] }, "facettlista": null, "stavning": null, "dokument": { "traff": "1", "domain": "rdwebb", "database": "dokument", "datum": "2013-12-10", "id": "H101AU2", "dok_id": "H101AU2", "undertitel": null, "kalla": null, "kall_id": null, "publicerad": "2013-12-10 10:08:11", "systemdatum": "2013-12-10 10:08:11", "dokumentformat": null, "dokument_url_text": "http://data.riksdagen.se/dokument/H101AU2.text", "dokument_url_html": "http://data.riksdagen.se/dokument/H101AU2.html", "dokumentstatus_url_xml": "http://data.riksdagen.se/dokumentstatus/H101AU2.xml", "url": null, "relurl": null, "titel": "Utgiftsområde 14 Arbetsmarknad och arbetsliv", "rm": "2013/14", "relaterat_id": null, "doktyp": "bet", "typ": "bet", "subtyp": "bet", "status": null, "lang": null, "beteckning": "AU2", "tempbeteckning": null, "organ": "AU", "nummer": "2", "score": "3,9081826", "summary": null, "notisrubrik": "Pengar till arbetsmarknad och arbetsliv (AU2)", "notis": "Riksdagen sa ja till regeringens förslag i budgetpropositionen om 70,4 miljarder kronor till arbetsmarknad och arbetsliv för 2014. Mest pengar går till arbetslöshetsersättning och aktivitetsstöd, lönebidrag och Samhall, arbetsmarknadspolitiska program och insatser och kostnader för Arbetsförmedlingen. Den så kallade FunkA-utredningen har 2012 och 2013 lämnat förslag på arbetsmarknadspolitiska insatser för personer med funktionsnedsättning. Regeringen har genomfört vissa delar, men ytterligare insatser behövs, konstaterar riksdagen. Riksdagen gav genom ett tillkännagivande regeringen i uppdrag att skyndsamt återkomma med förslag. Ställningstagandet gjordes med anledning av en motion från Vänsterpartiet. Riksdagen sa nej till övriga motioner från allmänna motionstiden 2013 om arbetsmarknadspolitik. ", "dokintressent": null, "filbilaga": { "fil": { "typ": "pdf", "namn": "2013_14_AU2.pdf", "storlek": "813308", "url": "http://data.riksdagen.se/fil/CBF2531C-DA70-49BB-B22A-E085B90F4BAA" } }, "avdelning": "dokument", "struktur": null, "debattgrupp": "1", "debattdag": "2013-12-17", "beslutsdag": "2013-12-18", "beredningsdag": "2013-11-12", "justeringsdag": "2013-12-05", "beslutad": "1", "debattsekunder": "9549", "ardometyp": "ap", "debatt": { "anforande": [
                    { "parti": "S", "ardome_id": "1100131217312091422", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312063206%2FIN_A5KNQVCQ-NOT-NAMED_3120066-5&frame=54758", "anf_nummer": "77", "anf_datumtid": "2013-12-17 13:26:30", "anf_klockslag": "13:26", "anf_sekunder": "779", "talare": "Ylva Johansson (S)", "video_url": "1100131217312091222#pos=14", "intressent_id": "011731125914", "anf_text": null },
                    { "parti": "MP", "ardome_id": "1100131217312091922", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312063206%2FIN_A5KNQVCQ-NOT-NAMED_3120066-5&frame=74452", "anf_nummer": "78", "anf_datumtid": "2013-12-17 13:39:35", "anf_klockslag": "13:39", "anf_sekunder": "605", "talare": "Mehmet Kaplan (MP)", "video_url": "1100131217312091222#pos=799", "intressent_id": "0116084827614", "anf_text": null },
                    { "parti": "SD", "ardome_id": "1100131217312092322", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312063206%2FIN_A5KNQVCQ-NOT-NAMED_3120066-5&frame=89999", "anf_nummer": "79", "anf_datumtid": "2013-12-17 13:49:55", "anf_klockslag": "13:49", "anf_sekunder": "553", "talare": "Mattias Karlsson (SD)", "video_url": "1100131217312091222#pos=1419", "intressent_id": "0831636664429", "anf_text": null },
                    { "parti": "V", "ardome_id": "1100131217312100722", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=13983", "anf_nummer": "80", "anf_datumtid": "2013-12-17 13:59:19", "anf_klockslag": "13:59", "anf_sekunder": "556", "talare": "Ali Esbati (V)", "video_url": "1100131217312091222#pos=1983", "intressent_id": "014386615025", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312101222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=28182", "anf_nummer": "81", "anf_datumtid": "2013-12-17 14:08:39", "anf_klockslag": "14:08", "anf_sekunder": "690", "talare": "Jessica Polfjärd (M)", "video_url": "1100131217312091222#pos=2543", "intressent_id": "0630824497414", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312113122", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=45683", "anf_nummer": "82", "anf_datumtid": "2013-12-17 14:20:19", "anf_klockslag": "14:20", "anf_sekunder": "78", "talare": "Ylva Johansson (S)", "video_url": "1100131217312091222#pos=3243", "intressent_id": "011731125914", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312119722", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=47452", "anf_nummer": "83", "anf_datumtid": "2013-12-17 14:21:37", "anf_klockslag": "14:21", "anf_sekunder": "74", "talare": "Jessica Polfjärd (M)", "video_url": "1100131217312091222#pos=3321", "intressent_id": "0630824497414", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312120222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=49275", "anf_nummer": "84", "anf_datumtid": "2013-12-17 14:22:51", "anf_klockslag": "14:22", "anf_sekunder": "112", "talare": "Ylva Johansson (S)", "video_url": "1100131217312091222#pos=3395", "intressent_id": "011731125914", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312120322", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=52187", "anf_nummer": "85", "anf_datumtid": "2013-12-17 14:24:43", "anf_klockslag": "14:24", "anf_sekunder": "128", "talare": "Jessica Polfjärd (M)", "video_url": "1100131217312091222#pos=3507", "intressent_id": "0630824497414", "anf_text": null },
                    { "parti": "MP", "ardome_id": "1100131217312120422", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=55522", "anf_nummer": "86", "anf_datumtid": "2013-12-17 14:26:55", "anf_klockslag": "14:26", "anf_sekunder": "103", "talare": "Mehmet Kaplan (MP)", "video_url": "1100131217312091222#pos=3639", "intressent_id": "0116084827614", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312120522", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=57961", "anf_nummer": "87", "anf_datumtid": "2013-12-17 14:28:38", "anf_klockslag": "14:28", "anf_sekunder": "76", "talare": "Jessica Polfjärd (M)", "video_url": "1100131217312091222#pos=3742", "intressent_id": "0630824497414", "anf_text": null },
                    { "parti": "MP", "ardome_id": "1100131217312120622", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=59938", "anf_nummer": "88", "anf_datumtid": "2013-12-17 14:29:55", "anf_klockslag": "14:29", "anf_sekunder": "125", "talare": "Mehmet Kaplan (MP)", "video_url": "1100131217312091222#pos=3819", "intressent_id": "0116084827614", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312121022", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=63007", "anf_nummer": "89", "anf_datumtid": "2013-12-17 14:32:00", "anf_klockslag": "14:32", "anf_sekunder": "47", "talare": "Jessica Polfjärd (M)", "video_url": "1100131217312091222#pos=3944", "intressent_id": "0630824497414", "anf_text": null },
                    { "parti": "V", "ardome_id": "1100131217312121122", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=64436", "anf_nummer": "90", "anf_datumtid": "2013-12-17 14:32:50", "anf_klockslag": "14:32", "anf_sekunder": "125", "talare": "Ali Esbati (V)", "video_url": "1100131217312091222#pos=3994", "intressent_id": "014386615025", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312121222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=67597", "anf_nummer": "91", "anf_datumtid": "2013-12-17 14:34:55", "anf_klockslag": "14:34", "anf_sekunder": "78", "talare": "Jessica Polfjärd (M)", "video_url": "1100131217312091222#pos=4119", "intressent_id": "0630824497414", "anf_text": null },
                    { "parti": "V", "ardome_id": "1100131217312121322", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=69370", "anf_nummer": "92", "anf_datumtid": "2013-12-17 14:36:14", "anf_klockslag": "14:36", "anf_sekunder": "127", "talare": "Ali Esbati (V)", "video_url": "1100131217312091222#pos=4198", "intressent_id": "014386615025", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312121422", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=72551", "anf_nummer": "93", "anf_datumtid": "2013-12-17 14:38:21", "anf_klockslag": "14:38", "anf_sekunder": "34", "talare": "Jessica Polfjärd (M)", "video_url": "1100131217312091222#pos=4325", "intressent_id": "0630824497414", "anf_text": null },
                    { "parti": "FP", "ardome_id": "1100131217312121522", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=73763", "anf_nummer": "94", "anf_datumtid": "2013-12-17 14:39:05", "anf_klockslag": "14:39", "anf_sekunder": "544", "talare": "Christer Nylander (FP)", "video_url": "1100131217312091222#pos=4369", "intressent_id": "0731442709013", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312122122", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312093306%2FIN_A5KNQVCQ-NOT-NAMED_3120066-6&frame=87497", "anf_nummer": "95", "anf_datumtid": "2013-12-17 14:48:17", "anf_klockslag": "14:48", "anf_sekunder": "123", "talare": "Ylva Johansson (S)", "video_url": "1100131217312091222#pos=4921", "intressent_id": "011731125914", "anf_text": null },
                    { "parti": "FP", "ardome_id": "1100131217312130022", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=552", "anf_nummer": "96", "anf_datumtid": "2013-12-17 14:50:20", "anf_klockslag": "14:50", "anf_sekunder": "123", "talare": "Christer Nylander (FP)", "video_url": "1100131217312091222#pos=5044", "intressent_id": "0731442709013", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312130622", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=3669", "anf_nummer": "97", "anf_datumtid": "2013-12-17 14:52:23", "anf_klockslag": "14:52", "anf_sekunder": "109", "talare": "Ylva Johansson (S)", "video_url": "1100131217312091222#pos=5167", "intressent_id": "011731125914", "anf_text": null },
                    { "parti": "FP", "ardome_id": "1100131217312130722", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=6546", "anf_nummer": "98", "anf_datumtid": "2013-12-17 14:54:12", "anf_klockslag": "14:54", "anf_sekunder": "103", "talare": "Christer Nylander (FP)", "video_url": "1100131217312091222#pos=5276", "intressent_id": "0731442709013", "anf_text": null },
                    { "parti": "V", "ardome_id": "1100131217312130822", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=9155", "anf_nummer": "99", "anf_datumtid": "2013-12-17 14:56:01", "anf_klockslag": "14:56", "anf_sekunder": "126", "talare": "Ali Esbati (V)", "video_url": "1100131217312091222#pos=5385", "intressent_id": "014386615025", "anf_text": null },
                    { "parti": "FP", "ardome_id": "1100131217312130922", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=12181", "anf_nummer": "100", "anf_datumtid": "2013-12-17 14:58:07", "anf_klockslag": "14:58", "anf_sekunder": "110", "talare": "Christer Nylander (FP)", "video_url": "1100131217312091222#pos=5511", "intressent_id": "0731442709013", "anf_text": null },
                    { "parti": "V", "ardome_id": "1100131217312131022", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=14939", "anf_nummer": "101", "anf_datumtid": "2013-12-17 14:59:57", "anf_klockslag": "14:59", "anf_sekunder": "133", "talare": "Ali Esbati (V)", "video_url": "1100131217312091222#pos=5621", "intressent_id": "014386615025", "anf_text": null },
                    { "parti": "FP", "ardome_id": "1100131217312131522", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=18332", "anf_nummer": "102", "anf_datumtid": "2013-12-17 15:02:11", "anf_klockslag": "15:02", "anf_sekunder": "120", "talare": "Christer Nylander (FP)", "video_url": "1100131217312091222#pos=5755", "intressent_id": "0731442709013", "anf_text": null },
                    { "parti": "C", "ardome_id": "1100131217312131722", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=21583", "anf_nummer": "103", "anf_datumtid": "2013-12-17 15:04:21", "anf_klockslag": "15:04", "anf_sekunder": "583", "talare": "Annika Qarlsson (C)", "video_url": "1100131217312091222#pos=5885", "intressent_id": "0962841101917", "anf_text": null },
                    { "parti": "KD", "ardome_id": "1100131217312132222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312123106%2FIN_A5KNQVCQ-NOT-NAMED_3120066-7&frame=36459", "anf_nummer": "104", "anf_datumtid": "2013-12-17 15:14:10", "anf_klockslag": "15:14", "anf_sekunder": "534", "talare": "Andreas Carlson (KD)", "video_url": "1100131217312091222#pos=6474", "intressent_id": "0542160909628", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312191722", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=23450", "anf_nummer": "131", "anf_datumtid": "2013-12-17 18:05:35", "anf_klockslag": "18:05", "anf_sekunder": "525", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=60", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312192222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=36986", "anf_nummer": "132", "anf_datumtid": "2013-12-17 18:14:32", "anf_klockslag": "18:14", "anf_sekunder": "99", "talare": "Ylva Johansson (S)", "video_url": "1100131217312191522#pos=597", "intressent_id": "011731125914", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312192422", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=39302", "anf_nummer": "133", "anf_datumtid": "2013-12-17 18:16:11", "anf_klockslag": "18:16", "anf_sekunder": "112", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=696", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312192522", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=42202", "anf_nummer": "134", "anf_datumtid": "2013-12-17 18:18:03", "anf_klockslag": "18:18", "anf_sekunder": "104", "talare": "Ylva Johansson (S)", "video_url": "1100131217312191522#pos=808", "intressent_id": "011731125914", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312192622", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=44808", "anf_nummer": "135", "anf_datumtid": "2013-12-17 18:19:48", "anf_klockslag": "18:19", "anf_sekunder": "106", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=913", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "V", "ardome_id": "1100131217312193122", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=47808", "anf_nummer": "136", "anf_datumtid": "2013-12-17 18:21:44", "anf_klockslag": "18:21", "anf_sekunder": "113", "talare": "Ali Esbati (V)", "video_url": "1100131217312191522#pos=1029", "intressent_id": "014386615025", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312193222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=50491", "anf_nummer": "137", "anf_datumtid": "2013-12-17 18:23:37", "anf_klockslag": "18:23", "anf_sekunder": "128", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=1142", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "V", "ardome_id": "1100131217312193322", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=53661", "anf_nummer": "138", "anf_datumtid": "2013-12-17 18:25:45", "anf_klockslag": "18:25", "anf_sekunder": "131", "talare": "Ali Esbati (V)", "video_url": "1100131217312191522#pos=1270", "intressent_id": "014386615025", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312193422", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=56907", "anf_nummer": "139", "anf_datumtid": "2013-12-17 18:27:56", "anf_klockslag": "18:27", "anf_sekunder": "123", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=1401", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "MP", "ardome_id": "1100131217312193522", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=60211", "anf_nummer": "140", "anf_datumtid": "2013-12-17 18:30:05", "anf_klockslag": "18:30", "anf_sekunder": "105", "talare": "Mehmet Kaplan (MP)", "video_url": "1100131217312191522#pos=1530", "intressent_id": "0116084827614", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312193922", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=62858", "anf_nummer": "141", "anf_datumtid": "2013-12-17 18:31:50", "anf_klockslag": "18:31", "anf_sekunder": "125", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=1635", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "MP", "ardome_id": "1100131217312194022", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=66002", "anf_nummer": "142", "anf_datumtid": "2013-12-17 18:33:56", "anf_klockslag": "18:33", "anf_sekunder": "131", "talare": "Mehmet Kaplan (MP)", "video_url": "1100131217312191522#pos=1761", "intressent_id": "0116084827614", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312194122", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=69219", "anf_nummer": "143", "anf_datumtid": "2013-12-17 18:36:07", "anf_klockslag": "18:36", "anf_sekunder": "80", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=1892", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "SD", "ardome_id": "1100131217312194222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=71595", "anf_nummer": "144", "anf_datumtid": "2013-12-17 18:37:40", "anf_klockslag": "18:37", "anf_sekunder": "114", "talare": "Mattias Karlsson (SD)", "video_url": "1100131217312191522#pos=1985", "intressent_id": "0831636664429", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312194322", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=74391", "anf_nummer": "145", "anf_datumtid": "2013-12-17 18:39:34", "anf_klockslag": "18:39", "anf_sekunder": "99", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=2099", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "SD", "ardome_id": "1100131217312194722", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=76826", "anf_nummer": "146", "anf_datumtid": "2013-12-17 18:41:13", "anf_klockslag": "18:41", "anf_sekunder": "64", "talare": "Mattias Karlsson (SD)", "video_url": "1100131217312191522#pos=2198", "intressent_id": "0831636664429", "anf_text": null },
                    { "parti": "M", "ardome_id": "1100131217312194822", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=78479", "anf_nummer": "147", "anf_datumtid": "2013-12-17 18:42:17", "anf_klockslag": "18:42", "anf_sekunder": "124", "talare": "Arbetsmarknadsminister Elisabeth Svantesson (M)", "video_url": "1100131217312191522#pos=2262", "intressent_id": "0899112324519", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312195122", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=82263", "anf_nummer": "148", "anf_datumtid": "2013-12-17 18:44:47", "anf_klockslag": "18:44", "anf_sekunder": "249", "talare": "Patrik Björck (S)", "video_url": "1100131217312191522#pos=2412", "intressent_id": "0516528386117", "anf_text": null },
                    { "parti": "S", "ardome_id": "1100131217312195222", "thumbnail_url": "getIMG?file=kf2%2F2013%2F12%2F17%2F1100131217312182706%2FIN_A5KNQVCQ-NOT-NAMED_3120066-10&frame=88787", "anf_nummer": "149", "anf_datumtid": "2013-12-17 18:49:11", "anf_klockslag": "18:49", "anf_sekunder": "119", "talare": "Ylva Johansson (S)", "video_url": "1100131217312191522#pos=2676", "intressent_id": "011731125914", "anf_text": null }
                ] } } } });
                $httpBackend.whenJSONP(/utskottsforslag/).respond(200, { "utskottsforslag": { "dokument": { "hangar_id": "2875527", "dok_id": "H101AU2", "rm": "2013/14", "beteckning": "AU2", "typ": "bet", "subtyp": "bet", "doktyp": "bet", "tempbeteckning": null, "organ": "AU", "mottagare": null, "nummer": "2", "slutnummer": "0", "datum": "2013-12-10 00:00:00", "systemdatum": "2013-12-10 10:08:11", "publicerad": "2013-12-10 10:08:11", "titel": "Utgiftsområde 14 Arbetsmarknad och arbetsliv", "subtitel": null, "status": null, "htmlformat": null, "relaterat_id": null, "source": null, "sourceid": null, "dokument_url_text": "http://data.riksdagen.se/dokument/H101AU2/text", "dokument_url_html": "http://data.riksdagen.se/dokument/H101AU2", "dokumentstatus_url_xml": "http://data.riksdagen.se/dokumentstatus/H101AU2", "utskottsforslag_url_xml": "http://data.riksdagen.se/utskottsforslag/H101AU2" }, "dokutskottsforslag": { "utskottsforslag": [
                    { "punkt": "1", "rubrik": "Anslagen för 2014 inom utgiftsområde 14 Arbetsmarknad och arbetsliv", "forslag": "\r\na) Anvisning av anslag\r\nRiksdagen anvisar för budgetåret 2014 anslagen inom utgiftsområde 14 Arbetsmarknad och arbetsliv enligt utskottets förslag i bilaga 4.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 9 och avslår motionerna \n2013/14:K394 av Maria Ferm m.fl. (MP) yrkande 10, \n2013/14:C419 av Åsa Romson m.fl. (MP) yrkandena 14 och 17, \n2013/14:Kr302 av Jimmie Åkesson m.fl. (SD) yrkande 16, \n2013/14:Kr339 av Gunilla Carlsson i Hisings Backa m.fl. (S) yrkande 7, \n2013/14:N223 av Kent Persson m.fl. (V) yrkande 3, \n2013/14:A206 av Hillevi Larsson (S), \n2013/14:A248 av Kurt Kvarnström och Carin Runeson (båda S), \n2013/14:A293 av Gunvor G Ericson m.fl. (MP) yrkandena 1 och 4, \n2013/14:A295 av Josefin Brink m.fl. (V) yrkandena 1 och 3, \n2013/14:A296 av Josefin Brink m.fl. (V) yrkandena 7 och 11, \n2013/14:A319 av Jennie Nilsson (S), \n2013/14:A327 av Jonas Sjöstedt m.fl. (V) yrkande 1, \n2013/14:A331 av Josefin Brink m.fl. (V) yrkandena 1–6, \n2013/14:A360 av Mattias Karlsson m.fl. (SD), \n2013/14:A365 av Mehmet Kaplan m.fl. (MP) yrkandena 1, 3–5, 7 och 8, \n2013/14:A384 av Christina Oskarsson och Jörgen Hellman (båda S), \n2013/14:A398 av Gustav Fridolin m.fl. (MP) yrkandena 1, 12 och 19, \n2013/14:A399 av Jimmie Åkesson m.fl. (SD) yrkandena 4–7, 12 och 13, \n2013/14:A403 av Mattias Karlsson och Sven-Olof Sällström (båda SD) och \n2013/14:A409 av Ylva Johansson m.fl. (S) yrkandena 1, 6, 12–14, 20–22, 27, 29 och 31.\r\n\r\nb) Bemyndigande för anslaget 1:3\r\nRiksdagen bemyndigar regeringen att under 2014 för anslaget 1:3 Kostnader för arbetsmarknadspolitiska program och insatser ingå ekonomiska åtaganden som inklusive tidigare åtaganden medför behov av framtida anslag på högst 5 025 000 000 kronor 2015 och 2016.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 3.\r\n\r\nc) Bemyndigande för anslaget 1:4\r\nRiksdagen bemyndigar regeringen att under 2014 för anslaget 1:4 Lönebidrag och Samhall m.m. ingå ekonomiska åtaganden som inklusive tidigare åtaganden medför behov av framtida anslag på högst 13 000 000 000 kronor 2015–2017.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 4.\r\n\r\nd) Bemyndigande för anslaget 1:6\r\nRiksdagen bemyndigar regeringen att under 2014 för anslaget 1:6 Europeiska socialfonden m.m. för perioden 2014–2020 ingå ekonomiska åtaganden som medför behov av framtida anslag på högst 1 000 000 000 kronor 2015–2020.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 5.\r\n\r\ne) Bemyndigande för anslaget 1:7\r\nRiksdagen bemyndigar regeringen att under 2014 för anslaget 1:7 Institutet för arbetsmarknads- och utbildningspolitisk utvärdering ingå ekonomiska åtaganden som inklusive tidigare åtaganden medför behov av framtida anslag på högst 9 000 000 kronor 2015 och 2016.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 6.\r\n\r\nf) Bemyndigande för anslaget 1:12\r\nRiksdagen bemyndigar regeringen att under 2014 för anslaget 1:12 Europeiska socialfonden m.m. för perioden 2007–2013 ingå ekonomiska åtaganden som inklusive tidigare åtaganden medför behov av framtida anslag på högst 198 526 000 kronor 2015.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 7.\r\n\r\ng) Bemyndigande för anslaget 2:1\r\nRiksdagen bemyndigar regeringen att under 2014 för anslaget 2:1 Arbetsmiljöverket ingå ekonomiska åtaganden som inklusive tidigare åtaganden medför behov av framtida anslag på högst 18 400 000 kronor 2015.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 8.\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "2", "rubrik": "Förslag om ändring i Arbetsförmedlingens registerlag", "forslag": "Riksdagen antar förslaget till lag om ändring i lagen (2002:546) om behandling av personuppgifter i den arbetsmarknadspolitiska verksamheten.\r\nDärmed bifaller riksdagen proposition 2013/14:1 utgiftsområde 14 punkt 2 och avslår motion \n2013/14:A327 av Jonas Sjöstedt m.fl. (V) yrkande 3.\r\n", "beslutstyp": "röstning", "motforslag_nummer": "1", "motforslag_partier": "\"MP\",\"V\"", "votering_id": "0ED3F706-B84D-4551-8782-A5753A73B99B", "votering_sammanfattning_html": { "table": { "tr": [
                        { "td": { "h4": "Omröstning i sakfrågan", "p": "Utskottets förslag mot reservation 1 (MP, V)\r\n" } },
                        { "th": ["Parti", "Ja", "Nej", "Avstående", "Frånvarande"] },
                        { "td": ["S", "101", "0", "0", "11"] },
                        { "td": ["M", "100", "0", "0", "7"] },
                        { "td": ["MP", "0", "23", "0", "2"] },
                        { "td": ["FP", "19", "0", "0", "5"] },
                        { "td": ["C", "21", "0", "0", "2"] },
                        { "td": ["SD", "17", "0", "0", "3"] },
                        { "td": ["V", "0", "18", "0", "1"] },
                        { "td": ["KD", "18", "0", "0", "1"] },
                        { "td": ["Totalt", "276", "41", "0", "32"] },
                        { "td": { "h4": "Beslut: Kammaren biföll utskottets förslag" } }
                    ] }, "br": null }, "votering_url_xml": "http://data.riksdagen.se/votering/0ED3F706-B84D-4551-8782-A5753A73B99B", "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "3", "rubrik": "Arbetsmarknadspolitikens inriktning", "forslag": "Riksdagen avslår motionerna \n2013/14:Sf264 av Åsa Romson m.fl. (MP) yrkande 9, \n2013/14:So624 av Hillevi Larsson m.fl. (S) yrkande 2, \n2013/14:N351 av Lars Eriksson m.fl. (S) yrkande 2, \n2013/14:A373 av Jan-Olof Larsson m.fl. (S) yrkandena 1 och 2 samt \n2013/14:A409 av Ylva Johansson m.fl. (S) yrkandena 2 och 3.\r\n", "beslutstyp": "röstning", "motforslag_nummer": "2", "motforslag_partier": "\"S\"", "votering_id": "599CB819-416A-4D34-BD9A-21B030536153", "votering_sammanfattning_html": { "table": { "tr": [
                        { "td": { "h4": "Omröstning i sakfrågan", "p": "Utskottets förslag mot reservation 2 (S)\r\n" } },
                        { "th": ["Parti", "Ja", "Nej", "Avstående", "Frånvarande"] },
                        { "td": ["S", "0", "101", "0", "11"] },
                        { "td": ["M", "100", "0", "0", "7"] },
                        { "td": ["MP", "0", "0", "23", "2"] },
                        { "td": ["FP", "19", "0", "0", "5"] },
                        { "td": ["C", "21", "0", "0", "2"] },
                        { "td": ["SD", "17", "0", "0", "3"] },
                        { "td": ["V", "0", "0", "17", "2"] },
                        { "td": ["KD", "18", "0", "0", "1"] },
                        { "td": ["Totalt", "175", "101", "40", "33"] },
                        { "td": { "h4": "Beslut: Kammaren biföll utskottets förslag" } }
                    ] }, "br": null }, "votering_url_xml": "http://data.riksdagen.se/votering/599CB819-416A-4D34-BD9A-21B030536153", "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "4", "rubrik": "Arbetsförmedlingens organisation och verksamhet", "forslag": "Riksdagen avslår motionerna \n2013/14:K394 av Maria Ferm m.fl. (MP) yrkande 9, \n2013/14:So241 av Maria Ferm m.fl. (MP) yrkande 7, \n2013/14:A252 av Jan Ericson (M), \n2013/14:A291 av Ann-Britt Åsebol (M), \n2013/14:A296 av Josefin Brink m.fl. (V) yrkandena 1–6 och 10, \n2013/14:A299 av Désirée Pethrus (KD) yrkande 4, \n2013/14:A301 av Christina Höj Larsen m.fl. (V) yrkandena 2 och 3, \n2013/14:A335 av Lars Beckman (M), \n2013/14:A354 av Camilla Waltersson Grönvall och Sten Bergheden (båda M), \n2013/14:A362 av Johan Hultberg (M) yrkandena 1 och 2, \n2013/14:A370 av Meeri Wasberg (S), \n2013/14:A372 av Meeri Wasberg och Helén Pettersson i Umeå (båda S), \n2013/14:A374 av Lennart Axelsson och Matilda Ernkrans (båda S) och \n2013/14:A409 av Ylva Johansson m.fl. (S) yrkande 4.\r\n", "beslutstyp": "röstning", "motforslag_nummer": "6", "motforslag_partier": "\"V\"", "votering_id": "0ABC1CA3-EBEA-4320-866E-D53A83CF6A03", "votering_sammanfattning_html": { "table": { "tr": [
                        { "td": { "h4": "Omröstning i sakfrågan", "p": "Utskottets förslag mot reservation 6 (V)\r\n" } },
                        { "th": ["Parti", "Ja", "Nej", "Avstående", "Frånvarande"] },
                        { "td": ["S", "0", "0", "101", "11"] },
                        { "td": ["M", "100", "0", "0", "7"] },
                        { "td": ["MP", "0", "0", "23", "2"] },
                        { "td": ["FP", "20", "0", "0", "4"] },
                        { "td": ["C", "21", "0", "0", "2"] },
                        { "td": ["SD", "17", "0", "0", "3"] },
                        { "td": ["V", "0", "18", "0", "1"] },
                        { "td": ["KD", "18", "0", "0", "1"] },
                        { "td": ["Totalt", "176", "18", "124", "31"] },
                        { "td": { "h4": "Beslut: Kammaren biföll utskottets förslag" } }
                    ] }, "br": null }, "votering_url_xml": "http://data.riksdagen.se/votering/0ABC1CA3-EBEA-4320-866E-D53A83CF6A03", "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "5", "rubrik": "Nyföretagande som en del av arbetsmarknadspolitiken", "forslag": "Riksdagen avslår motionerna \n2013/14:Ub313 av Sten Bergheden (M) yrkande 5, \n2013/14:A246 av Christer Adelsbo (S), \n2013/14:A253 av Anders Ahlgren och Anders Åkesson (båda C), \n2013/14:A261 av Clas-Göran Carlsson och Tomas Eneroth (båda S), \n2013/14:A263 av Hans Rothenberg (M), \n2013/14:A264 av Hans Rothenberg (M), \n2013/14:A269 av Penilla Gunther (KD), \n2013/14:A334 av Lars Beckman (M) och \n2013/14:A398 av Gustav Fridolin m.fl. (MP) yrkandena 7 och 8.\r\n", "beslutstyp": "röstning", "motforslag_nummer": "7", "motforslag_partier": "\"MP\"", "votering_id": "011F7FBD-848A-4208-96C3-68F09196E5A5", "votering_sammanfattning_html": { "table": { "tr": [
                        { "td": { "h4": "Omröstning i sakfrågan", "p": "Utskottets förslag mot reservation 7 (MP)\r\n" } },
                        { "th": ["Parti", "Ja", "Nej", "Avstående", "Frånvarande"] },
                        { "td": ["S", "101", "0", "0", "11"] },
                        { "td": ["M", "100", "0", "0", "7"] },
                        { "td": ["MP", "0", "23", "0", "2"] },
                        { "td": ["FP", "20", "0", "0", "4"] },
                        { "td": ["C", "21", "0", "0", "2"] },
                        { "td": ["SD", "17", "0", "0", "3"] },
                        { "td": ["V", "18", "0", "0", "1"] },
                        { "td": ["KD", "18", "0", "0", "1"] },
                        { "td": ["Totalt", "295", "23", "0", "31"] },
                        { "td": { "h4": "Beslut: Kammaren biföll utskottets förslag" } }
                    ] }, "br": null }, "votering_url_xml": "http://data.riksdagen.se/votering/011F7FBD-848A-4208-96C3-68F09196E5A5", "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "6", "rubrik": "Insatser mot ungdomsarbetslösheten", "forslag": "Riksdagen avslår motionerna \n2013/14:A214 av Teres Lindberg (S), \n2013/14:A233 av Fredrik Olovsson (S), \n2013/14:A286 av Helena Bouveng (M), \n2013/14:A289 av Billy Gustafsson (S), \n2013/14:A311 av Anna Wallén m.fl. (S), \n2013/14:A366 av Thomas Strand m.fl. (S), \n2013/14:A382 av Lena Sommestad m.fl. (S), \n2013/14:A390 av Caroline Helmersson Olsson m.fl. (S), \n2013/14:A398 av Gustav Fridolin m.fl. (MP) yrkande 2 och \n2013/14:A409 av Ylva Johansson m.fl. (S) yrkandena 15 och 16.\r\n", "beslutstyp": "röstning", "motforslag_nummer": "8", "motforslag_partier": "\"S\"", "votering_id": "3C6825D5-8FA4-4835-9D1A-60421665178A", "votering_sammanfattning_html": { "table": { "tr": [
                        { "td": { "h4": "Omröstning i sakfrågan", "p": "Utskottets förslag mot reservation 8 (S)\r\n" } },
                        { "th": ["Parti", "Ja", "Nej", "Avstående", "Frånvarande"] },
                        { "td": ["S", "0", "101", "0", "11"] },
                        { "td": ["M", "100", "0", "0", "7"] },
                        { "td": ["MP", "0", "0", "23", "2"] },
                        { "td": ["FP", "20", "0", "0", "4"] },
                        { "td": ["C", "21", "0", "0", "2"] },
                        { "td": ["SD", "17", "0", "0", "3"] },
                        { "td": ["V", "1", "0", "17", "1"] },
                        { "td": ["KD", "18", "0", "0", "1"] },
                        { "td": ["Totalt", "177", "101", "40", "31"] },
                        { "td": { "h4": "Beslut: Kammaren biföll utskottets förslag" } }
                    ] }, "br": null }, "votering_url_xml": "http://data.riksdagen.se/votering/3C6825D5-8FA4-4835-9D1A-60421665178A", "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "7", "rubrik": "Utbildningsinsatser inom arbetsmarknadspolitiken", "forslag": "Riksdagen avslår motionerna \n2013/14:Ub273 av Lars Mejern Larsson m.fl. (S) yrkande 4, \n2013/14:A296 av Josefin Brink m.fl. (V) yrkandena 8 och 9, \n2013/14:A352 av Thomas Strand och Louise Malmström (båda S) och \n2013/14:A409 av Ylva Johansson m.fl. (S) yrkande 5.\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "8", "rubrik": "Arbetsmarknaden för äldre", "forslag": "Riksdagen avslår motionerna \n2013/14:So221 av Björn von Sydow (S) yrkande 6, \n2013/14:A213 av Lars-Arne Staxäng (M) och \n2013/14:A409 av Ylva Johansson m.fl. (S) yrkande 17.\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "9", "rubrik": "Insatser för personer som står långt från arbetsmarknaden", "forslag": "Riksdagen avslår motionerna \n2013/14:A238 av Hillevi Larsson (S), \n2013/14:A293 av Gunvor G Ericson m.fl. (MP) yrkandena 2 och 3, \n2013/14:A329 av Désirée Pethrus (KD), \n2013/14:A365 av Mehmet Kaplan m.fl. (MP) yrkande 6 och \n2013/14:A375 av Finn Bengtsson m.fl. (M).\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "10", "rubrik": "Insatser med anledning av FunkA-utredningens förslag", "forslag": "Riksdagen tillkännager för regeringen som sin mening vad utskottet anför om att regeringen skyndsamt bör återkomma med förslag som tar sin utgångspunkt i FunkA-utredningens förslag och beaktar de remissvar som lämnats på utredningens förslag.\r\nDärmed bifaller riksdagen motion \n2013/14:A295 av Josefin Brink m.fl. (V) yrkande 2 och \navslår motion \n2013/14:A316 av Annelie Karlsson (S).\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "11", "rubrik": "Insatser för personer med funktionsnedsättning", "forslag": "Riksdagen avslår motionerna \n2013/14:So252 av Roland Utbult (KD) yrkande 4, \n2013/14:A299 av Désirée Pethrus (KD) yrkandena 1–3 och 5–7, \n2013/14:A314 av Pia Nilsson (S) yrkande 1, \n2013/14:A356 av Edward Riedl (M), \n2013/14:A371 av Meeri Wasberg (S), \n2013/14:A378 av Finn Bengtsson och Jan R Andersson (båda M) yrkande 2, \n2013/14:A396 av Tina Ehn m.fl. (MP) yrkandena 1–3 och \n2013/14:A409 av Ylva Johansson m.fl. (S) yrkandena 18 och 19.\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "12", "rubrik": "Lönebidrag", "forslag": "Riksdagen avslår motionerna \n2013/14:A205 av Jasenko Omanovic och Kristina Nilsson (båda S), \n2013/14:A231 av Penilla Gunther och Lars-Axel Nordell (båda KD), \n2013/14:A232 av Lennart Axelsson (S), \n2013/14:A247 av Kurt Kvarnström och Carin Runeson (båda S), \n2013/14:A257 av Louise Malmström och Billy Gustafsson (båda S), \n2013/14:A270 av Emma Henriksson och Désirée Pethrus (båda KD), \n2013/14:A317 av Annelie Karlsson och Christer Adelsbo (båda S), \n2013/14:A330 av Staffan Danielsson och Helena Lindahl (båda C), \n2013/14:A340 av Kurt Kvarnström och Peter Hultqvist (båda S), \n2013/14:A342 av Gunnar Sandberg (S), \n2013/14:A355 av Helena Bouveng (M) och \n2013/14:A392 av Catharina Bråkenhielm m.fl. (S).\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "13", "rubrik": "Sociala företag och arbetskooperativ som en del av arbetsmarknadspolitiken", "forslag": "Riksdagen avslår motionerna \n2013/14:N210 av Jonas Eriksson m.fl. (MP) yrkandena 16–21, \n2013/14:A295 av Josefin Brink m.fl. (V) yrkandena 4 och 5, \n2013/14:A300 av Elisabeth Björnsdotter Rahm och Saila Quicklund (båda M), \n2013/14:A343 av Christer Adelsbo m.fl. (S) och \n2013/14:A344 av Christer Adelsbo m.fl. (S).\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "14", "rubrik": "Frivilliginsatser som en del av arbetsmarknadspolitiken", "forslag": "Riksdagen avslår motionerna \n2013/14:A268 av Betty Malmberg (M) och \n2013/14:A302 av Anita Brodén (FP) yrkandena 1 och 2.\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "15", "rubrik": "Norden som en gemensam arbetsmarknad", "forslag": "Riksdagen avslår motion \n2013/14:U315 av Åsa Torstensson m.fl. (C, FP, KD, MP) yrkande 3.\r\n", "beslutstyp": "acklamation", "motforslag_nummer": "0", "motforslag_partier": null, "votering_id": null, "votering_sammanfattning_html": null, "votering_url_xml": null, "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" },
                    { "punkt": "16", "rubrik": "Dokumentation vid kommunala arbetsmarknadsinsatser", "forslag": "Riksdagen avslår motion \n2013/14:A404 av Mattias Karlsson (SD).\r\n", "beslutstyp": "röstning", "motforslag_nummer": "19", "motforslag_partier": "\"SD\"", "votering_id": "5CB3917B-CC5F-481A-B54F-1C90D7390658", "votering_sammanfattning_html": { "table": { "tr": [
                        { "td": { "h4": "Omröstning i sakfrågan", "p": "Utskottets förslag mot reservation 19 (SD)\r\n" } },
                        { "th": ["Parti", "Ja", "Nej", "Avstående", "Frånvarande"] },
                        { "td": ["S", "101", "0", "0", "11"] },
                        { "td": ["M", "100", "0", "0", "7"] },
                        { "td": ["MP", "23", "0", "0", "2"] },
                        { "td": ["FP", "20", "0", "0", "4"] },
                        { "td": ["C", "21", "0", "0", "2"] },
                        { "td": ["SD", "0", "17", "0", "3"] },
                        { "td": ["V", "18", "0", "0", "1"] },
                        { "td": ["KD", "18", "0", "0", "1"] },
                        { "td": ["Totalt", "301", "17", "0", "31"] },
                        { "td": { "h4": "Beslut: Kammaren biföll utskottets förslag" } }
                    ] }, "br": null }, "votering_url_xml": "http://data.riksdagen.se/votering/5CB3917B-CC5F-481A-B54F-1C90D7390658", "rm": "2013/14", "bet": "AU2", "vinnare": "utskottet" }
                ] }, "dokmotforslag": { "motforslag": [
                    { "nummer": "1", "rubrik": "Förslag om ändring i Arbetsförmedlingens registerlag", "partier": "\"MP\",\"V\"", "typ": "reservation", "utskottsforslag_punkt": "2" },
                    { "nummer": "2", "rubrik": "Arbetsmarknadspolitikens inriktning", "partier": "\"S\"", "typ": "reservation", "utskottsforslag_punkt": "3" },
                    { "nummer": "3", "rubrik": "Arbetsmarknadspolitikens inriktning", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "3" },
                    { "nummer": "4", "rubrik": "Arbetsförmedlingens organisation och verksamhet", "partier": "\"S\"", "typ": "reservation", "utskottsforslag_punkt": "4" },
                    { "nummer": "5", "rubrik": "Arbetsförmedlingens organisation och verksamhet", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "4" },
                    { "nummer": "6", "rubrik": "Arbetsförmedlingens organisation och verksamhet", "partier": "\"V\"", "typ": "reservation", "utskottsforslag_punkt": "4" },
                    { "nummer": "7", "rubrik": "Nyföretagande som en del av arbetsmarknadspolitiken", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "5" },
                    { "nummer": "8", "rubrik": "Insatser mot ungdomsarbetslösheten", "partier": "\"S\"", "typ": "reservation", "utskottsforslag_punkt": "6" },
                    { "nummer": "9", "rubrik": "Insatser mot ungdomsarbetslösheten", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "6" },
                    { "nummer": "10", "rubrik": "Utbildningsinsatser inom arbetsmarknadspolitiken", "partier": "\"S\"", "typ": "reservation", "utskottsforslag_punkt": "7" },
                    { "nummer": "11", "rubrik": "Utbildningsinsatser inom arbetsmarknadspolitiken", "partier": "\"V\"", "typ": "reservation", "utskottsforslag_punkt": "7" },
                    { "nummer": "12", "rubrik": "Arbetsmarknaden för äldre", "partier": "\"S\"", "typ": "reservation", "utskottsforslag_punkt": "8" },
                    { "nummer": "13", "rubrik": "Insatser för personer som står långt från arbetsmarknaden", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "9" },
                    { "nummer": "14", "rubrik": "Insatser för personer med funktionsnedsättning", "partier": "\"S\"", "typ": "reservation", "utskottsforslag_punkt": "11" },
                    { "nummer": "15", "rubrik": "Insatser för personer med funktionsnedsättning", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "11" },
                    { "nummer": "16", "rubrik": "Sociala företag och arbetskooperativ som en del av arbetsmarknadspolitiken", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "13" },
                    { "nummer": "17", "rubrik": "Sociala företag och arbetskooperativ som en del av arbetsmarknadspolitiken", "partier": "\"V\"", "typ": "reservation", "utskottsforslag_punkt": "13" },
                    { "nummer": "18", "rubrik": "Norden som en gemensam arbetsmarknad", "partier": "\"MP\"", "typ": "reservation", "utskottsforslag_punkt": "15" },
                    { "nummer": "19", "rubrik": "Dokumentation vid kommunala arbetsmarknadsinsatser", "partier": "\"SD\"", "typ": "reservation", "utskottsforslag_punkt": "16" }
                ] } } });

            }));

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('A list of votering from Riksdagen is fetched', inject(function (voteService) {
                //Arrange
                voteService.years = ['singleyear'];
                voteService.init();
                $httpBackend.flush();
                expect(voteService.votering).toBeDefined();
                expect(voteService.votering.length).toBe(3);
            }));

            it('A single vote is selected', inject(function (voteService) {
                voteService.years = ['singleyear'];
                voteService.init();
                $httpBackend.flush();
                var vote;
                voteService.fetchVote().then(function(voteResult){
                    vote = voteResult;
                });
                $httpBackend.flush();

                expect(vote).toBeDefined();
                expect(vote.summary).toBeDefined();
                expect(vote.forslag).toBeDefined();
                expect(vote.voteringid).toBeDefined();
            }));
        });
        describe('Queries riksdagen API for the result of a specific vote', function () {
            var $httpBackend;
            beforeEach(module('RostRecept'));
            beforeEach(inject(function(_$httpBackend_){
                $httpBackend = _$httpBackend_;
                $httpBackend.whenJSONP(/votering/).respond(200, {
                    "votering": {
                        "dokvotering": {
                            "votering": [
                                {
                                    "votering_id": "0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7",
                                    "punkt": "0",
                                    "namn": "Susanne  Eberstein",
                                    "intressent_id": "0235974887200",
                                    "parti": "S",
                                    "valkrets": "Västernorrlands län",
                                    "valkretsnummer": "26",
                                    "iort": null,
                                    "rost": "Ja",
                                    "avser": "sakfrågan",
                                    "votering": "huvud",
                                    "banknummer": "1",
                                    "fornamn": "Susanne",
                                    "efternamn": "Eberstein",
                                    "kon": "kvinna",
                                    "fodd": "1948",
                                    "rm": null,
                                    "beteckning": null,
                                    "källa": "distribution",
                                    "datum": "2014-04-27 00:00:00"
                                },
                                {
                                    "votering_id": "0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7",
                                    "punkt": "0",
                                    "namn": "Ulf  Holm",
                                    "intressent_id": "0584183916016",
                                    "parti": "MP",
                                    "valkrets": "Skåne läns södra",
                                    "valkretsnummer": "13",
                                    "iort": null,
                                    "rost": "Nej",
                                    "avser": "sakfrågan",
                                    "votering": "huvud",
                                    "banknummer": "2",
                                    "fornamn": "Ulf",
                                    "efternamn": "Holm",
                                    "kon": "man",
                                    "fodd": "1969",
                                    "rm": null,
                                    "beteckning": null,
                                    "källa": "distribution",
                                    "datum": "2014-04-27 00:00:00"
                                },
                                {
                                    "votering_id": "0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7",
                                    "punkt": "0",
                                    "namn": "Jan  Ertsborn",
                                    "intressent_id": "09812885803",
                                    "parti": "FP",
                                    "valkrets": "Hallands län",
                                    "valkretsnummer": "15",
                                    "iort": null,
                                    "rost": "Ja",
                                    "avser": "sakfrågan",
                                    "votering": "huvud",
                                    "banknummer": "3",
                                    "fornamn": "Jan",
                                    "efternamn": "Ertsborn",
                                    "kon": "man",
                                    "fodd": "1944",
                                    "rm": null,
                                    "beteckning": null,
                                    "källa": "distribution",
                                    "datum": "2014-04-27 00:00:00"
                                },
                                {
                                    "votering_id": "0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7",
                                    "punkt": "0",
                                    "namn": "Mats  Odell",
                                    "intressent_id": "0700424025906",
                                    "parti": "KD",
                                    "valkrets": "Stockholms län",
                                    "valkretsnummer": "2",
                                    "iort": null,
                                    "rost": "Frånvarande",
                                    "avser": "sakfrågan",
                                    "votering": "huvud",
                                    "banknummer": "4",
                                    "fornamn": "Mats",
                                    "efternamn": "Odell",
                                    "kon": "man",
                                    "fodd": "1947",
                                    "rm": null,
                                    "beteckning": null,
                                    "källa": "distribution",
                                    "datum": "2014-04-27 00:00:00"
                                },
                                {
                                    "votering_id": "0FB60CF3-E44D-4908-8AEC-1D4AE1CEC4C7",
                                    "punkt": "0",
                                    "namn": "Meeri  Wasberg",
                                    "intressent_id": "0741225202024",
                                    "parti": "S",
                                    "valkrets": "Stockholms län",
                                    "valkretsnummer": "2",
                                    "iort": null,
                                    "rost": "Ja",
                                    "avser": "sakfrågan",
                                    "votering": "huvud",
                                    "banknummer": "5",
                                    "fornamn": "Meeri",
                                    "efternamn": "Wasberg",
                                    "kon": "kvinna",
                                    "fodd": "1973",
                                    "rm": null,
                                    "beteckning": null,
                                    "källa": "distribution",
                                    "datum": "2014-04-27 00:00:00"
                                }]}}});
            }));
            it('It returns a list of votes per person', inject(function(voteService){
                var votes;
                voteService.fetchVoteResult('votering/AMockUrl.xml').then(function(data)
                {
                    votes = data;
                });
                $httpBackend.flush();
                expect(votes).toBeDefined();
                expect(votes.length).toBe(5);
            }));
        });

        describe('Queries riksdagen API for a single motion', function () {
            var $httpBackend,forslag;
            beforeEach(module('RostRecept'));
            beforeEach(inject(function (_$httpBackend_) {
                $httpBackend = _$httpBackend_;
                $httpBackend.whenJSONP(/dokumentstatus/).respond(200, '{"dokumentstatus":{"dokument":{"hangar_id":"2878842","dok_id":"H102So1","rm":"2013/14","beteckning":"So1","typ":"mot","subtyp":"Kommittémotion","doktyp":"mot","tempbeteckning":"V1","organ":"SoU","mottagare":null,"nummer":"1","slutnummer":"0","datum":"2013-09-19 00:00:00","systemdatum":"2013-09-30 16:47:28","publicerad":"2013-09-30 16:47:29","titel":"med anledning av prop. 2012/13:175 Vissa frågor om behörighet för personal i hälso- och sjukvården och socialtjänsten","subtitel":"av Eva Olofsson m.fl. (V)","status":"Ank T","htmlformat":null,"relaterat_id":null,"source":null,"sourceid":"{86978FD8-F660-4032-92E4-A862F9F015CE}","dokument_url_text":"http://data.riksdagen.se/dokument/H102So1/text","dokument_url_html":"http://data.riksdagen.se/dokument/H102So1","dokumentstatus_url_xml":"http://data.riksdagen.se/dokumentstatus/H102So1"},"dokaktivitet":{"aktivitet":[{"kod":"HÄN","namn":"Hänvisning","datum":"2013-09-27 00:00:00","status":"inträffat","ordning":"2","process":"hanvisning"},{"kod":"HÄN","namn":"Hänvisning","datum":"2013-09-27 00:00:00","status":"planerat","ordning":"2","process":"hanvisning"},{"kod":"B","namn":"Bordläggning","datum":"2013-09-26 00:00:00","status":"inträffat","ordning":"1","process":"hanvisning"},{"kod":"B","namn":"Bordläggning","datum":"2013-09-26 00:00:00","status":"planerat","ordning":"1","process":"hanvisning"},{"kod":"INL","namn":"Inlämning","datum":"2013-09-19 00:00:00","status":"inträffat","ordning":"13","process":"hantering"},{"kod":"MOTT","namn":"Överföring","datum":"2013-09-19 00:00:00","status":"inträffat","ordning":"1","process":"hantering"}]},"dokintressent":{"intressent":[{"intressent_id":"0902086611116","namn":"Eva Olofsson","partibet":"V","ordning":"1","roll":"undertecknare"},{"intressent_id":"0188653245302","namn":"Bengt Berg","partibet":"V","ordning":"2","roll":"undertecknare"},{"intressent_id":"0679667648714","namn":"Marianne Berg","partibet":"V","ordning":"3","roll":"undertecknare"},{"intressent_id":"0545353563812","namn":"Amineh Kakabaveh","partibet":"V","ordning":"4","roll":"undertecknare"},{"intressent_id":"0371688419616","namn":"Lars Ohly","partibet":"V","ordning":"5","roll":"undertecknare"},{"intressent_id":"0615338062910","namn":"Lena Olsson","partibet":"V","ordning":"6","roll":"undertecknare"},{"intressent_id":"0415959965211","namn":"Mia Sydow Mölleby","partibet":"V","ordning":"7","roll":"undertecknare"}]},"dokforslag":{"forslag":[{"nummer":"1","beteckning":"1","lydelse":"Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om att regeringen snarast bör återkomma med förslag om hur antalet och andelen specialistsjuksköterskor ska öka.","lydelse2":null,"utskottet":" Avslag","kammaren":"Avslag","behandlas_i":"2013/14:SoU10","kammarbeslutstyp":"Röstning"},{"nummer":"2","beteckning":"2","lydelse":"Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om att regeringen bör återkomma med förslag om krav på utbildning inom den sociala barn- och ungdomsvården.","lydelse2":null,"utskottet":" Avslag","kammaren":"Avslag","behandlas_i":"2013/14:SoU2","kammarbeslutstyp":"Röstning"},{"nummer":"3","beteckning":"3","lydelse":"Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om introduktion inom den sociala barn- och ungdomsvården.","lydelse2":null,"utskottet":" Avslag","kammaren":"Avslag","behandlas_i":"2013/14:SoU2","kammarbeslutstyp":"Röstning"},{"nummer":"4","beteckning":"4","lydelse":"Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om att det på sikt bör bli en lagstadgad skyldighet för socialnämnden att ha tillgång till specialistkompetens inom den sociala barn- och ungdomsvården.","lydelse2":null,"utskottet":" Avslag","kammaren":"Avslag","behandlas_i":"2013/14:SoU2","kammarbeslutstyp":"Röstning"},{"nummer":"5","beteckning":"5","lydelse":"Riksdagen tillkännager för regeringen som sin mening vad som anförs i motionen om att tandhygienistutbildningen bör förlängas med ett år.","lydelse2":null,"utskottet":" Bifall","kammaren":"Bifall","behandlas_i":"2013/14:SoU2","kammarbeslutstyp":"Acklamation"}]},"dokuppgift":{"uppgift":[{"kod":"motkat","namn":"Motionskategori","text":"Följdmotion"},{"kod":"motgrund","namn":"Motionsgrund","text":"Proposition 2012/13:175"},{"kod":"tilldelat","namn":"Tilldelat","text":"Socialutskottet"}]},"dokbilaga":{"bilaga":{"dok_id":"H102So1","titel":"med anledning av prop. 2012/13:175 Vissa frågor om behörighet för personal i hälso- och sjukvården och socialtjänsten","subtitel":"av Eva Olofsson m.fl. (V)","filnamn":"MOT_201314_So_1.doc","filstorlek":"68096","filtyp":"doc","fil_url":"http://data.riksdagen.se/fil/DE731B44-FF6C-4596-8EAE-DE09099CAAE4"}},"dokreferens":null}}')

            }));

            it('Should retrieve a motion when called',inject(function(voteService){
                voteService.fetchTextForMotion('dokument').then(function(response)
                {
                    forslag = response;
                });
                $httpBackend.flush();

                expect(forslag.length).toBe(5);
            }));

            it('Should single number filter related motion',inject(function(voteService){
                voteService.fetchTextForMotion('dokument', ['1'], true).then(function(response)
                {
                    forslag = response;
                });
                $httpBackend.flush();
                expect(forslag.length).toBe(1);
                expect(forslag[0].dokumentCode).toBe('dokument');
                expect(forslag[0].yrkande).toBe('1');
                expect(forslag[0].summary).toBeDefined();
                expect(forslag[0].avslag).toBe(true);
            }));

            it('Should array filter related motion',inject(function(voteService){
                voteService.fetchTextForMotion('dokument', ['1','2'], false).then(function(response)
                {
                    forslag = response;
                });
                $httpBackend.flush();
                expect(forslag.length).toBe(2);
                expect(forslag[0].dokumentCode).toBe('dokument');
                expect(forslag[0].yrkande).toBe('1');
                expect(forslag[0].summary).toBeDefined();
                expect(forslag[0].avslag).toBe(false);
                expect(forslag[1].dokumentCode).toBe('dokument');
                expect(forslag[1].yrkande).toBe('2');
                expect(forslag[1].summary).toBeDefined();
                expect(forslag[1].avslag).toBe(false);
            }));
        });

    });
})();
