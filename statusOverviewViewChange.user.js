// ==UserScript==
// @name         Status Overview Cosmetic Changes
// @namespace    https://github.com/MisteryMan
// @version      1.0
// @description  Expand the blinking alert marked of the status overview screen. This is to allow attracting more attention
// @author       MisteryKid/AARC
// @include      *://leitstellenspiel.de/*
// @include      *://www.leitstellenspiel.de/*
// @include      *://missionchief.co.uk/*
// @include      *://www.missionchief.co.uk/*
// @include      *://missionchief.com/*
// @include      *://www.missionchief.com/*
// @include      *://meldkamerspel.com/*
// @include      *://www.meldkamerspel.com/*
// @include      *://centro-de-mando.es/*
// @include      *://www.centro-de-mando.es/*
// @include      *://missionchief-australia.com/*
// @include      *://www.missionchief-australia.com/*
// @include      *://larmcentralen-spelet.se/*
// @include      *://www.larmcentralen-spelet.se/*
// @include      *://operatorratunkowy.pl/*
// @include      *://www.operatorratunkowy.pl/*
// @include      *://operatore112.it/*
// @include      *://www.operatore112.it/*
// @include      *://operateur112.fr/*
// @include      *://www.operateur112.fr/*
// @include      *://dispetcher112.ru/*
// @include      *://www.dispetcher112.ru/*
// @include      *://alarmcentral-spil.dk/*
// @include      *://www.alarmcentral-spil.dk/*
// @include      *://nodsentralspillet.com/*
// @include      *://www.nodsentralspillet.com/*
// @include      *://operacni-stredisko.cz/*
// @include      *://www.operacni-stredisko.cz/*
// @include      *://jogo-operador112.com/*
// @include      *://www.jogo-operador112.com/*
// @include      *://operador193.com/*
// @include      *://www.operador193.com/*
// @include      *://dyspetcher101-game.com/*
// @include      *://www.dyspetcher101-game.com/*
// @include      *://missionchief-japan.com/*
// @include      *://www.missionchief-japan.com/*
// @include      *://missionchief-korea.com/*
// @include      *://www.missionchief-korea.com/*
// @include      *://jocdispecerat112.com/*
// @include      *://www.jocdispecerat112.com/*
// @include      *://hatakeskuspeli.com/*
// @include      *://www.hatakeskuspeli.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    initialize();
    function initialize() {
        var statusadjuster = $('.building_list_fms').parent();
        for (var i = 0; i < statusadjuster.length; i++) {
            var classList = statusadjuster[i].firstElementChild.classList;
            if (classList.contains("building_list_fms_5")) {
                console.log("blinky");
                statusadjuster[i].setAttribute("style", "background-image: url(/images/fms5_background.gif); color: #fff;");
            }
            else {
                statusadjuster[i].removeAttribute("style");
            }
        }
    }
    var original_func = vehicleMarkerAdd;
	vehicleMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        initialize(e);
    }
})();