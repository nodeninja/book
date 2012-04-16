var exec = require('child_process').exec
    , xml2js = require('xml2js');

/**
 * Retrieve URL and clean text
 * @param url
 */
function fetchURL(url, callback) {
    var child;
    var command = 'wget -q -O - ' + url + ' | sed "1 s/^\\xef\\xbb\\xbf//"';
    child = exec(command,
        {maxBuffer:500 * 1024},
        function (error, stdout, stderr) {
            callback(error, stdout, stderr);
        });
}

function getMeetings(callback) {

    var url = "http://tatts.com/pagedata/racing/2012/3/4/RaceDay.xml";
    
    fetchURL(url, function (err, stdout, stderr) {

        var allMeets = new Array();
        var parser = new xml2js.Parser();
        parser.parseString(stdout, function (err, result) {
    
            if (err) {
                callback(err);
                return;
            }
                
            var meetings = result.Meeting;
            
            for (var i = 0; i < meetings.length; i++) {

                var races = meetings[i].Race;
                var abandoned = meetings[i]['@'].Abandoned;
                
                if ('N' == abandoned) {
                    for (var j = 0; j < races.length; j++) {
                
                        var placesArray = races[j].ResultPlace;
                
                
                        var currentMeet = {
                            date:races[j]['@'].RaceTime.split("T")[0],
                            time:races[j]['@'].RaceTime.split("T")[1],
                            venue:meetings[i]['@'].VenueName,
                            race:races[j]['@'].RaceNo,
                            meetingType:meetings[i]['@'].MeetingType,
                            places:placesArray.length
                        };
                        allMeets.push(currentMeet);
                
                    }                
                
                }

            }
                
        });

        callback(null, allMeets)
        
    });
}

module.exports.getMeetings = getMeetings;