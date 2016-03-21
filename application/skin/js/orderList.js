define("fe_common/module/simpledblclick",[],function(){return{enable:function(e){var t=300,n=0,r=0;$(e).on("touchend",function(){var e=new Date,s=$(this);e-r>t?n=1:(n++,2===n&&s.trigger("dblclick")),r=e})}}}),define("fe_common/module/dialog/simpledialog",[],function(){var e=BaseClass.extend({_content:"",_width:null,_height:null,_fixed:!1,_id:null,_classes:"simpledialog",_showOnBuild:!0,_$wrapper:null,_$content:null,_$mask:null,_autoPosition:!0,init:function(e){this._content=e.content,this._width=e.width,this._height=e.height,this._fixed=e.fixed||!1,this._id=e.id||"dialog"+(new Date).valueOf(),this._classes=e.class||"simpledialog",this._showOnBuild=null!=e.show?e.show:!0,this._$wrapper=$('<div id="'+this._id+'" class="'+this._classes+'" style="display:none;"></div>'),this._$content=$(this._content),this._$mask=e.mask===!1?null:$('<div class="mask" style="display:none"></div>'),this._autoPosition=e.autoPosition!==!1,this._build(),this._showOnBuild&&this.show()},_build:function(){this._updateContent();var e={};null!=this._width&&(e.width=this._width+"px"),null!=this._height&&(e.height=this._height+"px"),this._fixed&&(e.position="fixed");for(var t in e){this._$wrapper.css(e);break}this._$wrapper.appendTo("body"),this._$mask&&this._$mask.appendTo("body")},_updateContent:function(){this._$wrapper.empty().append(this._$content)},getJElem:function(){return this._$wrapper},getJContent:function(){return this._$content},show:function(){this.trigger("show"),this._$wrapper.show(),this._autoPosition&&this.adjust(),this._$mask&&this._$mask.show(),this.trigger("showed")},hide:function(){this.trigger("hide"),this._$wrapper.hide(),this._$mask&&this._$mask.hide(),this.trigger("hided")},close:function(){this.trigger("close"),this._$wrapper.remove(),this._$mask&&this._$mask.remove(),this.trigger("closed")},setContent:function(e){this._content=e,this._$content=$(this._content),this._updateContent()},adjust:function(){var e=this._$wrapper.height(),t=this._$wrapper.width(),n=$(window),r=n.height(),i=n.width(),s=(r-e)/2+document.body.scrollTop,o=(i-t)/2;this._$wrapper.css({top:s+"px",left:o+"px"})}});return e}),define("fe_common/module/dialog/tipdialog",["fe_common/module/dialog/simpledialog"],function(e){var t=e.extend({_type:null,_hideDelay:2e3,_animationTime:300,init:function(e){e=e||{},this._type=e.type?e.type:this._type,this._hideDelay="number"==typeof e.hideDelay?e.hideDelay:this._hideDelay,this._showOnce="boolean"==typeof e.showOnce?e.showOnce:!1,e=$.extend({mask:!1,"class":"tipdialog"},e),e.content=this._getContent(e.content),this._super(e)},_getContent:function(e){var t='<div class="tipdialog-content">';switch(this._type){case"success":t+='<i class="icon-tick"></i>';break;case"fail":t+='<i class="icon-cross"></i>'}return t+="<span>"+e+"</span></div>"},show:function(){var e=this;this._super(),this._$wrapper.css("opacity","1"),this._showOnce&&this.on("hided",function(){e.close()}),0!=this._hideDelay&&setTimeout(function(){e.hide()},this._hideDelay)},hide:function(){var e=this;this.trigger("hide"),this._$wrapper.css("opacity","0"),this._$mask&&this._$mask.hide(),setTimeout(function(){e._$wrapper.hide(),e.trigger("hided")},this._animationTime)}});return t}),define("fe_common/module/dialog/buttondialog",["fe_common/module/dialog/simpledialog"],function(e){var t=e.extend({_btns:[],_$wordWrap:null,_$contentWrap:null,init:function(e){var t=this,n=e.btns;this._$wordWrap=$('<div class="buttondialog-word"></div>').append(e.content),this._$contentWrap=$('<div class="buttondialog-wrap"></div>');for(var r=$('<div class="buttondialog-op"></div>'),i=0,s=n.length;s>i;i++){var o=n[i].func,u=n[i].attrs,a=[];if(u)for(var f in u)a.push(f+'="'+u[f]+'"');var l=$("<button "+a.join(" ")+">"+n[i].value+"</button>");l.__clickFunc=o,t._btns.push(l),r.append(l)}this._$contentWrap.append(this._$wordWrap).append(r),e=$.extend(e,{content:this._$contentWrap}),this._super(e);for(var i=0,s=this._btns.length;s>i;i++){var c=this._btns[i];!function(e){c.click(function(){e.call(this)})}(c.__clickFunc)}}});return t.alert=function(e,n){var r=new t({content:e,btns:[{value:"纭",func:function(){r.close(),"function"==typeof n&&n()}}]})},t.confirm=function(e,n){var r=new t({content:e,btns:[{value:"纭",func:function(){r.close(),"function"==typeof n&&n()}},{value:"鍙栨秷",func:function(){r.close()}}]})},t}),define("module/payOnlineD",[],function(){var e=function(e){var t={token:$.cookie("lt"),tradeno:e.tradeno,pay_token:e.pay_token,nb_platform:"touch",nb_version:"1.0",pay_success_url:e.pay_success_url,redr_url:e.redr_url},n=$("<form/>");n.attr({action:e.pay_url,method:"post",target:"_self"});for(var r in t)n.append('<input type="hidden" name="'+r+'" value="'+t[r]+'">');return n.submit(),!1};return e}),define("module/payOnline",["module/payOnlineD"],function(e){var t=function(t,r){$.post(t+"/pay/genpay/"+r,function(t){if(t&&0==t.code){var r=t.data;e(r)}})};return t}),define("module/payTest",["fe_common/module/dialog/buttondialog"],function(e){var t=function(t,r){var i=new e({content:"鏀粯娴嬭瘯",btns:[{value:"鏀粯",func:function(){$.post(t+"/pay/testOnlinePay/"+r,function(){i.close(),delayGo(t+"/order/statusdetail/"+r)})}},{value:"鍙栨秷",func:function(){i.close(),delayGo(t+"/order/statusdetail/"+r)}}]})};return t}),define("module/userbar",[],function(){var e={init:function(e){var t=e.baseurl,n=0;$(window).on("scroll",function(){var e=$(window).scrollTop();0>=e||n>=e?$("#user-bar-wrap").show():$("#user-bar-wrap").hide(),n=e}),$("#user-bar-wrap").on("click",".user-bar-btn",function(){var e=$(this).index();0==e?$.get(t+"/ilog",{code:"20000314"}):1==e?$.get(t+"/ilog",{code:"20000315"}):2==e&&$.get(t+"/ilog",{code:"20000316"})})}};return e}),define("module/FoodStore",[],function(){var e=BaseClass.extend({orders:{},poi:null,_store:null,init:function(){this._store=$wm.store,this._read()},save:function(e,t){var n=[];for(var r in t){var i=parseInt(t[r].num);i>0&&(n.push(r),n.push(","),n.push(i),n.push("|"))}var s=e+":"+n.join("");this._store.setItem("w_c",s)},clear:function(){this._store.removeItem("w_c")},_read:function(){var e=this._store.getItem("w_c");if(null!=e){var t=e.indexOf(":"),n=e.substring(0,t),r=e.substring(t+1);if(n=parseInt(n),n>=0){for(var i=r.split("|"),s=0,o=i.length;o>s;s++){var u=i[s].split(",");if(2==u.length){var a=parseInt(u[1]),f=u[0],l=parseInt(f.split("-")[0]),c=parseInt(f.split("-")[1]);a>0&&l>0&&c>0&&(this.orders[f]={num:a})}}this.poi=n}}}});return e}),define("page/order/pageloader",[],function(){return{init:function(e){function s(e,t){var n=null;$(e).on("scroll",function(){n==null&&(n=setTimeout(function(){t(),n=null},200))})}function o(){var e=400,i=document.body.offsetHeight-document.body.scrollTop-t;i<e&&n<r-1&&a(n+1)}function u(e){e.find(".j-avatar-img").lazyload({data_attribute:"src-retina"})}function a(e){if(e<=n||e>=r||i.getStatus()!=0)return;i.setStatus(1),$.ajax({url:location.href,timeout:3e4,data:{page_offset:e*20,apage:1},success:function(e){typeof e=="string"?f(e):l()},error:function(){l()}})}function f(e){n++;var t=$(e);i.setStatus(4),t.appendTo("#order-list"),u(t),n<r-1?i.setStatus(0):i.setStatus(3)}function l(){i.setStatus(2)}var t=window.innerHeight,n=0,r=e.pageCount||0,i={_jQloadingStatus:$('<div class="field-load"></div>'),_jQbtnRetry:$('<button class="field-load-btn">鍔犺浇澶辫触锛岃鐐瑰嚮閲嶈瘯</button>'),loadingHtml:'<div class="field-load-loading">姝ｅ湪鍔姏鍔犺浇涓€�</div>',status:0,init:function(){var e=this;this._jQbtnRetry.click(function(){e.setStatus(0),o()}),r>1&&this.setStatus(0)},showLoadingStatus:function(e){e==0||e==1?(this._jQloadingStatus.html(this.loadingHtml),this._jQloadingStatus.appendTo("#order-list")):e==2?(this._jQloadingStatus.empty().append(this._jQbtnRetry),this._jQloadingStatus.appendTo("#order-list")):this._jQloadingStatus.remove()},getStatus:function(){return this.status},setStatus:function(e){this.status=e,this.showLoadingStatus(e)}};s(window,o),i.init()}}}),define("page/order/order-list",["fe_common/module/simpledblclick","fe_common/module/dialog/tipdialog","fe_common/module/dialog/buttondialog","page/order/pageloader","fe_common/module/dialog/simpledialog","module/payOnline","module/payTest","module/userbar","module/FoodStore"],function(e,t,n,r,i,s,o,u,a){return{environment:"",baseurl:"",terminal:"",storeObj:null,init:function(e){FastClick.attach(document.body);var t=this;this.environment=e.environment,this.baseurl=e.baseurl,this.terminal=e.terminal,this.storeObj=new a,this._initLazyLoad(),r.init(e),u.init({baseurl:t.baseurl}),t._oprateHandle(),window.bLog("waimai_mt_order_list")},_oprateHandle:function(){function u(e){var t={};for(var n=0,r=e.length;n<r;n++)t[e[n].spu_id+"-"+e[n].id]={num:e[n].count};return t}var r=this;$("#order-list").delegate(".j-field-confirm","click",function(){var e=$(this).data("view-id"),t=$(this).data("odrtime")*1e3,n=[];n.push('<h4 class="cfm_time_title">閫佽揪鏃堕棿</h4>'),n.push('<div id="cfm_time_wrap">'),n.push("<div>"),n.push('<ul class="cfm_time_list">');var s=6e5,o=Number(t)+s,u=Math.round(o/s)*s,a=new Date,f=a.getTime(),l=a.getDate(),c,h,p,d=0,v;f<u?(c=Math.round(f/s)*s,c<t?h=u:h=c):h=u,p=Math.round(f/s)*s,p<=h&&(p=h),d=(p-h)/s+1,v=d>=4?3:0;for(var m=0;m<d;m++){var g=new Date(h+s*m),y=g.getDate(),b=(y==l?"褰撳ぉ":"鏄ㄥぉ")+" "+(g.getHours()<10?"0":"")+g.getHours()+":"+(g.getMinutes()?g.getMinutes():"00");n.push("<li"+(m==v?' class="hvr"':"")+' data-time="'+g.getTime()/1e3+'">'+b+"</li>")}n.push("</ul>"),n.push("</div>"),n.push("</div>"),$("html, body").css("overflow","hidden");var w=new i({id:"cfm_dialog",content:n.join(""),show:!1});$("#cfm_dialog").css("max-height",$(window).height()*.9),w.show();var E=new IScroll("#cfm_time_wrap",{tap:!0});$(document).on("click",".mask",function(){$("html, body").css("overflow","visible"),w.close()}),$(".cfm_time_list").on("tap","li",function(){var n=$(this),i=n.text(),s=Math.floor((Number(n.data("time"))-t/1e3)/60);$("html, body").css("overflow","visible"),w.close(),$.get(r.baseurl+"/order/ajax/confirmreceive/"+e,{ship_time:s},function(e){e&&location.reload()})})}),$("#order-list").on("click",".j-field-pay",function(){var e=$(this),t=$(this).data("order-id");r.environment=="test"||r.environment=="qatest"?o(r.baseurl,t):s(r.baseurl,t)}),$("#order-list").on("click",".j-field-buy-again",function(){var e=$(this),i=e.data("view-id"),s=e.data("poi-id"),o=e.data("poi-valid"),a,f=null;if(e.data("disabled")=="disabled")return;e.data("disabled","disabled"),r.terminal=="i"?a=0:r.terminal=="mti"&&(a=1),$.get(r.baseurl+"/ilog",{code:"20000331",result:a});if(o=="0")return f=new n({content:"鍟嗗宸蹭笅绾匡紝鏃犳硶涓嬪崟",btns:[{value:"鐭ラ亾浜�",func:function(){e.removeAttr("data-disabled"),f.close()}}]}),!1;$.get(r.baseurl+"/order/ajax/getfoodlist",{id:i},function(i){if(i.code==0){var o=i.data,a=o.foodlist,l=a.length,c={wm_poi_id:s,foodlist:a,addr_longitude:o.longitude,addr_latitude:o.latitude,wm_order_pay_type:1};$.post(r.baseurl+"/order/ajax/preview",{data:JSON.stringify(c)},function(i){var o=i.code;e.removeAttr("data-disabled");if(o==3){var c=i.data;for(var h=0,p=c.length;h<p;h++)for(var d=0;d<l;d++)if(a[d].id==c[h].id&&a[d].spu_id==c[h].spu_id){c[h].stock?a[d].count=c[h].stock:a.splice(d,1);break}f=new n({content:i.msg,btns:[{value:"涓嶇敤浜�",func:function(){f.close()}},{value:"濂界殑",func:function(){a.length?r.storeObj.save(s,u(a)):r.storeObj.clear(),delayGo(r.baseurl+"/restaurant/"+s)}}]})}else o==4?f=new n({content:i.msg,btns:[{value:"鐭ラ亾浜�",func:function(){f.close()}}]}):o==8?f=new n({content:i.msg,btns:[{value:"涓嶇敤浜�",func:function(){f.close()}},{value:"濂界殑",func:function(){r.storeObj.save(s,u(a)),delayGo(r.baseurl+"/restaurant/"+s)}}]}):o==2001?f=new n({content:i.msg,btns:[{value:"鐭ラ亾浜�",func:function(){f.close()}}]}):o==0?(r.storeObj.save(s,u(a)),delayGo(r.baseurl+"/order/preview")):new t({content:i.msg})})}else i.code==200401&&(location.href=i.data.redirect)})}),e.enable($("#address-coloregg").get(0)),$("#address-coloregg").on("dblclick",function(){location.href="http://i.meituan.com"})},_initLazyLoad:function(){$("#order-list").find(".j-avatar-img").lazyload({data_attribute:"src-retina"}),$(window).trigger("resize")}}});