function vibrate1(a){navigator.vibrate(a)}
navigator.getBattery().then(function(a){function b(){console.log("Battery charging? "+(a.charging?"Yes":"No"))}function c(){console.log("Battery level: "+100*a.level+"%")}function d(){console.log("Battery charging time: "+a.chargingTime+" seconds")}function e(){console.log("Battery discharging time: "+a.dischargingTime+" seconds")}b();c();d();e();a.addEventListener("chargingchange",function(){b()});a.addEventListener("levelchange",function(){c()});a.addEventListener("chargingtimechange",function(){d()});
a.addEventListener("dischargingtimechange",function(){e()})});