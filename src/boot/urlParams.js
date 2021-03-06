import { boot } from 'quasar/wrappers'

var urlParams;
(window.onpopstate = function () {
    var match,
    pl = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query = window.location.search.substring(1)
    urlParams = {}
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
})();

console.debug("urlParams",urlParams);

export default boot(({ app }) => {
    app.config.globalProperties.$urlParams = urlParams
})





