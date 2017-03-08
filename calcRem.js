(function (win, lib) {
    function refreshRem() {
        var clientWidth = Math.min(docEl.getBoundingClientRect().width, 750);
        var rem = clientWidth / 10;
        docEl.style.fontSize = rem + "px";  // html
        libFlexible.rem = win.rem = rem;
    }
    var timer,
        doc = win.document,
        docEl = doc.documentElement,
        metaEl = doc.querySelector('meta[name="viewport"]'),
        flexibleEl = doc.querySelector('meta[name="flexible"]'),
        dpr = 0,
        scale = 0,
        libFlexible = lib.flexible || (lib.flexible = {});

    win.addEventListener("resize",function() {
        clearTimeout(timer);
        timer = setTimeout(refreshRem, 300);
    },!1);

    win.addEventListener("pageshow",function(b) {
        if (b.persisted){
            clearTimeout(timer);
            timer = setTimeout(refreshRem, 300);
        }
    },!1);

    if ("complete" === doc.readyState) {
        doc.body.style.fontSize = 12 * dpr + "px";
    } else {
        doc.addEventListener("DOMContentLoaded",function() {
            doc.body.style.fontSize = 12 * dpr + "px";
        },!1);
    }


    libFlexible.dpr = win.dpr = dpr;
    libFlexible.refreshRem = refreshRem;

    libFlexible.rem2px = function(d) {
        var c = parseFloat(d) * this.rem;
        if ("string" == typeof d && d.match(/rem$/)) {
            c += "px";
        }
        return c;
    };

    libFlexible.px2rem = function(d) {
        var c = parseFloat(d) / this.rem;
        if ("string" == typeof d && d.match(/px$/)) {
            c += "rem";
        }
        return c;
    };

    refreshRem();
}(window, window.lib || (window.lib = {}))); 

