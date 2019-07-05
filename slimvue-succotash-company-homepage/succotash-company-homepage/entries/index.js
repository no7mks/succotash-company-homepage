import slimvue from 'slimvue';
import wappage from 'succotash-company-homepage/components/_WAP/IndexPage';
import pcpage from 'succotash-company-homepage/components/Homepage';

const isMobile = require('ismobilejs');

if (isMobile.any) {
    slimvue.mount(wappage);
}
else {
    slimvue.mount(pcpage);
}
