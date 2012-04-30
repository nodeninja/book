'use strict';

function getCommentText(numComments) {
    var text = " comment";
    if (1 == numComments) return numComments + text;
    else return numComments + text + "s";
}