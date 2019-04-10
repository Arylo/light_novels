require(['gitbook', 'jquery'], function(gitbook, $) {
    gitbook.events.on('page.change', function() {
        if ("/" === location.pathname || "/index.html" === location.pathname) {
            $('a.navigation-next').remove();
        } else if (/(\/|\/index.html)$/.test(location.pathname)) {
            $('a.navigation-prev').remove();
            if (!$('a.navigation-next').hasClass("navigation-unique")) {
                $('a.navigation-next').addClass("navigation-unique");
            }
        }
    });
});
