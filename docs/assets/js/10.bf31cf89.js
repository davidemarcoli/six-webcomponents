(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{251:function(e,t,i){"use strict";i.r(t),i.d(t,"six_datepicker",(function(){return I}));i(95),i(94),i(27);var s=i(26),n=i(301),r=i(295),o=i(297),a=i(294);const l={en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthsShortGrouped:[["Jan","Feb","Mar","Apr"],["May","Jun","Jul","Aug"],["Sep","Oct","Nov","Dec"]],weekdays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],weekdaysShort:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],weekdaysMin:["Mo","Tu","We","Th","Fr","Sa","Su"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthsShort:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],monthsShortGrouped:[["Jan.","Feb.","März","Apr."],["Mai","Juni","Juli","Aug."],["Sep.","Okt.","Nov.","Dez."]],weekdays:["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],weekdaysShort:["Mo.","Di.","Mi.","Do.","Fr.","Sa.","So."],weekdaysMin:["Mo","Di","Mi","Do","Fr","Sa","So"]},fr:{months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthsShort:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],monthsShortGrouped:[["janv.","févr.","mars","avr."],["mai","juin","juil.","août"],["sept.","oct.","nov.","déc."]],weekdays:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],weekdaysShort:["lun.","mar.","mer.","jeu.","ven.","sam.","dim."],weekdaysMin:["lu","ma","me","je","ve","sa","di"]},it:{months:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],monthsShort:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],monthsShortGrouped:[["gen","feb","mar","apr"],["mag","giu","lug","ago"],["set","ott","nov","dic"]],weekdays:["lunedì","martedì","mercoledì","giovedì","venerdì","sabato","domenica"],weekdaysShort:["lun","mar","mer","gio","ven","sab","dom"],weekdaysMin:["lu","ma","me","gi","ve","sa","do"]}},h=()=>new Date,d=e=>!Object(n.h)(e)&&(!Object(n.c)(e)&&(Object(n.d)(e)?!isNaN(e.getTime()):"Invalid Date"!==new Date(e).toString())),c=e=>{if(e&&d(e))return e.getFullYear();throw new Error("Not a valid date")},u=e=>{if(e&&d(e))return e.getMonth();throw new Error("Not a valid date")},p=e=>{if(e&&d(e))return e.getDate();throw new Error("Not a valid date")},m=e=>{if(e&&d(e))return e.getHours();throw new Error("Not a valid date")},g=e=>{if(e&&d(e))return e.getMinutes();throw new Error("Not a valid date")},D=e=>{if(e&&d(e))return e.getSeconds();throw new Error("Not a valid date")},b=e=>{const t=new Date(e);return t.setDate(t.getDate()-[6,0,1,2,3,4,5][t.getDay()]),t},y=(e,t)=>((e,t)=>(null==e?void 0:e.getFullYear())===(null==t?void 0:t.getFullYear()))(e,t)&&(null==e?void 0:e.getMonth())===(null==t?void 0:t.getMonth()),v=(e,t)=>y(e,t)&&(null==e?void 0:e.getDate())===(null==t?void 0:t.getDate()),M=(e,t)=>{if(!Object(n.e)(e)||!Object(n.e)(t))return!1;if(e.length<6||t.length<6)return!1;const{day:i,month:s}=C(e,t);if(i>31||s>11||i<=0||s<0)return!1;const r=E(e,t);return!Object(n.h)(r)&&"Invalid Date"!==r.toString()},f=(e,t,i)=>!(e&&t&&i)||t<=e&&e<=i,w=(e,t,i,s=2)=>{const n=s-1,r=t.charAt(e+n)===i;return e+n<t.length&&r},k=(e,t)=>{let i=String(e);for(;i.length<t;)i="0"+i;return i},O=(e,t)=>{if(!e)return"";let i="";for(let s=0;s<t.length;s++)switch(t.charAt(s)){case"d":w(s,t,"d")?(i+=k(e.getDate(),2),s++):i+=String(e.getDate());break;case"m":w(s,t,"m")?(i+=k(e.getMonth()+1,2),s++):i+=String(e.getMonth()+1);break;case"y":w(s,t,"y",4)?(s+=3,i+=e.getFullYear()):(i+=(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100,s++);break;case"h":w(s,t,"h")?(i+=k(e.getHours(),2),s++):i+=String(e.getHours());break;case"M":w(s,t,"M")?(i+=k(e.getMinutes(),2),s++):i+=String(e.getMinutes());break;case"s":w(s,t,"s")?(i+=k(e.getSeconds(),2),s++):i+=String(e.getSeconds());break;default:i+=t.charAt(s)}return i},x=/(\[[^\[]*\])|(mm|dd|yyyy|yy|hh|MM|ss|.)/g,_=/\d\d/,j=/[^0-9]/g,S={},Y=(e,t,i)=>{const s=Array.isArray(e)?e:[e];let n;n="string"==typeof i?e=>{const t=parseInt(e,10);return{[i]:t}}:i,s.forEach(e=>{S[e]=[t,n]})};Y("yy",_,e=>{const t=(new Date).getFullYear(),i=Math.floor(t/100);let s=parseInt(e,10);return s=100*(s>68?i-1:i)+s,{year:s}}),Y("yyyy",/\d{4}/,"year"),Y("mm",_,e=>({month:parseInt(e,10)-1})),Y("dd",_,"day"),Y("hh",_,"hour"),Y("MM",_,"minute"),Y("ss",_,"second");const C=(e,t)=>((e,t)=>{const i=t.match(x);if(!i)throw new Error;const{length:s}=i;let n={};for(let t=0;t<s;t+=1){const s=i[t],r=S[s];if(r){const t=r[0],i=r[1],s=(t.exec(e)||[])[0],o=i(s);n=Object.assign(Object.assign({},n),o),e=e.replace(s,"")}else{const t=s.replace(/^\[|\]$/g,"");if(0!==e.indexOf(t))throw new Error("not match");e=e.substr(t.length)}}return n})(((e,t)=>{if(e.length===t.length)return e;const i=e.match(j)[0];return e.split(i).map(e=>1===e.length?"0"+e:e).join(i)})(e,t),t),E=(e,t)=>{try{const{backupDate:i=new Date}={},{year:s,month:n,day:r,hour:o,minute:a,second:l,date:h}=C(e,t);if(h)return h;let d;return d=((e,t,i,s,n,r)=>{if(!(e<100&&e>=0))return new Date(e,t,i,s,n,r);const o=new Date(e+400,t,i,s,n,r);return isFinite(o.getFullYear())&&o.setFullYear(e),o})(...((e,t=new Date)=>{const i=[0,0,1,0,0,0],s=[t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()];let n=!0;for(let t=0;t<7;t++)void 0===e[t]?i[t]=n?s[t]:i[t]:(i[t]=e[t],n=!1);return i})([s,n,r,o,a,l],i)),d}catch(e){return new Date(NaN)}};var A;!function(e){e.DDMMYYY_DOT="dd.mm.yyyy",e.YYYYMMDD_DASH="yyyy-mm-dd",e.DDMMYYYY_DASH="dd-mm-yyyy",e.DDMMYYYY_SLASH="dd/mm/yyyy",e.YYYYMMDD_SLASH="yyyy/mm/dd",e.DDMMYY_DOT="dd.mm.yy",e.YYMMDD_DASH="yy-mm-dd",e.DDMMYY_DASH="dd-mm-yy",e.DDMMYY_SLASH="dd/mm/yy",e.YYMMDD_SLASH="yy/mm/dd",e.DDMMYYY_DOT_TIME="dd.mm.yyyy hh:MM:ss",e.YYYYMMDD_DASH_TIME="yyyy-mm-dd hh:MM:ss",e.DDMMYYYY_DASH_TIME="dd-mm-yyyy hh:MM:ss",e.DDMMYYYY_SLASH_TIME="dd/mm/yyyy hh:MM:ss",e.YYYYMMDD_SLASH_TIME="yyyy/mm/dd hh:MM:ss",e.DDMMYY_DOT_TIME="dd.mm.yy hh:MM:ss",e.YYMMDD_DASH_TIME="yy-mm-dd hh:MM:ss",e.DDMMYY_DASH_TIME="dd-mm-yy hh:MM:ss",e.DDMMYY_SLASH_TIME="dd/mm/yy hh:MM:ss",e.YYMMDD_SLASH_TIME="yy/mm/dd hh:MM:ss"}(A||(A={}));const F=({locale:e,selectedDate:t,onClickMonthCell:i})=>{const n=i=>(null==t?void 0:t.getMonth())===e.monthsShort.findIndex(e=>e===i);return Object(s.g)("table",{class:"datepicker-table",part:"month-selection"},Object(s.g)("tbody",null,e.monthsShortGrouped.map(t=>Object(s.g)("tr",{class:"datepicker-table__row"},t.map(t=>{return Object(s.g)("td",{onClick:()=>i(t),class:{"datepicker-table__cell":!0,"datepicker-table__cell--is-today":(r=t,e.monthsShort[h().getMonth()]===r),"datepicker-table__cell--is-selected":n(t)}},t);var r})))))},T=({locale:e,calendarGrid:t,onClickDateCell:i})=>Object(s.g)("table",{class:"datepicker-table",part:"day-selection"},Object(s.g)("thead",{part:"weekday-header"},e.weekdaysMin.map(e=>Object(s.g)("th",{class:"datepicker__cell"},e))),Object(s.g)("tbody",null,t.map(e=>Object(s.g)("tr",{class:"datepicker-table__row"},e.map(e=>Object(s.g)("td",{"data-date":e.dateString,onClick:()=>i(e),class:{"datepicker-table__cell":!0,"datepicker-table__cell--is-today":e.isToday,"datepicker-table__cell--is-selected":e.isSelected,"datepicker-table__cell--is-outdated":e.isOutdated,"datepicker-table__cell--is-disabled":e.isDisabled,"datepicker-table__cell--is-selectable":!e.isDisabled}},e.label)))))),H=({selectedDate:e,yearSelection:t,onClickYearCell:i})=>Object(s.g)("table",{class:"datepicker-table",part:"year-selection"},Object(s.g)("tbody",null,t.map(t=>Object(s.g)("tr",{class:"datepicker-table__row"},t.map(t=>Object(s.g)("td",{onClick:()=>i(t),class:{"datepicker-table__cell":!0,"datepicker-table__cell--is-today":h().getFullYear()===t,"datepicker-table__cell--is-selected":(null==e?void 0:e.getFullYear())===t}},t))))));var P;!function(e){e.DAY="day",e.MONTH="month",e.YEAR="year"}(P||(P={}));const L=e=>Array.from(new Array(25).keys()).map(t=>t+e-Math.floor(12.5)).reduce((e,t,i)=>(i%5==0&&e.push([]),e[e.length-1].push(t),e),[]);let I=class{constructor(e){Object(s.i)(this,e),this.sixSelect=Object(s.e)(this,"six-datepicker-select",7),this.sixClear=Object(s.e)(this,"six-datepicker-clear",7),this.sixBlur=Object(s.e)(this,"six-datepicker-blur",7),this.eventListeners=new r.a,this.selectedDate=null,this.pointerDate=I.getCurrentDateAsPointer(),this.selectionMode=P.DAY,this.isDropDownContentUp=!1,this.type="date",this.locale="en",this.open=!1,this.inline=!1,this.readonly=!1,this.disabled=!1,this.allowedDates=()=>!0,this.min=null,this.max=null,this.closeOnSelect="date"===this.type,this.size="medium",this.value=null,this.dateFormat=A.DDMMYYY_DOT,this.debounce=o.a,this.errorOnBlur=!1,this.errorText="",this.label="",this.name="",this.clearable=!1,this.iconPosition="left",this.hoist=!1,this.defaultValue=null,this.handleDocumentKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.closePopup(),this.inputElement.setFocus()),"Tab"===e.key&&this.closePopup()},this.handleDocumentMouseDown=e=>{e.composedPath().includes(this.container)||this.closePopup()},this.onTimepickerChange=e=>{const t=e.detail.value,i=new Date;this.selectedDate&&i.setFullYear(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDate()),i.setHours(t[n.a.HOURS],t[n.a.MINUTES],t[n.a.SECONDS]),this.updateValue(i),this.updatePointerDates()},this.onClickDateCell=e=>{e.isDisabled||this.select(e.dateString)},this.onClickMonthCell=e=>{const t=l[this.locale].monthsShort.findIndex(t=>t===e);this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{month:t}),this.selectionMode=P.DAY},this.onClickYearCell=e=>{this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:e}),this.selectionMode=P.DAY},this.handleInputChange=e=>{const t=this.inputElement.value;if(!M(t,this.dateFormat))return;const i=E(t,this.dateFormat);if(void 0===i)return;if(this.min&&this.min.getTime()>i.getTime())return;if(this.max&&this.max.getTime()<i.getTime())return;this.updateIfChanged(i),e.stopPropagation();const s=t.replace(/[^\d]/g,"");let n=!t;if(t&&s.length>=6){const e=E(t,this.dateFormat),i=O(e,this.dateFormat);M(i,this.dateFormat)&&(this.selectedDate=E(i,this.dateFormat),this.updatePointerDates(),this.updateValue(this.selectedDate),n=!0)}this.displayCustomMessage(n)},this.handleOnBlur=e=>{""===this.inputElement.value&&d(this.value)&&(this.value=void 0),e.stopPropagation();const t=this.inputElement.value,i=E(t,this.dateFormat),s=O(this.value,this.dateFormat);i&&t!==s&&(this.inputElement.value=s),this.sixBlur.emit(this.value)}}debounceChanged(){this.sixSelect=Object(o.d)(this.sixSelect,this.debounce)}valueChanged(){if(this.isValidValue())return console.warn("Encountered unreadable date, will map to undefined. Received value",this.value),void(this.value=void 0);this.selectedDate=this.value,this.updatePointerDates(),this.sixSelect.emit(this.value)}async resizeHandler(){this.calcIsDropDownContentUp(),this.moveOpenHoistedPopup(),this.adjustPopupPosition()}async scrollHandler(){this.calcIsDropDownContentUp(),this.moveOpenHoistedPopup()}get container(){return this.containingElement||this.host}get firstDateOfBox(){const e=new Date(this.pointerDate.year,this.pointerDate.month,1);return b(e)}async reportValidity(){return this.inputElement.reportValidity()}async checkValidity(){return this.inputElement.checkValidity()}async setCustomValidity(e){await this.inputElement.setCustomValidity(e)}async reset(){this.value=this.defaultValue,this.inputElement.value=O(this.defaultValue,this.dateFormat),await this.inputElement.reset()}isValidValue(){return void 0!==this.value&&null!==this.value&&(!(this.value instanceof Date)||this.value instanceof Date&&isNaN(this.value))}get calendarGrid(){return(e=>{const{firstDateOfBox:t,allowedDates:i,dateFormat:s,selectedDate:n,minDate:r,maxDate:o,pointerDate:a}=e,l=new Date(t),d=new Date(t);let c=[];do{let e=[];do{e=[...e,{date:new Date(d),display:O(d,s),dateString:O(d,s),label:p(d).toString(),isToday:v(d,h()),isSelected:n&&v(d,n),isDisabled:!i(d)||!f(d,r,o),isOutdated:a.month!==d.getMonth()||!f(d,r,o)}],d.setDate(d.getDate()+1)}while(u=l,v(b(d),b(u)));c=[...c,e],l.setDate(l.getDate()+7)}while(y(new Date(a.year,a.month,a.day),d));var u;return c})({firstDateOfBox:this.firstDateOfBox,allowedDates:this.allowedDates,dateFormat:this.dateFormat,locale:this.locale,selectedDate:this.selectedDate,minDate:this.min,maxDate:this.max,pointerDate:this.pointerDate})}calcIsDropDownContentUp(){if(!this.inputElement||!this.wrapper)return;const e=this.inputElement.getBoundingClientRect(),t=this.wrapper.getBoundingClientRect(),i=Math.max(t.height,400),s=e.y>window.innerHeight/2;this.isDropDownContentUp=s&&window.innerHeight<e.bottom+i}getMonthStringForIndex(e){return l[this.locale].months[e]}previousUnit(){this.selectionMode===P.DAY?this.previousMonth():this.selectionMode===P.MONTH?this.previousYear():this.selectionMode===P.YEAR&&this.previousYearGroup()}previousYear(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year-1})}previousYearGroup(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year-25})}previousMonth(){0===this.pointerDate.month?this.pointerDate={year:this.pointerDate.year-1,month:11,day:1,hours:0,minutes:0,seconds:0}:this.pointerDate={year:this.pointerDate.year,month:this.pointerDate.month-1,day:1,hours:0,minutes:0,seconds:0}}nextUnit(){this.selectionMode===P.DAY?this.nextMonth():this.selectionMode===P.MONTH?this.nextYear():this.selectionMode===P.YEAR&&this.nextYearGroup()}nextMonth(){11===this.pointerDate.month?this.pointerDate={year:this.pointerDate.year+1,month:0,day:1,hours:0,minutes:0,seconds:0}:this.pointerDate={year:this.pointerDate.year,month:this.pointerDate.month+1,day:1,hours:0,minutes:0,seconds:0}}nextYear(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year+1})}nextYearGroup(){this.pointerDate=Object.assign(Object.assign({},this.pointerDate),{year:this.pointerDate.year+25})}openCalendar(){this.open||this.disabled||(this.open=!0,this.setupEventListenersForOpenPopup())}setupEventListenersForOpenPopup(){this.eventListeners.add(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown)}handleClearClick(e){e.stopPropagation(),this.select(void 0),this.sixClear.emit()}closePopup(){this.inline||(this.open=!1,this.eventListeners.remove(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.remove(document,"mousedown",this.handleDocumentMouseDown),this.selectionMode=P.DAY)}updatePointerDates(){const e=this.getPointerDate();this.differsFromPointerDate(e)&&(this.pointerDate={year:c(e),month:u(e),day:p(e),hours:m(e),minutes:g(e),seconds:D(e)})}differsFromPointerDate(e){return this.pointerDate.day!==p(e)||this.pointerDate.month!==u(e)||this.pointerDate.year!==c(e)||this.pointerDate.hours!==m(e)||this.pointerDate.minutes!==g(e)||this.pointerDate.seconds!==D(e)}getPointerDate(){return void 0!==this.selectedDate&&null!==this.selectedDate?this.selectedDate:Object(n.h)(this.defaultDate)?h():this.defaultDate&&E(this.defaultDate,this.dateFormat)}updateValue(e){this.displayCustomMessage(!0),this.updateIfChanged(e)}updateIfChanged(e){var t;(null===(t=this.value)||void 0===t?void 0:t.getTime())!==(null==e?void 0:e.getTime())&&(this.value=e)}async select(e){if(e){const t=E(e,this.dateFormat);t.setHours(this.pointerDate.hours,this.pointerDate.minutes,this.pointerDate.seconds),this.updateValue(t)}else this.updateValue(void 0);this.updatePointerDates(),this.closeOnSelect&&this.closePopup()}componentWillLoad(){this.validateProps(),this.defaultValue=this.value,this.selectedDate=this.value,this.updatePointerDates(),this.updateValue(this.value),this.inline&&(this.open=!0),this.open&&this.setupEventListenersForOpenPopup()}validateProps(){if(null!==this.value&&void 0!==this.value&&!(this.value instanceof Date))throw new Error("Datepicker no longer supports strings as value. Use a date object instead!");if(null!==this.min&&void 0!==this.min&&!(this.min instanceof Date))throw new Error("Datepicker no longer supports strings as min. Use a date object instead!");if(null!==this.max&&void 0!==this.max&&!(this.max instanceof Date))throw new Error("Datepicker no longer supports strings as min. Use a date object instead!")}componentDidLoad(){this.eventListeners.add(this.inputElement,"six-input-input",Object(o.b)(this.handleInputChange,this.debounce)),this.eventListeners.add(this.inputElement,"six-input-blur",this.handleOnBlur)}renderHeader(){return Object(s.g)("header",{class:"datepicker-header",part:"header"},Object(s.g)("div",{class:"datepicker-header__btn prev",onClick:()=>this.previousUnit()},Object(s.g)("svg",{viewBox:"0 5 13 13",width:"14",height:"23"},Object(s.g)("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}))),Object(s.g)("div",{class:"datepicker-header__label"},this.selectionMode===P.DAY&&Object(s.g)("div",{onClick:()=>this.selectionMode=P.MONTH},Object(s.g)("span",{class:"datepicker-header__label-month"},this.getMonthStringForIndex(this.pointerDate.month)),Object(s.g)("span",null,Object(s.g)("svg",{viewBox:"-3 -4 24 24",width:"20",height:"20"},Object(s.g)("polyline",{points:"6 9 12 15 18 9"})))),this.selectionMode!==P.YEAR&&Object(s.g)("div",{onClick:()=>this.selectionMode=P.YEAR},Object(s.g)("span",{class:"datepicker-header__label-year"},this.pointerDate.year),Object(s.g)("span",null,Object(s.g)("svg",{viewBox:"-3 -4 24 24",width:"20",height:"20"},Object(s.g)("polyline",{points:"6 9 12 15 18 9"})))),this.selectionMode===P.YEAR&&Object(s.g)("div",null,this.pointerDate.year-Math.floor(12.5)," –"," ",this.pointerDate.year+Math.floor(12.5))),Object(s.g)("div",{class:"datepicker-header__btn next",onClick:()=>this.nextUnit()},Object(s.g)("svg",{viewBox:"5 5 13 13",width:"14",height:"23"},Object(s.g)("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}))))}renderBody(){switch(this.selectionMode){case P.DAY:return Object(s.g)(T,{locale:l[this.locale],calendarGrid:this.calendarGrid,onClickDateCell:this.onClickDateCell});case P.MONTH:return Object(s.g)(F,{locale:l[this.locale],selectedDate:this.selectedDate,onClickMonthCell:this.onClickMonthCell});case P.YEAR:return Object(s.g)(H,{selectedDate:this.selectedDate,yearSelection:L(this.pointerDate.year),onClickYearCell:this.onClickYearCell})}}renderCustomIcon(){const e=Object(a.d)(this.host,"custom-icon")?Object(s.g)("slot",{name:"custom-icon"}):Object(s.g)("six-icon",{size:"large"===this.size?"medium":this.size},"today");return Object(s.g)("span",{slot:"prefix",part:"icon",class:{prefix:!0,"prefix--right":"right"===this.iconPosition}},e)}renderClearable(){return this.clearable&&Object(s.g)("button",{slot:"suffix",class:{"datepicker-clear":!0,"datepicker-clear--right":"left"===this.iconPosition,"datepicker-clear--left":"right"===this.iconPosition},type:"button",onClick:this.handleClearClick,tabindex:"-1"},Object(s.g)("six-icon",{size:"small"},"clear"))}render(){var e,t,i;return this.adjustPopupPosition(),Object(s.g)("div",{ref:e=>this.wrapper=e,class:"datepicker__container"},Object(s.g)("six-input",{part:"base",value:O(this.value,this.dateFormat),ref:e=>this.inputElement=e,placeholder:this.placeholder,readonly:this.readonly,disabled:this.disabled,name:this.name,label:this.label,required:this.required,"error-text":this.errorText,"error-on-blur":this.errorOnBlur,onClick:()=>this.openCalendar(),size:this.size,class:{"input--empty":!this.value}},this.renderCustomIcon(),this.renderClearable(),Object(a.d)(this.host,"error-text")?Object(s.g)("span",{slot:"error-text"},Object(s.g)("slot",{name:"error-text"})):null,Object(a.d)(this.host,"label")?Object(s.g)("span",{slot:"label"},Object(s.g)("slot",{name:"label"})):null),this.open&&Object(s.g)("div",{part:"popup",ref:e=>this.popup=e,class:{datepicker__popup:!0,"datepicker__popup--is-up":this.placement?"top"===this.placement:this.isDropDownContentUp,"datepicker__popup--is-inline":this.inline}},this.renderHeader(),this.renderBody(),"date-time"===this.type&&Object(s.g)("six-timepicker",{inline:!0,"onSix-timepicker-change-debounced":e=>this.onTimepickerChange(e),value:(null===(e=this.selectedDate)||void 0===e?void 0:e.getHours())+":"+(null===(t=this.selectedDate)||void 0===t?void 0:t.getMinutes())+":"+(null===(i=this.selectedDate)||void 0===i?void 0:i.getSeconds())}),Object(s.g)("div",{class:"datepicker__footer"},Object(s.g)("slot",null))))}adjustPopupPosition(){this.adjustPopupForHoisting(),this.adjustPopupForSmallScreens()}moveOpenHoistedPopup(){if(!this.hoist||!this.open)return;const e=this.popup.getBoundingClientRect().height,t=this.inputElement.getBoundingClientRect(),i=t.top,s=t.height;this.calcIsDropDownContentUp(),this.isDropDownContentUp?this.popup.style.top=i-e+"px":this.popup.style.top=i+s+"px"}adjustPopupForSmallScreens(){setTimeout(()=>{if(!this.popup)return;const e=this.popup.getBoundingClientRect(),t=()=>{this.popup.style.position="fixed",["top","left","width","height"].forEach(t=>{this.popup.style[t]=e[t]+"px"})};e.y<0&&window.innerHeight-e.height>0&&Math.abs(e.y)<=e.height?(t(),this.popup.style.top="0px"):window.innerHeight<e.y+e.height&&window.innerHeight>e.height&&Math.abs(e.y-window.innerHeight)<=e.height&&(t(),this.popup.style.top=window.innerHeight-e.height+"px"),window.innerWidth<e.x+e.width&&window.innerWidth>e.width&&Math.abs(e.x-window.innerWidth)<=e.width&&(t(),this.popup.style.left=window.innerWidth-e.width+"px")},0)}adjustPopupForHoisting(){this.hoist&&setTimeout(()=>{if(!this.popup)return;const e=this.popup.getBoundingClientRect();this.popup.style.position="fixed",["top","left","width","height"].forEach(t=>{this.popup.style[t]=e[t]+"px"});const t=this.inputElement.getBoundingClientRect(),i=t.top,s=e.top;this.calcIsDropDownContentUp(),this.isDropDownContentUp&&i<s&&(this.popup.style.top=s-e.height-t.height+"px")},0)}connectedCallback(){this.handleClearClick=this.handleClearClick.bind(this)}disconnectedCallback(){this.eventListeners.removeAll()}displayCustomMessage(e){if(this.inputElement)if(e)this.setCustomValidity("");else{const e=this.errorText?this.errorText:"Invalid date format";this.setCustomValidity(e)}}static getCurrentDateAsPointer(){return{year:c(h()),month:u(h()),day:p(h()),hours:m(h()),minutes:g(h()),seconds:D(h())}}get host(){return Object(s.f)(this)}static get watchers(){return{debounce:["debounceChanged"],value:["valueChanged"]}}};I.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block;font-family:var(--six-font-family)}.datepicker__container{position:relative}.datepicker__popup{min-width:400px;background-color:white;padding:0.5em 0.5em 1.5em;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);user-select:none;position:absolute;z-index:var(--six-z-index-dropdown);right:0;left:0}.datepicker__popup--is-up{bottom:100%;min-height:382px}.datepicker__popup--is-inline{position:initial;box-shadow:none;border:1px solid var(--six-color-web-rock-400)}.datepicker-header{display:flex;justify-content:space-between;border-bottom:1px solid var(--six-color-web-rock-400);padding:0.5em;margin-bottom:1em}.datepicker-header svg{fill:var(--six-color-web-rock-900);stroke:none}.datepicker-header__btn{cursor:pointer;width:2.5em;height:2.5em;display:flex;vertical-align:middle;align-items:center;justify-content:center}.datepicker-header__btn:hover{background-color:var(--six-color-web-rock-100);border-radius:100%}.datepicker-header__label{display:flex}.datepicker-header__label>div{cursor:pointer;padding:0.5em;display:flex;vertical-align:middle;align-items:center;justify-content:center}.datepicker-header__label>div:hover{background-color:var(--six-color-web-rock-100)}.datepicker-table{width:100%}.datepicker-table__cell{text-align:center;width:2.5rem;height:2.5rem;cursor:pointer}.datepicker-table__cell:hover{background-color:var(--six-table-row-background-color-hover)}.datepicker-table__cell--is-today{border:1px solid var(--six-color-web-rock-400)}.datepicker-table__cell--is-selected{background-color:var(--six-color-red);color:var(--six-color-white)}.datepicker-table__cell--is-disabled{background-color:var(--six-color-web-rock-200);cursor:initial}.datepicker-table__cell--is-disabled:hover{background-color:var(--six-color-web-rock-200)}.datepicker-table__cell--is-outdated{color:var(--six-color-web-rock-400)}.datepicker-clear{display:inline-flex;align-items:center;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;padding:0;transition:var(--six-transition-fast) color;cursor:pointer}.datepicker-clear:hover{color:var(--six-input-icon-color-hover)}.datepicker-clear:focus{outline:none}.datepicker-clear--right{right:0;position:absolute}.datepicker-clear--left{right:35px;position:absolute}.input--empty .datepicker-clear{visibility:hidden}.prefix{cursor:pointer}.prefix--right{right:0;display:inline-flex;position:absolute;font-size:inherit;color:var(--six-input-icon-color);border:none;background:none;margin-right:var(--six-input-spacing-medium);transition:var(--six-transition-fast) color}six-timepicker::part(popup){border:none;padding:0.5em 0.5em 0;min-height:0}"},294:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return n}));i(94);function s(e){const t=e?e.assignedNodes({flatten:!0}):[];let i="";return[...t].map(e=>{e.nodeType===Node.TEXT_NODE&&(i+=e.textContent)}),i}function n(e,t){return t?null!==e.querySelector(`[slot="${t}"]`):Array.from(e.childNodes).some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if(!e.hasAttribute("slot"))return!0}return!1})}const r=(e,[t,i])=>Object.assign(Object.assign({},e),{[t]:i}),o=e=>t=>Object.values(e).map(e=>[e,n(t,e)]).reduce(r,{}),a=e=>{var t;return null===(t=e.querySelector("slot"))||void 0===t?void 0:t.assignedElements({flatten:!0})}},295:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(27);class s{constructor(){this.eventListeners=[],this.add=(e,t,i,s=null)=>{this.eventListeners.push({el:e,name:t,listener:i,identifier:s}),e.addEventListener(t,i)},this.remove=(e,t,i)=>{const s=(n={el:e,name:t,listener:i},e=>Object.keys(n).every(t=>n[t]===e[t]));var n;this.eventListeners=this.getFilteredEventListeners(s)},this.removeByIdentifier=e=>{const t=t=>t.identifier===e;void 0!==this.eventListeners.find(t)&&(this.eventListeners=this.getFilteredEventListeners(t))},this.removeAll=()=>{for(;this.eventListeners.length;){const{el:e,name:t,listener:i}=this.eventListeners.pop();e.removeEventListener(t,i)}}}getFilteredEventListeners(e){return this.eventListeners.filter(t=>!e(t)||(t.el.removeEventListener(t.name,t.listener),!1))}}},297:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return o}));const s=35,n=300,r=(e,t=n)=>{let i;return(...s)=>{clearTimeout(i),i=setTimeout(()=>e.apply(void 0,s),t)}},o=(e,t)=>{const i=e._original||e;return{_original:e,emit:r(i.emit.bind(i),t)}}},301:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return h})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"f",(function(){return a})),i.d(t,"g",(function(){return d})),i.d(t,"h",(function(){return n}));const s=e=>"string"==typeof e,n=e=>null==e,r=e=>e instanceof Date,o=e=>"number"===e;var a,l,h;!function(e){e.AM="AM",e.PM="PM"}(a||(a={})),function(e){e.HOURS="hours",e.MINUTES="minutes",e.SECONDS="seconds",e.MILLISECONDS="milliseconds",e.HAS_24_HOURS="has24Hours",e.PERIOD="period"}(l||(l={})),function(e){e.HOUR_24="HH",e.HOUR_12="hh",e.MINUTE="mm",e.SECOND="ss",e.MILLISECOND="ms",e.PERIOD="aa"}(h||(h={}));const d={[h.HOUR_24]:"hours",[h.HOUR_12]:"hours",[h.MINUTE]:"minutes",[h.SECOND]:"seconds",[h.MILLISECOND]:"milliseconds",[h.PERIOD]:"period"}}}]);