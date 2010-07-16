$(function() {
  $('.eplink').each(function(i) {
    series = $(this).html();

    quote = $($(this).nextAll('span')[1]).html();
    s = /S: (\d+) - Ep: (\d+)/(quote);
    season = s[1];
    episode = s[2];

    querystring = series + "+S" + format_number(season) + "E" + format_number(episode);
    link = "http://nzbmatrix.com/nzb-search.php?search=" + querystring + "&cat=0";

    $($(this).nextAll('span')[1]).after('<span class="newzbin"><a href="' + link + '" target="_blank" rel="external"><img src="http://www.newzbin.com/m/i/i/download.png" alt="nzbmatrix download" /></a></span>');
  });

  $(".nzbmatrix a").click(function() {
		window.open($(this).attr('href'));
		return false;
	});
});

function format_number(number) {
	n = parseInt(number);
	if(n < 10)
		return "0" + n;
	else
		return number;
}

