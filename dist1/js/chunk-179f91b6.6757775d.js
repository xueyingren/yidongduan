(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-179f91b6"],{"0cf2":function(t,e,n){"use strict";n("645f")},5750:function(t,e,n){},"645f":function(t,e,n){},a5cd:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("Card",{staticStyle:{height:"100%",width:"100%",overflow:"hidden"},attrs:{shadow:""}},[e("div",{staticClass:"department-outer"},[e("div",{staticClass:"tip-box"},[e("b",{staticStyle:{"margin-right":"20px"}},[t._v("powered by "),e("a",{attrs:{target:"blank",href:"https://github.com/lison16"}},[t._v("Lison")])]),e("a",{staticStyle:{"margin-right":"10px"},attrs:{target:"blank",href:"https://github.com/lison16/v-org-tree"}},[t._v("v-org-tree文档")])]),e("div",{staticClass:"zoom-box"},[e("zoom-controller",{attrs:{min:20,max:200},model:{value:t.zoom,callback:function(e){t.zoom=e},expression:"zoom"}})],1),e("div",{staticClass:"view-box"},[t.data?e("org-view",{attrs:{data:t.data,"zoom-handled":t.zoomHandled},on:{"on-menu-click":t.handleMenuClick}}):t._e()],1)])])},a=[],i=function(){var t=this,e=t._self._c;return e("div",{ref:"dragWrapper",staticClass:"org-tree-drag-wrapper",on:{mousedown:t.mousedownView,contextmenu:t.handleDocumentContextmenu}},[e("div",{staticClass:"org-tree-wrapper",style:t.orgTreeStyle},[t.data?e("v-org-tree",{attrs:{data:t.data,"node-render":t.nodeRender,"expand-all":!0,collapsable:""},on:{"on-node-click":t.handleNodeClick}}):t._e()],1)])},s=[],r=(n("c5f6"),n("90de")),c=[{key:"edit",label:"编辑部门"},{key:"detail",label:"查看部门"},{key:"new",label:"新增子部门"},{key:"delete",label:"删除部门"}],u={name:"OrgView",props:{zoomHandled:{type:Number,default:1},data:Object},data:function(){return{currentContextMenuId:"",orgTreeOffsetLeft:0,orgTreeOffsetTop:0,initPageX:0,initPageY:0,oldMarginLeft:0,oldMarginTop:0,canMove:!1}},computed:{orgTreeStyle:function(){return{transform:"translate(-50%, -50%) scale(".concat(this.zoomHandled,", ").concat(this.zoomHandled,")"),marginLeft:"".concat(this.orgTreeOffsetLeft,"px"),marginTop:"".concat(this.orgTreeOffsetTop,"px")}}},methods:{handleNodeClick:function(t,e,n){n()},closeMenu:function(){this.currentContextMenuId=""},getBgColor:function(t){return this.currentContextMenuId===t.id?t.isRoot?"#0d7fe8":"#5d6c7b":""},nodeRender:function(t,e){return t("div",{class:["custom-org-node",e.children&&e.children.length?"has-children-label":""],on:{mousedown:function(t){return t.stopPropagation()},contextmenu:this.contextmenu.bind(this,e)}},[e.label,t("dropdown",{attrs:{trigger:"custom",visible:this.currentContextMenuId===e.id},class:"context-menu",nativeOn:{click:this.handleDropdownClick},on:{"on-click":this.handleContextMenuClick.bind(this,e)},style:{transform:"scale(".concat(1/this.zoomHandled,", ").concat(1/this.zoomHandled,")")},directives:[{name:"click-outside",value:this.closeMenu}]},[t("dropdown-menu",{slot:"list"},[c.map((function(e){return t("dropdown-item",{attrs:{name:e.key}},[e.label])}))])])])},contextmenu:function(t,e){var n=e||window.event;n.preventDefault?n.preventDefault():n.returnValue=!1,this.currentContextMenuId=t.id},setDepartmentData:function(t){t.isRoot=!0,this.departmentData=t},mousedownView:function(t){this.canMove=!0,this.initPageX=t.pageX,this.initPageY=t.pageY,this.oldMarginLeft=this.orgTreeOffsetLeft,this.oldMarginTop=this.orgTreeOffsetTop,Object(r["f"])(document,"mousemove",this.mousemoveView),Object(r["f"])(document,"mouseup",this.mouseupView)},mousemoveView:function(t){if(this.canMove){var e=t.pageX,n=t.pageY;this.orgTreeOffsetLeft=this.oldMarginLeft+e-this.initPageX,this.orgTreeOffsetTop=this.oldMarginTop+n-this.initPageY}},mouseupView:function(){this.canMove=!1,Object(r["e"])(document,"mousemove",this.mousemoveView),Object(r["e"])(document,"mouseup",this.mouseupView)},handleDropdownClick:function(t){t.stopPropagation()},handleDocumentContextmenu:function(){this.canMove=!1},handleContextMenuClick:function(t,e){this.$emit("on-menu-click",{data:t,key:e})}},mounted:function(){Object(r["f"])(document,"contextmenu",this.handleDocumentContextmenu)},beforeDestroy:function(){Object(r["e"])(document,"contextmenu",this.handleDocumentContextmenu)}},l=u,d=n("2877"),m=Object(d["a"])(l,i,s,!1,null,null,null),f=m.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"zoom-wrapper"},[e("button",{staticClass:"zoom-button",on:{click:function(e){return t.scale("down")}}},[e("Icon",{attrs:{type:"md-remove",size:14,color:"#fff"}})],1),e("span",{staticClass:"zoom-number"},[t._v(t._s(t.value)+"%")]),e("button",{staticClass:"zoom-button",on:{click:function(e){return t.scale("up")}}},[e("Icon",{attrs:{type:"md-add",size:14,color:"#fff"}})],1)])},p=[],g={name:"ZoomController",props:{value:{type:Number,default:100},step:{type:Number,default:20},min:{type:Number,default:10},max:{type:Number,default:200}},methods:{scale:function(t){var e=this.value+("down"===t?-this.step:this.step);e<this.min&&"down"===t||e>this.max&&"up"===t||this.$emit("input",e)}}},v=g,b=(n("0cf2"),Object(d["a"])(v,h,p,!1,null,null,null)),w=b.exports,x=n("7e1e"),C=(n("5750"),{edit:"编辑部门",detail:"查看部门",new:"新增子部门",delete:"删除部门"}),k={name:"org_tree_page",components:{OrgView:f,ZoomController:w},data:function(){return{data:null,zoom:100}},computed:{zoomHandled:function(){return this.zoom/100}},methods:{setDepartmentData:function(t){return t.isRoot=!0,t},handleMenuClick:function(t){var e=t.data,n=t.key;this.$Message.success({duration:5,content:"点击了《".concat(e.label,"》节点的'").concat(C[n],"'菜单")})},getDepartmentData:function(){var t=this;Object(x["c"])().then((function(e){var n=e.data;t.data=n}))}},mounted:function(){this.getDepartmentData()}},y=k,M=Object(d["a"])(y,o,a,!1,null,null,null);e["default"]=M.exports}}]);