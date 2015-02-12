var notificationId = 'alarm';
var interval = 30000;

var events = {
    '12:00' : {
        'message': 'lunch time',
    },
    '23:30' : {
        'message': 'bed time',
    },
}

var notify = function(message) {
    var option = {
        type: 'basic',
        title: 'Simple Alarm',
        message: message,
        iconUrl: 'bell.png',
    }
    chrome.notifications.create(notificationId, option, function(notificationId) {
        //callback. nothing to do.
    });
};

var getEvent = function(hh, mm) {
    return events[hh + ':' + mm];
};

var startTimer = function() {
    setInterval(function() {
        var now = new Date();
        var targetEvent = getEvent(now.getHours(), now.getMinutes());
        if (targetEvent) {
            notify(targetEvent.message);
        }
    }, interval);
};

var main = function() {
    startTimer();
};

main();
