"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[8992],{8992:function(e,t,i){i.r(t),i.d(t,{six_alert:function(){return c}});var r=i(2723),s=i(4795),a=i(9249),o=i(7371),n=i(8551),l=Object.assign(document.createElement("div"),{className:"six-toast-stack"}),c=function(){function e(t){var i=this;(0,a.Z)(this,e),(0,n.r)(this,t),this.sixShow=(0,n.c)(this,"six-alert-show",7),this.sixAfterShow=(0,n.c)(this,"six-alert-after-show",7),this.sixHide=(0,n.c)(this,"six-alert-hide",7),this.sixAfterHide=(0,n.c)(this,"six-alert-after-hide",7),this.handleCloseClick=function(){i.hide()},this.handleMouseMove=function(){i.restartAutoHide()},this.handleTransitionEnd=function(e){var t=e.target;"opacity"===e.propertyName&&t.classList.contains("alert")&&(i.isVisible=i.open,i.open?i.sixAfterShow.emit():i.sixAfterHide.emit())},this.isVisible=!1,this.open=!1,this.closable=!1,this.type="primary",this.duration=1/0}return(0,o.Z)(e,[{key:"handleOpenChange",value:function(){this.open?this.show():this.hide()}},{key:"handleDurationChange",value:function(){this.restartAutoHide()}},{key:"componentWillLoad",value:function(){this.open&&this.show()}},{key:"show",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isVisible){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixShow.emit().defaultPrevented){e.next=6;break}return this.open=!1,e.abrupt("return");case 6:this.isVisible=!0,this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((function(){return t.hide()}),this.duration));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hide",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isVisible){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixHide.emit().defaultPrevented){e.next=6;break}return this.open=!0,e.abrupt("return");case 6:clearTimeout(this.autoHideTimeout),this.isVisible=!1,this.open=!1;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toast",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){l.parentElement||document.body.append(l),l.append(t.host),requestAnimationFrame((function(){return t.show()})),t.host.addEventListener("six-alert-after-hide",(function(){t.host.remove(),e(),null===l.querySelector("six-alert")&&l.remove()}),{once:!0})})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"restartAutoHide",value:function(){var e=this;clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((function(){return e.hide()}),this.duration))}},{key:"render",value:function(){return(0,n.h)("div",{part:"base",class:{alert:!0,"alert--open":this.open,"alert--visible":this.isVisible,"alert--closable":this.closable,"alert--primary":"primary"===this.type,"alert--success":"success"===this.type,"alert--info":"info"===this.type,"alert--warning":"warning"===this.type,"alert--danger":"danger"===this.type},role:"alert","aria-live":"assertive","aria-atomic":"true","aria-hidden":this.open?"false":"true",onMouseMove:this.handleMouseMove,onTransitionEnd:this.handleTransitionEnd},(0,n.h)("span",{part:"icon",class:"alert__icon"},(0,n.h)("slot",{name:"icon"})),(0,n.h)("span",{part:"message",class:"alert__message"},(0,n.h)("slot",null)),this.closable&&(0,n.h)("span",{class:"alert__close"},(0,n.h)("six-icon-button",{name:"clear",exportparts:"base:close-button",onClick:this.handleCloseClick})))}},{key:"host",get:function(){return(0,n.g)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"],duration:["handleDurationChange"]}}}]),e}();c.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:contents;margin:0}.alert{position:relative;display:flex;align-items:stretch;background-color:var(--six-color-white);border:solid 1px var(--six-color-web-rock-200);border-top-width:3px;border-radius:var(--six-border-radius-medium);box-shadow:var(--box-shadow);font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);line-height:1.6;color:var(--six-color-web-rock-700);opacity:0;transform:scale(0.9);transition:var(--six-transition-medium) opacity ease, var(--six-transition-medium) transform ease;margin:inherit}.alert:not(.alert--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.alert--open{opacity:1;transform:none}.alert__icon{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-large)}.alert__icon ::slotted(*){margin-left:var(--six-spacing-large)}.alert--primary{border-top-color:var(--six-color-web-rock-900)}.alert--primary .alert__icon{color:var(--six-color-web-rock-900)}.alert--success{border-top-color:var(--six-color-success-600)}.alert--success .alert__icon{color:var(--six-color-success-600)}.alert--info{border-top-color:var(--six-color-action-500)}.alert--info .alert__icon{color:var(--six-color-action-500)}.alert--warning{border-top-color:var(--six-color-warning-800)}.alert--warning .alert__icon{color:var(--six-color-warning-800)}.alert--danger{border-top-color:var(--six-color-danger-900)}.alert--danger .alert__icon{color:var(--six-color-danger-900)}.alert__message{flex:1 1 auto;padding:var(--six-spacing-large);overflow:hidden}.alert__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-large);padding-right:var(--six-spacing-medium)}"}}]);
//# sourceMappingURL=8992.9652fa85.chunk.js.map