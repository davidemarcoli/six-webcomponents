(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{283:function(t,i,s){"use strict";s.r(i),s.d(i,"six_switch",(function(){return h}));var e=s(26);let c=0,h=class{constructor(t){Object(e.i)(this,t),this.sixBlur=Object(e.e)(this,"six-switch-blur",7),this.sixChange=Object(e.e)(this,"six-switch-change",7),this.sixFocus=Object(e.e)(this,"six-switch-focus",7),this.switchId="switch-"+ ++c,this.labelId="switch-label-"+c,this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.invalid=!1,this.defaultValue=""}handleCheckedChange(){this.input.checked=this.checked,this.sixChange.emit(this.checked)}connectedCallback(){this.handleClick=this.handleClick.bind(this),this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this)}componentWillLoad(){this.defaultValue=this.value}async setFocus(t){this.input.focus(t)}async removeFocus(){this.input.blur()}async reportValidity(){return this.input.reportValidity()}async checkValidity(){return this.input.validity.valid}async setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}async reset(){this.value=this.defaultValue,this.input.setCustomValidity(""),this.invalid=!1}handleClick(){this.checked=this.input.checked}handleBlur(){this.hasFocus=!1,this.sixBlur.emit(this.checked)}handleFocus(){this.hasFocus=!0,this.sixFocus.emit()}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0)}handleMouseDown(t){t.preventDefault(),this.input.focus()}render(){return Object(e.g)("label",{part:"base",htmlFor:this.switchId,class:{switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus},onMouseDown:this.handleMouseDown},Object(e.g)("span",{part:"control",class:"switch__control"},Object(e.g)("span",{part:"thumb",class:"switch__thumb"}),Object(e.g)("input",{ref:t=>this.input=t,id:this.switchId,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,role:"switch","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onClick:this.handleClick,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown})),Object(e.g)("span",{part:"label",id:this.labelId,class:"switch__label"},Object(e.g)("slot",null)))}static get watchers(){return{checked:["handleCheckedChange"]}}};h.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--height:var(--six-selection-control-toggle-size);--thumb-size:calc(var(--six-selection-control-toggle-size) - 4px);--width:calc(var(--height) * 2);display:inline-block}.switch{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-input-font-size-medium);font-weight:var(--six-input-font-weight);color:var(--six-input-color);vertical-align:middle;cursor:pointer}.switch__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--width);height:var(--height);background-color:var(--six-selection-control-color-disabled);border-radius:var(--height);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color}.switch__control .switch__thumb{width:var(--thumb-size);height:var(--thumb-size);background-color:var(--six-input-background-color);border-radius:50%;transform:translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));transition:var(--six-transition-fast) transform ease, var(--six-transition-fast) background-color, var(--six-transition-fast) border-color, var(--six-transition-fast) box-shadow}.switch__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover{background-color:var(--six-input-border-color-hover)}.switch--checked .switch__control{background-color:var(--six-selection-control-color)}.switch--checked .switch__control .switch__thumb{background-color:var(--six-color-white);transform:translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2))}.switch.switch--checked:not(.switch--disabled) .switch__control:hover{background-color:var(--six-input-border-color-focus)}.switch--disabled{cursor:not-allowed;color:var(--six-selection-control-color-disabled)}.switch--disabled .switch__control{background-color:var(--six-selection-control-color-disabled)}.switch--disabled.switch--checked .switch__control{background-color:var(--six-selection-control-color-disabled)}.switch__label{line-height:var(--height);margin-left:0.5em;user-select:none}"}}]);