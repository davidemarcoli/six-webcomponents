(self.webpackChunksix_app=self.webpackChunksix_app||[]).push([[3091],{3091:(t,o,i)=>{"use strict";i.r(o),i.d(o,{six_tooltip:()=>n});var e=i(6304),s=i(1488),r=i(8409);let a=0,n=class{constructor(t){(0,s.r)(this,t),this.sixShow=(0,s.c)(this,"six-tooltip-show",7),this.sixAfterShow=(0,s.c)(this,"six-tooltip-after-show",7),this.sixHide=(0,s.c)(this,"six-tooltip-hide",7),this.sixAfterHide=(0,s.c)(this,"six-tooltip-after-hide",7),this.componentId="tooltip-"+ ++a,this.isVisible=!1,this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.open=!1,this.skidding=0,this.trigger="hover focus"}handleOpenChange(){this.open?this.show():this.hide()}connectedCallback(){this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.handleSlotChange=this.handleSlotChange.bind(this)}componentDidLoad(){this.target=this.getTarget(),this.popover=new r.P(this.target,this.tooltipPositioner),this.syncOptions(),this.host.addEventListener("blur",this.handleBlur,!0),this.host.addEventListener("click",this.handleClick,!0),this.host.addEventListener("focus",this.handleFocus,!0),this.tooltipPositioner.hidden=!this.open,this.open&&this.show()}componentDidUpdate(){this.syncOptions()}disconnectedCallback(){this.popover.destroy(),this.host.removeEventListener("blur",this.handleBlur,!0),this.host.removeEventListener("click",this.handleClick,!0),this.host.removeEventListener("focus",this.handleFocus,!0)}show(){var t=this;return(0,e.Z)(function*(){t.isVisible||t.disabled||(t.sixShow.emit().defaultPrevented?t.open=!1:(t.isVisible=!0,t.open=!0,t.popover.show()))})()}hide(){var t=this;return(0,e.Z)(function*(){t.isVisible&&!t.disabled&&(t.sixHide.emit().defaultPrevented?t.open=!0:(t.isVisible=!1,t.open=!1,t.popover.hide()))})()}getTarget(){const t=[...this.host.children].find(t=>"style"!==t.tagName.toLowerCase()&&"content"!==t.getAttribute("slot"));if(!t)throw new Error("Invalid tooltip target: no child element was found.");return t}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(t){this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide())}handleMouseOver(){this.hasTrigger("hover")&&this.show()}handleMouseOut(){this.hasTrigger("hover")&&this.hide()}handleSlotChange(){const t=this.target,o=this.getTarget();o!==t&&(t&&t.removeAttribute("aria-describedby"),o.setAttribute("aria-describedby",this.componentId))}hasTrigger(t){return this.trigger.split(" ").includes(t)}syncOptions(){this.popover.setOptions({placement:this.placement,distance:this.distance,skidding:this.skidding,transitionElement:this.tooltip,onAfterHide:()=>this.sixAfterHide.emit(),onAfterShow:()=>this.sixAfterShow.emit()})}render(){return(0,s.h)(s.H,{onKeyDown:this.handleKeyDown,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},(0,s.h)("slot",{onSlotchange:this.handleSlotChange}),(0,s.h)("div",{ref:t=>this.tooltipPositioner=t,class:"tooltip-positioner"},(0,s.h)("div",{part:"base",ref:t=>this.tooltip=t,id:this.componentId,class:{tooltip:!0,"tooltip--open":this.open},role:"tooltip","aria-hidden":this.open?"false":"true"},(0,s.h)("slot",{name:"content"},this.content))))}get host(){return(0,s.g)(this)}static get watchers(){return{open:["handleOpenChange"]}}};n.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--max-width:20rem;--hide-delay:0s;--hide-duration:0.125s;--hide-timing-function:ease;--show-delay:0.125s;--show-duration:0.125s;--show-timing-function:ease;display:contents}.tooltip-positioner{position:absolute;z-index:var(--six-z-index-tooltip);pointer-events:none}.tooltip{max-width:var(--max-width);border-radius:var(--six-border-radius-medium);background-color:var(--six-tooltip-background-color);font-family:var(--six-font-family);font-size:var(--six-tooltip-font-size);font-weight:var(--six-tooltip-font-weight);line-height:var(--six-tooltip-line-height);color:var(--six-tooltip-color);opacity:0;padding:var(--six-spacing-xxx-small) var(--six-spacing-x-small);transform:scale(0.8);transform-origin:bottom;transition-property:opacity, transform;transition-delay:var(--hide-delay);transition-duration:var(--hide-duration);transition-timing-function:var(--hide-timing-function)}.tooltip::after{content:"";position:absolute;width:0;height:0}.tooltip-positioner[data-popper-placement^=top] .tooltip{transform-origin:bottom}.tooltip-positioner[data-popper-placement^=bottom] .tooltip{transform-origin:top}.tooltip-positioner[data-popper-placement^=left] .tooltip{transform-origin:right}.tooltip-positioner[data-popper-placement^=right] .tooltip{transform-origin:left}.tooltip-positioner.popover-visible .tooltip{opacity:1;transform:none;transition-delay:var(--show-delay);transition-duration:var(--show-duration);transition-timing-function:var(--show-timing-function)}.tooltip-positioner[data-popper-placement^=bottom] .tooltip::after{bottom:100%;left:calc(50% - var(--six-tooltip-arrow-size));border-bottom:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=bottom-start] .tooltip::after{left:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=bottom-end] .tooltip::after{right:var(--six-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=top] .tooltip::after{top:100%;left:calc(50% - var(--six-tooltip-arrow-size));border-top:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=top-start] .tooltip::after{left:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=top-end] .tooltip::after{right:var(--six-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=left] .tooltip::after{top:calc(50% - var(--six-tooltip-arrow-size));left:100%;border-left:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-top:var(--six-tooltip-arrow-size) solid transparent;border-bottom:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=left-start] .tooltip::after{top:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=left-end] .tooltip::after{top:auto;bottom:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement^=right] .tooltip::after{top:calc(50% - var(--six-tooltip-arrow-size));right:100%;border-right:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-top:var(--six-tooltip-arrow-size) solid transparent;border-bottom:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=right-start] .tooltip::after{top:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=right-end] .tooltip::after{top:auto;bottom:var(--six-tooltip-arrow-start-end-offset)}'}}]);