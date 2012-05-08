var rolls = [
{
	id: 1,
	date: '2011-10-06 6:41:45 PM',
	result: '4',
	winner: 'Player 1'
},
{
	id: 2,
	date: '2011-10-04 6:41:45 PM',
	result: '7',
	winner: 'Player 2'
},
{
	id: 3,
	date: '2011-10-03 6:41:45 PM',
	result: '2',
	winner: 'Player 1'
},
{
	id: 4,
	date: '2011-10-02 6:41:45 PM',
	result: '7',
	winner: 'Player 2'
},
{
	id: 5,
	date: '2011-10-01 6:41:45 PM',
	result: '3',
	winner: 'Player 1'
},
{
	id: 6,
	date: '2011-10-01 6:41:45 PM',
	result: '9',
	winner: 'Player 2'
}
];

// Exports
module.exports.all = function() {
	return rolls.sort(sortFunction).slice(0, 5);
}
module.exports.lastWinner = lastWinner
module.exports.totalRolls = totalRolls
module.exports.p1Wins = p1Wins
module.exports.p2Wins = p2Wins

// Functions
function lastWinner() {
	return rolls[0].winner;
}

function sortFunction(a, b) {
	return (b.id - a.id);
}

function totalRolls() {
	return rolls.length;
}

function p1Wins() {
	var total = 0;
	for (var i=0; i<rolls.length;i++) {
		if (rolls[i].winner == 'Player 1') {
			total++;
		}
	}
	return total;
}

function p2Wins() {
	var total = 0;
	for (var i=0; i<rolls.length;i++) {
		if (rolls[i].winner == 'Player 2') {
			total++;
		}
	}
	return total;
}

module.exports.p1Percent = function() {
	return Math.round(p1Wins() / totalRolls() * 100);
}

module.exports.p2Percent = function() {
	return Math.round(p2Wins() / totalRolls() * 100);
}

module.exports.spin = function() {

	var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var seconds = d.getSeconds();

	// minutes
	var a_p = "";
	if (hour < 12) {
   		a_p = "AM";
   	}
	else a_p = "PM";
	if (hour == 0) hour = 12;
	if (hour > 12) hour = hour - 12;

	minute = minute + "";

	if (minute.length == 1) minute = "0" + minute;

	var random = Math.floor(Math.random()*10) + 1;

	id = rolls.length + 1;
	date = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds + " " + a_p;
	result = random;
	if (result <= 5) winner = 'Player 1';
	else winner = 'Player 2';

	rolls[id - 1] = {id: id, date: date, result: result, winner: winner};
}