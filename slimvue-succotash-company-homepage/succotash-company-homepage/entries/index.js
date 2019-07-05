import slimvue from 'slimvue';
import wappage from 'succotash-company-homepage/components/_WAP/IndexPage';
import pcpage from 'succotash-company-homepage/components/Homepage';

import px2rem from 'succotash-company-homepage/components/_WAP/js/px2rem';

px2rem();

const isMobile = require('ismobilejs');

if (isMobile.any) {
    slimvue.mount(wappage);
}
else {
    slimvue.mount(pcpage);
}
