"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[2114],{43:function(e,t,i){i.d(t,{M:function(){return s},i:function(){return o}});var n=i(9249),r=i(7371),o=function(){var e=!1,t=document.createElement("div");return t.focus&&t.focus({get preventScroll(){return e=!0,!1}}),e},a=[],s=function(){function e(t,i){(0,n.Z)(this,e),this.element=t,this.options=i,this.handleFocusIn=this.handleFocusIn.bind(this)}return(0,r.Z)(e,[{key:"activate",value:function(){a.push(this.element),document.addEventListener("focusin",this.handleFocusIn)}},{key:"deactivate",value:function(){var e=this;a=a.filter((function(t){return t!==e.element})),document.removeEventListener("focusin",this.handleFocusIn)}},{key:"isActive",value:function(){return a[a.length-1]===this.element}},{key:"handleFocusIn",value:function(e){var t,i,n=e.target,r=this.element.tagName.toLowerCase();this.isActive()&&n.closest(r)!==this.element&&"function"===typeof(null===(t=this.options)||void 0===t?void 0:t.onFocusOut)&&(null===(i=this.options)||void 0===i||i.onFocusOut(e))}}]),e}()},9607:function(e,t,i){i.d(t,{l:function(){return r},s:function(){return a},u:function(){return o}});var n=new Set;function r(e){n.add(e),document.body.classList.add("six-scroll-lock")}function o(e){n.delete(e),0===n.size&&document.body.classList.remove("six-scroll-lock")}function a(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"vertical",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smooth",r=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),o=r.top+t.scrollTop,a=r.left+t.scrollLeft,s=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,h=t.scrollTop,d=t.scrollTop+t.offsetHeight;"horizontal"!==i&&"both"!==i||(a<s?t.scrollTo({left:a,behavior:n}):a+e.clientWidth>l&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:n})),"vertical"!==i&&"both"!==i||(o<h?t.scrollTo({top:o,behavior:n}):o+e.clientHeight>d&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:n}))}},2114:function(e,t,i){i.r(t),i.d(t,{six_drawer:function(){return f}});var n=i(2723),r=i(4795),o=i(9249),a=i(7371),s=i(8551),l=i(9607),h=i(1065),d=i(43),c=(0,d.i)(),u=0,f=function(){function e(t){var i=this;(0,o.Z)(this,e),(0,s.r)(this,t),this.sixShow=(0,s.c)(this,"six-drawer-show",7),this.sixAfterShow=(0,s.c)(this,"six-drawer-after-show",7),this.sixHide=(0,s.c)(this,"six-drawer-hide",7),this.sixAfterHide=(0,s.c)(this,"six-drawer-after-hide",7),this.sixInitialFocus=(0,s.c)(this,"six-drawer-initial-focus",7),this.sixOverlayDismiss=(0,s.c)(this,"six-drawer-overlay-dismiss",7),this.componentId="drawer-".concat(++u),this.willShow=!1,this.willHide=!1,this.handleCloseClick=function(){i.hide()},this.handleKeyDown=function(e){"Escape"===e.key&&i.hide()},this.handleOverlayClick=function(){i.sixOverlayDismiss.emit().defaultPrevented||i.hide()},this.handleSlotChange=function(){i.hasFooter=(0,h.h)(i.host,"footer")},this.handleTransitionEnd=function(e){var t=e.target;"transform"===e.propertyName&&t.classList.contains("drawer__panel")&&i.resetTransitionVariables()},this.hasFooter=!1,this.isVisible=!1,this.open=!1,this.label="",this.placement="right",this.contained=!1,this.noHeader=!1}return(0,a.Z)(e,[{key:"handleOpenChange",value:function(){this.open?this.show():this.hide()}},{key:"connectedCallback",value:function(){var e=this;this.modal=new d.M(this.host,{onFocusOut:function(){var t;return e.contained?null:null===(t=e.panel)||void 0===t?void 0:t.focus()}})}},{key:"componentWillLoad",value:function(){this.handleSlotChange(),this.open&&(this.show(),this.resetTransitionVariables())}},{key:"disconnectedCallback",value:function(){(0,l.u)(this.host)}},{key:"show",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,i=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.willShow&&null!=this.modal&&null!=this.panel&&null!=this.drawer){e.next=2;break}return e.abrupt("return");case 2:if(t=this.panel,!this.sixShow.emit().defaultPrevented){e.next=7;break}return this.open=!1,e.abrupt("return");case 7:this.willShow=!0,this.isVisible=!0,this.open=!0,this.contained||(this.modal.activate(),(0,l.l)(this.host)),this.open&&(c?requestAnimationFrame((function(){i.sixInitialFocus.emit().defaultPrevented||t.focus({preventScroll:!0})})):this.drawer.addEventListener("transitionend",(function(){i.sixInitialFocus.emit().defaultPrevented||t.focus()}),{once:!0}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hide",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.willHide&&null!=this.modal){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixHide.emit().defaultPrevented){e.next=6;break}return this.open=!0,e.abrupt("return");case 6:this.willHide=!0,this.open=!1,this.modal.deactivate(),(0,l.u)(this.host);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"resetTransitionVariables",value:function(){this.isVisible=this.open,this.willShow=!1,this.willHide=!1,this.open?this.sixAfterShow.emit():this.sixAfterHide.emit()}},{key:"render",value:function(){var e=this;return(0,s.h)("div",{ref:function(t){return e.drawer=t},part:"base",class:{drawer:!0,"drawer--open":this.open,"drawer--visible":this.isVisible,"drawer--top":"top"===this.placement,"drawer--right":"right"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--left":"left"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--has-footer":this.hasFooter},onKeyDown:this.handleKeyDown,onTransitionEnd:this.handleTransitionEnd},(0,s.h)("div",{part:"overlay",class:"drawer__overlay",onClick:this.handleOverlayClick,tabIndex:-1}),(0,s.h)("div",{ref:function(t){return e.panel=t},part:"panel",class:"drawer__panel",role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-label":this.noHeader?this.label:null,"aria-labelledby":this.noHeader?null:"".concat(this.componentId,"-title"),tabIndex:0},!this.noHeader&&(0,s.h)("header",{part:"header",class:"drawer__header"},(0,s.h)("span",{part:"title",class:"drawer__title",id:"".concat(this.componentId,"-title")},(0,s.h)("slot",{name:"label"},this.label||String.fromCharCode(65279))),(0,s.h)("six-icon-button",{exportparts:"base:close-button",class:"drawer__close",name:"x",onClick:this.handleCloseClick})),(0,s.h)("div",{part:"body",class:"drawer__body"},(0,s.h)("slot",null)),(0,s.h)("footer",{part:"footer",class:"drawer__footer"},(0,s.h)("slot",{name:"footer",onSlotchange:this.handleSlotChange}))))}},{key:"host",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"]}}}]),e}();f.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--size:25rem;display:contents}.drawer{top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.drawer:not(.drawer--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.drawer--contained{position:absolute;z-index:initial}.drawer--fixed{position:fixed;z-index:var(--six-z-index-drawer)}.drawer__panel{position:absolute;display:flex;flex-direction:column;z-index:2;max-width:100%;max-height:100%;background-color:var(--six-drawer-background-color);color:var(--six-drawer-color);box-shadow:var(--six-shadow-x-large);transition:var(--six-transition-medium) transform;overflow:auto;pointer-events:all}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:100%;height:var(--size);transform:translate(0, -100%)}.drawer--right .drawer__panel{top:0;right:0;bottom:auto;left:auto;width:var(--size);height:100%;transform:translate(100%, 0)}.drawer--bottom .drawer__panel{top:auto;right:auto;bottom:0;left:0;width:100%;height:var(--size);transform:translate(0, 100%)}.drawer--left .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:var(--size);height:100%;transform:translate(-100%, 0)}.drawer--open .drawer__panel{transform:none}.drawer__header{display:flex}.drawer__title{flex:1 1 auto;font-size:var(--six-font-size-large);line-height:var(--six-line-height-dense);padding:var(--six-spacing-large)}.drawer__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-x-large);padding:0 var(--six-spacing-large)}.drawer__body{flex:1 1 auto;padding:var(--six-spacing-large);overflow:auto;-webkit-overflow-scrolling:touch}.drawer__footer{text-align:right;padding:var(--six-spacing-large)}.drawer__footer ::slotted(six-button:not(:last-of-type)){margin-right:var(--six-spacing-x-small)}.drawer:not(.drawer--has-footer) .drawer__footer{display:none}.drawer__overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--six-overlay-background-color);opacity:0;transition:var(--six-transition-medium) opacity;pointer-events:all}.drawer--contained .drawer__overlay{position:absolute}.drawer--open .drawer__overlay{opacity:0.4}"},1065:function(e,t,i){i.d(t,{a:function(){return r},b:function(){return a},g:function(){return s},h:function(){return o}});var n=i(8079);function r(e){var t=null!=e?e.assignedNodes({flatten:!0}):[],i="";return(0,n.Z)(t).map((function(e){e.nodeType===Node.TEXT_NODE&&(i+=e.textContent)})),i}function o(e,t){return null!=t&&""!==t?null!==e.querySelector('[slot="'.concat(t,'"]')):Array.from(e.childNodes).some((function(e){var t;if(e.nodeType===e.TEXT_NODE&&""!==(null===(t=e.textContent)||void 0===t?void 0:t.trim()))return!0;if(e.nodeType===e.ELEMENT_NODE&&!e.hasAttribute("slot"))return!0;return!1}))}var a=function(e){var t;return null===(t=e.querySelector("slot"))||void 0===t?void 0:t.assignedElements({flatten:!0})};function s(e,t){return null==e?null:e.querySelector('[slot="'.concat(t,'"]'))}}}]);
//# sourceMappingURL=2114.59409608.chunk.js.map