(function(t){function e(e){for(var a,c,d=e[0],r=e[1],i=e[2],l=0,A=[];l<d.length;l++)c=d[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&A.push(o[c][0]),o[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(A.length)A.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,d=1;d<n.length;d++){var r=n[d];0!==o[r]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Study_TodoList_Vue/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],r=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0782":function(t,e,n){},"0cc9":function(t,e,n){"use strict";n("0782")},"2b04":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmWAJHAAAADHRSTlMAKo7V8v8Fkvy6kdQEEDG6AAAAgElEQVR4AWKgNhgFo0DIJBQPcFZEV5/eGooXRJShqmebGkoARCagaOAKJQgWoGiQIKyhEUWDKmENQSgathLWEI2iwZWwhhAUDSARtIDGLw9ovw5tAABgGIb9//VuiAZKXG7eAAAAAAAAAMAA5KObr3Q+6zkHcnDkpMnRVLPsP7MDH19Prp8xohMAAAAASUVORK5CYII="},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=Object(a["n"])("data-v-2f07191a");Object(a["g"])("data-v-2f07191a");var s={class:"container"};Object(a["f"])();var c=o((function(t,e,n,o,c,d){var r=Object(a["i"])("Header"),i=Object(a["i"])("AddTask"),u=Object(a["i"])("Tasks");return Object(a["e"])(),Object(a["c"])("div",s,[Object(a["d"])(r,{onToggleAddTask:d.toggleAddTask,showAddTask:c.showAddTask,title:"Task Tracker"},null,8,["onToggleAddTask","showAddTask"]),Object(a["m"])(Object(a["d"])("div",null,[Object(a["d"])(i,{onAddTask:d.addTask},null,8,["onAddTask"])],512),[[a["l"],c.showAddTask]]),Object(a["d"])(u,{onToggleDone:d.toggleDone,onDeleteTask:d.deleteTask,tasks:c.tasks},null,8,["onToggleDone","onDeleteTask","tasks"])])})),d=n("5530"),r=n("2909"),i=(n("99af"),n("4de4"),n("d81d"),Object(a["n"])("data-v-3e12536d")),u=i((function(t,e,n,o,s,c){var d=Object(a["i"])("Button");return Object(a["e"])(),Object(a["c"])("header",null,[Object(a["d"])("h1",null,Object(a["j"])(n.title),1),Object(a["d"])(d,{onBtnToggle:e[1]||(e[1]=function(e){return t.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Show",color:n.showAddTask?"#B22222":"#3CB371"},null,8,["text","color"])])})),l=Object(a["n"])("data-v-777d450e"),A=l((function(t,e,n,o,s,c){return Object(a["e"])(),Object(a["c"])("button",{onClick:e[1]||(e[1]=function(t){return c.onclick()}),style:{background:n.color},class:"btn btnshow"},Object(a["j"])(n.text),5)})),b={name:"Button",props:{text:String,color:String},methods:{onclick:function(){this.$emit("btn-toggle")}}};n("d4bc");b.render=A,b.__scopeId="data-v-777d450e";var k=b,f={name:"Header",props:{title:{default:"Task Tracker"},showAddTask:Boolean},components:{Button:k}};n("8f52");f.render=u,f.__scopeId="data-v-3e12536d";var p=f;function g(t,e,n,o,s,c){var d=Object(a["i"])("Task");return Object(a["e"])(),Object(a["c"])("span",null,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(n.tasks,(function(e){return Object(a["e"])(),Object(a["c"])("div",{key:e.id},[Object(a["d"])(d,{onToggleDone:function(n){return t.$emit("toggle-done",e.id)},onDeleteTask:function(n){return t.$emit("delete-task",e.id)},task:e},null,8,["onToggleDone","onDeleteTask","task"])])})),128))])}function O(t,e,n,o,s,c){return Object(a["e"])(),Object(a["c"])("div",{class:[n.task.done?"taskChecked":"taskUnchecked"]},[Object(a["d"])("img",{class:"checkBox",onClick:e[1]||(e[1]=function(e){return t.$emit("toggle-done",n.task.id)}),src:n.task.done?s.checked:s.unchecked,alt:n.task.done?"checked":"unchecked"},null,8,["src","alt"]),Object(a["d"])("div",{class:[n.task.done?"done":"","task"]},[Object(a["d"])("h3",null,[Object(a["d"])("span",{class:n.task.done?"taskTextdone":""},Object(a["j"])(n.task.text),3),Object(a["d"])("i",{onClick:e[2]||(e[2]=function(e){return t.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(a["d"])("p",{class:n.task.done?"taskTextdone":""},Object(a["j"])(n.task.day)+" at "+Object(a["j"])(n.task.time),3)],2)],2)}var h=n("2b04"),j=n.n(h),m=n("f0c8"),T=n.n(m),v={name:"Task",props:{task:Object},data:function(){return{unchecked:j.a,checked:T.a}}};n("0cc9");v.render=O;var y=v,w={name:"Tasks",props:{tasks:Array},components:{Task:y},emits:["delete-task","toggle-done"]};w.render=g;var x=w,S=Object(a["n"])("data-v-170baaa9");Object(a["g"])("data-v-170baaa9");var I={class:"form-control"},B=Object(a["d"])("label",null,"Task",-1),C={class:"form-control"},Q=Object(a["d"])("label",null,"Day and Time",-1),D={class:"appointment"},E=Object(a["d"])("input",{type:"submit",value:"Add Task",class:"btn btn-block"},null,-1);Object(a["f"])();var V=S((function(t,e,n,o,s,c){return Object(a["e"])(),Object(a["c"])("form",{onSubmit:e[4]||(e[4]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(a["d"])("div",I,[B,Object(a["m"])(Object(a["d"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.text=t}),name:"text",placeholder:"Add Task"},null,512),[[a["k"],s.text]])]),Object(a["d"])("div",C,[Q,Object(a["d"])("div",D,[Object(a["m"])(Object(a["d"])("input",{type:"date",id:"date",name:"date","onUpdate:modelValue":e[2]||(e[2]=function(t){return s.day=t}),placeholder:"Add Day and Time",required:""},null,512),[[a["k"],s.day]]),Object(a["m"])(Object(a["d"])("input",{type:"time",id:"appt",name:"appt","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.time=t}),min:"00:00",max:"23:59",required:""},null,512),[[a["k"],s.time]])])]),E],32)})),H={name:"AddTask",data:function(){return{text:"",day:"",time:"",done:!1}},methods:{onSubmit:function(t){if(t.preventDefault(),this.text){var e={id:Math.floor(1e6*Math.random()),text:this.text,time:this.time,day:this.day,done:this.done};console.log(e),this.$emit("add-task",e),this.text="",this.day="",this.time="",this.done=!1}else alert("Please add a task")}}};n("c9de");H.render=V,H.__scopeId="data-v-170baaa9";var M=H,R={name:"App",components:{Header:p,Tasks:x,AddTask:M},data:function(){return{tasks:[],showAddTask:!0}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(t){this.tasks=[].concat(Object(r["a"])(this.tasks),[t]),this.updateStorage()},deleteTask:function(t){confirm("Are you sure?")&&(this.tasks=this.tasks.filter((function(e){return e.id!==t}))),this.updateStorage()},toggleDone:function(t){this.tasks=this.tasks.map((function(e){return e.id===t?Object(d["a"])(Object(d["a"])({},e),{},{done:!e.done}):e})),this.updateStorage()},updateStorage:function(){localStorage.setItem("Tasks",JSON.stringify(this.tasks))},storageTasks:function(){if(null===localStorage.getItem("Tasks"))localStorage.setItem("Tasks",JSON.stringify(this.tasks));else{var t=JSON.parse(localStorage.getItem("Tasks"));this.tasks=t,this.updateStorage()}}},created:function(){this.storageTasks()}};n("8b85");R.render=c,R.__scopeId="data-v-2f07191a";var U=R;Object(a["b"])(U).mount("#app")},"8b85":function(t,e,n){"use strict";n("e8f2")},"8f52":function(t,e,n){"use strict";n("c21d")},be9f:function(t,e,n){},c21d:function(t,e,n){},c9de:function(t,e,n){"use strict";n("e368")},d4bc:function(t,e,n){"use strict";n("be9f")},e368:function(t,e,n){},e8f2:function(t,e,n){},f0c8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABx0lEQVR42u2bW04CMRSGzwtR31iH+3EHbsErwQUgDoJ78YLGBfiMG5nnSbCNEBE70s70nDmH/P95K8n0+5IptLQlQhAEQRAEQepzTAV9UklL4Spdr4XrvVV6NKNKHH2zKkfQa44/7xR+XfOmClMV+L6mzd79So1A1WQsFGrwfRXpAgtVAot0gVKVQJkusP0I6bTuHwIQgAAEIAABCESlT6eWBfr04Z4+tCrwje9rYFHgB9/XtTWB3/i+Li0J/MX3dW5FIIy/pDMbArvxVQvE4CsWiMNXKxCLr1QgHl+lQAq+QoE0fHUCqfjKBNLxRQRO6IANX0DgwrU9Rig0w2cXuFq1PtEhCz6zwGCj/T+F5visAsOtT55rFNrgMwrcBJBeAgrt8BkFHmp2Eo+y4rO+QrOdCu3xmQdxWOF1pZADn/1rNLyH/OYU8uAL/JCFFd4z4YtMJe6j9xjT8YUmcxM2fLHZ6IQJX3A6XbDgi64HCgZ84QXNXXZ88RXZODN+B0vKcVb8TtbEtxnxO1rUj7Lhd/avxCgTPrZZIQABCEAAAi37N3/w1fzRY/OHv80fvzd/AWIPrqCYvwS0HguGr2EhCIIgCILsd74A0lOdato5Np4AAAAASUVORK5CYII="}});
//# sourceMappingURL=app.044d94b9.js.map