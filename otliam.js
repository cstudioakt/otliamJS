/*!
 * otliam v0.1
 * Copyright 2013-2014 AKT Enterprises
 * Licensed under MIT
 */
(function($) {
	$('.otliam').each(function() {
		var $t = $(this);
		var pre = $t.data('pre');
		var post = $t.data('post');
		var ext = $t.data('ext');
		var subject = $t.data('subject');
		var name = $t.data('name');
		var str = 'mailto:' + pre + '@' + post + '.' + ext;
		if (subject) {
			str = str + '?subject=' + subject;
		}
		if($t.html() == '' || $t.html() == undefined) {
			if(name == undefined || name == '') {
				name = pre + '@' + post + '.' + ext;
			}
		}
		$t.text(name).attr('href', str);
		$t.removeAttr('data-ext').removeAttr('data-post').removeAttr('data-pre');
	});
})(jQuery);