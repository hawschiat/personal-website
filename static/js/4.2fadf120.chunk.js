(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[4],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),i=a.n(n),r=a(13),l=a(11),s=a(39),c=a(36),o=(a(66),{initial:{x:"-20%",opacity:0},enter:{x:"0%",opacity:1,transition:{ease:"circOut",duration:.6}},exit:{x:"20%",opacity:0,transition:{ease:"circIn",duration:.6}}});function m(e){var t={enter:{transition:{delayChildren:.5,staggerChildren:.1}},exit:{transition:{staggerChildren:.2,staggerDirection:-1}}};return e.delayChildren&&(t={enter:{transition:{delayChildren:e.delayChildren.enter,staggerChildren:.1}},exit:{transition:{delayChildren:e.delayChildren.exit,staggerChildren:.2,staggerDirection:-1}}}),i.a.createElement(l.b.div,{className:"experience",initial:"initial",animate:"enter",exit:"exit",variants:t},i.a.createElement(l.b.div,{className:"category-title",variants:o},e.name),i.a.createElement(l.b.div,{className:"category-content",variants:o},e.abilities?i.a.createElement("div",{className:"abilities"},e.children):e.children&&e.children instanceof Array?i.a.createElement("ul",null,e.children.map((function(e){return i.a.createElement("li",null,e)}))):e.children?i.a.createElement("ul",null,i.a.createElement("li",null,e.children)):null))}function d(e){return i.a.createElement("div",{className:"category-item"},i.a.createElement("header",null,i.a.createElement("div",{className:"left"},i.a.createElement("span",{className:"title"},e.title),i.a.createElement("span",{className:"details"},i.a.createElement("span",{className:"org"},e.organization),e.location?i.a.createElement("span",{className:"location"}," - ",e.location):null)),i.a.createElement("div",{className:"right"},i.a.createElement("span",{className:"period"},i.a.createElement("em",null,e.period)))),e.children)}a(67),a(68);function u(e){return i.a.createElement("div",{className:"ability"},i.a.createElement("div",{className:"name"},e.name),function(e){return i.a.createElement("div",{className:"rating"},Array(e.outOf).fill("").map((function(t,a){return a+1<=e.rated?i.a.createElement("i",{className:"fas fa-star",key:a}):a+1<=Math.ceil(e.rated)?(a+1)%e.rated>=.5?i.a.createElement("i",{className:"fas fa-star-half-alt",key:a}):i.a.createElement("i",{className:"fas fa-star",key:a}):i.a.createElement("i",{className:"far fa-star",key:a})})))}(e))}function p(e){return i.a.createElement("div",{className:"category-item achievement"},i.a.createElement("header",null,e.imagePath?i.a.createElement("div",{className:"badge-container"},i.a.createElement("img",{src:a(44)("./assets".concat(e.imagePath)),alt:e.title})):null,i.a.createElement("div",{className:"left"},i.a.createElement("span",{className:"title"},e.title),i.a.createElement("span",{className:"details"},i.a.createElement("span",{className:"org"},e.organization),e.location?i.a.createElement("span",{className:"location"}," - ",e.location):null),i.a.createElement("span",{className:"period"},i.a.createElement("em",null,e.period)),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))),e.children)}function f(){return r.b.pageview("/experience"),i.a.createElement("div",{id:"page"},i.a.createElement(l.b.div,{id:"back-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:s.a},i.a.createElement(c.a,{fontAwesomeIcon:{iconClass:"fas fa-arrow-left",placement:"front"},content:"About",to:"/about"})),i.a.createElement(l.b.div,{id:"continue-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:s.a},i.a.createElement(c.a,{fontAwesomeIcon:{iconClass:"fas fa-arrow-right",placement:"end"},content:"Projects",to:"/projects"})),i.a.createElement(l.b.div,{id:"content-container",initial:"initial",animate:"enter",exit:"exit",variants:{enter:{transition:{delayChildren:.7}}}},i.a.createElement(l.b.div,{id:"content-title",variants:s.b},"Experience"),i.a.createElement(m,{name:"Work",delayChildren:{enter:.7,exit:.6}},i.a.createElement(d,{title:"Co-Founder, Full-Stack Developer",period:"May 2018 - July 2020",organization:"Neverguess.ca",location:"Montreal, QC"},i.a.createElement("p",null,"Neverguess is a web-based educational tool that makes creating exam a breeze. On top of that, instructors can distribute practice exams from their question bank faster than ever. I started designing and developing the platform in December 2018 until the first public release in September 2019, when our pilot program with McGill University started."),i.a.createElement("p",{style:{marginTop:"2em"}},"Some highlights of what I've done during this time:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Developed the application front end and back end from scratch using using Vue.js and Yii2 Framework (PHP). The platform uses both MySQL and DynamoDB as its database."),i.a.createElement("li",null,"Designed the front end architecture using Vue Router (routing library) and Vuex (state management library). Created the application\u2019s user interface using Material Design UI components."),i.a.createElement("li",null,"Collaborated with the CEO to design a mobile-first user experience. Based on our survey on 190 students, our user experience obtained a net promoter score of +30, higher than the industry average of +10."),i.a.createElement("li",null,"Integrated the platform with serverless services on AWS such as API Gateway, DynamoDB, S3, SQS and Lambda, thereby minimizing the management overhead and cutting the monthly cost of operation by over 50%."),i.a.createElement("li",null,"Overhauled the application deployment strategy by migrating from traditional deployment to continuous delivery using Docker and AWS CodePipeline."),i.a.createElement("li",null,"Implemented the best security practices to comply with regulations, getting a 100 score on SecurityScorecard. (The industry average is 87)"),i.a.createElement("li",null,"Facilitated discovery meetings to understand users\u2019 requirements and introduced solutions using the design-thinking methodology."),i.a.createElement("li",null,"Converted business requirements into technical specifications and provided an estimated timeframe to implement a specific features."))),i.a.createElement(d,{title:"Software Engineer",period:"Jan 2021 - Current",organization:"Breathe Life",location:"Montreal, QC"})),i.a.createElement(m,{name:"Achievements",delayChildren:{enter:.9,exit:.4}},i.a.createElement(p,{title:"AWS Certified Developer - Associate",period:"May 2020 - May 2023",organization:"Amazon Web Services (AWS)",imagePath:"/images/badges/aws-certified-developer-associate.png",link:"https://www.youracclaim.com/badges/5ecfedf0-e9fb-4b80-af63-873bf14e8514/public_url"})),i.a.createElement(m,{name:"Abilities",abilities:!0,delayChildren:{enter:1.1,exit:.2}},i.a.createElement("span",{className:"subtitle"},"Programming Languages"),i.a.createElement(u,{name:"JavaScript",rated:4.5,outOf:5}),i.a.createElement(u,{name:"TypeScript",rated:4.5,outOf:5}),i.a.createElement(u,{name:"Python",rated:4.5,outOf:5}),i.a.createElement(u,{name:"Java",rated:4,outOf:5}),i.a.createElement(u,{name:"PHP",rated:3,outOf:5}),i.a.createElement(u,{name:"C#",rated:3,outOf:5}),i.a.createElement("span",{className:"subtitle"},"Web Development"," ",i.a.createElement("span",{style:{fontSize:"0.7em",marginLeft:"0.5em"}},"(incl. JavaScript & TypeScript)")),i.a.createElement(u,{name:"HTML",rated:5,outOf:5}),i.a.createElement(u,{name:"CSS",rated:5,outOf:5}),i.a.createElement(u,{name:"React",rated:4,outOf:5}),i.a.createElement(u,{name:"Vue.js",rated:4,outOf:5}),i.a.createElement("span",{className:"subtitle"},"Database Systems"),i.a.createElement(u,{name:"DynamoDB",rated:4.5,outOf:5}),i.a.createElement(u,{name:"MySQL",rated:4,outOf:5}),i.a.createElement(u,{name:"PostgreSQL",rated:4,outOf:5}),i.a.createElement("span",{className:"subtitle"},"Testing Frameworks"),i.a.createElement(u,{name:"Jest",rated:4,outOf:5}),i.a.createElement(u,{name:"JUnit",rated:3.5,outOf:5}),i.a.createElement("span",{className:"subtitle"},"Development Tools"),i.a.createElement(u,{name:"Git",rated:4,outOf:5}),i.a.createElement(u,{name:"Docker",rated:4,outOf:5}),i.a.createElement(u,{name:"Github Actions",rated:3,outOf:5}))))}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),i=a.n(n),r=a(12),l=a(11),s=(a(37),{initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:{ease:"backOut",duration:.6}},exit:{scale:.5,opacity:0,transition:{ease:"backIn",duration:.6}}}),c=function(e){var t="animated-link";return e.large&&(t+=" large"),t};function o(e){var t=e.fontAwesomeIcon;return i.a.createElement(r.b,{className:"animated-link-container",to:e.to?e.to:""},i.a.createElement(l.b.div,{className:c(e),variants:s,whileTap:{scale:.9}},t&&"front"===t.placement?i.a.createElement("i",{className:t.iconClass}):null,i.a.createElement("span",null,e.content),t&&"end"===t.placement?i.a.createElement("i",{className:t.iconClass}):null))}},37:function(e,t,a){},39:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n={initial:{scale:.8,opacity:0},enter:{scale:1,opacity:1},exit:{opacity:0,transition:{duration:.3}}},i={initial:{y:"-50%",opacity:0},enter:{y:"0%",opacity:1,transition:{ease:"circOut",duration:.6}},exit:{y:"-50%",opacity:0,transition:{ease:"circIn",duration:.6}}}},41:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/mypic.4e366ef7.jpg"},44:function(e,t,a){var n={"./assets/avatar.svg":45,"./assets/images/badges/aws-certified-developer-associate.png":46,"./assets/images/projects/animacard_builder.jpg":47,"./assets/images/projects/b&b_media_fund.png":48,"./assets/images/projects/flashpoint_banner.jpg":49,"./assets/images/projects/saqs-screenshot.png":50,"./assets/mypic.jpg":41};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=44},45:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/avatar.1310bebb.svg"},46:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/aws-certified-developer-associate.84d7eb4f.png"},47:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/animacard_builder.b52b65c5.jpg"},48:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/b&b_media_fund.64cf481f.png"},49:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/flashpoint_banner.fc587816.jpg"},50:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/saqs-screenshot.016ef82b.png"},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}}]);
//# sourceMappingURL=4.2fadf120.chunk.js.map