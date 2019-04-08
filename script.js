setTimeout(function () {
    if (/(\/|\/index.html)$/.test(location.pathname)) {
        document.querySelector('a.navigation-prev').remove();
        document.querySelector('a.navigation-next').className = document.querySelector('a.navigation-next').className + " navigation-unique";
    }
}, 1000);