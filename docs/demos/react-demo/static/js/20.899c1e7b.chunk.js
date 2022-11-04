(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[20],{104:function(t,e,o){"use strict";function r(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return s})),o.d(e,"d",(function(){return n}));var i=new Set;function a(t){i.add(t),document.body.classList.add("six-scroll-lock")}function n(t){i.delete(t),0===i.size&&document.body.classList.remove("six-scroll-lock")}function s(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"vertical",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smooth",a=r(t,e),n=a.top+e.scrollTop,s=a.left+e.scrollLeft,l=e.scrollLeft,c=e.scrollLeft+e.offsetWidth,b=e.scrollTop,u=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(s<l?e.scrollTo({left:s,behavior:i}):s+t.clientWidth>c&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(n<b?e.scrollTo({top:n,behavior:i}):n+t.clientHeight>u&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:i}))}},105:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var r=new WeakMap;var i={observe:function(t){if(t){var e=["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageDown","PageUp"],o=function(o){e.includes(o.key)&&t.classList.add("focus-visible")},i=function(){return t.classList.remove("focus-visible")};r.set(t,{is:o,isNot:i}),t.addEventListener("keydown",o),t.addEventListener("keyup",o),t.addEventListener("mousedown",i),t.addEventListener("mousedown",i)}},unobserve:function(t){if(t){var e=r.get(t);if(e){var o=e.is,i=e.isNot;t.classList.remove("focus-visible"),t.removeEventListener("keydown",o),t.removeEventListener("keyup",o),t.removeEventListener("mousedown",i),t.removeEventListener("mousedown",i)}}}}},88:function(t,e,o){"use strict";o.r(e),o.d(e,"six_tab_group",(function(){return h}));var r=o(9),i=o(6),a=o.n(i),n=o(10),s=o(14),l=o(15),c=o(21),b=o(104),u=o(105),h=function(){function t(e){Object(s.a)(this,t),Object(c.i)(this,e),this.sixTabShow=Object(c.e)(this,"six-tab-show",7),this.sixTabHide=Object(c.e)(this,"six-tab-hide",7),this.hasScrollControls=!1,this.placement="top",this.noScrollControls=!1}return Object(l.a)(t,[{key:"handlePlacementChange",value:function(){this.syncActiveTabIndicator()}},{key:"handleNoScrollControlsChange",value:function(){this.updateScrollControls()}},{key:"connectedCallback",value:function(){this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleScrollLeft=this.handleScrollLeft.bind(this),this.handleScrollRight=this.handleScrollRight.bind(this),this.syncActiveTabIndicator=this.syncActiveTabIndicator.bind(this)}},{key:"componentDidLoad",value:function(){var t=this;new IntersectionObserver((function(e,o){e[0].intersectionRatio>0&&(t.setAriaLabels(),t.setActiveTab(t.getActiveTab()||t.getAllTabs()[0],!1),o.unobserve(e[0].target))})).observe(this.host),u.a.observe(this.tabGroup),this.resizeObserver=new ResizeObserver((function(){return t.updateScrollControls()})),this.resizeObserver.observe(this.nav),requestAnimationFrame((function(){return t.updateScrollControls()})),this.mutationObserver=new MutationObserver((function(e){e.some((function(t){return!["aria-labelledby","aria-controls"].includes(t.attributeName)}))&&setTimeout((function(){return t.setAriaLabels()}))})),this.mutationObserver.observe(this.host,{attributes:!0,childList:!0,subtree:!0})}},{key:"disconnectedCallback",value:function(){this.mutationObserver.disconnect(),u.a.unobserve(this.tabGroup),this.resizeObserver.unobserve(this.nav)}},{key:"show",value:function(){var t=Object(n.a)(a.a.mark((function t(e){var o,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=this.getAllTabs(),(r=o.find((function(t){return t.panel===e})))&&this.setActiveTab(r);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getAllTabs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.tabs.querySelector("slot");return Object(r.a)(e.assignedElements()).filter((function(e){return t?"six-tab"===e.tagName.toLowerCase():"six-tab"===e.tagName.toLowerCase()&&!e.disabled}))}},{key:"getAllPanels",value:function(){var t=this.body.querySelector("slot");return Object(r.a)(t.assignedElements()).filter((function(t){return"six-tab-panel"===t.tagName.toLowerCase()}))}},{key:"getActiveTab",value:function(){return this.getAllTabs().find((function(t){return t.active}))}},{key:"handleClick",value:function(t){var e=t.target.closest("six-tab");if((null===e||void 0===e?void 0:e.closest("six-tab-group"))!==this.host)return!1;e&&this.setActiveTab(e)}},{key:"handleKeyDown",value:function(t){var e=t.target.closest("six-tab");if((null===e||void 0===e?void 0:e.closest("six-tab-group"))!==this.host)return!1;if(["Enter"," "].includes(t.key)&&e&&(this.setActiveTab(e),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){var o=document.activeElement;if(o&&"six-tab"===o.tagName.toLowerCase()){var r=this.getAllTabs(),i=r.indexOf(o);"Home"===t.key?i=0:"End"===t.key?i=r.length-1:"ArrowLeft"===t.key?i=Math.max(0,i-1):"ArrowRight"===t.key&&(i=Math.min(r.length-1,i+1)),r[i].setFocus({preventScroll:!0}),["top","bottom"].includes(this.placement)&&Object(b.c)(r[i],this.nav,"horizontal"),t.preventDefault()}}}},{key:"handleScrollLeft",value:function(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}},{key:"handleScrollRight",value:function(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}},{key:"updateScrollControls",value:function(){this.hasScrollControls=!this.noScrollControls&&(["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth)}},{key:"setActiveTab",value:function(t){var e=this,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t&&t!==this.activeTab&&!t.disabled){var r=this.activeTab;this.activeTab=t,this.getAllTabs().map((function(t){return t.active=t===e.activeTab})),this.getAllPanels().map((function(t){return t.active=t.name===e.activeTab.panel})),this.syncActiveTabIndicator(),["top","bottom"].includes(this.placement)&&Object(b.c)(this.activeTab,this.nav,"horizontal"),o&&(r&&this.sixTabHide.emit({name:r.panel}),this.sixTabShow.emit({name:this.activeTab.panel}))}}},{key:"setAriaLabels",value:function(){var t=this.getAllTabs(),e=this.getAllPanels();t.map((function(t){var o=e.find((function(e){return e.name===t.panel}));o&&(t.setAttribute("aria-controls",o.getAttribute("id")),o.setAttribute("aria-labelledby",t.getAttribute("id")))}))}},{key:"syncActiveTabIndicator",value:function(){var t=this.getActiveTab();if(t){this.activeTabIndicator.style.display="block";var e=t.clientWidth,o=t.clientHeight,r=Object(b.a)(t,this.nav),i=r.top+this.nav.scrollTop,a=r.left+this.nav.scrollLeft;switch(this.placement){case"top":case"bottom":this.activeTabIndicator.style.width="".concat(e,"px"),this.activeTabIndicator.style.height=null,this.activeTabIndicator.style.transform="translateX(".concat(a,"px)");break;case"left":case"right":this.activeTabIndicator.style.width=null,this.activeTabIndicator.style.height="".concat(o,"px"),this.activeTabIndicator.style.transform="translateY(".concat(i,"px)")}}else this.activeTabIndicator.style.display="none"}},{key:"render",value:function(){var t=this;return Object(c.g)("div",{part:"base",ref:function(e){return t.tabGroup=e},class:{"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--left":"left"===this.placement,"tab-group--right":"right"===this.placement,"tab-group--has-scroll-controls":this.hasScrollControls},onClick:this.handleClick,onKeyDown:this.handleKeyDown},Object(c.g)("div",{class:"tab-group__nav-container"},this.hasScrollControls&&Object(c.g)("six-icon-button",{class:"tab-group__scroll-button tab-group__scroll-button--left",exportparts:"base:scroll-button",name:"chevron_left",onClick:this.handleScrollLeft}),Object(c.g)("div",{ref:function(e){return t.nav=e},key:"nav",part:"nav",class:"tab-group__nav"},Object(c.g)("div",{ref:function(e){return t.tabs=e},part:"tabs",class:"tab-group__tabs",role:"tablist"},Object(c.g)("div",{ref:function(e){return t.activeTabIndicator=e},part:"active-tab-indicator",class:"tab-group__active-tab-indicator"}),Object(c.g)("slot",{name:"nav",onSlotchange:this.syncActiveTabIndicator}))),this.hasScrollControls&&Object(c.g)("six-icon-button",{class:"tab-group__scroll-button tab-group__scroll-button--right",exportparts:"base:scroll-button",name:"chevron_right",onClick:this.handleScrollRight})),Object(c.g)("div",{ref:function(e){return t.body=e},part:"body",class:"tab-group__body"},Object(c.g)("slot",{onSlotchange:this.syncActiveTabIndicator})))}},{key:"host",get:function(){return Object(c.f)(this)}}],[{key:"watchers",get:function(){return{placement:["handlePlacementChange"],noScrollControls:["handleNoScrollControlsChange"]}}}]),t}();h.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--tabs-border-color:var(--six-tab-border-color);display:block}.tab-group{display:flex;border:solid 1px transparent;border-radius:0}.tab-group .tab-group__tabs{display:flex;position:relative}.tab-group .tab-group__active-tab-indicator{position:absolute;transition:var(--six-transition-fast) transform ease, var(--six-transition-fast) width ease}.tab-group:not(.focus-visible) ::slotted(six-tab){--focus-ring:none}.tab-group--has-scroll-controls .tab-group__nav-container{position:relative;padding:0 var(--six-spacing-x-large)}.tab-group__scroll-button{display:flex;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;width:var(--six-spacing-x-large)}.tab-group__scroll-button--left{left:0}.tab-group__scroll-button--right{right:0}.tab-group--top{flex-direction:column}.tab-group--top .tab-group__nav-container{order:1}.tab-group--top .tab-group__nav{display:flex;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--top .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--top .tab-group__tabs{flex:1 1 auto;position:relative;flex-direction:row;border-bottom:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--top .tab-group__active-tab-indicator{bottom:-2px;border-bottom:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--top .tab-group__body{order:2}.tab-group--bottom{flex-direction:column}.tab-group--bottom .tab-group__nav-container{order:2}.tab-group--bottom .tab-group__nav{display:flex;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--bottom .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--bottom .tab-group__tabs{flex:1 1 auto;position:relative;flex-direction:row;border-top:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--bottom .tab-group__active-tab-indicator{top:-2px;border-top:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--bottom .tab-group__body{order:1}.tab-group--left{flex-direction:row}.tab-group--left .tab-group__nav-container{order:1}.tab-group--left .tab-group__tabs{flex:0 0 auto;flex-direction:column;border-right:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--left .tab-group__active-tab-indicator{right:-2px;border-right:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--left .tab-group__body{flex:1 1 auto;order:2}.tab-group--right{flex-direction:row}.tab-group--right .tab-group__nav-container{order:2}.tab-group--right .tab-group__tabs{flex:0 0 auto;flex-direction:column;border-left:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--right .tab-group__active-tab-indicator{left:-2px;border-left:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--right .tab-group__body{flex:1 1 auto;order:1}"}}]);
//# sourceMappingURL=20.899c1e7b.chunk.js.map