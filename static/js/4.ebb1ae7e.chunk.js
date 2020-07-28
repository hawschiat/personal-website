(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[4],{156:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(13),l=t(11),s=t(40),c=t(37),o=(t(67),{initial:{x:"-20%",opacity:0},enter:{x:"0%",opacity:1,transition:{ease:"circOut",duration:.6}},exit:{x:"20%",opacity:0,transition:{ease:"circIn",duration:.6}}}),m=function(e){var a={enter:{transition:{delayChildren:.5,staggerChildren:.1}},exit:{transition:{staggerChildren:.2,staggerDirection:-1}}};return e.delayChildren&&(a={enter:{transition:{delayChildren:e.delayChildren.enter,staggerChildren:.1}},exit:{transition:{delayChildren:e.delayChildren.exit,staggerChildren:.2,staggerDirection:-1}}}),i.a.createElement(l.b.div,{className:"experience",initial:"initial",animate:"enter",exit:"exit",variants:a},i.a.createElement(l.b.div,{className:"category-title",variants:o},e.name),i.a.createElement(l.b.div,{className:"category-content",variants:o},e.abilities?i.a.createElement("div",{className:"abilities"},e.children):e.children&&e.children instanceof Array?i.a.createElement("ul",null,e.children.map((function(e){return i.a.createElement("li",null,e)}))):e.children?i.a.createElement("ul",null,i.a.createElement("li",null,e.children)):null))},d=function(e){return i.a.createElement("div",{className:"category-item"},i.a.createElement("header",null,i.a.createElement("div",{className:"left"},i.a.createElement("span",{className:"title"},e.title),i.a.createElement("span",{className:"details"},i.a.createElement("span",{className:"org"},e.organization),e.location?i.a.createElement("span",{className:"location"}," - ",e.location):null)),i.a.createElement("div",{className:"right"},i.a.createElement("span",{className:"period"},i.a.createElement("em",null,e.period)))),e.children)},u=(t(68),t(69),function(e){return i.a.createElement("div",{className:"ability"},i.a.createElement("div",{className:"name"},e.name),function(e){return i.a.createElement("div",{className:"rating"},Array(e.outOf).fill("").map((function(a,t){return t+1<=e.rated?i.a.createElement("i",{className:"fas fa-star",key:t}):t+1<=Math.ceil(e.rated)?(t+1)%e.rated>=.5?i.a.createElement("i",{className:"fas fa-star-half-alt",key:t}):i.a.createElement("i",{className:"fas fa-star",key:t}):i.a.createElement("i",{className:"far fa-star",key:t})})))}(e))}),p=function(e){return i.a.createElement("div",{className:"category-item achievement"},i.a.createElement("header",null,e.imagePath?i.a.createElement("div",{className:"badge-container"},i.a.createElement("img",{src:t(45)("./assets".concat(e.imagePath)),alt:e.title})):null,i.a.createElement("div",{className:"left"},i.a.createElement("span",{className:"title"},e.title),i.a.createElement("span",{className:"details"},i.a.createElement("span",{className:"org"},e.organization),e.location?i.a.createElement("span",{className:"location"}," - ",e.location):null),i.a.createElement("span",{className:"period"},i.a.createElement("em",null,e.period)),i.a.createElement("a",{className:"App-link",href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))),e.children)};a.default=function(){return r.b.pageview("/experience"),i.a.createElement("div",{id:"page"},i.a.createElement(l.b.div,{id:"back-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:s.a},i.a.createElement(c.a,{fontAwesomeIcon:{iconClass:"fas fa-arrow-left",placement:"front"},content:"About",to:"/about"})),i.a.createElement(l.b.div,{id:"continue-btn-container",initial:"initial",animate:"enter",exit:"exit",variants:s.a},i.a.createElement(c.a,{fontAwesomeIcon:{iconClass:"fas fa-arrow-right",placement:"end"},content:"Projects",to:"/projects"})),i.a.createElement(l.b.div,{id:"content-container",initial:"initial",animate:"enter",exit:"exit",variants:{enter:{transition:{delayChildren:.7}}}},i.a.createElement(l.b.div,{id:"content-title",variants:s.b},"Experience"),i.a.createElement(m,{name:"Work",delayChildren:{enter:.7,exit:.6}},i.a.createElement(d,{title:"Co-Founder and Lead Developer",period:"December 2018 - September 2020",organization:"Neverguess.ca",location:"Montreal, QC"},i.a.createElement("p",null,"Neverguess is a web-based educational tool that makes creating exam a breeze. On top of that, instructors can distribute practice exams from their question bank faster than ever. I started designing and developing the platform in December 2018 until the first public release in September 2019, when our pilot program with McGill University started."),i.a.createElement("p",{style:{marginTop:"2em"}},"Some highlights of what I've done during this time:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Created the application front end from scratch using Vue.js, Vue Router and Vuex, as well as back end using Yii2 Framework (PHP). The platform uses both MySQL and DynamoDB as its database."),i.a.createElement("li",null,"Implemented a mobile-first, responsive user interface from designs in Figma using SCSS and CSS3. Based on user survey, our user experience obtained a net promoter score of +30, higher than the industry average of +10."),i.a.createElement("li",null,"Cut down over 50% on the cost of operation by migrating the application from traditional deployment on EC2 to containerised application using Docker and AWS Fargate."),i.a.createElement("li",null,"Made projects more manageable by decoupling several components into serverless microservices using AWS API Gateway, DynamoDB and Lambda."),i.a.createElement("li",null,"Orchestrated a Continuous Integration/Deployment (CI/CD) pipeline with health check, giving our platform a zero-downtime deployment."),i.a.createElement("li",null,"Implemented the best security practices to comply with regulations."),i.a.createElement("li",null,"Written a Python-based DOCX parser, which involves parsing through XML files and extracting media files to object storage on Amazon S3. The parser was essential to onboarding new professors since it simplifies the migration from their own question banks."),i.a.createElement("li",null,"Designed an exam generator application using Python and Shell scripts. The application is a Docker image that contains all the necessary packages and scripts. When started up, the entry script triggers the processes and exports a ZIP file containing all versions of exam files in PDF format.")))),i.a.createElement(m,{name:"Achievements",delayChildren:{enter:.9,exit:.4}},i.a.createElement(p,{title:"AWS Certified Developer - Associate",period:"May 2020 - May 2023",organization:"Amazon Web Services (AWS)",imagePath:"/images/badges/aws-certified-developer-associate.png",link:"https://www.youracclaim.com/badges/5ecfedf0-e9fb-4b80-af63-873bf14e8514/public_url"})),i.a.createElement(m,{name:"Abilities",abilities:!0,delayChildren:{enter:1.1,exit:.2}},i.a.createElement("span",{className:"subtitle"},"Programming Languages"),i.a.createElement(u,{name:"JavaScript",rated:4.5,outOf:5}),i.a.createElement(u,{name:"Python",rated:4.5,outOf:5}),i.a.createElement(u,{name:"TypeScript",rated:4,outOf:5}),i.a.createElement(u,{name:"Kotlin",rated:4,outOf:5}),i.a.createElement(u,{name:"Java",rated:4,outOf:5}),i.a.createElement(u,{name:"PHP",rated:3.5,outOf:5}),i.a.createElement(u,{name:"C#",rated:3,outOf:5}),i.a.createElement(u,{name:"Clojure",rated:3,outOf:5}),i.a.createElement("span",{className:"subtitle"},"Web Development"," ",i.a.createElement("span",{style:{fontSize:"0.7em",marginLeft:"0.5em"}},"(incl. JavaScript & TypeScript)")),i.a.createElement(u,{name:"HTML",rated:5,outOf:5}),i.a.createElement(u,{name:"CSS",rated:5,outOf:5}),i.a.createElement(u,{name:"SCSS",rated:5,outOf:5}),i.a.createElement(u,{name:"Vue.js",rated:4,outOf:5}),i.a.createElement(u,{name:"React",rated:3.5,outOf:5}),i.a.createElement("span",{className:"subtitle"},"Database Systems"),i.a.createElement(u,{name:"DynamoDB",rated:4.5,outOf:5}),i.a.createElement(u,{name:"MySQL",rated:4,outOf:5}),i.a.createElement(u,{name:"PostgreSQL",rated:3,outOf:5}),i.a.createElement("span",{className:"subtitle"},"App Development"),i.a.createElement(u,{name:"Flutter",rated:3,outOf:5}),i.a.createElement("span",{className:"subtitle"},"Development Tools"),i.a.createElement(u,{name:"Git",rated:4,outOf:5}),i.a.createElement(u,{name:"Docker",rated:3.5,outOf:5}),i.a.createElement(u,{name:"Selenium WebDriver",rated:2.5,outOf:5}))))}},37:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(12),l=t(11),s=(t(38),{initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:{ease:"backOut",duration:.6}},exit:{scale:.5,opacity:0,transition:{ease:"backIn",duration:.6}}}),c=function(e){var a="animated-link";return e.large&&(a+=" large"),a};a.a=function(e){var a=e.fontAwesomeIcon;return i.a.createElement(r.b,{className:"animated-link-container",to:e.to?e.to:""},i.a.createElement(l.b.div,{className:c(e),variants:s,whileTap:{scale:.9}},a&&"front"===a.placement?i.a.createElement("i",{className:a.iconClass}):null,i.a.createElement("span",null,e.content),a&&"end"===a.placement?i.a.createElement("i",{className:a.iconClass}):null))}},38:function(e,a,t){},40:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return i}));var n={initial:{scale:.8,opacity:0},enter:{scale:1,opacity:1},exit:{opacity:0,transition:{duration:.3}}},i={initial:{y:"-50%",opacity:0},enter:{y:"0%",opacity:1,transition:{ease:"circOut",duration:.6}},exit:{y:"-50%",opacity:0,transition:{ease:"circIn",duration:.6}}}},42:function(e,a,t){e.exports=t.p+"static/media/mypic.5af12335.jpg"},45:function(e,a,t){var n={"./assets/avatar.svg":46,"./assets/images/badges/aws-certified-developer-associate.png":47,"./assets/images/projects/animacard_builder.jpg":48,"./assets/images/projects/b&b_media_fund.png":49,"./assets/images/projects/flashpoint_banner.jpg":50,"./assets/images/projects/saqs-screenshot.png":51,"./assets/mypic.jpg":42};function i(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=45},46:function(e,a,t){e.exports=t.p+"static/media/avatar.728e6b85.svg"},47:function(e,a,t){e.exports=t.p+"static/media/aws-certified-developer-associate.8a4a4b7f.png"},48:function(e,a,t){e.exports=t.p+"static/media/animacard_builder.c3ebf700.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/b&b_media_fund.fe97217f.png"},50:function(e,a,t){e.exports=t.p+"static/media/flashpoint_banner.83d92a32.jpg"},51:function(e,a,t){e.exports=t.p+"static/media/saqs-screenshot.fd30eda3.png"},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){}}]);
//# sourceMappingURL=4.ebb1ae7e.chunk.js.map