parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ia9I":[function(require,module,exports) {
var e=document.querySelector(".longshan"),t=document.querySelector(".park"),o=document.querySelector(".underground"),s=document.querySelector(".toggle"),a=document.querySelector("#longshantext"),r=document.querySelector("#parktext"),n=document.querySelector(".templeplay"),l=document.querySelector(".parkplay"),i=0;function h(){0===i?(i=1,s.textContent="Night",a.textContent="At night, often the temple is still filled with people worshipping. As the ambiance outside dies down, those inside also become much more quiet. At around 9:30, the guards slowly moves towards the metal gates to lock it up. The clanging of metal chains ring out in the rather empty front yard, signaling a day's end.",r.textContent="As the still turns dark, chess players and the lottery crowd pack up their gear. Still, people scatter around the park eating, drinking and chatting into the night. At around 9pm, homeless people planning on staying the night would roll out their sleeping bags and get ready to sleep. The bustling of the park gradually dies down as others come home to rest.",n.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038240727&color=%23161714&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"),l.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038240703&color=%23161714&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")):(i=0,s.textContent="Day",a.textContent="Longshan temple bustles during the day. Thousands of visitors from nearby or overseas cram inside the temple. Upon entering the gates, the waterfall and its white-noise-like sonic texture blocks away outside rumble and sets the tranquil atmosphere inside the temple. On each morning and afternoon, the monks lead a scripture reciting session. The recurring, monotounous sound of the monks blend with the less in sync recitations by other worshippers, no one else would speak a word. In other moments, people socialize, pray and (always) throw divination blocks to seek answer from the above: either yes, no, or in between.",r.textContent="Right across from the temple facing guangzhou street is Bangka Park. It was designed to synergize with Longshan Temple, and together revitalize the district's atmosphere and attractiveness. Before long, it became one of few gathering spots for the homeless population in Taipei City. Though some might find it dangerous or unpleasant, the park is in fact bustling with activities that attract people from all walks of life. During day time, people come and play chess, chat and (very enthusiastically) talk about which lottery number to go for. Some buy food and drinks from nearby and stay for the entire day. Others walk around and greet familiar faces in each part of the park. From the afternoon, a water show takes place in the central plaza every hour.",n.setAttribute("src","https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1038240772&color=%23161714&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"),l.setAttribute("src","hhttps://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/988074154%3Fsecret_token%3Ds-uqCwo457U3L&color=%23341c34&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")),e.classList.toggle("night"),t.classList.toggle("night"),o.classList.toggle("night"),s.classList.toggle("night")}s.addEventListener("click",h);
},{}]},{},["ia9I"], null)
//# sourceMappingURL=/context-darkmode.29ff82d9.js.map