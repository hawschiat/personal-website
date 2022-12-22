(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[7],{6770:function(e,i,t){"use strict";t.d(i,{J:function(){return n},m:function(){return a}});var n={initial:{scale:.8,opacity:0},enter:{scale:1,opacity:1},exit:{opacity:0,transition:{duration:.3}}},a={initial:{y:"-50%",opacity:0},enter:{y:"0%",opacity:1,transition:{ease:"circOut",duration:.6}},exit:{y:"-50%",opacity:0,transition:{ease:"circIn",duration:.6}}}},7536:function(e,i,t){"use strict";t.d(i,{Z:function(){return c}});t(4519);var n=t(1843),a=t(2131),s=t(2556),r={initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:{ease:"backOut",duration:.6}},exit:{scale:.5,opacity:0,transition:{ease:"backIn",duration:.6}}},o=function(e){var i="animated-link";return e.large&&(i+=" large"),i};function c(e){var i=e.fontAwesomeIcon;return(0,s.jsx)(n.rU,{className:"animated-link-container",to:e.to?e.to:"",children:(0,s.jsxs)(a.E.div,{className:o(e),variants:r,whileTap:{scale:.9},children:[i&&"front"===i.placement?(0,s.jsx)("i",{className:i.iconClass}):null,(0,s.jsx)("span",{children:e.content}),i&&"end"===i.placement?(0,s.jsx)("i",{className:i.iconClass}):null]})})}},1007:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return h}});t(4519);var n=t(1205),a=t(2131),s=t(6770),r=t(7536),o=t(2556),c={initial:{x:"-20%",opacity:0},enter:{x:"0%",opacity:1,transition:{ease:"circOut",duration:.6}},exit:{x:"20%",opacity:0,transition:{ease:"circIn",duration:.6}}};function l(e){var i={enter:{transition:{delayChildren:.5,staggerChildren:.1}},exit:{transition:{staggerChildren:.2,staggerDirection:-1}}};return e.delayChildren&&(i={enter:{transition:{delayChildren:e.delayChildren.enter,staggerChildren:.1}},exit:{transition:{delayChildren:e.delayChildren.exit,staggerChildren:.2,staggerDirection:-1}}}),(0,o.jsxs)(a.E.div,{className:"experience",initial:"initial",animate:"enter",exit:"exit",variants:i,children:[(0,o.jsx)(a.E.div,{className:"category-title",variants:c,children:e.name}),(0,o.jsx)(a.E.div,{className:"category-content",variants:c,children:e.abilities?(0,o.jsx)("div",{className:"abilities",children:e.children}):e.children&&e.children instanceof Array?(0,o.jsx)("ul",{children:e.children.map((function(e){return(0,o.jsx)("li",{children:e})}))}):e.children?(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:e.children})}):null})]})}function d(e){return(0,o.jsxs)("div",{className:"category-item",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("div",{className:"left",children:[(0,o.jsx)("span",{className:"title",children:e.title}),(0,o.jsxs)("span",{className:"details",children:[(0,o.jsx)("span",{className:"org",children:e.organization}),e.location?(0,o.jsxs)("span",{className:"location",children:[" - ",e.location]}):null]})]}),(0,o.jsx)("div",{className:"right",children:(0,o.jsx)("span",{className:"period",children:(0,o.jsx)("em",{children:e.period})})})]}),e.children]})}function p(e){return(0,o.jsxs)("div",{className:"category-item achievement",children:[e.imagePath?(0,o.jsx)("div",{className:"badge-container",children:(0,o.jsx)("img",{src:t(7148)("./assets".concat(e.imagePath)),alt:e.title})}):null,(0,o.jsxs)("div",{className:"right",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("span",{className:"title",children:e.title}),(0,o.jsxs)("span",{className:"details",children:[(0,o.jsx)("span",{className:"org",children:e.organization}),e.location?(0,o.jsxs)("span",{className:"location",children:[" - ",e.location]}):null]})]}),(0,o.jsx)("span",{className:"period",children:(0,o.jsx)("em",{children:e.period})}),(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})]})}function h(){return n.ZP.pageview("/experience"),(0,o.jsxs)("div",{id:"page",children:[(0,o.jsx)(a.E.div,{id:"back-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:s.J,children:(0,o.jsx)(r.Z,{fontAwesomeIcon:{iconClass:"fas fa-arrow-left",placement:"front"},content:"About",to:"/about"})}),(0,o.jsx)(a.E.div,{id:"continue-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:s.J,children:(0,o.jsx)(r.Z,{fontAwesomeIcon:{iconClass:"fas fa-arrow-right",placement:"end"},content:"Projects",to:"/projects"})}),(0,o.jsxs)(a.E.div,{id:"content-container",initial:"initial",animate:"enter",exit:"exit",variants:{enter:{transition:{delayChildren:.7}}},children:[(0,o.jsx)(a.E.div,{id:"content-title",variants:s.m,children:"Experience"}),(0,o.jsxs)(l,{name:"Work",delayChildren:{enter:.7,exit:.6},children:[(0,o.jsx)(d,{title:"Full Stack Developer",period:"Nov 2022 - present",organization:"Firstup",location:"Remote"}),(0,o.jsx)(d,{title:"Software Developer",period:"Jan 2021 - Nov 2022",organization:"Breathe Life (Zinnia)",location:"Montreal, QC",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Worked with developers and product managers to design, develop and maintain a SaaS platform that empowers insurance companies or independent agents."}),(0,o.jsx)("li",{children:"Developed in-house solutions with members of the DevSecOps team to power the company\u2019s multi-tenant infrastructure."}),(0,o.jsx)("li",{children:"Collaborated with other developers in code reviews to uphold the coding standard and best practices."}),(0,o.jsx)("li",{children:"Conceptualise and design software architectures for new features or improvement of existing architecture."}),(0,o.jsx)("li",{children:"Monitored and troubleshooted application alerts using Sentry and Datadog."}),(0,o.jsx)("li",{children:"Contributed to open-source initiatives within the company."})]})}),(0,o.jsxs)(d,{title:"Co-Founder, Full Stack Developer",period:"May 2018 - July 2020",organization:"Neverguess.ca",location:"Montreal, QC",children:[(0,o.jsx)("p",{children:"Neverguess is a web-based educational tool that makes creating exam a breeze. On top of that, instructors can distribute practice exams from their question bank faster than ever. I started designing and developing the platform in December 2018 until the first public release in September 2019, when our pilot program with McGill University started."}),(0,o.jsx)("p",{style:{marginTop:"2em"},children:"Some highlights of what I've done during this time:"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Developed the application front end and back end from scratch using using Vue.js and Yii2 Framework (PHP). The platform uses both MySQL and DynamoDB as its database."}),(0,o.jsx)("li",{children:"Designed the front end architecture using Vue Router (routing library) and Vuex (state management library). Created the application\u2019s user interface using Material Design UI components."}),(0,o.jsx)("li",{children:"Collaborated with the CEO to design a mobile-first user experience. Based on our survey on 190 students, our user experience obtained a net promoter score of +30, higher than the industry average of +10."}),(0,o.jsx)("li",{children:"Integrated the platform with serverless services on AWS such as API Gateway, DynamoDB, S3, SQS and Lambda, thereby minimizing the management overhead and cutting the monthly cost of operation by over 50%."}),(0,o.jsx)("li",{children:"Overhauled the application deployment strategy by migrating from traditional deployment to continuous delivery using Docker and AWS CodePipeline."}),(0,o.jsx)("li",{children:"Implemented the best security practices to comply with regulations, getting a 100 score on SecurityScorecard. (The industry average is 87)"}),(0,o.jsx)("li",{children:"Facilitated discovery meetings to understand users\u2019 requirements and introduced solutions using the design-thinking methodology."}),(0,o.jsx)("li",{children:"Converted business requirements into technical specifications and provided an estimated timeframe to implement a specific features."})]})]})]}),(0,o.jsx)(l,{name:"Achievements",delayChildren:{enter:.9,exit:.4},children:(0,o.jsx)(p,{title:"AWS Certified Developer - Associate",period:"May 2020 - May 2023",organization:"Amazon Web Services (AWS)",imagePath:"/images/badges/aws-certified-developer-associate.png",link:"https://www.youracclaim.com/badges/5ecfedf0-e9fb-4b80-af63-873bf14e8514/public_url"})})]})]})}},7148:function(e,i,t){var n={"./assets/avatar.svg":6985,"./assets/images/badges/aws-certified-developer-associate.png":6680,"./assets/images/projects/animacard_builder.jpg":9581,"./assets/images/projects/b&b_media_fund.png":4306,"./assets/images/projects/fallback.jpg":7250,"./assets/images/projects/flashpoint_banner.jpg":8673,"./assets/images/projects/go-snake.png":9252,"./assets/images/projects/saqs-screenshot.png":3911,"./assets/mypic.jpg":4128};function a(e){var i=s(e);return t(i)}function s(e){if(!t.o(n,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=7148},6985:function(e,i,t){"use strict";e.exports=t.p+"static/media/avatar.1310bebb606559c546fd.svg"},6680:function(e,i,t){"use strict";e.exports=t.p+"static/media/aws-certified-developer-associate.84d7eb4fa70599974962.png"},9581:function(e,i,t){"use strict";e.exports=t.p+"static/media/animacard_builder.b52b65c59cdddc489771.jpg"},4306:function(e,i,t){"use strict";e.exports=t.p+"static/media/b&b_media_fund.64cf481f8edc7945ad4e.png"},7250:function(e,i,t){"use strict";e.exports=t.p+"static/media/fallback.2f9f3bfac28d7a4ecd05.jpg"},8673:function(e,i,t){"use strict";e.exports=t.p+"static/media/flashpoint_banner.fc587816ae8f7254a6ec.jpg"},9252:function(e,i,t){"use strict";e.exports=t.p+"static/media/go-snake.d8c031d9b6209d65820b.png"},3911:function(e,i,t){"use strict";e.exports=t.p+"static/media/saqs-screenshot.016ef82b492ae271d05f.png"},4128:function(e,i,t){"use strict";e.exports=t.p+"static/media/mypic.4e366ef7fcc22c368a5b.jpg"}}]);
//# sourceMappingURL=7.2ecd74bb.chunk.js.map