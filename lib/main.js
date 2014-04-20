var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

function getPanel() {
    var panel = require("sdk/panel").Panel({
        width: 480,
        height: 335,
        contentURL: data.url("angular-seed/app/index.html")
    });

    return panel;
}

var panel = getPanel();

require('toolbarwidget').ToolbarWidget({
    toolbarID: 'nav-bar',
    id: 'angularjs-firefox-seed',
    label: 'angularjs-firefox-seed',
    contentURL: data.url('angularjs.png'),
    panel: panel
});
