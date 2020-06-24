// ==UserScript==
// @name         Test Status Adjustment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.meldkamerspel.com/statusoverzicht
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
                console.log("blinky");
                statusadjuster[i].setAttribute("style", "background-image: url(/images/fms5_background.gif)");
            }
            else {
                statusadjuster[i].removeAttribute("style");
                //console.log("no blinky");
            }


           /* if (classList.contains("building_list_fms_5")) {
console.log(status7[i].parent());
                //status7[i].parent().css({'background-image':'url(/images/fms5_background.gif)'});
            } else {
                //status7[i].parent().removeAttr("style");
            }*/
        }
    }
    var run = setTimeout(500, mutations());
    async function mutations(e) {
        initialize()
    }

    // Your code here...
})();