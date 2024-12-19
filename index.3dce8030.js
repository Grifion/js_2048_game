!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=Array(e);r<e;r++)s[r]=t[r];return s}var e,r={};function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n=function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.INITIAL_STATE;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.status=e.STATUS.idle,this.initialState=t,this.score=0,this.state=this.initialState.map(function(t){return t.slice()})}return t=[{key:"moveLeft",value:function(){if(this.status===e.STATUS.playing){for(var t=[],r=0;r<this.state.length;r++){for(var s=this.state[r].filter(function(t){return t>0}),n=s.length;n<this.state.length;n++)s.push(0);for(var i=0;i<s.length;i++)s[i]===s[i+1]&&(s[i]=s[i]+s[i+1],s[i+1]=0,this.score+=s[i]+s[i+1]);s=s.filter(function(t){return t>0});for(var a=s.length;a<this.state.length;a++)s.push(0);t.push(s)}this.checkSameArr(t)||(this.state=t,this.randomNumber()),this.loseOrWin()}}},{key:"moveRight",value:function(){if(this.status===e.STATUS.playing){for(var t=[],r=0;r<this.state.length;r++){for(var s=this.state[r].filter(function(t){return t>0}),n=s.length;n<this.state.length;n++)s.unshift(0);for(var i=s.length-1;i>0;i--)s[i]===s[i-1]&&(s[i]=s[i]+s[i-1],s[i-1]=0,this.score+=s[i]+s[i-1]);s=s.filter(function(t){return t>0});for(var a=s.length;a<this.state.length;a++)s.unshift(0);t.push(s)}this.checkSameArr(t)||(this.state=t,this.randomNumber()),this.loseOrWin()}}},{key:"moveUp",value:function(){if(this.status===e.STATUS.playing){var t=[];this.funcReverse(t),this.state=t,t=[],this.moveLeft(),this.funcReverse(t),this.state=t}}},{key:"moveDown",value:function(){if(this.status===e.STATUS.playing){var t=[];this.funcReverse(t),this.state=t,t=[],this.moveRight(),this.funcReverse(t),this.state=t}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"restart",value:function(){this.initialState=e.INITIAL_STATE,this.status=e.STATUS.idle,this.state=this.initialState.map(function(t){return t.slice()}),this.score=0}},{key:"start",value:function(){this.status=e.STATUS.playing,this.randomNumber(),this.randomNumber()}},{key:"randomNumber",value:function(){for(var t=[],e=0;e<this.state.length;e++)for(var r=0;r<this.state[e].length;r++)0===this.state[e][r]&&t.push({row:e,col:r});if(0!==t.length){var s=Math.floor(Math.random()*t.length),n=t[s],i=n.row,a=n.col,o=Math.floor(10*Math.random())+1>8?4:2;this.state[i][a]=o}}},{key:"loseOrWin",value:function(){for(var t=!1,r=!1,s=0;s<this.state.length;s++)for(var n=0;n<this.state[s].length;n++){if(2048===this.state[s][n]){this.status=e.STATUS.win;return}0===this.state[s][n]&&(t=!0),n<this.state[s].length-1&&this.state[s][n]===this.state[s][n+1]&&(r=!0),s<this.state.length-1&&this.state[s][n]===this.state[s+1][n]&&(r=!0)}t||r||(this.status=e.STATUS.lose)}},{key:"checkSameArr",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(Array.isArray(t[r])&&Array.isArray(e[r])){if(!this.checkSameArr(t[r],e[r]))return!1}else if(t[r]!==e[r])return!1;return!0}},{key:"funcReverse",value:function(t){for(var e=0;e<this.state.length;e++){for(var r=[],s=0;s<this.state[e].length;s++)r.push(this.state[s][e]);t.push(r)}}}],function(t,e){for(var r=0;r<e.length;r++){var s=e[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}(e.prototype,t),e}();s(n,"STATUS",{idle:"idle",playing:"playing",win:"win",lose:"lose"}),s(n,"INITIAL_STATE",[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);var i=new(r=n),a=document.querySelector(".start"),o=document.querySelector(".game-score"),l=function(e){if(Array.isArray(e))return t(e)}(e=document.querySelectorAll(".field-row"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var s=Object.prototype.toString.call(e).slice(8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),h=document.querySelector(".message-start"),u=document.querySelector(".message-lose"),c=document.querySelector(".message-win");function f(t){for(var e=0;e<l.length;e++)for(var r=0;r<l[e].children.length;r++)l[e].children[r].textContent="",l[e].children[r].className="field-cell",t[e][r]>0&&(l[e].children[r].textContent=t[e][r],l[e].children[r].className="field-cell field-cell--".concat(t[e][r]))}a.addEventListener("click",function(){a.classList.contains("start")?(a.textContent="Restart",a.classList.remove("start"),a.classList.add("restart"),i.start(),f(i.getState()),o.textContent=i.getScore(),h.classList.add("hidden")):(a.textContent="Start",a.classList.remove("restart"),a.classList.add("start"),i.restart(),f(i.getState()),o.textContent=i.getScore(),h.classList.remove("hidden")),u.classList.add("hidden")}),document.addEventListener("keydown",function(t){var e;switch(t.key){case"ArrowUp":i.moveUp();break;case"ArrowDown":i.moveDown();break;case"ArrowLeft":i.moveLeft();break;case"ArrowRight":i.moveRight()}f(i.getState()),o.textContent=i.getScore(),(e=i.getStatus())===r.STATUS.lose&&u.classList.remove("hidden"),e===r.STATUS.win&&c.classList.remove("hidden")})}();
//# sourceMappingURL=index.3dce8030.js.map