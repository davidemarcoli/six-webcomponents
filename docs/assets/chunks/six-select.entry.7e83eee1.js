import{r as x,c,h as r,g as b}from"../app.e81e651b.js";import{h as d,a as g}from"./slot-ad36df3a.ca288e58.js";import{F as f}from"./form-control-b0febe88.8316250a.js";import{E as v}from"./event-listeners-f6e5b0ab.8644075f.js";import{D as m,a as _}from"./execution-control-e0892a05.ca9145b2.js";import"./framework.2094cf97.js";import"./theme.77f1657b.js";function y(t){return Array.isArray(t)?t.length===0:t===""}const w=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none;text-align:left}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*"}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{display:block}.select{display:block}.select__box{display:inline-flex;align-items:center;justify-content:start;position:relative;width:100%;font-family:var(--six-font-family);font-weight:var(--six-input-font-weight);font-size:var(--six-input-font-size-medium);letter-spacing:var(--six-input-letter-spacing);background-color:var(--six-input-background-color);border:solid var(--six-border-width) var(--six-input-border-color);vertical-align:middle;transition:var(--six-transition-fast) color, var(--six-transition-fast) border, var(--six-transition-fast) box-shadow;cursor:pointer}.select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select__box--autocomplete{border:none;overflow:initial}.select:not(.select--disabled) .select__box:hover{background-color:var(--six-input-background-color-hover);color:var(--six-input-color-hover);border-bottom-color:var(--six-input-border-color-hover)}.select:not(.select--disabled) .select__box:hover:not(.select__box--line){border-color:var(--six-input-border-color-hover)}.select:not(.select--disabled) .select__box:focus{background-color:var(--six-input-background-color-focus);outline:none;color:var(--six-input-color-focus);border-bottom-color:var(--six-input-border-color-focus);box-shadow:0 1px 0 0 var(--six-input-border-color-focus)}.select:not(.select--disabled) .select__box:focus:not(.select__box--line){border-color:var(--six-input-border-color-focus);box-shadow:var(--six-input-focus-shadow)}.select--disabled .select__box{background-color:var(--six-input-background-color-disabled);color:var(--six-input-color-disabled);cursor:not-allowed;outline:none}.select--disabled .select__box:not(.select__box--line){border-color:var(--six-input-border-color-disabled)}.select--disabled .select__tags,.select--disabled .select__clear{pointer-events:none}.select--invalid:not(.select--disabled):not(.select--focused) .select__box{border-bottom-color:var(--six-input-border-color-danger)}.select--invalid:not(.select--disabled):not(.select--focused) .select__box:not(.input--line){border-color:var(--six-input-border-color-danger)}.select__label{flex-shrink:1;flex-grow:1;align-items:center;user-select:none;width:0;scrollbar-width:none;-ms-overflow-style:none;overflow-x:auto;overflow-y:hidden;text-overflow:ellipsis}.select__label::-webkit-scrollbar{width:0;height:0}.select__label--single{white-space:nowrap}.select__clear{flex-shrink:0;flex-grow:0;display:inline}.select__icon{flex-shrink:0;flex-grow:0;display:inline;transition:var(--six-transition-medium) transform ease}.select--open .select__icon{transform:rotate(-180deg)}.select--placeholder-visible .select__label{color:var(--six-input-placeholder-color)}.select--disabled.select--placeholder-visible .select__label{color:var(--six-input-placeholder-color-disabled)}.select__tags{display:flex;align-items:center;flex-wrap:wrap;justify-content:left;margin-left:var(--six-spacing-xx-small)}.select__hidden-select{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.select__input{position:absolute;top:0;left:0;width:100%;height:100%}.select--small .select__box{border-radius:var(--six-input-border-radius-small);font-size:var(--six-input-font-size-small);min-height:var(--six-height-small)}.select--small .select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select--small .select__label{margin:0 var(--six-input-spacing-small)}.select--small .select__clear{margin-right:var(--six-spacing-xxx-small)}.select--small .select__icon{margin-right:var(--six-spacing-x-small)}.select--small .select__tags{padding-bottom:2px}.select--small .select__tags six-tag{padding-top:2px;margin-right:var(--six-spacing-xx-small)}.select--small.select--has-tags .select__label{margin-left:0}.select--medium .select__box{border-radius:var(--six-input-border-radius-medium);font-size:var(--six-input-font-size-medium);min-height:var(--six-height-medium)}.select--medium .select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select--medium .select__label{margin:0 var(--six-input-spacing-medium)}.select--medium .select__clear{margin-right:var(--six-spacing-xxx-small)}.select--medium .select__icon{margin-right:var(--six-spacing-x-small)}.select--medium .select__tags{padding-bottom:3px}.select--medium .select__tags six-tag{padding-top:3px;margin-right:var(--six-spacing-xx-small)}.select--medium.select--has-tags .select__label{margin-left:0}.select--large .select__box{border-radius:var(--six-input-border-radius-large);font-size:var(--six-input-font-size-large);min-height:var(--six-height-large)}.select--large .select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select--large .select__label{margin:0 var(--six-input-spacing-large)}.select--large .select__clear{margin-right:var(--six-spacing-xxx-small)}.select--large .select__icon{margin-right:var(--six-spacing-x-small)}.select--large .select__tags{padding-bottom:4px}.select--large .select__tags six-tag{padding-top:4px;margin-right:var(--six-spacing-xx-small)}.select--large.select--has-tags .select__label{margin-left:0}.select--pill.select--small .select__box{border-radius:var(--six-height-small)}.select--pill.select--medium .select__box{border-radius:var(--six-height-medium)}.select--pill.select--large .select__box{border-radius:var(--six-height-large)}.select__menu{max-width:50vw;width:fit-content}.select__menu--filtered{width:100% !important}.select__menu--hidden{display:none}six-icon-button::part(base){padding-top:0;padding-bottom:0}';let n=0;const S=class{constructor(t){x(this,t),this.sixChange=c(this,"six-select-change",7),this.sixFocus=c(this,"six-select-focus",7),this.sixBlur=c(this,"six-select-blur",7),this.inputId=`select-${++n}`,this.labelId=`select-label-${n}`,this.helpTextId=`select-help-text-${n}`,this.errorTextId=`select-error-text-${n}`,this.touched=!1,this.eventListeners=new v,this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleClearClick=e=>{e.stopPropagation(),this.clearValues(),this.sixChange.emit({value:this.value,isSelected:!0})},this.handleSelectAll=e=>{const s=this.getItems().filter(a=>a.style.display!=="none"),l=e.key,i=e.code;if(l!=="Control"&&this.isOpen&&this.multiple&&i==="KeyA"&&e.ctrlKey){e.preventDefault();const a=s.some(o=>!o.disabled&&!o.checked);s.filter(o=>!o.disabled).forEach(o=>o.checked=a);const h=s.filter(o=>o.checked).map(o=>o.value);this.value=a?h:[],this.sixChange.emit({value:this.value,isSelected:!0})}},this.handleKeyDown=e=>{var s,l,i,a;const h=e.target,o=this.getItems(),u=o[0],p=o[o.length-1];if(h.tagName.toLowerCase()!=="six-tag"){if(e.key==="Tab"){this.isOpen&&((s=this.dropdown)===null||s===void 0||s.hide());return}if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.isOpen||(l=this.dropdown)===null||l===void 0||l.show(),e.key==="ArrowDown"&&u){u.setFocus();return}if(e.key==="ArrowUp"&&p){p.setFocus();return}}this.isOpen||(e.stopPropagation(),e.preventDefault(),(i=this.dropdown)===null||i===void 0||i.show(),(a=this.menu)===null||a===void 0||a.typeToSelect(e.key))}},this.handleLabelClick=()=>{var e;(e=this.box)===null||e===void 0||e.focus()},this.handleMenuSelect=e=>{const s=e.detail.item,l=()=>this.multiple?this.value.includes(s.value)?this.value.filter(i=>i!==s.value):[...this.value,s.value]:s.value;this.value=l(),this.syncItemsFromValue(),this.sixChange.emit({value:this.value,isSelected:!0})},this.handleMenuShow=e=>{var s;if(this.disabled){e.preventDefault();return}this.resizeMenu(),(s=this.resizeObserver)===null||s===void 0||s.observe(this.host),this.isOpen=!0},this.handleMenuHide=()=>{var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.host),this.isOpen=!1},this.handleSlotChange=()=>{this.hasHelpTextSlot=d(this.host,"help-text"),this.hasLabelSlot=d(this.host,"label"),this.hasErrorTextSlot=d(this.host,"error-text"),this.syncItemsFromValue()},this.handleTagInteraction=e=>{e.composedPath().find(i=>{if(i instanceof HTMLElement)return i.classList.contains("tag__clear")})&&(e.stopPropagation(),this.sixChange.emit({value:this.value,isSelected:!0}))},this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.hasErrorTextSlot=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.filterPlaceholder=void 0,this.filterDebounce=m,this.size="medium",this.hoist=!1,this.value="",this.pill=!1,this.helpText="",this.required=!1,this.clearable=!1,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1,this.line=!1,this.filter=!1,this.asyncFilter=!1,this.autocomplete=!1,this.inputDebounce=m,this.options=null,this.virtualScroll=!1}handleDisabledChange(){var t;this.disabled&&this.isOpen&&((t=this.dropdown)===null||t===void 0||t.hide())}handleLabelChange(){this.handleSlotChange()}handleMultipleChange(){const t=this.getValueAsArray();this.value=this.multiple?t:t[0]||"",this.syncItemsFromValue()}async handleValueChange(){this.multiple&&!Array.isArray(this.value)&&(this.value=[]),!this.multiple&&typeof this.value!="string"&&(this.value=""),await this.syncItemsFromValue()}connectedCallback(){var t;this.virtualScroll&&this.options===null&&console.error("Options must be defined when using virtual scrolling"),(t=this.host.shadowRoot)===null||t===void 0||t.addEventListener("slotchange",this.handleSlotChange),this.eventListeners.forward("six-select-change","change",this.host),this.eventListeners.forward("six-select-blur","blur",this.host),this.eventListeners.forward("six-select-focus","focus",this.host)}componentWillLoad(){this.handleSlotChange(),this.multiple&&this.value!=null&&(this.value=this.getValueAsArray())}componentDidLoad(){if(this.input==null)return;const t=this.input;this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),requestAnimationFrame(()=>this.syncItemsFromValue()),this.eventListeners.add(t,"six-input-input",_(e=>{const s=t.value;this.clearValues(),this.sixChange.emit({value:s,isSelected:!1}),e.stopPropagation()},this.inputDebounce)),t.value=this.hasSelection()?this.displayLabel:""}disconnectedCallback(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}async setFocus(t){var e;this.hasFocus=!0,(e=this.box)===null||e===void 0||e.focus(t)}getItemLabel(t){var e,s;const l=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelector("slot:not([name])");return l!=null?g(l):(s=t.textContent)!==null&&s!==void 0?s:""}getItems(){return this.options!==null?this.options.map(t=>r("six-menu-item",{value:t.value},t.label)):[...this.host.querySelectorAll("six-menu-item")]}hasMenuItems(){return this.getItems().length>0}getValueAsArray(){return(Array.isArray(this.value)?this.value:this.value===""?[]:[this.value]).map(String)}clearValues(){this.value=this.multiple?[]:"",this.syncItemsFromValue()}resizeMenu(){this.menu==null||this.box==null||(this.menu.style.minWidth=`${this.box.clientWidth}px`,this.dropdown&&this.dropdown.reposition())}async syncItemsFromValue(){const t=this.getItems(),e=this.getValueAsArray();if(t.forEach(s=>s.checked=e.includes(s.value)),this.multiple){const s=[];if(e.forEach(l=>t.map(i=>i.value===l?s.push(i):null)),this.displayTags=s.map(l=>r("six-tag",{exportparts:"base:tag",type:"primary",size:this.size,pill:this.pill,clearable:!0,onClick:this.handleTagInteraction,onKeyDown:this.handleTagInteraction,"onSix-tag-clear":i=>{i.stopPropagation(),this.disabled||(l.checked=!1,this.syncValueFromItems())}},this.getItemLabel(l))),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const l=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(r("six-tag",{exportparts:"base:tag",type:"info",size:this.size},"+",l-this.maxTagsVisible))}}else this.displayLabel=this.extractLabelForSelectedItem(e,t),this.displayTags=[];y(this.value)||(this.touched=!0),this.touched&&this.input!=null&&(this.input.value=Array.isArray(this.value)?this.value.join(","):this.value)}extractLabelForSelectedItem(t,e){if(t.length===0||t.length===1&&t[0]==="")return"";if(this.options!==null){const l=this.options.find(i=>i.value===t[0]);return(l==null?void 0:l.value)||""}const s=e.find(l=>l.value===t[0]);return s?this.getItemLabel(s):""}syncValueFromItems(){const s=this.getItems().filter(l=>l.checked).map(l=>l.value);this.value=this.multiple?this.getValueAsArray().filter(l=>s.includes(l)):s.length>0?s[0]:""}render(){var t;const e=this.hasSelection();return r(f,{inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,errorTextId:this.errorTextId,errorText:this.errorText,errorTextCount:this.errorTextCount,hasErrorTextSlot:this.hasErrorTextSlot,size:this.size,onLabelClick:this.handleLabelClick,disabled:this.disabled,required:this.required,displayError:this.invalid},r("six-dropdown",{part:"base",ref:s=>this.dropdown=s,hoist:this.hoist,closeOnSelect:!this.multiple,containingElement:this.host,disableHideOnEnterAndSpace:this.autocomplete,class:{select:!0,"select--open":this.isOpen,"select--empty":((t=this.value)===null||t===void 0?void 0:t.length)===0,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--has-tags":this.multiple&&e,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid},onKeyDown:this.handleSelectAll,"onSix-dropdown-show":this.handleMenuShow,"onSix-dropdown-hide":this.handleMenuHide,filterPlaceholder:this.filterPlaceholder,filterDebounce:this.filterDebounce,filter:this.filter,asyncFilter:this.asyncFilter},r("div",{slot:"trigger",ref:s=>this.box=s,id:this.inputId,class:{select__box:!0,"select__box--line":this.line,"select__box--autocomplete":this.autocomplete},role:"combobox","aria-labelledby":this.labelId,"aria-describedby":this.helpTextId,"aria-haspopup":"true","aria-expanded":this.isOpen?"true":"false",tabIndex:this.disabled?-1:0,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown},r("span",{class:{select__label:!0,"select__label--single":!this.displayTags.length}},this.displayTags.length>0?r("span",{part:"tags",class:"select__tags"},this.displayTags):this.displayLabel||this.placeholder),this.clearable&&e&&r("six-icon-button",{exportparts:"base:clear-button",class:"select__clear",name:"clear",size:"small",onClick:this.handleClearClick,tabindex:"-1"}),this.hasMenuItems()&&r("span",{part:"icon",class:"select__icon"},r("six-icon",{size:"medium"},"expand_more")),r("six-input",{ref:s=>this.input=s,class:{select__input:!0,"select__hidden-select":!this.autocomplete},"aria-hidden":"true",required:this.required,onFocus:this.handleFocus,clearable:this.clearable,placeholder:this.placeholder,pill:this.pill,disabled:this.disabled,size:this.size,tabIndex:-1})),r("six-menu",{ref:s=>this.menu=s,part:"menu",class:{select__menu:!0,"select__menu--filtered":this.filter||this.asyncFilter,"select__menu--hidden":!this.hasMenuItems()},"onSix-menu-item-selected":this.handleMenuSelect,items:this.options,virtualScroll:this.virtualScroll,"remove-box-shadow":!0},r("slot",{onSlotchange:this.handleSlotChange}))))}hasSelection(){return this.multiple?this.value.length>0:this.value!==""}get host(){return b(this)}static get watchers(){return{disabled:["handleDisabledChange"],helpText:["handleLabelChange"],errorText:["handleLabelChange"],label:["handleLabelChange"],multiple:["handleMultipleChange"],value:["handleValueChange"]}}};S.style=w;export{S as six_select};
