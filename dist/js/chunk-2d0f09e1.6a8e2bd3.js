(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f09e1"],{"9cab":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[t._v(" 最新動態 ")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("h3",[t._v("最新餐廳")]),r("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),r("div",{staticClass:"col-md-6"},[r("h3",[t._v("最新評論")]),r("NewestCommments",{attrs:{comments:t.comments}})],1)])],1)},n=[],a=(r("d3b7"),r("96cf"),r("365c")),o=r("8bb1"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{title:"最新餐廳"}},[r("b-list-group",{attrs:{flush:""}},t._l(t.restaurants,(function(e){return r("b-list-group-item",{key:e.id},[r("h4",[r("a",{attrs:{href:"#"}},[t._v(t._s(e.name))]),r("small",[t._v(t._s(e.Category.name))])]),r("p",[t._v(t._s(e.description))]),t._v(t._s(t._f("fromNow")(e.createdAt))+" "),r("hr")])})),1)],1)},u=[],i=r("c1df"),l=r.n(i),m={name:"NewestRestaurants",filters:{fromNow:function(t){return t?l()(t).fromNow():"-"}},props:{restaurants:{type:Array,required:!0}}},f=m,p=r("2877"),_=Object(p["a"])(f,c,u,!1,null,null,null),d=_.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{title:"最新評論"}},[r("b-list-group",{attrs:{flush:""}},t._l(t.comments,(function(e){return r("b-list-group-item",{key:e.id},[r("h4",[r("a",{attrs:{href:"#"}},[t._v(t._s(e.User.name))])]),r("p",[t._v(t._s(e.text))]),t._v(t._s(t._f("fromNow")(e.createdAt))+" ")])})),1)],1)},h=[],v={name:"NewestComments",filters:{fromNow:function(t){return t?l()(t).fromNow():"-"}},props:{comments:{type:Array,required:!0}}},b=v,N=Object(p["a"])(b,w,h,!1,null,null,null),g=N.exports,C=new a["a"],y={components:{NavTabs:o["a"],NewestRestaurants:d,NewestCommments:g},data:function(){return{restaurants:[],comments:[],error:""}},created:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(C.getFeeds());case 3:return this.restaurants=t.sent,t.next=6,regeneratorRuntime.awrap(C.getComments());case 6:this.comments=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.error=t.t0.message;case 12:case"end":return t.stop()}}),null,this,[[0,9]])}},x=y,k=Object(p["a"])(x,s,n,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0f09e1.6a8e2bd3.js.map