"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[3055],{3055:(ve,R,p)=>{p.r(R),p.d(R,{six_datepicker:()=>N});var M=p(4795),n=p(8708),K=p(9643),S=p(1497),O=p(3688),Y=p(2834);const z=e=>"string"==typeof e,x={en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthsShortGrouped:[["Jan","Feb","Mar","Apr"],["May","Jun","Jul","Aug"],["Sep","Oct","Nov","Dec"]],weekdays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],weekdaysShort:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],weekdaysMin:["Mo","Tu","We","Th","Fr","Sa","Su"]},de:{months:["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthsShort:["Jan.","Feb.","M\xe4rz","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],monthsShortGrouped:[["Jan.","Feb.","M\xe4rz","Apr."],["Mai","Juni","Juli","Aug."],["Sep.","Okt.","Nov.","Dez."]],weekdays:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],weekdaysShort:["Mo.","Di.","Mi.","Do.","Fr.","Sa.","So."],weekdaysMin:["Mo","Di","Mi","Do","Fr","Sa","So"]},fr:{months:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"],monthsShort:["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],monthsShortGrouped:[["janv.","f\xe9vr.","mars","avr."],["mai","juin","juil.","ao\xfbt"],["sept.","oct.","nov.","d\xe9c."]],weekdays:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],weekdaysShort:["lun.","mar.","mer.","jeu.","ven.","sam.","dim."],weekdaysMin:["lu","ma","me","je","ve","sa","di"]},it:{months:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],monthsShort:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],monthsShortGrouped:[["gen","feb","mar","apr"],["mag","giu","lug","ago"],["set","ott","nov","dic"]],weekdays:["luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato","domenica"],weekdaysShort:["lun","mar","mer","gio","ven","sab","dom"],weekdaysMin:["lu","ma","me","gi","ve","sa","do"]}},c=()=>new Date,m=e=>e instanceof Date&&!isNaN(e.getTime())&&"Invalid Date"!==new Date(e).toString(),A=e=>{if(e&&m(e))return e.getFullYear();throw new Error("Not a valid date")},P=e=>{if(e&&m(e))return e.getMonth();throw new Error("Not a valid date")},E=e=>{if(e&&m(e))return e.getDate();throw new Error("Not a valid date")},T=e=>{if(e&&m(e))return e.getHours();throw new Error("Not a valid date")},F=e=>{if(e&&m(e))return e.getMinutes();throw new Error("Not a valid date")},j=e=>{if(e&&m(e))return e.getSeconds();throw new Error("Not a valid date")},I=e=>{const t=new Date(e);return t.setDate(t.getDate()-[6,0,1,2,3,4,5][t.getDay()]),t},B=(e,i)=>((e,i)=>e?.getFullYear()===i?.getFullYear())(e,i)&&e?.getMonth()===i?.getMonth(),H=(e,i)=>B(e,i)&&e?.getDate()===i?.getDate(),Q=(e,i)=>H(I(e),I(i)),G=(e,i)=>{if(!z(e)||!z(i)||e.length<6||i.length<6)return!1;const{day:t,month:s}=V(e,i);if(t>31||s>11||t<=0||s<0)return!1;const o=g(e,i);return!(e=>null==e)(o)&&"Invalid Date"!==o.toString()},U=(e,i,t)=>!e||!(i&&e<i||t&&t<e),f=(e,i,t,s=2)=>{const o=s-1,r=i.charAt(e+o)===t;return e+o<i.length&&r},b=(e,i)=>{let t=String(e);for(;t.length<i;)t="0"+t;return t},k=(e,i)=>{if(null==e)return"";let t="";for(let s=0;s<i.length;s++)switch(i.charAt(s)){case"d":f(s,i,"d")?(t+=b(e.getDate(),2),s++):t+=String(e.getDate());break;case"m":f(s,i,"m")?(t+=b(e.getMonth()+1,2),s++):t+=String(e.getMonth()+1);break;case"y":f(s,i,"y",4)?(s+=3,t+=e.getFullYear()):(t+=(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100,s++);break;case"h":f(s,i,"h")?(t+=b(e.getHours(),2),s++):t+=String(e.getHours());break;case"M":f(s,i,"M")?(t+=b(e.getMinutes(),2),s++):t+=String(e.getMinutes());break;case"s":f(s,i,"s")?(t+=b(e.getSeconds(),2),s++):t+=String(e.getSeconds());break;default:t+=i.charAt(s)}return t},q=/(\[[^\[]*\])|(mm|dd|yyyy|yy|hh|MM|ss|.)/g,_=/\d\d/,te=/[^0-9]/g,J="year",W={},D=(e,i,t)=>{const s=Array.isArray(e)?e:[e];let o;o="string"==typeof t?r=>{const a=parseInt(r,10);return{[t]:a}}:t,s.forEach(r=>{W[r]=[i,o]})};D("yy",_,e=>{const i=(new Date).getFullYear(),t=Math.floor(i/100);let s=parseInt(e,10);return s=100*(s>68?t-1:t)+s,{[J]:s}}),D("yyyy",/\d{4}/,J),D("mm",_,e=>({month:parseInt(e,10)-1})),D("dd",_,"day"),D("hh",_,"hour"),D("MM",_,"minute"),D("ss",_,"second");const V=(e,i)=>{const t=((e,i)=>{if(e.length===i.length)return e;const t=e.match(te)[0];return e.split(t).map(s=>1===s.length?"0"+s:s).join(t)})(e,i);return((e,i)=>{const t=i.match(q);if(!t)throw new Error;const{length:s}=t;let o={};for(let r=0;r<s;r+=1){const a=t[r],d=W[a];if(d){const h=d[1],v=(d[0].exec(e)||[])[0],y=h(v);o=Object.assign(Object.assign({},o),y),e=e.replace(v,"")}else{const u=a.replace(/^\[|\]$/g,"");if(0!==e.indexOf(u))throw new Error("not match");e=e.substr(u.length)}}return o})(t,i)},g=(e,i)=>{try{const{backupDate:t=new Date}={},{year:s,month:o,day:r,hour:a,minute:d,second:u,date:h}=V(e,i);if(null!=h)return h;const y=((e,i=new Date)=>{const t=[0,0,1,0,0,0],s=[i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds()];let o=!0;for(let r=0;r<7;r++)void 0===e[r]?t[r]=o?s[r]:t[r]:(t[r]=e[r],o=!1);return t})([s,o,r,a,d,u],t);return((e,i,t,s,o,r)=>{if(!(e<100&&e>=0))return new Date(e,i,t,s,o,r);const a=new Date(e+400,i,t,s,o,r);return isFinite(a.getFullYear())&&a.setFullYear(e),a})(...y)}catch{return new Date(NaN)}};var C=(()=>{return(e=C||(C={})).DDMMYYY_DOT="dd.mm.yyyy",e.YYYYMMDD_DASH="yyyy-mm-dd",e.DDMMYYYY_DASH="dd-mm-yyyy",e.DDMMYYYY_SLASH="dd/mm/yyyy",e.YYYYMMDD_SLASH="yyyy/mm/dd",e.DDMMYY_DOT="dd.mm.yy",e.YYMMDD_DASH="yy-mm-dd",e.DDMMYY_DASH="dd-mm-yy",e.DDMMYY_SLASH="dd/mm/yy",e.YYMMDD_SLASH="yy/mm/dd",e.DDMMYYY_DOT_TIME="dd.mm.yyyy hh:MM:ss",e.YYYYMMDD_DASH_TIME="yyyy-mm-dd hh:MM:ss",e.DDMMYYYY_DASH_TIME="dd-mm-yyyy hh:MM:ss",e.DDMMYYYY_SLASH_TIME="dd/mm/yyyy hh:MM:ss",e.YYYYMMDD_SLASH_TIME="yyyy/mm/dd hh:MM:ss",e.DDMMYY_DOT_TIME="dd.mm.yy hh:MM:ss",e.YYMMDD_DASH_TIME="yy-mm-dd hh:MM:ss",e.DDMMYY_DASH_TIME="dd-mm-yy hh:MM:ss",e.DDMMYY_SLASH_TIME="dd/mm/yy hh:MM:ss",e.YYMMDD_SLASH_TIME="yy/mm/dd hh:MM:ss",C;var e})();const pe=e=>{const i=e.locale,t=o=>i.monthsShort[c().getMonth()]===o,s=o=>{var r;return(null===(r=e.selectedDate)||void 0===r?void 0:r.getMonth())===i.monthsShort.findIndex(a=>a===o)};return(0,n.h)("table",{class:"datepicker-table",part:"month-selection"},(0,n.h)("tbody",null,i.monthsShortGrouped.map(o=>(0,n.h)("tr",{class:"datepicker-table__row"},o.map(r=>(0,n.h)("td",{onClick:()=>e.onClickMonthCell(r),class:{"datepicker-table__cell":!0,"datepicker-table__cell--is-today":t(r),"datepicker-table__cell--is-selected":s(r)}},r))))))},me=e=>(0,n.h)("table",{class:"datepicker-table",part:"day-selection"},(0,n.h)("thead",{part:"weekday-header"},e.locale.weekdaysMin.map(i=>(0,n.h)("th",{class:"datepicker__cell"},i))),(0,n.h)("tbody",null,e.calendarGrid.map(i=>(0,n.h)("tr",{class:"datepicker-table__row"},i.map(t=>(0,n.h)("td",{"data-date":t.dateString,onClick:()=>e.onClickDateCell(t),class:{"datepicker-table__cell":!0,"datepicker-table__cell--is-today":t.isToday,"datepicker-table__cell--is-selected":t.isSelected,"datepicker-table__cell--is-outdated":t.isOutdated,"datepicker-table__cell--is-disabled":t.isDisabled,"datepicker-table__cell--is-selectable":!t.isDisabled}},t.label)))))),De=e=>(0,n.h)("table",{class:"datepicker-table",part:"year-selection"},(0,n.h)("tbody",null,e.yearSelection.map(i=>(0,n.h)("tr",{class:"datepicker-table__row"},i.map(t=>{var s;return(0,n.h)("td",{onClick:()=>e.onClickYearCell(t),class:{"datepicker-table__cell":!0,"datepicker-table__cell--is-today":c().getFullYear()===t,"datepicker-table__cell--is-selected":(null===(s=e.selectedDate)||void 0===s?void 0:s.getFullYear())===t}},t)})))));var l=(()=>{return(e=l||(l={})).DAY="day",e.MONTH="month",e.YEAR="year",l;var e})();const N=class{constructor(e){var i=this;(0,n.r)(this,e),this.sixSelect=(0,n.c)(this,"six-datepicker-select",7),this.sixClear=(0,n.c)(this,"six-datepicker-clear",7),this.sixBlur=(0,n.c)(this,"six-datepicker-blur",7),this.eventListeners=new K.E,this.previousUnit=()=>{this.selectionMode===l.DAY?this.previousMonth():this.selectionMode===l.MONTH?this.previousYear():this.selectionMode===l.YEAR&&this.previousYearGroup()},this.nextUnit=()=>{this.selectionMode===l.DAY?this.nextMonth():this.selectionMode===l.MONTH?this.nextYear():this.selectionMode===l.YEAR&&this.nextYearGroup()},this.handleDocumentKeyDown=t=>{var s;const o=t;this.open&&"Escape"===o.key&&(o.stopPropagation(),this.closePopup(),null===(s=this.inputElement)||void 0===s||s.setFocus()),"Tab"===o.key&&this.closePopup()},this.handleDocumentMouseDown=t=>{t.composedPath().includes(this.container)||this.closePopup()},this.handleClearClick=function(){var t=(0,M.Z)(function*(s){s.stopPropagation(),yield i.select(void 0),i.sixClear.emit()});return function(s){return t.apply(this,arguments)}}(),this.onTimepickerChange=t=>{const s=t.detail.value,o=new Date;if(null!=this.selectedDate&&o.setFullYear(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDate()),null!=s){const r=s.hours;null!=r&&o.setHours(r,s.minutes,s.seconds)}this.updateValue(o),this.updatePointerDates()},this.onClickDateCell=t=>{t.isDisabled||this.select(t.dateString)},this.onClickMonthCell=t=>{const s=x[this.locale].monthsShort.findIndex(o=>o===t);this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{month:s}),this.selectionMode=l.DAY},this.onClickYearCell=t=>{this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:t}),this.selectionMode=l.DAY},this.handleInputChange=t=>{if(null==this.inputElement)return;t.stopPropagation();const s=this.inputElement.value;if(!G(s,this.dateFormat))return;const o=g(s,this.dateFormat);if(void 0!==o&&(this.updateIfChanged(o),s.replace(/[^\d]/g,"").length>=6)){const a=g(s,this.dateFormat),d=k(a,this.dateFormat);G(d,this.dateFormat)&&(this.selectedDate=g(d,this.dateFormat),this.updatePointerDates(),this.updateValue(this.selectedDate))}},this.handleOnBlur=t=>{var s,o;""===(null===(s=this.inputElement)||void 0===s?void 0:s.value)&&m(this.value)&&(this.value=void 0,this.sixSelect.emit(this.value)),t.stopPropagation();const r=null===(o=this.inputElement)||void 0===o?void 0:o.value,a=g(r,this.dateFormat),d=k(this.value,this.dateFormat);null!=this.inputElement&&null!=a&&r!==d&&(this.inputElement.value=d),this.sixBlur.emit(this.value)},this.pointerDate=N.getCurrentDateAsPointer(),this.selectionMode=l.DAY,this.isDropDownContentUp=!1,this.type="date",this.locale="en",this.open=!1,this.inline=!1,this.readonly=!1,this.disabled=!1,this.allowedDates=()=>!0,this.min=void 0,this.max=void 0,this.closeOnSelect="date"===this.type,this.placement=void 0,this.size="medium",this.required=!1,this.defaultDate=void 0,this.placeholder=void 0,this.value=void 0,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1,this.containingElement=void 0,this.dateFormat=C.DDMMYYY_DOT,this.debounce=S.D,this.name="",this.clearable=!1,this.iconPosition="left",this.hoist=!1}debounceChanged(){this.sixSelect=(0,S.d)(this.sixSelect,this.debounce)}valueChanged(){null!=this.value&&!m(this.value)&&(console.warn("invalid date value: ",this.value),this.value=void 0,this.sixSelect.emit(this.value)),this.selectedDate=this.value,this.updatePointerDates()}resizeHandler(){var e=this;return(0,M.Z)(function*(){e.updateDropdownDirection(),e.moveOpenHoistedPopup(),e.adjustPopupPosition()})()}scrollHandler(){var e=this;return(0,M.Z)(function*(){e.updateDropdownDirection(),e.moveOpenHoistedPopup()})()}moveOpenHoistedPopup(){(0,Y.m)(this.hoist,this.open,this.popup,this.inputElement,this.wrapper,400)}get container(){return this.containingElement||this.host}get firstDateOfBox(){const e=new Date(this.pointerDate.year,this.pointerDate.month,1);return I(e)}setFocus(e){var i=this;return(0,M.Z)(function*(){var t;null===(t=i.inputElement)||void 0===t||t.setFocus(e)})()}get calendarGrid(){return(e=>{const{firstDateOfBox:i,allowedDates:t,dateFormat:s,selectedDate:o,minDate:r,maxDate:a,pointerDate:d}=e,u=new Date(i),h=new Date(i);let v=[];do{let y=[];do{y=[...y,{date:new Date(h),display:k(h,s),dateString:k(h,s),label:E(h).toString(),isToday:H(h,c()),isSelected:o&&H(h,o),isDisabled:!t(h)||!U(h,r,a),isOutdated:d.month!==h.getMonth()||!U(h,r,a)}],h.setDate(h.getDate()+1)}while(Q(h,u));v=[...v,y],u.setDate(u.getDate()+7)}while(B(new Date(d.year,d.month,d.day),h));return v})({firstDateOfBox:this.firstDateOfBox,allowedDates:this.allowedDates,dateFormat:this.dateFormat,locale:this.locale,selectedDate:this.selectedDate,minDate:this.min,maxDate:this.max,pointerDate:this.pointerDate})}updateDropdownDirection(){null==this.inputElement||null==this.wrapper||(this.isDropDownContentUp=(0,Y.c)(this.inputElement,this.wrapper,400))}getMonthStringForIndex(e){return x[this.locale].months[e]}previousYear(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year-1})}previousYearGroup(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year-25})}previousMonth(){this.pointerDate=0===this.pointerDate.month?{year:this.pointerDate.year-1,month:11,day:1,hours:0,minutes:0,seconds:0}:{year:this.pointerDate.year,month:this.pointerDate.month-1,day:1,hours:0,minutes:0,seconds:0}}nextMonth(){this.pointerDate=11===this.pointerDate.month?{year:this.pointerDate.year+1,month:0,day:1,hours:0,minutes:0,seconds:0}:{year:this.pointerDate.year,month:this.pointerDate.month+1,day:1,hours:0,minutes:0,seconds:0}}nextYear(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year+1})}nextYearGroup(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year+25})}openCalendar(){!this.open&&!this.disabled&&(this.open=!0,this.setupEventListenersForOpenPopup())}setupEventListenersForOpenPopup(){this.eventListeners.add(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown)}closePopup(){this.inline||(this.open=!1,this.eventListeners.remove(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.remove(document,"mousedown",this.handleDocumentMouseDown),this.selectionMode=l.DAY)}updatePointerDates(){const e=this.getPointerDate();this.differsFromPointerDate(e)&&(this.pointerDate={year:A(e),month:P(e),day:E(e),hours:T(e),minutes:F(e),seconds:j(e)})}differsFromPointerDate(e){return this.pointerDate.day!==E(e)||this.pointerDate.month!==P(e)||this.pointerDate.year!==A(e)||this.pointerDate.hours!==T(e)||this.pointerDate.minutes!==F(e)||this.pointerDate.seconds!==j(e)}getPointerDate(){return null!=this.selectedDate?this.selectedDate:null==this.defaultDate?"date"===this.type?(e=c(),new Date(e.getFullYear(),e.getMonth(),e.getDate())):c():g(this.defaultDate,this.dateFormat);var e}updateValue(e){this.updateIfChanged(e)}updateIfChanged(e){var i;(null===(i=this.value)||void 0===i?void 0:i.getTime())!==e?.getTime()&&(this.value=e,this.sixSelect.emit(this.value))}select(e){var i=this;return(0,M.Z)(function*(){if(null==e)i.updateValue(void 0);else{const t=g(e,i.dateFormat);t?.setHours(i.pointerDate.hours,i.pointerDate.minutes,i.pointerDate.seconds),i.updateValue(t)}i.updatePointerDates(),i.closeOnSelect&&i.closePopup()})()}componentWillLoad(){this.selectedDate=this.value,this.updatePointerDates(),this.updateValue(this.value),this.inline&&(this.open=!0),this.open&&this.setupEventListenersForOpenPopup()}componentDidLoad(){null!=this.inputElement&&(this.eventListeners.add(this.inputElement,"six-input-input",(0,S.a)(this.handleInputChange,this.debounce)),this.eventListeners.add(this.inputElement,"six-input-blur",this.handleOnBlur))}componentDidRender(){this.adjustPopupPosition()}renderHeader(){return(0,n.h)("header",{class:"datepicker-header",part:"header"},(0,n.h)("div",{class:"datepicker-header__btn prev",onClick:this.previousUnit},(0,n.h)("svg",{viewBox:"0 5 13 13",width:"14",height:"23"},(0,n.h)("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}))),(0,n.h)("div",{class:"datepicker-header__label"},this.selectionMode===l.DAY&&(0,n.h)("div",{onClick:()=>this.selectionMode=l.MONTH},(0,n.h)("span",{class:"datepicker-header__label-month"},this.getMonthStringForIndex(this.pointerDate.month)),(0,n.h)("span",null,(0,n.h)("svg",{viewBox:"-3 -4 24 24",width:"20",height:"20"},(0,n.h)("polyline",{points:"6 9 12 15 18 9"})))),this.selectionMode!==l.YEAR&&(0,n.h)("div",{onClick:()=>this.selectionMode=l.YEAR},(0,n.h)("span",{class:"datepicker-header__label-year"},this.pointerDate.year),(0,n.h)("span",null,(0,n.h)("svg",{viewBox:"-3 -4 24 24",width:"20",height:"20"},(0,n.h)("polyline",{points:"6 9 12 15 18 9"})))),this.selectionMode===l.YEAR&&(0,n.h)("div",null,this.pointerDate.year-Math.floor(12.5)," \u2013"," ",this.pointerDate.year+Math.floor(12.5))),(0,n.h)("div",{class:"datepicker-header__btn next",onClick:this.nextUnit},(0,n.h)("svg",{viewBox:"5 5 13 13",width:"14",height:"23"},(0,n.h)("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}))))}renderBody(){switch(this.selectionMode){case l.DAY:return(0,n.h)(me,{locale:x[this.locale],calendarGrid:this.calendarGrid,onClickDateCell:this.onClickDateCell});case l.MONTH:return(0,n.h)(pe,{locale:x[this.locale],selectedDate:this.selectedDate,onClickMonthCell:this.onClickMonthCell});case l.YEAR:return(0,n.h)(De,{selectedDate:this.selectedDate,yearSelection:(e=this.pointerDate.year,25,[...Array(25).keys()].map(s=>s+e-Math.floor(12.5)).reduce((s,o,r)=>(r%5==0&&s.push([]),s[s.length-1].push(o),s),[])),onClickYearCell:this.onClickYearCell})}var e}renderCustomIcon(){const e=(0,O.h)(this.host,"custom-icon")?(0,n.h)("slot",{name:"custom-icon"}):(0,n.h)("six-icon",{size:"large"===this.size?"medium":this.size},"today");return(0,n.h)("span",{slot:"prefix",part:"icon",class:{prefix:!0,"prefix--right":"right"===this.iconPosition}},e)}renderClearable(){return this.clearable&&(0,n.h)("button",{slot:"suffix",class:{"datepicker-clear":!0,"datepicker-clear--right":"left"===this.iconPosition,"datepicker-clear--left":"right"===this.iconPosition},type:"button",onClick:this.handleClearClick,tabindex:"-1"},(0,n.h)("six-icon",{size:"small"},"clear"))}render(){var e,i,t;return this.adjustPopupPosition(),(0,n.h)("div",{ref:s=>this.wrapper=s,class:"datepicker__container"},(0,n.h)("six-input",{part:"base",value:k(this.value,this.dateFormat),ref:s=>this.inputElement=s,placeholder:this.placeholder,readonly:this.readonly,disabled:this.disabled,name:this.name,label:this.label,required:this.required,errorText:this.errorText,errorTextCount:this.errorTextCount,invalid:this.invalid,onClick:()=>this.openCalendar(),size:this.size,class:{"input--empty":null==this.value}},this.renderCustomIcon(),this.renderClearable(),(0,O.h)(this.host,"label")?(0,n.h)("span",{slot:"label"},(0,n.h)("slot",{name:"label"})):null,(0,O.h)(this.host,"error-text")?(0,n.h)("span",{slot:"error-text"},(0,n.h)("slot",{name:"error-text"})):null),this.open&&(0,n.h)("div",{part:"popup",ref:s=>this.popup=s,class:{datepicker__popup:!0,"datepicker__popup--is-up":null!=this.placement?"top"===this.placement:this.isDropDownContentUp,"datepicker__popup--is-inline":this.inline}},this.renderHeader(),this.renderBody(),"date-time"===this.type&&(0,n.h)("six-timepicker",{inline:!0,"onSix-timepicker-change-debounced":s=>this.onTimepickerChange(s),value:(null===(e=this.selectedDate)||void 0===e?void 0:e.getHours())+":"+(null===(i=this.selectedDate)||void 0===i?void 0:i.getMinutes())+":"+(null===(t=this.selectedDate)||void 0===t?void 0:t.getSeconds())}),(0,n.h)("div",{class:"datepicker__footer"},(0,n.h)("slot",null))))}adjustPopupPosition(){(0,Y.a)(this.hoist,this.popup,this.inputElement,this.wrapper,400,e=>this.isDropDownContentUp=e),(0,Y.b)(this.popup)}connectedCallback(){this.eventListeners.forward("six-datepicker-select","change",this.host),this.eventListeners.forward("six-datepicker-blur","blur",this.host)}disconnectedCallback(){this.eventListeners.removeAll()}static getCurrentDateAsPointer(){return{year:A(c()),month:P(c()),day:E(c()),hours:T(c()),minutes:F(c()),seconds:j(c())}}get host(){return(0,n.g)(this)}static get watchers(){return{debounce:["debounceChanged"],value:["valueChanged"]}}};N.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block;font-family:var(--six-font-family)}.datepicker__container{position:relative}.datepicker__popup{min-width:400px;background-color:white;padding:0.5em 0.5em 1.5em;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);user-select:none;position:absolute;z-index:var(--six-z-index-dropdown);right:0;left:0}.datepicker__popup--is-up{bottom:100%;min-height:382px}.datepicker__popup--is-inline{position:initial;box-shadow:none;border:1px solid var(--six-color-web-rock-400)}.datepicker-header{display:flex;justify-content:space-between;border-bottom:1px solid var(--six-color-web-rock-400);padding:0.5em;margin-bottom:1em}.datepicker-header svg{fill:var(--six-color-web-rock-900);stroke:none}.datepicker-header__btn{cursor:pointer;width:2.5em;height:2.5em;display:flex;vertical-align:middle;align-items:center;justify-content:center}.datepicker-header__btn:hover{background-color:var(--six-color-web-rock-100);border-radius:100%}.datepicker-header__label{display:flex}.datepicker-header__label>div{cursor:pointer;padding:0.5em;display:flex;vertical-align:middle;align-items:center;justify-content:center}.datepicker-header__label>div:hover{background-color:var(--six-color-web-rock-100)}.datepicker-table{width:100%}.datepicker-table__cell{text-align:center;width:2.5rem;height:2.5rem;cursor:pointer}.datepicker-table__cell:hover{background-color:var(--six-color-web-rock-100)}.datepicker-table__cell--is-today{border:1px solid var(--six-color-web-rock-400)}.datepicker-table__cell--is-selected{background-color:var(--six-color-red);color:var(--six-color-white)}.datepicker-table__cell--is-disabled{background-color:var(--six-color-web-rock-200);cursor:initial}.datepicker-table__cell--is-disabled:hover{background-color:var(--six-color-web-rock-200)}.datepicker-table__cell--is-outdated{color:var(--six-color-web-rock-400)}.datepicker-clear{display:inline-flex;align-items:center;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;padding:0;transition:var(--six-transition-fast) color;cursor:pointer}.datepicker-clear:hover{color:var(--six-input-icon-color-hover)}.datepicker-clear:focus{outline:none}.datepicker-clear--right{right:0;position:absolute}.datepicker-clear--left{right:35px;position:absolute}.input--empty .datepicker-clear{visibility:hidden}.prefix{cursor:pointer}.prefix--right{right:0;display:inline-flex;position:absolute;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;margin-right:var(--six-input-spacing-medium);transition:var(--six-transition-fast) color}six-timepicker::part(popup){border:none;padding:0.5em 0.5em 0;min-height:0}"}}]);