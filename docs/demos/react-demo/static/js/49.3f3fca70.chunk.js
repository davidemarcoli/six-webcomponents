(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[49],{80:function(e,t,i){"use strict";i.r(t),i.d(t,"six_root",(function(){return n}));var s=i(4),o=i(14),r=i(15),a=i(21),n=function(){function e(t){var i=this;Object(o.a)(this,e),Object(a.i)(this,t),this.collapsedEvent=Object(a.e)(this,"six-root-collapsed",7),this.breakpoint=1024,this.padded=!0,this.stage=null,this.version="",this.resizeObserver=new ResizeObserver((function(e){var t=Object(s.a)(e,1)[0].contentRect.width;i.collapse=t<i.breakpoint}))}return Object(r.a)(e,[{key:"handleCollapsed",value:function(e){this.collapsedEvent.emit({collapsed:e})}},{key:"componentWillLoad",value:function(){this.resizeObserver.observe(this.host)}},{key:"disconnectedCallback",value:function(){this.resizeObserver.disconnect()}},{key:"render",value:function(){return Object(a.g)("host",{class:"six-root"},Object(a.g)("header",{part:"header"},this.stage&&Object(a.g)("six-stage-indicator",{stage:this.stage},this.version),Object(a.g)("slot",{name:"header"})),Object(a.g)("nav",{class:"six-root__left-sidebar",part:"left-sidebar"},Object(a.g)("set-attributes",{value:{open:!this.collapse}},Object(a.g)("slot",{name:"left-sidebar"}))),Object(a.g)("main",{part:"main"},Object(a.g)("div",{class:{"six-root__container":!0,"six-root__container--padded":this.padded},part:"container"},Object(a.g)("slot",{name:"main"})),Object(a.g)("div",{class:"six-root__footer"},Object(a.g)("slot",{name:"footer"}))),Object(a.g)("nav",{class:"six-root__right-sidebar",part:"right-sidebar"},Object(a.g)("slot",{name:"right-sidebar"})))}},{key:"host",get:function(){return Object(a.f)(this)}}],[{key:"watchers",get:function(){return{collapse:["handleCollapsed"]}}}]),e}();n.style=":host{display:block;overflow:hidden;height:inherit}.six-root{display:grid;grid-template:auto 1fr auto/auto 1fr auto;height:100%}.six-root__container--padded{padding:var(--six-spacing-xxx-large)}.six-root__left-sidebar{height:100%;overflow:scroll;grid-column:1/2}.six-root__right-sidebar{height:100%;overflow:scroll;grid-column:3/4}.six-root nav{overflow:hidden}header{grid-column:1/4;position:sticky;top:0;z-index:var(--six-z-index-header);margin-right:2px}main{height:100%;display:flex;flex-direction:column;justify-content:space-between;grid-column:2/3;overflow:auto}footer{grid-column:1/4}"}}]);
//# sourceMappingURL=49.3f3fca70.chunk.js.map