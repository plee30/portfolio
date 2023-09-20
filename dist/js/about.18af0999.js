(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0676":function(t,e,a){},"07d5":function(t,e,a){"use strict";var n=a("878b"),i=a.n(n);i.a},"13ab":function(t,e,a){"use strict";var n=a("e1b2"),i=a.n(n);i.a},"1ba2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Resume")]),a("div",{staticClass:"paragraph"},[a("iframe",{attrs:{src:"https://drive.google.com/file/d/1pMJZzAX0_Ze1ODvcrqTOZis53nlBExzp/preview",width:"800",height:"1050",allow:"autoplay"}})]),a("div",{staticStyle:{clear:"both"}})])}],r=(a("13ab"),a("2877")),o={},s=Object(r["a"])(o,n,i,!1,null,"2e4ed5ac",null);e["default"]=s.exports},"1e66":function(t,e,a){"use strict";var n=a("dec8"),i=a.n(n);i.a},"27bb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"projects-list"},[t._l(t.projects,(function(e){return[a("div",{key:e.id,staticClass:"project-item",class:{wide:e.isWide,high:e.isHigh},on:{click:function(a){return t.showDetails(e)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+e.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":e.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[t._v(" "+t._s(e.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:t.showPopup,title:t.popupTitle,htmlContent:t.popupContent,color:t.popupColor},on:{close:function(e){t.showPopup=!1}}})],1)},i=[],r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":t.color}},[a("h1",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"dialog-close",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])])])]):t._e()])},s=[],l=r["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(t){console.log("fetching image "+t)}}}),c=l,h=(a("1e66"),a("2877")),d=Object(h["a"])(c,o,s,!1,null,"e66acff8",null),u=d.exports,p=r["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:u},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(t){this.popupTitle=t.name,this.popupColor=t.accentColor,this.popupContent=t.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),g=p,m=(a("07d5"),Object(h["a"])(g,n,i,!1,null,"637a73a4",null));e["a"]=m.exports},"4d97":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Games")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" The following are some stuff I've made or heavily contributed to. ")]),a("ProjectsList",{attrs:{projects:t.projects}}),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px"}},[t._v(" More on "),a("a",{attrs:{target:"_blank",href:"https://deadfracture.itch.io/"}},[t._v("deadfracture.itch.io")]),t._v("! ")])}],r=a("2b0e"),o=a("27bb"),s=a("983d"),l=[new s["a"]("draftle","Draftle - May 2022","img/projects/draftle/draftle-thumbnail.gif",'\n    <div class="paragraph">\n     <strong>Draftle</strong> is a Wordle clone based on drafts from professional League of Legends matches.\n     <br/>Solo Project, created in May 2022\n    </div>\n    <div class="paragraph center">\n        <img src="https://i.imgur.com/cR6ilPK.gif">\n    </div>\n    <div class="paragraph">\n        About The Game:\n        <ul>\n            <li>League of Legends team composition puzzle.</li>\n            <li>Guess the set of 5 characters in their respective roles. </li>\n            <li>All team compositions are from the 2022 LCS Regular Spring Season.</li>\n            <li>After each guess, the color of the tiles will change to show how close your guess was to the answer.</li>\n        </ul>\n        What I did:\n        <ul>\n            <li>I used HTML, JavaScript, and CSS to code the entirety of this project.</li>\n        </ul>\n    </div>\n    <div class="paragraph">\n        <div class="notice">\n            Playable in the browser on <a href="https://plee30.github.io/draftle/build/index.html" target="_blank">GitHub Pages</a>.\n            Source code is available on <a href="https://github.com/plee30/draftle" target="_blank">GitHub</a>.\n        </div>\n    </div>\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/draftle/img1.png" alt="Draftle Screenshot" />\n        <img class="phone-screenshot" src="img/projects/draftle/img2.png" alt="Draftle Screenshot" />\n    </div>\n    ',"#00ADB5",!0,!0),new s["a"]("combat poker","Combat Poker - January-April 2022","img/projects/combat_poker/thumbnail.gif",'\n    <div class="paragraph">\n        <strong>Combat Poker</strong> is a card-based auto-battler with poker mechanics.\n        <br/>Team Project with Eric Shen, Jacob Yu, Ellen Kim, Christian Rouse, and Cameron Henritzy, created from January-April 2022\n    </div>\n    <div class="paragraph center">\n        <video class="gdriveVideo" preload="auto" controls width="600" height="auto">\n            <source src="https://drive.google.com/uc?export=download&id=1cxaWb_ymIB1wp0MRSo1aTNUgx2xH3hed" type=\'video/mp4\'>\n        </video>\n    </div>\n    <div class="paragraph">\n        About The Game:\n        <ul>\n            <li>One game consists of several rounds.</li>\n            <li>Each round, players build a hand of cards as they bet and put money into the pot, such as in poker.</li>\n            <li>At the end of the betting phase, each player uses the cards in their hand to battle the other players.</li>\n            <li>The player who wins the battle wins the pot, and a new round begins.</li>\n            <li>The game ends once a single player remains.</li>\n            <li>Game built in Godot.</li>\n        </ul>\n        What I did:\n        <ul>\n            <li>I primarily worked as the producer.\n            <li>I set up meetings with our class mentor.\n            <li>I set up and ran weekly team meetings.\n            <li>I managed and mediated communication between team members.\n            <li>I created and maintained a production sheet.\n            <li>I organized play tests.\n            <li>I created the tutorial for the game.\n        </ul>\n    </div>\n    <div class="paragraph">\n        <div class="notice">\n            Windows download available on <a href="https://eshen34.wixsite.com/combat-poker" target="_blank">our website</a>.\n        </div>\n    </div>\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/combat_poker/img1.jpg" alt="Combat Poker Screenshot"/>\n        <img class="pc-screenshot" src="img/projects/combat_poker/img2.png" alt="Combat Poker"/>        \n        <img src="img/projects/combat_poker/img3.png" alt="Draftle Screenshot" width="900" height="auto" alt="Combat Poker"/>\n\n    </div>\n    ',"#471919"),new s["a"]("qoth","Queen of the Hill - November 2021","img/projects/qoth/thumbnail.gif",'\n    <div class="paragraph">\n        <strong>Queen of the Hill</strong> is an original incremental (aka idle) game that is driven by growth and discovery.\n        <br/>Team Project with Milo Fisher, Jared Nolen, Jalen Pastor, William Propp, Alexander Shaham, and Alexis Sanchez, created in November 2021\n    </div>\n    <div class="paragraph center">\n        <img src="img/projects/qoth/thumbnail.gif">\n    </div>\n    <div class="paragraph">\n        About The Game:\n        <ul>\n            <li>Goal is to grow your ant colony to big numbers.</li>\n            <li>Allocate ants to different roles to progress forward.</li>\n            <li>Gain sugar passively through ants and upgrades</li>\n            <li>Use sugar to unlock upgrades</li>\n        </ul>\n        What I did:\n        <ul>\n            <li>I primarily worked as the producer.\n            <li>I helped set up and run team meetings.\n            <li>I created and tested the initial values for gameplay progression (upgrade costs, resource gains, etc.)\n            <li>I helped organize and run playtests.\n            <li>I created and maintained a production sheet.\n        </ul>\n    </div>\n    <div class="paragraph">\n        <div class="notice">\n            Playable in the browser on <a href="https://thedreadnite.itch.io/queen-of-the-hill" target="_blank">itch.io</a>.\n            Source code is available on <a href="https://github.com/MiloFisher/idle-clicker" target="_blank">GitHub</a>.\n        </div>\n    </div>\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="img/projects/qoth/img1.png" alt="Qoth Screenshot"/>\n        <img class="pc-screenshot" src="img/projects/qoth/img2.png" alt="Qoth Screenshot"/>        \n        <img src="https://i.imgur.com/QXlFBZr.gif" alt="Qoth Screenshot" width="600" height="auto"/>\n    </div>\n    ',"#523a3a"),new s["a"]("plonk","Plonk - October 2021","img/projects/plonk/plonk-thumbnail.gif",'\n    <div class="paragraph">\n        <strong>Plonk</strong> is a one-button web game using Kenta Cho\'s <a href="https://github.com/abagames/crisp-game-lib" target="_blank">crisp-game-lib</a>, \n        "a JavaScript library for creating browser games quickly and easily."\n        <br/>Solo Project, created in October 2021\n    </div>\n    <div class="paragraph center">\n        <img src="https://i.imgur.com/hp4gziG.gif" width="800" height="auto">\n    </div>\n    <div class="paragraph">\n        About The Game:\n        <ul>\n        <li>Move the mouse to move the red box. Click any button when the white box overlaps with a target.</li>\n        <li>Successfully hitting target gives points depending on accuracy and time.</li>\n        <li>The game ends once the player successfully hits 20 targets.</li>\n        </ul>\n        What I did:\n        <ul>\n            <li>I used the Crisp Game Library to code the entirety of this project.</li>\n        </ul>\n    </div>\n    <div class="paragraph">\n        <div class="notice">\n            Playable in the browser on <a href="https://deadfracture.itch.io/plonk" target="_blank">itch.io</a>.\n            Source code is available on <a href="https://github.com/plee30/Crisp_Circles" target="_blank">GitHub</a>.\n        </div>\n    </div>\n    <div class="paragraph center">\n        <img class="pc-screenshot" src="img/projects/plonk/cover.png" alt="Plonk Screenshot" />\n    </div>\n    ',"#616161"),new s["a"]("fast food","Fast Food - October 2021","img/projects/fast_food/fast_food-thumbnail.gif",'\n    <div class="paragraph">\n        <strong>Fast Food</strong> is a one-button web game using Kenta Cho\'s <a href="https://github.com/abagames/crisp-game-lib" target="_blank">crisp-game-lib</a>, \n        "a JavaScript library for creating browser games quickly and easily."\n        <br/>Duo Project with Brian Cao, created in October 2021\n    </div>\n    <div class="paragraph center">\n        <img src="https://i.imgur.com/ptiLcmE.gif" width="600" height="auto">\n    </div>\n    <div class="paragraph">\n        About The Game:\n        <ul>\n            <li>Click a patty on the grill once it changes color to plate it.</li>\n            <li>Press and hold the cyan plate, and let go once the blue bar fills up, to serve a patty.</li>\n            <li>Earn points for successfully plating and serving patties.</li>\n            <li>Game ends once a patty stays on the grill too long and overcooks.</li>\n        </ul>\n        What I did:\n        <ul>\n            <li>I used the Crisp Game Library to help create this project.</li>\n            <li>I coded the gameplay of moving the patties from the grill to the plate, as well as serving the patty by interacting with the plate.</li>\n            <li>I helped create and playtest the scoring system & fail condition.</li>\n        </ul>\n    </div>\n    <div class="paragraph">\n        <div class="notice">\n            Playable in the browser on <a href="https://deadfracture.itch.io/fast-food" target="_blank">itch.io</a>.\n            Source code is available on <a href="https://github.com/plee30/Crisp-FastFood" target="_blank">GitHub</a>.\n        </div>\n    </div>\n    ',"#e91e63"),new s["a"]("transport trouble","Transport Trouble - October 2021","img/projects/transport_trouble/fast_food_thumbnail.gif",'\n    <div class="paragraph">\n        <strong>Transport Trouble</strong> is a one-button web game using Kenta Cho\'s <a href="https://github.com/abagames/crisp-game-lib" target="_blank">crisp-game-lib</a>, \n        "a JavaScript library for creating browser games quickly and easily."\n        <br/>Team Project with Brian Cao, Jake Nguyen, Noor Haider, and Pierce Sullivan, created in October 2021\n        </div>\n        <div class="paragraph center">\n            <img src="img/projects/transport_trouble/cover.gif" width="600" height="auto">\n        </div>\n        <div class="paragraph">\n            About The Game:\n            <ul>\n                <li>Tap an input button to move right</li>\n                <li>Press and hold an input button, to move left.</li>\n                <li>Earn points for successfully making it to the other side without hitting a hazard.</li>\n                <li>Game ends once you hit a hazard.</li>\n            </ul>\n            What I did:\n            <ul>\n                <li>I used the Crisp Game Library to help create this project.</li>\n                <li>I helped bug-fix the animation of the hazards bouncing up and down.</li>\n                <li>I implemented an indicator showing when letting go will move the player left.</li>\n            </ul>\n        </div>\n        <div class="paragraph">\n            <div class="notice">\n                Playable in the browser on <a href="https://deadfracture.itch.io/transport-trouble" target="_blank">itch.io</a>.\n                Source code is available on <a href="https://github.com/plee30/Transport_Trouble" target="_blank">GitHub</a>.\n            </div>\n        </div>\n    ',"#ffc107")],c=r["a"].extend({name:"GameProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),h=c,d=a("2877"),u=Object(d["a"])(h,n,i,!1,null,null,null);e["default"]=u.exports},"67f3":function(t,e,a){"use strict";var n=a("ee3f"),i=a.n(n);i.a},"6f47":function(t,e,a){"use strict";var n=a("0676"),i=a.n(n);i.a},"7c58":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Other stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" And here are some other stuff I've made or heavily contributed to, which are totally different than the stuff from earlier. ")]),a("ProjectsList",{attrs:{projects:t.projects}})],1)},i=[],r=a("2b0e"),o=a("27bb"),s=a("983d"),l=[new s["a"]("cqbot","CQBot","https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/177550190/original/0f40ebee9fd42623497cab9db00ec09a61de062a/create-a-twitch-chat-bot-with-your-ideas.jpeg",'\n    <div class="paragraph">\n      <strong>CQBot</strong>, or ChampionsQueue Bot, is a WIP Twitch bot used to integrate information from\n      <a href="https://championsqueue.lolesports.com/en-us/about/">Champions Queue</a> & Riot Games API into Twitch chat.\n      <br/>\n      The bot is currently unavailable due to changes made in how <a href="https://twitter.com/ChampionsQueue">@ChampionsQueue</a> operates.\n      <br/><br/>Solo project, created July-August 2022.\n      <br/>Thumbnail image from <a href="https://www.fiverr.com/printnico/create-a-twitch-chat-bot-with-your-ideas" target="blank">printnico</a>.    \n      </div>\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>!team (username) command to list out players in that player\'s ChampionsQueue game\n            <li>!challenger (region) command to show the Summoner Name & LP of the lowest Challenger player in the region, for the purpose of allowing streamers trying to hit Challenger to know and share an up-to-date LP goal. \n            </ul>\n        </div>\n        <div class="paragraph center">\n          <iframe class="youtube" src="https://www.youtube.com/embed/xA8_HZGzu4k" frameborder="0" allowfullscreen></iframe>\n          <img class="pc-screenshot" src="https://user-images.githubusercontent.com/63633754/182134672-1670d4f6-880c-4f63-a4fd-d7c6b388eaeb.png" alt="CQBot Screenshot" />\n        </div>\n        <div class="notice">\n            Source code is available on <a href="https://github.com/plee30/CQBot" target="_blank">GitHub</a>.\n        </div>\n    ',"#9047ff"),new s["a"]("javaGoap","AI as Herobrine Mod","img/projects/herobrine/thumbnail.png",'\n    <div class="paragraph">\n      <strong>AI as Herobrine</strong> is a Minecraft mod implementing the Herobrine entity with a Goal-Oriented Action Planning AI system.\n      <br/>Team Project with Santiago Ponce, Robert Box, and Naman Bhushan. Created December 2021.\n    </div>\n    <div class="paragraph center">\n      <iframe class="youtube" src="https://www.youtube.com/embed/wmgxXmspOzE" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph">\n      Main features :\n      <ul>\n        <li>Goal was to implement GOAP onto an entity in Minecraft in order to create an AI that constantly hunts the player down.</li>\n        <li>Actions exist as custom AI events provided by Minecraft Forge API.</li>\n        <li>Once a plan is formed, actions are given to Herobrine in decreasing importance so that they run in order.</li>\n        <li>Once an action is finished, it is removed from the task list and the next task on the list can start.</li>\n      </ul>\n      What I did:\n      <ul>\n        <li>I implemented the <a href="https://github.com/ph1387/JavaGOAP" target="_blank">JavaGOAP library</a> to be used with Minecraft\'s API.</li>\n        <li>I created custom actions that could be recognized and used by <a href="https://files.minecraftforge.net/net/minecraftforge/forge/" target="_blank">Minecraft Forge</a>.\n      </ul>\n    </div>',"#47882b"),new s["a"]("mod","Community Moderation","https://www.twitch.tv/creatorcamp/assets/uploads/445x280-thumbnail-cc-moderation-and-safety-final.jpg",'\n    <div class="paragraph">\n      I do <strong>online community moderation</strong> for various streamers & content creators.\n    </div>\n    Thumbnail image from <a href="https://www.twitch.tv/creatorcamp/en/setting-up-your-stream/moderation-and-safety/" target="_blank">Twitch</a>.\n\n    <div class="paragraph">\n      Main Roles:\n      <ul>\n        <li>Currently a Twitch/Discord moderator for \n          <a href="https://twitch.tv/imls target="_blank">LS</a>, \n          <a href="https://twitch.tv/corejj target="_blank">CoreJJ</a>, \n          <a href="https://twitch.tv/olleh target="_blank">Olleh</a>, \n          <a href="https://twitch.tv/shrimp9710 target="_blank">Shrimp</a>, \n          <a href="https://twitch.tv/heokong98 target="_blank">Heokong</a>, \n          <a href="https://twitch.tv/malrang0209 target="_blank">Malrang</a>, and\n          <a href="https://twitch.tv/eddaket target="_blank">Eddaket</a>, \n        </li>\n        <li>Formerly Twitch/Discord/Reddit moderator for <a href="https://www.youtube.com/c/OfflineTVgg" target="_blank">OfflineTV</a> and <a href="https://twitter.com/watchvenn" target="_blank">Venn</a>.\n        <li>Worked in and with different teams to create/enforce community guidelines, organize virtual events, and foster engagement</li>\n        <li>Worked with content creators to create and publish content, ensure compliance with platform guidelines, and grow their online community</li>\n        <li>Minor Korean-to-English live translation for Korean content creators to their English audience</li>\n      </ul>\n    </div>')],c=r["a"].extend({name:"OtherProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),h=c,d=a("2877"),u=Object(d["a"])(h,n,i,!1,null,null,null);e["default"]=u.exports},"878b":function(t,e,a){},"8cdb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"http-404"},[t._v("404 🙈")])},i=[],r=(a("67f3"),a("2877")),o={},s=Object(r["a"])(o,n,i,!1,null,"c64612d2",null);e["default"]=s.exports},"92e7":function(t,e,a){"use strict";var n=a("95ff"),i=a.n(n);i.a},"95ff":function(t,e,a){},"983d":function(t,e,a){"use strict";var n=function(){function t(t,e,a,n,i,r,o){void 0===i&&(i="#000000"),void 0===r&&(r=!1),void 0===o&&(o=!1),this.id=t,this.name=e,this.htmlDescription=n,this.iconUrl=a,this.isHigh=r,this.isWide=o,this.accentColor=i}return t}();e["a"]=n},b8fa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[t._v("I'm looking for a job !"),a("br"),t._v("Feel free to contact me about any opportunity, or just to chat about video games, esports, or anything else!")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-user-circle-o fa-lg fa-fw"}),a("a",{attrs:{href:"http://leepaul.xyz",target:"_blank"}},[t._v("https://leepaul.xyz")])]),a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:leepaul99@gmail.com",target:"_blank"}},[t._v("leepaul99@gmail.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/in/paullee99",target:"_blank"}},[t._v("linkedin.com/in/paullee99")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/plee30",target:"_blank"}},[t._v("github.com/plee30")])]),a("li",[a("i",{staticClass:"fa fa-gamepad fa-lg fa-fw"}),a("a",{attrs:{href:"https://deadfracture.itch.io",target:"_blank"}},[t._v("deadfracture.itch.io")])]),a("li",[a("i",{staticClass:"fa fa-twitch fa-lg fa-fw"}),a("a",{attrs:{href:"https://twitch.tv/deadfracture",target:"_blank"}},[t._v("twitch.tv/deadfracture")])]),a("li",[a("i",{staticClass:"fa fa-twitter fa-lg fa-fw"}),a("a",{attrs:{href:"https://twitter.com/DeadFracture_",target:"_blank"}},[t._v("twitter.com/DeadFracture_")])])])])}],r=(a("6f47"),a("2877")),o={},s=Object(r["a"])(o,n,i,!1,null,"93873bc0",null);e["default"]=s.exports},dec8:function(t,e,a){},e1b2:function(t,e,a){},ee3f:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[t._v("Hello!")]),a("div",{staticClass:"paragraph"},[t._m(0),t._v(" "),a("br"),a("div",{staticStyle:{"margin-top":"20px"}},[t._v("If you want to see what I've done, you can check out my "),a("router-link",{attrs:{to:"/game-projects"}},[t._v("games")]),t._v(", my "),a("router-link",{attrs:{to:"/other-projects"}},[t._v("non-games projects")]),t._v(", or my "),a("router-link",{attrs:{to:"/resume"}},[t._v("resume")]),t._v("!")],1),a("div",{staticStyle:{"margin-top":"40px"}},[t._v("I'm "),a("strong",[t._v("currently looking for work")]),t._v(" in software development and/or game design! Although I'm a programmer at heart, I also love working with people and helping them reach and surpass their goals! You can reach me at "),a("a",{attrs:{href:"mailto:leepaul99@gmail.com"}},[t._v("leepaul99@gmail.com")]),t._v(" or "),a("router-link",{attrs:{to:"/contact"}},[t._v("through here")]),t._v(". ")],1)]),t._m(1),a("div",{staticStyle:{clear:"both"}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" I'm "),a("strong",[t._v("Paul Lee")]),t._v(". "),a("br"),a("br"),t._v(" I graduated from the University of California, Santa Cruz in June of 2022, where I received a B.S. in Computer Science: Computer Game Design. During my time at UCSC, I learned how to program, how to design and create games, and how to work on short-term and long-term projects with a team of people! "),a("br"),a("br"),t._v(" Most recenlty, I've had the opportunity to work as an WOARior (external contractor) at Riot Games as an Encoding Operator, working for the encoding team for live esports broadcasts! I've also interned as a Quality Assurance Tester at Activision in 2016 and 2017, where I worked on Call of Duty: WWII & Call of Duty: Infinite Warfare! "),a("br"),a("br"),t._v(" Aside from making games, I love learning speedruns, watching esports, connecting with communities, and doing community management for streamers on Twitch! ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar.png",alt:"Avatar of Paul"}})])}],r=(a("92e7"),a("2877")),o={},s=Object(r["a"])(o,n,i,!1,null,"164f056a",null);e["default"]=s.exports}}]);
//# sourceMappingURL=about.18af0999.js.map