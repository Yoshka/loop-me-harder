 chrome.commands.onCommand.addListener(function(command) {
 	if (command == "run-forrest-run") {
 		chrome.tabs.getSelected(null, function(tab) {
 			chrome.tabs.executeScript(tab.id, {
 				code: "var space = '\u200E';while (document.title.length < 30) {    document.title = `${document.title} ${space}`;} document.title = `${document.title} ${space}`; var a = [];var l = document.title.length;var s = document.title;for (var i = 0; i < l; i++) {    a.push(s);    var pew = s[0];    s = `${s.substring(1)}${pew}`;    if (s.length < l) {        s = `${s}${space}`;    }}var ind = 0;setInterval(function() {    if (ind < a.length - 1) {        document.title = a[ind];        ind++;    } else {        ind = 0;        document.title = a[0];    }}, 50)"
 			});
 		});
 	}
 });