import{r as s,h as r,g as a}from"../app.a0b9e57c.js";import"./framework.2094cf97.js";import"./theme.3e57d3ca.js";const h=class{constructor(e){s(this,e),this.value={}}componentWillLoad(){this.injectAttrs()}attrsUpdated(){this.injectAttrs()}injectAttrs(){const e=this.host.firstElementChild;if(typeof(e==null?void 0:e.assignedElements)!="function")return;const o=e.assignedElements().pop();if(!o)return;const n={undefined:t=>o.removeAttribute(t),boolean:(t,i)=>{i!=null?o.setAttribute(t,""):o.removeAttribute(t)},number:(t,i)=>o.setAttribute(t,i),string:(t,i)=>o.setAttribute(t,i),object:(t,i)=>o.setAttribute(t,JSON.stringify(i))};for(const[t,i]of Object.entries(this.value))n[typeof i](t,i)}render(){return r("slot",null)}get host(){return a(this)}static get watchers(){return{value:["attrsUpdated"]}}},c=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:grid}.center-content{display:grid;align-self:center;justify-self:center;grid-gap:5px;grid-auto-flow:column}.align-item{margin:auto}.indicator,.indicator--acceptance,.indicator--etu,.indicator--dev,.indicator--itu{font-family:var(--six-font-family);font-size:14px;font-weight:var(--six-font-weight-bold);display:grid;align-content:center;width:100%;height:24px}.indicator--itu{background-color:var(--six-color-success-600);color:var(--six-color-web-rock-900)}.indicator--dev{background-color:var(--six-color-web-rock-900);color:var(--six-color-white)}.indicator--etu{background-color:var(--six-color-action-600);color:var(--six-color-white)}.indicator--acceptance{background-color:var(--six-color-warning-800);color:var(--six-color-web-rock-900)}",l=class{constructor(e){s(this,e),this.stage=null}render(){return this.stage==null||this.stage=="PROD"?null:r("div",{class:`indicator--${this.stage.toLowerCase()}`},r("div",{class:"center-content"},r("six-icon",{class:"align-item",size:"small"},"error_outline"),r("span",{class:"align-item"},r("slot",null))))}};l.style=c;export{h as set_attributes,l as six_stage_indicator};