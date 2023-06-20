(()=>{"use strict";var r={352:(r,n,e)=>{e.d(n,{Z:()=>i});var o=e(537),t=e.n(o),a=e(645),A=e.n(a)()(t());A.push([r.id,"body{background-color:#fff}.main-container{display:flex;justify-content:space-around;padding:10px}.recent-scores{width:50%}.scores-container{border:2px solid #000}.heading3{color:gray;font-size:28px}.content{display:flex;align-items:center;gap:30px}#refresh{height:25px;border:2px solid #000;background-color:#fff;cursor:pointer}#refresh:hover{color:#fff;background-color:gray;border:none}.score{background-color:#fff;padding:5px 5px;text-transform:capitalize;font-weight:bolder;letter-spacing:1px;line-height:20px}.score:nth-child(odd){background-color:#b9b1b1}#form{display:flex;flex-direction:column;width:400px}#form input{width:100%;padding:7px;margin-top:10px;border-radius:5px;font-size:15px;text-transform:capitalize}#submit{background-color:#fff;padding:5px;width:20%;margin:5px 40%;border-radius:5px;font-size:18px;cursor:pointer}#submit:hover{color:#fff;background-color:gray;border:none}","",{version:3,sources:["webpack://./src/styles/styles.css"],names:[],mappings:"AAAA,KACE,qBAAA,CAGF,gBACE,YAAA,CACA,4BAAA,CACA,YAAA,CAGF,eACE,SAAA,CAGF,kBACE,qBAAA,CAGF,UACE,UAAA,CACA,cAAA,CAGF,SACE,YAAA,CACA,kBAAA,CACA,QAAA,CAGF,SACE,WAAA,CACA,qBAAA,CACA,qBAAA,CACA,cAAA,CAGF,eACE,UAAA,CACA,qBAAA,CACA,WAAA,CAGF,OACE,qBAAA,CACA,eAAA,CACA,yBAAA,CACA,kBAAA,CACA,kBAAA,CACA,gBAAA,CAGF,sBACE,wBAAA,CAGF,MACE,YAAA,CACA,qBAAA,CACA,WAAA,CAGF,YACE,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,cAAA,CACA,yBAAA,CAGF,QACE,qBAAA,CACA,WAAA,CACA,SAAA,CACA,cAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CAGF,cACE,UAAA,CACA,qBAAA,CACA,WAAA",sourcesContent:["body {\r\n  background-color: white;\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding: 10px;\r\n}\r\n\r\n.recent-scores {\r\n  width: 50%;\r\n}\r\n\r\n.scores-container {\r\n  border: 2px solid black;\r\n}\r\n\r\n.heading3 {\r\n  color: gray;\r\n  font-size: 28px;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 30px;\r\n}\r\n\r\n#refresh {\r\n  height: 25px;\r\n  border: 2px solid black;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n#refresh:hover {\r\n  color: white;\r\n  background-color: gray;\r\n  border: none;\r\n}\r\n\r\n.score {\r\n  background-color: white;\r\n  padding: 5px 5px;\r\n  text-transform: capitalize;\r\n  font-weight: bolder;\r\n  letter-spacing: 1px;\r\n  line-height: 20px;\r\n}\r\n\r\n.score:nth-child(odd) {\r\n  background-color: rgb(185, 177, 177);\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 400px;\r\n}\r\n\r\n#form input {\r\n  width: 100%;\r\n  padding: 7px;\r\n  margin-top: 10px;\r\n  border-radius: 5px;\r\n  font-size: 15px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#submit {\r\n  background-color: white;\r\n  padding: 5px;\r\n  width: 20%;\r\n  margin: 5px 40%;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n#submit:hover {\r\n  color: white;\r\n  background-color: gray;\r\n  border: none;\r\n}\r\n"],sourceRoot:""}]);const i=A},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var A={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var s=0;s<r.length;s++){var d=[].concat(r[s]);o&&A[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),n.push(d))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var a={},A=[],i=0;i<r.length;i++){var c=r[i],s=o.base?c[0]+o.base:c[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=e(p),l={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(l);else{var f=t(l,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}A.push(p)}return A}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var A=0;A<a.length;A++){var i=e(a[A]);n[i].references--}for(var c=o(r,t),s=0;s<a.length;s++){var d=e(a[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={id:o,exports:{}};return r[o](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),o=e(795),t=e.n(o),a=e(569),A=e.n(a),i=e(565),c=e.n(i),s=e(216),d=e.n(s),p=e(589),u=e.n(p),l=e(352),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=A().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),n()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals;var C,h=document.querySelector(".scores-container");C="",[{name:"manzi",scores:12},{name:"Tresor",scores:15},{name:"saphir",scores:25},{name:"Umutesi",scores:25}].forEach((function(r){setTimeout((function(){C+='\n    <div class="score">'.concat(r.name,":").concat(r.scores,"</div>\n    "),h.innerHTML=C}),1e3)}))})()})();
//# sourceMappingURL=bundle8b8d06f237167074df36.js.map