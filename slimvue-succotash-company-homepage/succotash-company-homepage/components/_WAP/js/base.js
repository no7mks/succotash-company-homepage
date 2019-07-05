import slimvue from 'slimvue';
import px2rem from 'succotash-company-homepage/components/_WAP/js/px2rem';
const isMobile = require('ismobilejs');

let loadPage = function (pcPage, wapPage) {
    if (isMobile.any) {
        px2rem();
        slimvue.mount(wapPage);
    }
    else {
        slimvue.mount(pcPage);
    }
};

export {loadPage};
