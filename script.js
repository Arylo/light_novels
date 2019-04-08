setTimeout(function () {
    if (/(\/|\/index.html)$/.test(location.pathname)) {
        document.querySelector('a.navigation-prev').remove();
    }
}, 200);