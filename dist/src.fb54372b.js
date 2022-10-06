parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"pkQ8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapDirection=exports.default=void 0;var _="\n____________________________________\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb__\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb__\n_bbw______________aa____________bb__\n_bbw______________aappppppppppa_bb__\n_bbw______________aappppppppppaaaaaS\n_bbw______________aappppppppppaaaaaE\n_bbw______________aa________________\n_bbw__ooooooooooooaa________________\n_bbw__ooooooooooooaa________________\n_bbw__ooooooooooooaa________________\n_bbw__ooooooooooooaa________________\n_bbw__ooooooooooooaa________________\n_bbw__ooooooooooooaa________________\n_bbw__ooooooooooooaa________________\n_bbw__ooooooooooooaa________________\n_bbwwwooooooooooooaa________________\n_bbappoooopppppppoaa________________\n_bbappoooopppppppoaa________________\n_bbappooooooooooaaaa___pppppp_______\n_bbwwwooooooooooooaa___pppppp_______\n_bbwwwoooooooooooXaaaaaaaaaaaaaaaaaS\n_bbwwwooooooooooooaaaaaaaaaaaaaaaaaE\n_bbwwwooooooooooooaa___pppppp_______\n_bbwwwooooooooooooaa________________\n_bbaaa____________aa________________\n_bbaaaaaaaaaaaaaaaaaa_______________\n_bbaaaaaaaaaaaaaaaaaa_______________\n_bbw_____________aaaaa______________\n_bbw______________aaaaa_____________\n_bbw______________aaaaa_____________\n_bbw________________________________\n_bbw________________________________\n_bbw________________________________\n_bbw________________________________\n_ESw________________________________\n",a="\n____________________________________\nwawwwwwwwwwwwwwwwwaawwwwwwwwwwwwwa__\neaaeeeeeeeeeeeeeeeaaeeeeeeeeeeeean__\n_sna______________sn____________sn__\n_sna______________aahhhhhhhhhha_sn__\n_sna______________aahhhhhhhhhhaaaaaa\n_sna______________aahhhhhhhhhhaaaaaa\n_sna______________sn________________\n_sna______________sn________________\n_sna______________sn________________\n_sna______________sn________________\n_sna______________sn________________\n_sna______________sn________________\n_sna______________sn________________\n_sna______________sn________________\n_sna______________sn________________\n_aaaaa____________sn________________\n_aaahh____hhhhhha_sn________________\n_aaahh____hhhhhha_sn________________\n_aaahh__________aaaa___vvvvvv_______\n_snaaa____________sn___vvvvvv_______\n_snaaa___________aaawwwaaaaaawwwwwwa\n_snaaa____________aaeeeaaaaaaeeeeeea\n_snaaa____________sn___vvvvvv_______\n_snaaa____________sn________________\n_snaaa____________sn________________\n_aaawwwwwwwwwwwwwwana_______________\n_aaaeeeeeeeeeeeeeeeaa_______________\n_sna_____________aaaaa______________\n_sna______________aaaaa_____________\n_sna______________aaaaa_____________\n_sna________________________________\n_sna________________________________\n_sna________________________________\n_sna________________________________\n_aaa________________________________\n";exports.mapDirection=a;var o=_;exports.default=o;
},{}],"AXpv":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=8,r=function(){function t(n,i,r,a,l){e(this,t),this.type=i,this.x=r,this.y=a,this.agents=[],this.bikes=0,this.allowed_direction=l}return n(t,[{key:"checkAddAgent",value:function(e){return"SPAWN"===this.type||("BUILDING_ENTRANCE"===this.type&&"PEDESTRIAN"===e.type||!("BIKE"===e.type&&this.agents.filter(function(e){return"BIKE"===e.type}).length>=2)&&(!("PEDESTRIAN"===e.type&&this.agents.filter(function(e){return"PEDESTRIAN"===e.type}).length>=3)&&(!("BIKE"===e.type&&this.agents.filter(function(e){return"PEDESTRIAN"===e.type}).length>=2)&&!("PEDESTRIAN"===e.type&&this.agents.filter(function(e){return"BIKE"===e.type}).length>=3))))}},{key:"addAgent",value:function(e){this.agents.push(e)}},{key:"removeAgent",value:function(e){this.agents=this.agents.filter(function(t){return t!==e})}},{key:"canPark",value:function(){return"PARKING"===this.type&&this.bikes<i}},{key:"addBike",value:function(){this.bikes++}},{key:"removeBike",value:function(){this.bikes--}},{key:"draw",value:function(e,t,n,r){var a=this,l=t*r,f=n*r,s="#fefefe";if(s=this.getCellColor(s),e.fillStyle=s,e.fillRect(l,f,r,r),"PARKING"===this.type&&(e.fillStyle="#ffffff",e.fillRect(l+2,f+r-8,r-4,4),e.fillStyle="#316cf4",e.fillRect(l+2,f+r-8,(r+4)*(this.bikes/i),4)),"BUILDING_ENTRANCE"===this.type)e.fillStyle="#000000",e.font="12px monospace",e.fillText(""+this.agents.filter(function(e){return"PEDESTRIAN"===e.type}).length,l+2,f+24);else{var c=this.agents.filter(function(e){return"BIKE"===e.type}),u=this.agents.filter(function(e){return"PEDESTRIAN"===e.type});c.length>0?(c.forEach(function(i,l){a.drawBike(e,t*r+10*l,n*r)}),u.length>0&&u.forEach(function(i,l){a.drawPedestrian(e,t*r+10,n*r+10*l)})):u.length>0&&u.forEach(function(i,l){l<2?a.drawPedestrian(e,t*r+10*l,n*r):a.drawPedestrian(e,t*r+5,n*r+10)})}}},{key:"getCellColor",value:function(e){switch(this.type){case"SPAWN":e="#e7b1b6";break;case"BIKE_PATH":e="#f3d8da";break;case"PEDESTRIAN_PATH":e="#eaecef";break;case"ALL_PATH":e="#cfd4d9";break;case"PARKING":e="#aeb5bc";break;case"EMPTY":e="#d5e6de";break;case"BUILDING":e="#a6c4f9";break;case"BUILDING_ENTRANCE":e="#7ba6f7";break;case"EXIT":e="#e7b1b6"}return e}},{key:"drawBike",value:function(e,t,n){e.fillStyle="#222529",e.fillRect(t+6,n+2,5,20)}},{key:"drawPedestrian",value:function(e,t,n){e.fillStyle="#fd7e14",e.fillRect(t+6,n+2,5,5)}}]),t}(),a=r;exports.default=a;
},{}],"Ikhp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./index");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var s=function(){function a(t,i,s,h){e(this,a),this.world=t,this.type=i,this.spawn=s,this.cell=s,this.parked_cell=null,this.strategy=h,this.move_to=null,this.incoming=!0,this.lotPref=null,this.path=null,this.calculatingPath=!1,this.stage="ENTERING",this.ticks=0,this.ticks_to_parked=null,this.ticks_to_goal=null}return i(a,[{key:"getPathfinder",value:function(){return"BIKE"===this.type?this.world.bikePathfinder:this.world.pedestrianPathfinder}},{key:"hasParked",value:function(){this.ticks_to_parked=this.ticks,(0,t.addTimeToPark)(this.strategy,this.ticks_to_parked)}},{key:"hasReachedGoal",value:function(){this.ticks_to_goal=this.ticks,(0,t.addTimeToGoal)(this.strategy,this.ticks_to_goal)}},{key:"park",value:function(){return!(!this.cell.canPark()||"BIKE"!==this.type||"PARKING"!==this.cell.type||null!==this.parked_cell)&&(this.parked_cell=this.cell,this.type="PEDESTRIAN",this.cell.addBike(),this.hasParked(),!0)}},{key:"unpark",value:function(){"PEDESTRIAN"===this.type&&"PARKING"===this.cell.type&&null!==this.parked_cell&&(this.cell.removeBike(),this.parked_cell=null,this.type="BIKE")}},{key:"changeMoveTo",value:function(t,e,a){var i=this;this.calculatingPath=!0,this.move_to=[t,e],this.path=null;var s=this.getPathfinder();s.findPath(this.cell.x,this.cell.y,this.move_to[0],this.move_to[1],function(t){null!==t?i.path=t:console.log("Agent has no way to reach its goal"),i.calculatingPath=!1,a&&null!==t&&a()}),s.calculate()}},{key:"makeMove",value:function(t){t.checkAddAgent(this)&&(this.world.moveAgent(this,t),this.path.shift())}},{key:"exiting",value:function(){var t=this;this.changeMoveTo(this.spawn.x,this.spawn.y,function(){t.stage="MOVING_TO_EXIT"})}},{key:"moveParkingLot",value:function(){if(0==this.calculatingPath&&null!==this.path&&this.path.length>0){var t=this.world.getCellAtCoordinates(this.path[0].x,this.path[0].y);this.makeMove(t)}else 1==this.incoming?this.stage="PARKING":this.stage="UNPARKING"}},{key:"parking",value:function(){this.park()?this.stage="LEAVING_PARKING":console.log("Could not park")}},{key:"leavingParkingLot",value:function(){var t=this,e=this.world.getRandomCellOfType("BUILDING_ENTRANCE");this.changeMoveTo(e.x,e.y,function(){t.stage="MOVING_TO_GOAL"})}},{key:"moveToGoal",value:function(){if(0==this.calculatingPath&&null!==this.path&&this.path.length>0){var t=this.world.getCellAtCoordinates(this.path[0].x,this.path[0].y);this.makeMove(t)}else this.stage="IN_GOAL",this.hasReachedGoal()}},{key:"inGoal",value:function(){Math.random()<.01&&(this.stage="LEAVING_GOAL",this.incoming=!1)}},{key:"leavingGoal",value:function(){var t=this;this.changeMoveTo(this.parked_cell.x,this.parked_cell.y,function(){t.stage="MOVING_TO_PARKING_LEAVING"})}},{key:"default",value:function(){var t=this;switch(this.stage){case"ENTERING":var e=this.world.getRandomCellOfType("PARKING");this.changeMoveTo(e.x,e.y,function(){t.stage="MOVING_TO_PARKING_ENTERING"});break;case"MOVING_TO_PARKING_ENTERING":this.moveParkingLot();break;case"PARKING":this.parking();break;case"LEAVING_PARKING":this.leavingParkingLot();break;case"MOVING_TO_GOAL":this.moveToGoal();break;case"IN_GOAL":this.inGoal();break;case"LEAVING_GOAL":this.leavingGoal();break;case"MOVING_TO_PARKING_LEAVING":this.moveParkingLot();break;case"UNPARKING":this.unpark(),this.stage="LEAVING";break;case"LEAVING":this.changeMoveTo(this.spawn.x,this.spawn.y,function(){t.stage="MOVING_TO_EXIT"});break;case"MOVING_TO_EXIT":if(0==this.calculatingPath&&null!==this.path&&this.path.length>0){var a=this.world.getCellAtCoordinates(this.path[0].x,this.path[0].y);this.makeMove(a)}else this.stage="EXITED";break;case"EXITED":this.world.removeAgent(this);break;default:console.log("Unknown stage: ",this.stage)}}},{key:"parkingLotPreference",value:function(){var t=this;switch(this.stage){case"ENTERING":this.changeMoveTo(19,5,function(){t.stage="MOVING_TO_PARKING_ENTERING"});break;case"MOVING_TO_PARKING_ENTERING":this.moveParkingLot(),"top"==this.lotPref&&this.changeMoveTo(Math.floor(10*Math.random())+20,Math.floor(3*Math.random())+4),this.strategy;break;default:console.log("NO STAGE")}}},{key:"act",value:function(){this.ticks+=1,"DEFAULT"==this.strategy?this.default():"PARKING_LOT_PREFERENCE"==this.strategy?this.parkingLotPreference():console.log("Unknown strategy: ",this.strategy)}}]),a}(),h=s;exports.default=h;
},{"./index":"H99C"}],"RwqI":[function(require,module,exports) {
module.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList};
},{}],"vH9K":[function(require,module,exports) {
module.exports=function(t,s,i,e,o){this.parent=t,this.x=s,this.y=i,this.costSoFar=e,this.simpleDistanceToTarget=o,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}};
},{}],"DPxs":[function(require,module,exports) {
var define;
var t;(function(){var n,e,o,r,p,u,i,s,l,c,h,f,a,y,d,g,v;o=Math.floor,c=Math.min,e=function(t,n){return t<n?-1:t>n?1:0},l=function(t,n,r,p,u){var i;if(null==r&&(r=0),null==u&&(u=e),r<0)throw new Error("lo must be non-negative");for(null==p&&(p=t.length);r<p;)u(n,t[i=o((r+p)/2)])<0?p=i:r=i+1;return[].splice.apply(t,[r,r-r].concat(n)),n},u=function(t,n,o){return null==o&&(o=e),t.push(n),y(t,0,t.length-1,o)},p=function(t,n){var o,r;return null==n&&(n=e),o=t.pop(),t.length?(r=t[0],t[0]=o,d(t,0,n)):r=o,r},s=function(t,n,o){var r;return null==o&&(o=e),r=t[0],t[0]=n,d(t,0,o),r},i=function(t,n,o){var r;return null==o&&(o=e),t.length&&o(t[0],n)<0&&(n=(r=[t[0],n])[0],t[0]=r[1],d(t,0,o)),n},r=function(t,n){var r,p,u,i,s,l;for(null==n&&(n=e),s=[],p=0,u=(i=function(){l=[];for(var n=0,e=o(t.length/2);0<=e?n<e:n>e;0<=e?n++:n--)l.push(n);return l}.apply(this).reverse()).length;p<u;p++)r=i[p],s.push(d(t,r,n));return s},a=function(t,n,o){var r;if(null==o&&(o=e),-1!==(r=t.indexOf(n)))return y(t,0,r,o),d(t,r,o)},h=function(t,n,o){var p,u,s,l,c;if(null==o&&(o=e),!(u=t.slice(0,n)).length)return u;for(r(u,o),s=0,l=(c=t.slice(n)).length;s<l;s++)p=c[s],i(u,p,o);return u.sort(o).reverse()},f=function(t,n,o){var u,i,s,h,f,a,y,d,g;if(null==o&&(o=e),10*n<=t.length){if(!(s=t.slice(0,n).sort(o)).length)return s;for(i=s[s.length-1],h=0,a=(y=t.slice(n)).length;h<a;h++)o(u=y[h],i)<0&&(l(s,u,0,null,o),s.pop(),i=s[s.length-1]);return s}for(r(t,o),g=[],f=0,d=c(n,t.length);0<=d?f<d:f>d;0<=d?++f:--f)g.push(p(t,o));return g},y=function(t,n,o,r){var p,u,i;for(null==r&&(r=e),p=t[o];o>n&&r(p,u=t[i=o-1>>1])<0;)t[o]=u,o=i;return t[o]=p},d=function(t,n,o){var r,p,u,i,s;for(null==o&&(o=e),p=t.length,s=n,u=t[n],r=2*n+1;r<p;)(i=r+1)<p&&!(o(t[r],t[i])<0)&&(r=i),t[n]=t[r],r=2*(n=r)+1;return t[n]=u,y(t,s,n,o)},n=function(){function t(t){this.cmp=null!=t?t:e,this.nodes=[]}return t.push=u,t.pop=p,t.replace=s,t.pushpop=i,t.heapify=r,t.updateItem=a,t.nlargest=h,t.nsmallest=f,t.prototype.push=function(t){return u(this.nodes,t,this.cmp)},t.prototype.pop=function(){return p(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return s(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return i(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return r(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return a(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var n;return(n=new t).nodes=this.nodes.slice(0),n},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),g=this,v=function(){return n},"function"==typeof t&&t.amd?t([],v):"object"==typeof exports?module.exports=v():g.Heap=v()}).call(this);
},{}],"tAIw":[function(require,module,exports) {
module.exports=require("./lib/heap");
},{"./lib/heap":"DPxs"}],"uR5w":[function(require,module,exports) {
var t={},n=require("./instance"),i=require("./node"),e=require("heap");const o=0,r=1;module.exports=t;var s=1;t.js=function(){var o,r,a,l=!1,u={},f={},h={},c={},d=!0,T={},v=[],y=Number.MAX_VALUE,x=!1;this.setAcceptableTiles=function(t){t instanceof Array?a=t:!isNaN(parseFloat(t))&&isFinite(t)&&(a=[t])},this.enableSync=function(){l=!0},this.disableSync=function(){l=!1},this.enableDiagonals=function(){x=!0},this.disableDiagonals=function(){x=!1},this.setGrid=function(t){o=t;for(var n=0;n<o.length;n++)for(var i=0;i<o[0].length;i++)f[o[n][i]]||(f[o[n][i]]=1)},this.setTileCost=function(t,n){f[t]=n},this.setAdditionalPointCost=function(t,n,i){void 0===h[n]&&(h[n]={}),h[n][t]=i},this.removeAdditionalPointCost=function(t,n){void 0!==h[n]&&delete h[n][t]},this.removeAllAdditionalPointCosts=function(){h={}},this.setDirectionalCondition=function(t,n,i){void 0===c[n]&&(c[n]={}),c[n][t]=i},this.removeAllDirectionalConditions=function(){c={}},this.setIterationsPerCalculation=function(t){y=t},this.avoidAdditionalPoint=function(t,n){void 0===u[n]&&(u[n]={}),u[n][t]=1},this.stopAvoidingAdditionalPoint=function(t,n){void 0!==u[n]&&delete u[n][t]},this.enableCornerCutting=function(){d=!0},this.disableCornerCutting=function(){d=!1},this.stopAvoidingAllAdditionalPoints=function(){u={}},this.findPath=function(t,i,r,u,f){var h=function(t){l?f(t):setTimeout(function(){f(t)})};if(void 0===a)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(void 0===o)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(t<0||i<0||r<0||u<0||t>o[0].length-1||i>o.length-1||r>o[0].length-1||u>o.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(t!==r||i!==u){for(var c=o[u][r],d=!1,y=0;y<a.length;y++)if(c===a[y]){d=!0;break}if(!1!==d){var x=new n;x.openList=new e(function(t,n){return t.bestGuessDistance()-n.bestGuessDistance()}),x.isDoneCalculating=!1,x.nodeHash={},x.startX=t,x.startY=i,x.endX=r,x.endY=u,x.callback=h,x.openList.push(P(x,x.startX,x.startY,null,1));var p=s++;return T[p]=x,v.push(p),p}h(null)}else h([])},this.cancelPath=function(t){return t in T&&(delete T[t],!0)},this.calculate=function(){if(0!==v.length&&void 0!==o&&void 0!==a)for(r=0;r<y;r++){if(0===v.length)return;l&&(r=0);var t=v[0],n=T[t];if(void 0!==n)if(0!==n.openList.size()){var i=n.openList.pop();if(n.endX!==i.x||n.endY!==i.y)i.list=0,i.y>0&&p(n,i,0,-1,1*b(i.x,i.y-1)),i.x<o[0].length-1&&p(n,i,1,0,1*b(i.x+1,i.y)),i.y<o.length-1&&p(n,i,0,1,1*b(i.x,i.y+1)),i.x>0&&p(n,i,-1,0,1*b(i.x-1,i.y)),x&&(i.x>0&&i.y>0&&(d||g(o,a,i.x,i.y-1,i)&&g(o,a,i.x-1,i.y,i))&&p(n,i,-1,-1,1.4*b(i.x-1,i.y-1)),i.x<o[0].length-1&&i.y<o.length-1&&(d||g(o,a,i.x,i.y+1,i)&&g(o,a,i.x+1,i.y,i))&&p(n,i,1,1,1.4*b(i.x+1,i.y+1)),i.x<o[0].length-1&&i.y>0&&(d||g(o,a,i.x,i.y-1,i)&&g(o,a,i.x+1,i.y,i))&&p(n,i,1,-1,1.4*b(i.x+1,i.y-1)),i.x>0&&i.y<o.length-1&&(d||g(o,a,i.x,i.y+1,i)&&g(o,a,i.x-1,i.y,i))&&p(n,i,-1,1,1.4*b(i.x-1,i.y+1)));else{var e=[];e.push({x:i.x,y:i.y});for(var s=i.parent;null!=s;)e.push({x:s.x,y:s.y}),s=s.parent;e.reverse();var u=e;n.callback(u),delete T[t],v.shift()}}else n.callback(null),delete T[t],v.shift();else v.shift()}};var p=function(t,n,i,e,r){var s=n.x+i,l=n.y+e;if((void 0===u[l]||void 0===u[l][s])&&g(o,a,s,l,n)){var f=P(t,s,l,n,r);void 0===f.list?(f.list=1,t.openList.push(f)):n.costSoFar+r<f.costSoFar&&(f.costSoFar=n.costSoFar+r,f.parent=n,t.openList.updateItem(f))}},g=function(t,n,i,e,o){var r=c[e]&&c[e][i];if(r){var s=O(o.x-i,o.y-e);if(!function(){for(var t=0;t<r.length;t++)if(r[t]===s)return!0;return!1}())return!1}for(var a=0;a<n.length;a++)if(t[e][i]===n[a])return!0;return!1},O=function(n,i){if(0===n&&-1===i)return t.TOP;if(1===n&&-1===i)return t.TOP_RIGHT;if(1===n&&0===i)return t.RIGHT;if(1===n&&1===i)return t.BOTTOM_RIGHT;if(0===n&&1===i)return t.BOTTOM;if(-1===n&&1===i)return t.BOTTOM_LEFT;if(-1===n&&0===i)return t.LEFT;if(-1===n&&-1===i)return t.TOP_LEFT;throw new Error("These differences are not valid: "+n+", "+i)},b=function(t,n){return h[n]&&h[n][t]||f[o[n][t]]},P=function(t,n,e,o,r){if(void 0!==t.nodeHash[e]){if(void 0!==t.nodeHash[e][n])return t.nodeHash[e][n]}else t.nodeHash[e]={};var s=A(n,e,t.endX,t.endY);if(null!==o)var a=o.costSoFar+r;else a=0;var l=new i(o,n,e,a,s);return t.nodeHash[e][n]=l,l},A=function(t,n,i,e){var o,r;return x?(o=Math.abs(t-i))<(r=Math.abs(n-e))?1.4*o+r:1.4*r+o:(o=Math.abs(t-i))+(r=Math.abs(n-e))}},t.TOP="TOP",t.TOP_RIGHT="TOP_RIGHT",t.RIGHT="RIGHT",t.BOTTOM_RIGHT="BOTTOM_RIGHT",t.BOTTOM="BOTTOM",t.BOTTOM_LEFT="BOTTOM_LEFT",t.LEFT="LEFT",t.TOP_LEFT="TOP_LEFT";
},{"./instance":"RwqI","./node":"vH9K","heap":"tAIw"}],"yFSD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("./Cell")),e=r(require("./Agent")),n=r(require("easystarjs"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return u(t)||o(t)||h(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function u(t){if(Array.isArray(t))return y(t)}function l(t,e){return c(t)||s(t,e)||h(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i=[],o=!0,u=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}function c(t){if(Array.isArray(t))return t}function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=h(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function h(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&A(t.prototype,e),n&&A(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function T(t){switch(t){case"n":return[n.default.BOTTOM];case"s":return[n.default.TOP];case"e":return[n.default.LEFT];case"w":return[n.default.RIGHT];case"v":return[n.default.TOP,n.default.BOTTOM];case"h":return[n.default.LEFT,n.default.RIGHT];default:return[n.default.TOP,n.default.BOTTOM,n.default.LEFT,n.default.RIGHT]}}var b=function(){function r(e,i,o){var u=this;p(this,r),this.state=[],this.agents=[],this.tickCount=0;var f=e.split("\n").filter(function(t){return t.length>0}),s=i.split("\n").filter(function(t){return t.length>0}),c={S:"SPAWN",E:"EXIT",X:"BUILDING_ENTRANCE",b:"BIKE_PATH",w:"PEDESTRIAN_PATH",a:"ALL_PATH",p:"PARKING",_:"EMPTY",o:"BUILDING"};this.bikePathfinder=new n.default.js,this.pedestrianPathfinder=new n.default.js;var h,y=d(f.entries());try{var A=function(){var e=l(h.value,2),n=e[0],r=e[1],i=a(s[n]),o=a(r).map(function(e,r){var a=i[r],o=c[e],l=new t.default(u,o,r,n,a);return u.bikePathfinder.setDirectionalCondition(r,n,T(a)),u.pedestrianPathfinder.setDirectionalCondition(r,n,T(a)),l});u.state.push(o)};for(y.s();!(h=y.n()).done;)A()}catch(v){y.e(v)}finally{y.f()}this.bikePathfinder.setGrid(this.state.map(function(t){return t.map(function(t){return t.type})})),this.bikePathfinder.setAcceptableTiles(["SPAWN","BIKE_PATH","ALL_PATH","PARKING","EXIT"]),this.bikePathfinder.setTileCost("ALL_PATH",2),this.bikePathfinder.setTileCost("PARKING",4),this.pedestrianPathfinder.setGrid(this.state.map(function(t){return t.map(function(t){return t.type})})),this.pedestrianPathfinder.setAcceptableTiles(["PEDESTRIAN_PATH","ALL_PATH","PARKING","BUILDING_ENTRANCE"]),this.pedestrianPathfinder.setTileCost("ALL_PATH",2),this.pedestrianPathfinder.setTileCost("PARKING",3)}return v(r,[{key:"getCellAtCoordinates",value:function(t,e){return this.state[e][t]}},{key:"getRandomCellOfType",value:function(t){var e=this.state.flat().filter(function(e){return e.type===t});return e[Math.floor(Math.random()*e.length)]}},{key:"spawnAgent",value:function(t){var n=this.getRandomCellOfType("SPAWN"),r=new e.default(this,"BIKE",n,t);n.checkAddAgent(r)&&(n.addAgent(r),this.agents.push(r))}},{key:"removeAgent",value:function(t){this.agents=this.agents.filter(function(e){return e!==t}),t.cell.removeAgent(t)}},{key:"moveAgent",value:function(t,e){e.checkAddAgent(t)&&(t.cell.removeAgent(t),e.addAgent(t),t.cell=e)}},{key:"tick",value:function(){this.tickCount++,this.agents.sort(function(){return.5-Math.random()});var t,e=d(this.agents);try{for(e.s();!(t=e.n()).done;){var n=t.value;"BIKE"===n.type?n.act():"PEDESTRIAN"===n.type&&this.tickCount%2==0&&n.act()}}catch(r){e.e(r)}finally{e.f()}}}]),r}(),m=b;exports.default=m;
},{"./Cell":"AXpv","./Agent":"Ikhp","easystarjs":"uR5w"}],"H99C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addTimeToGoal=D,exports.addTimeToPark=S,require("./styles.css");var e=a(require("./map")),t=n(require("./World"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function a(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}function o(e,t){return u(e)||l(e,t)||d(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}function u(e){if(Array.isArray(e))return e}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=["DEFAULT","PARKING_LOT_PREFERENCE"],m=["DEFAULT"],p=[m],y=[m];function h(){L=new t.default(e.default,e.mapDirection),y=[m],_("time-to-park",p=[m]),_("time-to-goal",y)}function g(e){return e.toLowerCase().replace(/^_*(.)|_+(.)/g,function(e,t,n){return t?t.toUpperCase():" "+n.toUpperCase()})}var v=32,b=20,E=.2,w=!1,k=!0;document.getElementById("reset").addEventListener("click",function(){h()});var A=document.getElementById("strategy-checkboxes");s.forEach(function(e){var t=document.createElement("div");t.classList.add("form-check");var n=document.createElement("input");n.classList.add("form-check-input"),n.type="checkbox",n.id=e,n.checked=m.includes(e),n.addEventListener("change",function(){n.checked?m.push(e):m=m.filter(function(t){return t!==e}),h()});var r=document.createElement("label");r.htmlFor=e,r.classList.add("form-check-label"),r.appendChild(document.createTextNode(g(e))),A.appendChild(t),t.appendChild(n),t.appendChild(r)});var I=document.getElementById("realtime-charts");I.addEventListener("change",function(){k=!!I.checked}),document.getElementById("play-pause").addEventListener("click",function(){"Play"===document.getElementById("play-pause").innerHTML?(document.getElementById("play-pause").innerHTML="Pause",w=!1):(document.getElementById("play-pause").innerHTML="Play",w=!0)}),document.getElementById("tickdelay").addEventListener("input",function(e){b=e.target.value}),document.getElementById("spawnspeed").addEventListener("input",function(e){E=e.target.value});var L=new t.default(e.default,e.mapDirection);function T(){if(!w){if(Math.random()<E&&m.length>0){var e=m[Math.floor(Math.random()*m.length)];L.spawnAgent(e)}L.tick()}setTimeout(T,b)}T();var O=L.state[0].length,x=L.state.length,M=O*v,B=x*v,P=document.getElementById("canvas"),j=P.getContext("2d");function C(){var e,t=c(L.state.entries());try{for(t.s();!(e=t.n()).done;){var n,r=o(e.value,2),a=r[0],i=c(r[1].entries());try{for(i.s();!(n=i.n()).done;){var l=o(n.value,2),u=l[0];l[1].draw(j,u,a,v)}}catch(d){i.e(d)}finally{i.f()}}}catch(d){t.e(d)}finally{t.f()}requestAnimationFrame(C)}function _(e,t){t=google.visualization.arrayToDataTable(t);new google.visualization.Histogram(document.getElementById(e)).draw(t,{width:"100%",height:300,bar:{gap:0},chartArea:{width:"100%",height:"80%"},legend:{position:"bottom"},interpolateNulls:!1,histogram:{maxNumBuckets:50,minValue:0,maxValue:150}})}function S(e,t){var n=m.indexOf(e),r=Array(m.length).fill(null);r[n]=t,p.push(r),k&&_("time-to-park",p)}function D(e,t){var n=m.indexOf(e),r=Array(m.length).fill(null);r[n]=t,y.push(r),k&&_("time-to-goal",y)}j.canvas.width=M,j.canvas.height=B,requestAnimationFrame(C),google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(function(){return _("time-to-park",p)});
},{"./styles.css":"D9Nj","./map":"pkQ8","./World":"yFSD"}]},{},["H99C"], null)
//# sourceMappingURL=/src.fb54372b.js.map