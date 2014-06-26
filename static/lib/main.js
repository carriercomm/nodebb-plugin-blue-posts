"use strict";

(function() {
	function colorPosts() {
		$('.topic-body .label.inline-block').each(function() {
			var $this = $(this);
			if ($this.html().match('Admin')) {
				$this.parents('.topic-item').addClass('blue-post');
			} else if ($this.html().match('Moderator')) {
				$this.parents('.topic-item').addClass('green-post');
			}
		});
	}

	$(window).on('action:posts.loaded', function() {
		colorPosts();
	});

	$(window).on('action:ajaxify.start', function(ev, data) {
		if(data.url.indexOf('topic') === 0) {
			colorPosts();
		}
	});
}());