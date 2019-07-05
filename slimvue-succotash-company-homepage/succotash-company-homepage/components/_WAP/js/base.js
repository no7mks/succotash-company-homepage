//
// import Vue from 'vue';
//
// import px2rem from './px2rem';
//
// px2rem();
//
// let fire = function (Page) {
//     Vue.component('render', Page);
//     new Vue({
//         el: "#container",
//     });
//
//     let container = document.getElementById('container');
//     window.onload = function(){
//         spaceFn(container);
//     };
//
//     window.addEventListener("resize", function () {
//         container.style.height = "";
//         document.getElementById('botm').style.position = "";
//         document.getElementById('botm').style.bottom = "";
//         spaceFn(container);
//     });
// };
//
// function spaceFn(obj) {
//     let viewH = document.documentElement.clientHeight,
//         footer = document.getElementById('footer');
//     console.log(footer)
//     console.log(obj.offsetHeight, viewH)
//     if (obj.offsetHeight <= viewH ) {
//         obj.style.height = viewH + 'px';
//         obj.style.background = "#0a1827";
//         document.getElementById('botm').style.position = 'absolute';
//         document.getElementById('botm').style.bottom = 0;
//     }
//     else
//     {
//         document.getElementById('botm').style.position = 'static';
//     }
// }
//
// export {fire};
