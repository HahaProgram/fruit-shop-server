(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d781bad"],{"1f9c":function(t,i,s){"use strict";var e=s("f4b5"),o=s.n(e);o.a},2880:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"mui-content mui-scroll-wrapper"},[s("div",{staticClass:"mui-scroll"},t._l(t.searchResult,(function(i){return s("div",{key:i.goodsId,staticClass:"goods-items",on:{click:function(s){return t.detail(i)}}},[s("div",[s("img",{attrs:{src:i.image,alt:""}})]),s("div",[t._v(t._s(i.goodsName))]),s("div",[t._v("24小时内发货")]),s("div",[t._v(" ¥ "),s("span",[t._v(t._s(i.goodsPrice))])])])})),0)])])},o=[],c={created:function(){this.$store.commit("modifyTitle","水果超市")},mounted:function(){this.mui(".mui-scroll-wrapper").scroll({deceleration:5e-4}),this.$store.commit("modifyFlag",!0)},beforeDestroy:function(){this.$store.commit("modifyFlag",!1)},methods:{detail:function(t){this.$router.push({name:"detail",params:{id:t.goodsId}})}},computed:{searchResult:function(){return this.$store.state.searchList}}},n=c,r=(s("1f9c"),s("2877")),a=Object(r["a"])(n,e,o,!1,null,"061a17c7",null);i["default"]=a.exports},f4b5:function(t,i,s){}}]);
//# sourceMappingURL=chunk-5d781bad.9a7b92af.js.map