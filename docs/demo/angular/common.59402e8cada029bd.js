"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[8592],{9643:(g,d,c)=>{c.d(d,{E:()=>l});class l{constructor(){this.eventListeners=[],this.add=(n,o,i,t=null)=>{this.eventListeners.push({el:n,name:o,listener:i,identifier:t}),n.addEventListener(o,i)},this.remove=(n,o,i)=>{this.eventListeners=this.getFilteredEventListeners(t=>t.listener==i&&t.el===n&&t.name===o)},this.removeByIdentifier=n=>{const o=t=>t.identifier===n;void 0!==this.eventListeners.find(o)&&(this.eventListeners=this.getFilteredEventListeners(o))},this.removeAll=()=>{for(;this.eventListeners.length>0;){const n=this.eventListeners.pop();n?.el.removeEventListener(n.name,n.listener)}}}getFilteredEventListeners(n){return this.eventListeners.filter(o=>!n(o)||(o.el.removeEventListener(o.name,o.listener),!1))}forward(n,o,i){switch(o){case"input":case"change":this.add(i,n,()=>i.dispatchEvent(new InputEvent(o,{bubbles:!0,cancelable:!0})));break;case"blur":case"focus":this.add(i,n,()=>i.dispatchEvent(new FocusEvent(o,{bubbles:!0,cancelable:!0})))}}}},1497:(g,d,c)=>{c.d(d,{D:()=>r,a:()=>n,b:()=>l,d:()=>o});const l=35,r=300,n=(i,t=r)=>{let e;return s=>{clearTimeout(e),e=setTimeout(()=>i(s),t)}},o=(i,t)=>{const e=i._original||i;return{_original:i,emit:n(e.emit.bind(e),t)}}},35:(g,d,c)=>{c.d(d,{f:()=>o});const l=new WeakMap,o={observe:function r(i){if(null==i)return;const t=["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageDown","PageUp"],e=u=>{t.includes(u.key)&&i.classList.add("focus-visible")},s=()=>i.classList.remove("focus-visible");l.set(i,{is:e,isNot:s}),i.addEventListener("keydown",e),i.addEventListener("keyup",e),i.addEventListener("mousedown",s),i.addEventListener("mousedown",s)},unobserve:function n(i){if(null==i)return;const t=l.get(i);if(!t)return;const{is:e,isNot:s}=t;i.classList.remove("focus-visible"),i.removeEventListener("keydown",e),i.removeEventListener("keyup",e),i.removeEventListener("mousedown",s),i.removeEventListener("mousedown",s)}}},1:(g,d,c)=>{function l(r){const n=r.closest("form");if(null!=n){const o=document.createElement("button");o.type="submit",o.style.display="none",n.appendChild(o),o.click(),o.remove()}}c.d(d,{s:()=>l})},2599:(g,d,c)=>{c.d(d,{F:()=>r});var l=c(8708);const r=(n,o)=>{var i,t,e,s,u,h,a,f;const v=(Array.isArray(n.errorText)?n.errorText:[n.errorText]).filter(w=>null!=w&&""!==w.trim()),_=null!=n.label&&""!==n.label.trim()||null!==(i=n.hasLabelSlot)&&void 0!==i&&i,m=null!=n.helpText&&""!==n.helpText.trim()||null!==(t=n.hasHelpTextSlot)&&void 0!==t&&t,b=(v.length>0||null!==(e=n.hasErrorTextSlot)&&void 0!==e&&e)&&null!==(s=n.displayError)&&void 0!==s&&s;return(0,l.h)("div",{part:"form-control",class:{"form-control":!0,"form-control--small":"small"===n.size,"form-control--medium":"medium"===n.size,"form-control--large":"large"===n.size,"form-control--has-label":_,"form-control--has-help-text":m,"form-control--has-error-text":b,"form-control--disabled":null!==(u=n.disabled)&&void 0!==u&&u,"form-control--invalid":null!==(h=n.displayError)&&void 0!==h&&h&&!n.disabled}},(0,l.h)("label",{part:"label",id:n.labelId,class:{"form-control__label":!0,"form-control__label__required":null!==(a=n.required)&&void 0!==a&&a},htmlFor:n.inputId,"aria-hidden":_?"false":"true",onClick:n.onLabelClick},(0,l.h)("slot",{name:"label"},n.label)),(0,l.h)("div",{class:"form-control__input"},o),(0,l.h)("div",{part:"error-text",id:n.errorTextId,class:"form-control__error-text","aria-hidden":b?"false":"true"},(0,l.h)("slot",{name:"error-text"},v.slice(0,null!==(f=n.errorTextCount)&&void 0!==f?f:1).map(w=>(0,l.h)("six-error",null,w)))),(0,l.h)("div",{part:"help-text",id:n.helpTextId,class:"form-control__help-text","aria-hidden":m?"false":"true"},(0,l.h)("slot",{name:"help-text"},n.helpText)))}},8111:(g,d,c)=>{c.d(d,{M:()=>n,i:()=>l});const l=()=>{let o=!1;const i=document.createElement("div");return i.focus&&i.focus({get preventScroll(){return o=!0,!1}}),o};let r=[];class n{constructor(i,t){this.element=i,this.options=t,this.handleFocusIn=this.handleFocusIn.bind(this)}activate(){r.push(this.element),document.addEventListener("focusin",this.handleFocusIn)}deactivate(){r=r.filter(i=>i!==this.element),document.removeEventListener("focusin",this.handleFocusIn)}isActive(){return r[r.length-1]===this.element}handleFocusIn(i){var t,e;const s=i.target,u=this.element.tagName.toLowerCase();this.isActive()&&s.closest(u)!==this.element&&"function"==typeof(null===(t=this.options)||void 0===t?void 0:t.onFocusOut)&&(null===(e=this.options)||void 0===e||e.onFocusOut(i))}}},2834:(g,d,c)=>{function l(t,e,s,u,h,a){if(!t||null==e||null==s||null==u)return;const f=o(e),v=s.getBoundingClientRect(),_=v.top,m=f.top,b=n(s,u,h);b&&_<m&&(e.style.top=m-f.height-v.height+"px"),a(b)}function r(t){setTimeout(()=>{if(null==t)return;const e=t.getBoundingClientRect();e.y<0&&window.innerHeight-e.height>0&&Math.abs(e.y)<=e.height?(o(t),t.style.top="0px"):window.innerHeight<e.y+e.height&&window.innerHeight>e.height&&Math.abs(e.y-window.innerHeight)<=e.height&&(o(t),t.style.top=window.innerHeight-e.height+"px"),window.innerWidth<e.x+e.width&&window.innerWidth>e.width&&Math.abs(e.x-window.innerWidth)<=e.width&&(o(t),t.style.left=window.innerWidth-e.width+"px")},0)}function n(t,e,s){const u=t.getBoundingClientRect(),h=e.getBoundingClientRect(),a=Math.max(h.height,s);return u.y>window.innerHeight/2&&window.innerHeight<u.bottom+a}function o(t){const e=t.getBoundingClientRect();return t.style.position="fixed",t.style.top=e.top+"px",t.style.left=e.left+"px",t.style.width=e.width+"px",t.style.height=e.height+"px",e}function i(t,e,s,u,h,a){if(!t||!e||null==s||null==u||null==h)return;const v=s.getBoundingClientRect().height,_=u.getBoundingClientRect(),m=_.top,b=_.height;s.style.top=n(u,h,a)?m-v+"px":`${m+b}px`}c.d(d,{a:()=>l,b:()=>r,c:()=>n,m:()=>i})},6238:(g,d,c)=>{function l(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}c.d(d,{g:()=>l,l:()=>n,s:()=>i,u:()=>o});const r=new Set;function n(t){r.add(t),document.body.classList.add("six-scroll-lock")}function o(t){r.delete(t),0===r.size&&document.body.classList.remove("six-scroll-lock")}function i(t,e,s="vertical",u="smooth"){const h=l(t,e),a=h.top+e.scrollTop,f=h.left+e.scrollLeft,_=e.scrollLeft+e.offsetWidth,m=e.scrollTop,b=e.scrollTop+e.offsetHeight;("horizontal"===s||"both"===s)&&(f<e.scrollLeft?e.scrollTo({left:f,behavior:u}):f+t.clientWidth>_&&e.scrollTo({left:f-e.offsetWidth+t.clientWidth,behavior:u})),("vertical"===s||"both"===s)&&(a<m?e.scrollTo({top:a,behavior:u}):a+t.clientHeight>b&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:u}))}},3688:(g,d,c)=>{function l(i){const t=null!=i?i.assignedNodes({flatten:!0}):[];let e="";return[...t].map(s=>{s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e}function r(i,t){return null!=t&&""!==t?null!==i.querySelector(`[slot="${t}"]`):Array.from(i.childNodes).some(e=>{var s;return e.nodeType===e.TEXT_NODE&&""!==(null===(s=e.textContent)||void 0===s?void 0:s.trim())||e.nodeType===e.ELEMENT_NODE&&!e.hasAttribute("slot")})}c.d(d,{a:()=>l,b:()=>n,g:()=>o,h:()=>r});const n=i=>{var t;return null===(t=i.querySelector("slot"))||void 0===t?void 0:t.assignedElements({flatten:!0})};function o(i,t){return null==i?null:i.querySelector(`[slot="${t}"]`)}},9417:(g,d,c)=>{c.d(d,{I:()=>l,a:()=>r});var l=(()=>{return(n=l||(l={})).NUMBER="number",n.LETTER="letter",n.CAPITAL_LETTER="capital-letter",n.LOWER_LETTER="lower-letter",n.CUSTOM="custom",l;var n})(),r=(()=>{return(n=r||(r={})).BEFORE="before",n.AFTER="after",r;var n})()}}]);