$(window).bind('hashchange', function (e) {
    var api_base = 'http://api.wordnik.com/v4/word.json/';
    var api_key = 'API_KEY';
    var api_options = '/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=' + api_key;
    var definitions = $('#game-status');
    var word = definitions.text().trim().split(/ +/)[1];
    $.getJSON(api_base + word + api_options, function (data) {
        var text = '<br>';
        $(data).each(function (i, def) {
            var num = parseInt(i, 10) + 1;
            text += '<b>' + num + '</b> ' + $(def).prop('text') + '<br>';
        });
        definitions.append(text);
    });
});
