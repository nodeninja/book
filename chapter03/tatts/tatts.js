var exec = require('child_process').exec
    , xml2js = require('xml2js');

getMeetings(function () {
});

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

    var allMeets = new Array();
    fetchURL(url,
        function (err, stdout, stderr) {

            var parser = new xml2js.Parser();
            parser.parseString(stdout, function (err, result) {

                    if (err) {
                        console.log('error parsing tatts');
                        console.log(err);
                        return;
                    }
                    if (undefined == result.Meeting) {
                        console.log("no meetings");
                        return;
                    }
                    var meetings = result.Meeting;
                    // console.log(meetings);

                    for (var i = 0; i < meetings.length; i++) {
                        var races = meetings[i].Race;
                     //   console.log(races);

                        for (var j = 0; j < races.length; j++) {
                            //if if if console.log(races[j]);
                           
                            var pools = races[j].Pool;
                            var quin = false, exac = false, trif = false, firs = false;
                            // EX = exacta
                            // F4 = first 4
                            // QN = quinella
                            // TF = trifecta
                            for (var k = 0; k < pools.length; k++) {
                                //console.log(pools[k]);
                                if (pools[k]['@'].Abandoned == 'N' && pools[k]['@'].Available == 'Y') {
                                    if (pools[k]['@'].PoolType == 'TF') {
                                        trif = true;

                                    }
                                    if (pools[k]['@'].PoolType == 'F4') {
                                        firs = true;

                                    }
                                    if (pools[k]['@'].PoolType == 'QN') {
                                        quin = true;

                                    }
                                    if (pools[k]['@'].PoolType == 'EX') {
                                        exac = true;

                                    }
                                }
                            }

                            var runners = races[j].ResultPlace;
                            var totalRunners = 0;
                            var totalScratched = 0;


                            console.log(meetings[i]);
                            /**
                            for (var k = 0; k < runners.length; k++) {

                                if (runners[k]['@'].Scratched == 'Y') {
                                    totalScratched++;
                                    //console.log(runners[k]['@'].RunnerName);
                                }
                                totalRunners++;
                            }
                            //  console.log(totalScratched);
                            var afterScr = totalRunners - totalScratched;
                            var placeTer = 3;
                            if (afterScr < 5) placeTer = 0;
                            else if (afterScr <= 7) placeTer = 2;
                            var currentMeet = {
                                date:races[j]['@'].RaceTime.split("T")[0],
                                time:races[j]['@'].RaceTime.split("T")[1],
                                venue:result.Meeting['@'].VenueName,
                                race:races[j]['@'].RaceNo,
                                meetingType:result.Meeting['@'].MtgType,
                                trackDesc:result.Meeting['@'].MtgType,
                                weatherDesc:result.Meeting['@'].WeatherDesc,
                                quinella:quin,
                                exacta:exac,
                                trifecta:trif,
                                firstFour:firs,
                                fullField:totalRunners,
                                afterScratchings:afterScr,
                                placeTerms:placeTer
                            };
                            allMeets.push(
                                currentMeet
                            );
*/

                        }

                    }
                    console.log(allMeets);
                }
            );
        });
}
