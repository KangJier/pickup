(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e946cd0"],{"2cfd":function(t,e,n){},"432b":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("5530"),a=n("5880"),o={computed:Object(i["a"])(Object(i["a"])({},Object(a["mapState"])({layout:function(t){return t.app.layout},navTheme:function(t){return t.app.theme},primaryColor:function(t){return t.app.color},colorWeak:function(t){return t.app.weak},fixedHeader:function(t){return t.app.fixedHeader},fixedSidebar:function(t){return t.app.fixedSidebar},contentWidth:function(t){return t.app.contentWidth},autoHideHeader:function(t){return t.app.autoHideHeader},isMobile:function(t){return t.app.isMobile},sideCollapsed:function(t){return t.app.sideCollapsed},multiTab:function(t){return t.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}},cd07:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header-index-wide"},[n("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[n("div",{staticClass:"account-settings-info-main",class:{mobile:t.isMobile}},[n("div",{staticClass:"account-settings-info-left"},[n("a-menu",{style:{border:"0",width:t.isMobile?"560px":"auto"},attrs:{mode:t.isMobile?"horizontal":"inline",selectedKeys:t.selectedKeys,type:"inner"},on:{openChange:t.onOpenChange}},[n("a-menu-item",{key:"/account/settings/base"},[n("router-link",{attrs:{to:{name:"BaseSettings"}}},[t._v(" 基本信息 ")])],1),n("a-menu-item",{key:"/account/settings/password"},[n("router-link",{attrs:{to:{name:"PasswordSettings"}}},[t._v(" 修改密码 ")])],1),n("a-menu-item",{key:"/account/settings/notification"},[n("router-link",{attrs:{to:{name:"NotificationSettings"}}},[t._v(" 新消息通知 ")])],1)],1)],1),n("div",{staticClass:"account-settings-info-right"},[n("div",{staticClass:"account-settings-info-title"},[n("span",[t._v(t._s(t.$route.meta.title))])]),n("route-view")],1)])])],1)},a=[],o=(n("99af"),n("680a")),s=n("432b"),u={components:{RouteView:o["b"]},mixins:[s["a"]],data:function(){return{mode:"inline",openKeys:[],selectedKeys:[],preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:""}},mounted:function(){this.updateMenu()},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat();this.selectedKeys=[t.pop().path]}},watch:{$route:function(t){this.updateMenu()}}},r=u,c=(n("ead6"),n("2877")),d=Object(c["a"])(r,i,a,!1,null,"87d22646",null);e["default"]=d.exports},ead6:function(t,e,n){"use strict";var i=n("2cfd"),a=n.n(i);a.a}}]);