// ==UserScript==
// @name         Status Overview Cosmetic Changes
// @namespace    https://github.com/MisteryMan
// @version      1.1
// @description  Expand the blinking alert marked of the status overview screen. This is to allow attracting more attention
// @author       MisteryKid/AARC
// @include      *://leitstellenspiel.de/leitstellenansicht
// @include      *://www.leitstellenspiel.de/leitstellenansicht
// @include      *://missionchief.com/leitstellenansicht
// @include      *://www.missionchief.com/leitstellenansicht
// @include      *://meldkamerspel.com/statusoverzicht
// @include      *://www.meldkamerspel.com/statusoverzicht
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    initialize();
    function initialize() {
        var statusadjuster = $('.building_list_fms').parent();
        for (var i = 0; i < statusadjuster.length; i++) {
            var classList = statusadjuster[i].firstElementChild.classList;
            //console.log(statusadjuster[i]);
            if (classList.contains("building_list_fms_5")) {
                //console.log("blinky");
                statusadjuster[i].setAttribute("style", "background-image: url(/images/fms5_background.gif); color: #fff;");
            }
            else {
                statusadjuster[i].removeAttribute("style");
                //console.log("no blinky");
            }
        }
    }
    var original_func = vehicleMarkerAdd;
	vehicleMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        initialize(e);
    }


})();