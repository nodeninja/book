'use strict';

var socket = io.connect(window.location.hostname);

// Extracted from Mongo shell
function getTimestamp(id) {
    return new Date(parseInt(id.toString().slice(0, 8), 16) * 1000);
}

(function($) {
    $(document).ready(function () {

        $('.error').hide();
        
        $('.btn-comment').click( function(e) {
            
            var author = $('#author').val();
            var content = $('#content').val();
            var error = false;
            if (author.length == 0) {
                $('.name-error').show();
                error = true;
            }
            else $('.name-error').hide();
            if (content.length == 0) {
                $('.message-error').show();
                error = true;
            }
            else
                $('.message-error').hide();
            if (!error) {
                var id = $('#postId').val();
                var data = {author: author, content: content};
                console.log("submitting comment");
                socket.emit('commentFromClient', {id: id, comment: data});                
            }

        });

        socket.on('commentFromServer', function(data) {
            console.log(data);
            var id = $('#postId').val();
            if (id == data.id) {
                var content = '<div class="comment">' +
                    	'<div class="comment-metadata">' +
            				'<span class="comment-author">' + data.comment.author +  '</span> <span class="comment-date">' + getTimestamp(data.id).toDateString() + '</span>' +
            			'</div>' +
            			'<div class="comment-content">' +
            				'<div class="about">Detail:</div>' +
                            data.comment.content +
            			'</div>' +
            		'</div>';
                $('#comment-header').after(content);                
            }

        
        
        }); 
        
    });

})(jQuery);