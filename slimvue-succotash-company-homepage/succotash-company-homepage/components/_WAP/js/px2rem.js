export default function () {
    function resizeBaseFontSize() {
        let rootHtml = document.documentElement;
        let deviceWidth = rootHtml.clientWidth;
        let fontSize = deviceWidth / 6.4 + "px";
        rootHtml.style.fontSize = fontSize;
        console.log('set font size to ' + fontSize);
    }

    resizeBaseFontSize();

    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);
    //
    if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
        let v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
            version = parseInt(v[1], 10);
        if (version >= 8) {
            document.documentElement.classList.add('hairlines');
        }
        // window.global.device = 'ios';
    }
    else {
        // window.global.device = 'android';
    }
}
