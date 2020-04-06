$(function () {
	var $content = $('#jsonContent');
	var data = {
		rss_url: 'https://medium.com/feed/@sondremilchagledahl'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				output += '<a href="' + item.link + '">' + '<div class="container-fluid game-container col-xs-12">';
				output += '<h4 class="date">' + item.pubDate + "</h4>";
				
                output += '<h4 class="display-3"><strong>'+ item.title + '</strong></h4><div class="container-fluid">';
                var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
				var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
				var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
				output += '<img class="img-responsive img-rounded center-block" src="' + src + '" width="360px" height="240px">';
                
				var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
                yourString = yourString.replace(/https[^>]*href/g, ""); // remove stray links in description
                var maxLength = 500;
                
                //trim the string to the maximum length
				var trimmedString = yourString.substr(yourString.indexOf(')') + 1, maxLength);
                
				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                
                output += '<p>' + trimmedString + '...</p>';
                
				output += '</div></div>';
				return k < 4;
			});
			$content.html(output);
		}
	});
});