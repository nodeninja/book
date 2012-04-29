'use strict';

module.exports.getTimestamp = getTimestamp;

// Extracted from Mongo shell
function getTimestamp(id) {
    return new Date(parseInt(id.toString().slice(0, 8), 16) * 1000);
}
