(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11a95c69"],{"705f":function(t,e,s){t.exports=s.p+"img/address.52b2efd2.png"},8621:function(t,e,s){"use strict";var a=s("b600"),i=s.n(a);i.a},b600:function(t,e,s){},e17e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-content"},[0!==t.addressList.length?a("div",[a("div",{staticClass:"add-btn",on:{click:t.addAddress}},[a("a",{attrs:{href:"javascript:;"}},[t._v("添加收货地址")])]),a("ul",{staticClass:"mui-table-view"},t._l(t.addressList,(function(e){return a("li",{key:e.id,staticClass:"mui-table-view-cell mui-media mui-transitioning"},[a("div",{staticClass:"mui-slider-right mui-disabled"},[a("a",{staticClass:"mui-btn mui-btn-primary fa fa-edit",staticStyle:{transform:"translate(0px, 0px)"},on:{click:function(s){return t.edit(e)}}},[t._v("编辑")]),a("a",{staticClass:"mui-btn mui-btn-red fa fa-trash-o",staticStyle:{transform:"translate(0px, 0px)"},on:{click:function(s){return t.del(e)}}},[t._v("删除")])]),a("div",{staticClass:"mui-slider-handle",staticStyle:{transform:"translate(0px, 0px)"},on:{click:function(s){return t.selectThis(e)}}},[a("a",{attrs:{href:"javascript:;"}},[a("div",{staticClass:"mui-media-body"},[a("div",[t._v(t._s(e.address))]),a("div",[t._v(t._s(e.receiver)+" "+t._s(e.phone))])])])])])})),0)]):0===t.addressList.length?a("div",{staticClass:"noAddress"},[a("img",{attrs:{src:s("705f"),alt:""}}),a("div",{staticClass:"addBtn",on:{click:t.addAddress}},[t._v(" 新增收货地址 ")])]):t._e()])},i=[],r=(s("96cf"),s("1da1")),n={data:function(){return{addressList:[]}},created:function(){this.getAddressList(),this.$store.commit("modifyTitle","个人地址")},methods:{selectThis:function(t){this.$store.commit("modifySelect",t),this.$route.query.isTo&&this.$router.push("/toPay")},getAddressList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("address");case 2:if(s=e.sent,200===s.status){e.next=5;break}return e.abrupt("return");case 5:t.addressList=s.data,console.log(t.addressList);case 7:case"end":return e.stop()}}),e)})))()},addAddress:function(){var t={type:1};this.$router.push({name:"editaddress",params:{item:t}})},edit:function(t){t.type=0,this.$router.push({name:"editaddress",params:{item:t}})},del:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$http.get("delAddress?id=".concat(t.id));case 2:if(a=s.sent,200===a.status){s.next=5;break}return s.abrupt("return");case 5:e.mui.toast(a.data.msg),e.getAddressList();case 7:case"end":return s.stop()}}),s)})))()}}},d=n,c=(s("8621"),s("2877")),u=Object(c["a"])(d,a,i,!1,null,"34daeb3e",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-11a95c69.a4a90906.js.map