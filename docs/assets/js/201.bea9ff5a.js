(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{554:function(e,t,i){"use strict";i.r(t);var n={name:"docs-demo-six-item-picker-167",mounted(){const e=document.getElementById("picked-item"),t=document.getElementById("picked-item-debounced"),i=document.getElementById("it-pick-debounced");i.addEventListener("six-item-picker-change",t=>{e.innerText=t.detail}),i.addEventListener("six-item-picker-change-debounced",e=>{console.log("[ six-item-picker-change-debounced ]",{event:e}),t.innerText=e.detail})}},d=i(10),c=Object(d.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"demo my-app"},[e("six-item-picker",{attrs:{id:"it-pick-debounced"}}),this._v(" "),this._m(0),this._v(" "),this._m(1)],1)}),[function(){var e=this._self._c;return e("div",[this._v("Picked Item: "),e("span",{attrs:{id:"picked-item"}},[this._v("0")])])},function(){var e=this._self._c;return e("div",[this._v("Picked Item Debounced: "),e("span",{attrs:{id:"picked-item-debounced"}},[this._v("0")])])}],!1,null,null,null);t.default=c.exports}}]);