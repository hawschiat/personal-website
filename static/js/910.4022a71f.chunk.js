(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[910],{6770:function(e,t,i){"use strict";i.d(t,{J:function(){return a},m:function(){return n}});var a={initial:{scale:.8,opacity:0},enter:{scale:1,opacity:1},exit:{opacity:0,transition:{duration:.3}}},n={initial:{y:"-50%",opacity:0},enter:{y:"0%",opacity:1,transition:{ease:"circOut",duration:.6}},exit:{y:"-50%",opacity:0,transition:{ease:"circIn",duration:.6}}}},7536:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});i(4519);var a=i(1843),n=i(2131),s=i(2556),r={initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:{ease:"backOut",duration:.6}},exit:{scale:.5,opacity:0,transition:{ease:"backIn",duration:.6}}},o=function(e){var t="animated-link";return e.large&&(t+=" large"),t};function c(e){var t=e.fontAwesomeIcon;return(0,s.jsx)(a.rU,{className:"animated-link-container",to:e.to?e.to:"",children:(0,s.jsxs)(n.E.div,{className:o(e),variants:r,whileTap:{scale:.9},children:[t&&"front"===t.placement?(0,s.jsx)("i",{className:t.iconClass}):null,(0,s.jsx)("span",{children:e.content}),t&&"end"===t.placement?(0,s.jsx)("i",{className:t.iconClass}):null]})})}},7910:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return g}});var a=i(9439),n=i(4519),s=i(1205),r=i(2131),o=i(6770),c=i(7536),l=i(2825),d=i(9341),p=i(2556),u={initial:{rotateY:90,opacity:0},enter:{rotateY:0,opacity:1,transition:{ease:"easeOut",duration:.6}},exit:{rotateY:-90,opacity:0,transition:{ease:"easeIn",duration:.6}}};function m(e){var t="gallery-item-container";return e.isActive&&(t+=" active"),(0,p.jsx)(r.E.div,{layout:!0,className:t,variants:u,children:(0,p.jsxs)("div",{className:"gallery-item",onClick:e.onSelect,children:[(0,p.jsx)("div",{className:"close-btn fas fa-times-circle",onClick:e.onCancel}),(0,p.jsx)("div",{className:"gallery-img-container",children:(0,p.jsx)("img",{src:i(7148)("./assets".concat(e.imagePath)),alt:e.title})}),(0,p.jsxs)("div",{className:"gallery-item-title",children:[e.title,e.link?(0,p.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,p.jsx)("i",{className:"fas fa-external-link-alt"})}):null]}),(0,p.jsx)(l.M,{mode:"wait",initial:!1,children:(0,p.jsx)(r.E.div,{className:"gallery-item-description",initial:"initial",animate:"enter",exit:"exit",variants:o.m,children:(0,p.jsx)(d.D,{children:e.description})})})]})})}var h=[{title:"onespan-sign-node",link:"https://github.com/getbreathelife/onespan-sign-node",description:"This is a work-in-progress NodeJS SDK for the [OneSpan Sign Electronic Signature](https://www.onespan.com/products/electronic-signature) service."},{title:"Prettier Import Sorter",link:"https://www.npmjs.com/package/@breathelife/prettier-plugin-sort-imports",description:"This is a fork of another import sorting plugin. The original plugin doesn't satisfy our use case within the company, so I forked the repository and rewrote the sorting logic to fit our internal use case.\nThis plugin is publicly available on npmjs."},{title:"Go Snake",imagePath:"/images/projects/go-snake.png",link:"https://github.com/hawschiat/go-snake",description:'A small challenge I had over a weekend while learning Go. This is a terminal-based game that prints out "graphics" using only ASCII characters.'},{title:"SAQ Inventory Scrapper",imagePath:"/images/projects/saqs-screenshot.png",link:"https://github.com/hawschiat/saq-inventory-scraper",description:"My friend [Mike](https://www.linkedin.com/in/michael-di-genova-732b3913b/) approached me in July 2018 asking me if there's an easy way to scrape inventory data across all branches on [SAQ's website](https://www.saq.com/en/). Since SAQ doesn't provide any public API for us to query data from, I decided to write a scraper to pull data from the website directly.\n\nInitially, only a portion of data is loaded. Subsequent data can only be fetched after clicking a specific button. Using Selenium ChromeDriver, I managed to automate that process and fetch the data that he needs!\n\nThis project was written using Kotlin. It also provides a command-line user interface to input parameters such as the web URL to fetch the data from.\n\nP.S. If you like vodka, be sure to check out [Prose Vodka](https://www.prosevodka.com/). It is the first pink, potato-based vodka in the world! ;)"},{title:"FlashPoint",imagePath:"/images/projects/flashpoint_banner.jpg",link:"https://github.com/COMP361/f2018-group10",description:"Collaborated with 4 other people to develop a video game using [PyGame](https://pygame.org) and other Python libraries, based on a board game of the same name.\nSome of the things I did include:\n- Authored customizable UI components using low-level drawing functions provided by pyGames, allowing my teammates to create user interfaces easily.\n- Implemented a client-server architecture for the game alongside a team-mate."},{title:"Bull & Bear Media Fund Package",imagePath:"/images/projects/b&b_media_fund.png",link:"http://bullandbearmcgill.com/media-fund-2018/index.html",description:"A tiny project I had when I was the Managing Web Editor of [The Bull & Bear](http://bullandbearmcgill.com) to raise funds for the organization. It was designed using jQuery, [AOS](https://michalsnik.github.io/aos/) and [Rellax](https://github.com/dixonandmoe/rellax) library."},{title:"AnimaCard Builder",imagePath:"/images/projects/animacard_builder.jpg",link:"",description:"This was the project I did with my friend [Francis](https://github.com/francis-piche) during McHacks 2018. It was my first time experimenting with HTML canvas and interactive JavaScript. Despite being beginners, we managed to complete several features such as drag-and-drop and animated sprites.\n\nThis project got me really interested in Javascript and pushed me to self-learn it on my own!"}];function g(){var e=(0,n.useState)(-1),t=(0,a.Z)(e,2),i=t[0],l=t[1],d=function(e){e>=0&&s.ZP.event({category:"Project",action:"Viewed Project",value:e+1}),l(e)};return(0,n.useEffect)((function(){s.ZP.pageview("/projects")}),[]),(0,p.jsxs)("div",{id:"page",children:[(0,p.jsx)(r.E.div,{id:"back-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:o.J,children:(0,p.jsx)(c.Z,{fontAwesomeIcon:{iconClass:"fas fa-arrow-left",placement:"front"},content:"Experience",to:"/experience"})}),(0,p.jsx)(r.E.div,{id:"continue-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:o.J,children:(0,p.jsx)(c.Z,{fontAwesomeIcon:{iconClass:"fas fa-arrow-right",placement:"end"},content:"Contact Me",to:"/contact"})}),(0,p.jsxs)(r.E.div,{id:"content-container",initial:"initial",animate:"enter",exit:"exit",variants:{enter:{transition:{delayChildren:.7,staggerChildren:.1}},exit:{transition:{staggerChildren:.1,staggerDirection:-1}}},children:[(0,p.jsx)(r.E.div,{id:"content-title",variants:o.m,children:"Projects"}),(0,p.jsx)(r.E.p,{children:"These are the projects I've done throughout my student / professional career that are publicly available."}),(0,p.jsx)("div",{id:"project-gallery",children:null===h||void 0===h?void 0:h.map((function(e,t){var a;return(0,p.jsx)(m,{title:e.title,imagePath:null!==(a=e.imagePath)&&void 0!==a?a:"/images/projects/fallback.jpg",description:e.description,link:e.link,isActive:i===t,onSelect:function(){return d(t)},onCancel:function(e){e.stopPropagation(),d(-1)}},t)}))})]})]})}},7148:function(e,t,i){var a={"./assets/avatar.svg":6985,"./assets/images/badges/aws-certified-developer-associate.png":6680,"./assets/images/projects/animacard_builder.jpg":9581,"./assets/images/projects/b&b_media_fund.png":4306,"./assets/images/projects/fallback.jpg":7250,"./assets/images/projects/flashpoint_banner.jpg":8673,"./assets/images/projects/go-snake.png":9252,"./assets/images/projects/saqs-screenshot.png":3911,"./assets/mypic.jpg":4128};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=7148},6985:function(e,t,i){"use strict";e.exports=i.p+"static/media/avatar.1310bebb606559c546fd.svg"},6680:function(e,t,i){"use strict";e.exports=i.p+"static/media/aws-certified-developer-associate.84d7eb4fa70599974962.png"},9581:function(e,t,i){"use strict";e.exports=i.p+"static/media/animacard_builder.b52b65c59cdddc489771.jpg"},4306:function(e,t,i){"use strict";e.exports=i.p+"static/media/b&b_media_fund.64cf481f8edc7945ad4e.png"},7250:function(e,t,i){"use strict";e.exports=i.p+"static/media/fallback.2f9f3bfac28d7a4ecd05.jpg"},8673:function(e,t,i){"use strict";e.exports=i.p+"static/media/flashpoint_banner.fc587816ae8f7254a6ec.jpg"},9252:function(e,t,i){"use strict";e.exports=i.p+"static/media/go-snake.d8c031d9b6209d65820b.png"},3911:function(e,t,i){"use strict";e.exports=i.p+"static/media/saqs-screenshot.016ef82b492ae271d05f.png"},4128:function(e,t,i){"use strict";e.exports=i.p+"static/media/mypic.4e366ef7fcc22c368a5b.jpg"}}]);
//# sourceMappingURL=910.4022a71f.chunk.js.map