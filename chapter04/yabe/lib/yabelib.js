'use strict';

module.exports.getCommentText = getCommentText;
module.exports.getTimestamp = getTimestamp;

function getCommentText(numComments) {
    var text = " comment";
    if (1 == numComments) return numComments + text;
    else return numComments + text + "s";
}

// Extracted from Mongo shell
function getTimestamp(id) {
    return new Date(parseInt(id.toString().slice(0, 8), 16) * 1000);
}
