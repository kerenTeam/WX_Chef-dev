define("fe_common/module/dialog/simpledialog",[],function(){var e=BaseClass.extend({_content:"",_width:null,_height:null,_fixed:!1,_id:null,_classes:"simpledialog",_showOnBuild:!0,_$wrapper:null,_$content:null,_$mask:null,_autoPosition:!0,init:function(e){this._content=e.content,this._width=e.width,this._height=e.height,this._fixed=e.fixed||!1,this._id=e.id||"dialog"+(new Date).valueOf(),this._classes=e.class||"simpledialog",this._showOnBuild=null!=e.show?e.show:!0,this._$wrapper=$('<div id="'+this._id+'" class="'+this._classes+'" style="display:none;"></div>'),this._$content=$(this._content),this._$mask=e.mask===!1?null:$('<div class="mask" style="display:none"></div>'),this._autoPosition=e.autoPosition!==!1,this._build(),this._showOnBuild&&this.show()},_build:function(){this._updateContent();var e={};null!=this._width&&(e.width=this._width+"px"),null!=this._height&&(e.height=this._height+"px"),this._fixed&&(e.position="fixed");for(var t in e){this._$wrapper.css(e);break}this._$wrapper.appendTo("body"),this._$mask&&this._$mask.appendTo("body")},_updateContent:function(){this._$wrapper.empty().append(this._$content)},getJElem:function(){return this._$wrapper},getJContent:function(){return this._$content},show:function(){this.trigger("show"),this._$wrapper.show(),this._autoPosition&&this.adjust(),this._$mask&&this._$mask.show(),this.trigger("showed")},hide:function(){this.trigger("hide"),this._$wrapper.hide(),this._$mask&&this._$mask.hide(),this.trigger("hided")},close:function(){this.trigger("close"),this._$wrapper.remove(),this._$mask&&this._$mask.remove(),this.trigger("closed")},setContent:function(e){this._content=e,this._$content=$(this._content),this._updateContent()},adjust:function(){var e=this._$wrapper.height(),t=this._$wrapper.width(),n=$(window),r=n.height(),i=n.width(),s=(r-e)/2+document.body.scrollTop,o=(i-t)/2;this._$wrapper.css({top:s+"px",left:o+"px"})}});return e}),define("fe_common/module/dialog/buttondialog",["fe_common/module/dialog/simpledialog"],function(e){var t=e.extend({_btns:[],_$wordWrap:null,_$contentWrap:null,init:function(e){var t=this,n=e.btns;this._$wordWrap=$('<div class="buttondialog-word"></div>').append(e.content),this._$contentWrap=$('<div class="buttondialog-wrap"></div>');for(var r=$('<div class="buttondialog-op"></div>'),i=0,s=n.length;s>i;i++){var o=n[i].func,u=n[i].attrs,a=[];if(u)for(var f in u)a.push(f+'="'+u[f]+'"');var l=$("<button "+a.join(" ")+">"+n[i].value+"</button>");l.__clickFunc=o,t._btns.push(l),r.append(l)}this._$contentWrap.append(this._$wordWrap).append(r),e=$.extend(e,{content:this._$contentWrap}),this._super(e);for(var i=0,s=this._btns.length;s>i;i++){var c=this._btns[i];!function(e){c.click(function(){e.call(this)})}(c.__clickFunc)}}});return t.alert=function(e,n){var r=new t({content:e,btns:[{value:"纭",func:function(){r.close(),"function"==typeof n&&n()}}]})},t.confirm=function(e,n){var r=new t({content:e,btns:[{value:"纭",func:function(){r.close(),"function"==typeof n&&n()}},{value:"鍙栨秷",func:function(){r.close()}}]})},t}),define("fe_common/module/dialog/menudialog",["fe_common/module/dialog/simpledialog"],function(e){var t=e.extend({_jQItems:[],init:function(e){e=e||{};var t=this,n=e.menugroup||[];null==n[0]||n[0]instanceof Array||(n=[n]);for(var r=$('<div class="menudialog-wrap"></div>'),i=0,s=n.length;s>i;i++){for(var o=n[i],u=$('<ul class="menudialog-group"></ul>'),a=0,f=o.length;f>a;a++){var l=o[a].func,c=o[a].attrs,h=o[a].type||"html",p="menudialog-item-"+h;0==a&&(p+=" menudialog-item-first");var d=['class="'+p+'"'];if(c)for(var v in c)d.push(v+'="'+c[v]+'"');var m=$("<li "+d.join(" ")+">"+o[a].content+"</li>");m.__clickFunc="function"==typeof l?l:"cancel"==h?function(){t.close()}:function(){},u.append(m),t._jQItems.push(m)}r.append(u)}e=$.extend({"class":"menudialog",autoPosition:!1},e),e.content=r,this._super(e);for(var i=0,s=this._jQItems.length;s>i;i++){var g=this._jQItems[i];!function(e){g.click(function(){e.call(this)})}(g.__clickFunc)}}});return t}),define("module/BottomTip",["fe_common/module/dialog/simpledialog"],function(e){var t=e.extend({init:function(e){var t=this;e=$.extend({mask:!1,autoPosition:!1,"class":"bottomtip"},e),e.content=e.content+'<a class="j-bottomtip-close bottomtip-close"><i class="icon-crossO"></i></a>',this._super(e),this.getJElem().find(".j-bottomtip-close").click(function(){t.close()})}});return t}),define("fe_common/module/browser",[],function(){return{versions:function(){var e=navigator.userAgent;return navigator.appVersion,{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/)||!!e.match(/AppleWebKit/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.toLowerCase().indexOf("micromessenger")>-1,chrome:e.indexOf("Chrome")>-1||e.indexOf("CriOS")>-1}}()}}),define("fe_common/module/baad",[],function(){var e=BaseClass.extend({_jQbannerElem:null,_jQindicator:null,_transTime:0,_picWidth:0,_duration:0,_animating:!0,_currIdx:1,_currPos:0,_picNum:0,_animateInterval:null,_currIndicator:0,init:function(e){this._jQbannerElem=e.jQbannerElem,this._jQindicator=e.jQindicator,this._transTime=(e.transTime||500)/1e3,this._picWidth=e.picWidth,this._duration=e.duration||5e3,this._picNum=this._jQbannerElem.children().size(),this._prepare(),this._beginAnimate(),this._initSwipe()},_prepare:function(){var e=this._jQbannerElem.children(),t=this._picNum;this._jQbannerElem.prepend($(e.get(t-1)).clone()),this._jQbannerElem.append($(e.get(0)).clone()),this._jQbannerElem.css({width:this._picWidth*(t+2)}),this._moveToIdx(1,0)},_beginAnimate:function(){var e=this;this._stopAnimate(),this._animateInterval=setInterval(function(){e._animating&&(e._adjust(),setTimeout(function(){e._moveToIdx(e._currIdx+1)},1))},e._duration-e._transTime)},_stopAnimate:function(){this._animateInterval&&(clearInterval(this._animateInterval),this._animateInterval=null)},_moveToIdx:function(e,t){this._currIdx=e,this._moveToPos(-this._picWidth*e,t),this._setIndicator(this._currIdx)},_moveToPos:function(e,t){null==t&&(t=this._transTime),this._currPos=e,this._jQbannerElem.css({"-webkit-transform":"translate3d("+e+"px,0,0)",transform:"translate3d("+e+"px,0,0)","-webkit-transition":"-webkit-transform "+t+"s",transition:"transform "+t+"s"})},_setIndicator:function(e){this._jQindicator&&(e=this._getRealIdx(e),this._jQindicator.find(".j-indic"+this._currIndicator).removeClass("indic-focus"),this._jQindicator.find(".j-indic"+e).addClass("indic-focus"),this._currIndicator=e)},_getRealIdx:function(e){return 0==e?e=this._picNum:e==this._picNum+1&&(e=1),e},_adjust:function(){this._moveToIdx(this._getRealIdx(this._currIdx),0)},_initSwipe:function(){var e,t,n=this,r=this._jQbannerElem,i=function(e){var r=e.touches[0].pageX-t;t=e.touches[0].pageX,n._moveToPos(n._currPos+r,0),e.preventDefault(),e.stopPropagation()},s=function(t){r.off("touchmove",i),r.off("touchend touchcancel",s);var o=n._currPos-e;0>o?n._moveToIdx(n._currIdx+1,.3):o>0&&n._moveToIdx(n._currIdx-1,.3),n._animating=!0,n._beginAnimate(),0==o&&$(t.target).trigger("click"),t.preventDefault(),t.stopPropagation()};r.on("touchstart",function(o){n._animating=!1,n._stopAnimate(),n._adjust(),e=n._currPos,t=o.touches[0].pageX,r.on("touchmove",i),r.on("touchend touchcancel",s),o.preventDefault(),o.stopPropagation()})}});return e}),define("fe_common/module/dialog/tipdialog",["fe_common/module/dialog/simpledialog"],function(e){var t=e.extend({_type:null,_hideDelay:2e3,_animationTime:300,init:function(e){e=e||{},this._type=e.type?e.type:this._type,this._hideDelay="number"==typeof e.hideDelay?e.hideDelay:this._hideDelay,this._showOnce="boolean"==typeof e.showOnce?e.showOnce:!1,e=$.extend({mask:!1,"class":"tipdialog"},e),e.content=this._getContent(e.content),this._super(e)},_getContent:function(e){var t='<div class="tipdialog-content">';switch(this._type){case"success":t+='<i class="icon-tick"></i>';break;case"fail":t+='<i class="icon-cross"></i>'}return t+="<span>"+e+"</span></div>"},show:function(){var e=this;this._super(),this._$wrapper.css("opacity","1"),this._showOnce&&this.on("hided",function(){e.close()}),0!=this._hideDelay&&setTimeout(function(){e.hide()},this._hideDelay)},hide:function(){var e=this;this.trigger("hide"),this._$wrapper.css("opacity","0"),this._$mask&&this._$mask.hide(),setTimeout(function(){e._$wrapper.hide(),e.trigger("hided")},this._animationTime)}});return t}),define("module/appDownload",["fe_common/module/browser"],function(e){return{go:function(t){t=t||{};var n=t.channel||1033;delayGo(e.versions.ios&&!e.versions.weixin?"https://itunes.apple.com/cn/app/mei-tuan-wai-mai/id737310995":e.versions.android&&!e.versions.weixin?"http://waimai.meituan.com/download?channel="+n:"http://waimai.meituan.com/getapp/"+n+"?position=1")}}}),define("module/payOnlineD",[],function(){var e=function(e){var t={token:$.cookie("lt"),tradeno:e.tradeno,pay_token:e.pay_token,nb_platform:"touch",nb_version:"1.0",pay_success_url:e.pay_success_url,redr_url:e.redr_url},n=$("<form/>");n.attr({action:e.pay_url,method:"post",target:"_self"});for(var r in t)n.append('<input type="hidden" name="'+r+'" value="'+t[r]+'">');return n.submit(),!1};return e}),define("module/payOnline",["module/payOnlineD"],function(e){var t=function(t,r){$.post(t+"/pay/genpay/"+r,function(t){if(t&&0==t.code){var r=t.data;e(r)}})};return t}),define("fe_common/module/TimeCount",[],function(){var e=BaseClass.extend({init:function(e,t,n){var r=this,i=$(e),s=function(e){if(0>=e)return"0绉�";var t=Math.floor(e/3600),n=t>0?t+"灏忔椂":"";e%=3600;var r=Math.floor(e/60),i=r>0?r+"鍒嗛挓":"";e%=60;var s=e>0?e+"绉�":"";return n+i+s},o=new Date,u=0,a=null,f=function(){var e=Math.floor((new Date-o)/1e3);u="up"==n?t+e:t-e,0>u&&(u=0,null!=a&&(clearInterval(a),r.trigger("endCount")));var f=s(u);i.text(f)};f(),a=setInterval(f,1e3)}});return e}),define("module/payTest",["fe_common/module/dialog/buttondialog"],function(e){var t=function(t,r){var i=new e({content:"鏀粯娴嬭瘯",btns:[{value:"鏀粯",func:function(){$.post(t+"/pay/testOnlinePay/"+r,function(){i.close(),delayGo(t+"/order/statusdetail/"+r)})}},{value:"鍙栨秷",func:function(){i.close(),delayGo(t+"/order/statusdetail/"+r)}}]})};return t}),define("module/FoodStore",[],function(){var e=BaseClass.extend({orders:{},poi:null,_store:null,init:function(){this._store=$wm.store,this._read()},save:function(e,t){var n=[];for(var r in t){var i=parseInt(t[r].num);i>0&&(n.push(r),n.push(","),n.push(i),n.push("|"))}var s=e+":"+n.join("");this._store.setItem("w_c",s)},clear:function(){this._store.removeItem("w_c")},_read:function(){var e=this._store.getItem("w_c");if(null!=e){var t=e.indexOf(":"),n=e.substring(0,t),r=e.substring(t+1);if(n=parseInt(n),n>=0){for(var i=r.split("|"),s=0,o=i.length;o>s;s++){var u=i[s].split(",");if(2==u.length){var a=parseInt(u[1]),f=u[0],l=parseInt(f.split("-")[0]),c=parseInt(f.split("-")[1]);a>0&&l>0&&c>0&&(this.orders[f]={num:a})}}this.poi=n}}}});return e}),define("page/order/order-detail/PhoneMenu",["fe_common/module/dialog/menudialog"],function(e){var t={TYPE_HASTEN:"hasten",TYPE_RESTAURANT_PHONE:"restaurant_phone"};return t=$.extend(BaseClass.extend({_order:null,_dlg:null,_type:t.TYPE_RESTAURANT_PHONE,_restaurantOption:null,_courierOption:null,_serviceOption:null,_cancelOption:null,init:function(e,t){this._order=e,this._type=t;var n=this;this._restaurantOption={type:"button",content:"鍟嗗鐢佃瘽",func:function(){delayGo("tel:"+e.phone),n._dlg.close()}},this._courierOption={type:"button",content:"閫侀鍛樼數璇�",func:function(){delayGo("tel:"+e.courierPhone),n._dlg.close()}},this._serviceOption={type:"button",content:"缇庡洟澶栧崠瀹㈡湇",func:function(){delayGo("tel:"+e.servicePhone),n._dlg.close()}},this._cancelOption={type:"cancel",content:"鍙栨秷"},this.show()},show:function(){var n=this._type==t.TYPE_HASTEN?this._getHastenPhoneOptionGroup():this._getRestaurantPhoneOptionGroup();this._dlg=new e({menugroup:[n,[this._cancelOption]]})},_getHastenPhoneOptionGroup:function(){var e,t=this._order;return t.status==4?e=[this._restaurantOption]:t.status==6&&(e=[this._courierOption]),e},_getRestaurantPhoneOptionGroup:function(){var e=[],t=this,n=t._order;return n.phone&&e.push(t._restaurantOption),n.courierPhone&&e.push(t._courierOption),n.servicePhone&&e.push(t._serviceOption),e}}),t),t}),define("page/order/order-detail",["fe_common/module/dialog/buttondialog","page/order/order-detail/PhoneMenu","module/BottomTip","fe_common/module/browser","fe_common/module/baad","fe_common/module/dialog/tipdialog","module/appDownload","fe_common/module/dialog/simpledialog","module/payOnline","fe_common/module/TimeCount","module/payTest","module/FoodStore"],function(e,t,n,r,i,s,o,u,a,f,l,c){return{_order:{},init:function(e){FastClick.attach(document.body);var t=this;this._order=$.extend(this._order,e.order),this._setOrderRecTime(this._order),this._oprateHandle(),this._payTimedown(),this._initNav(),this._initBottomTip(),this._initRestaurantPhone(),this._initReachTimeTip(),window.bLog("waimai_i_order_detail")},_oprateHandle:function(){function n(e){var t={};for(var n=0,r=e.length;n<r;n++)t[e[n].spu_id+"-"+e[n].id]={num:e[n].count};return t}var t=this;$("#buy-again-btn").on("click",function(){var r=new c,i=t._order.poiId,o=t._order.foodlist,u=o.length,a,f={wm_poi_id:i,foodlist:o,addr_longitude:t._order.longitude,addr_latitude:t._order.latitude,wm_order_pay_type:1};t._order.terminal=="i"?a=0:t._order.terminal=="mti"&&(a=1),$.get(t._order.baseurl+"/ilog",{code:"20000332",result:a}),$.post(t._order.baseurl+"/order/ajax/preview",{data:JSON.stringify(f)},function(a){var f=a.code,l=null;f==3?l=new e({content:a.msg,btns:[{value:"涓嶇敤浜�",func:function(){l.close()}},{value:"濂界殑",func:function(){var e=a.data;for(var s=0,f=e.length;s<f;s++)for(var l=0;l<u;l++)if(o[l].id==e[s].id&&o[l].spu_id==e[s].spu_id){e[s].stock?o[l].count=e[s].stock:o.splice(l,1);break}o.length?r.save(i,n(o)):r.clear(),delayGo(t._order.baseurl+"/restaurant/"+i)}}]}):f==4?l=new e({content:a.msg,btns:[{value:"鐭ラ亾浜�",func:function(){l.close()}}]}):f==8?l=new e({content:a.msg,btns:[{value:"涓嶇敤浜�",func:function(){l.close()}},{value:"濂界殑",func:function(){r.save(i,n(o)),delayGo(t._order.baseurl+"/restaurant/"+i)}}]}):f==2001?l=new e({content:a.msg,btns:[{value:"鐭ラ亾浜�",func:function(){l.close()}}]}):f==0?(r.save(i,n(o)),delayGo(t._order.baseurl+"/order/preview")):new s({content:a.msg})})}),$("#btn-cancelorder").click(function(){t._order.status==1||t._order.status==2?t._cancelOrder(t._order.payStatus==0?"纭畾鍙栨秷璁㈠崟锛�":"鍙栨秷璁㈠崟鍚庯紝娆鹃」灏嗙珛鍗抽€€鍥炲埌缇庡洟璐︽埛浣欓"):t._order.payStatus==0?t._cancelOrder("纭畾鍙栨秷璁㈠崟锛�"):$.get(t._order.baseurl+"/pay/refund/preview/"+t._order.orderViewId,function(n){if(n.code==0)delayGo(t._order.baseurl+"/pay/genrefund/"+t._order.orderViewId);else if(n.code==2)var r=n.data,i=new e({content:r.failure_description,btns:[{value:"鎷ㄦ墦鐢佃瘽",func:function(){delayGo("tel:"+r.poi_phone)}},{value:"鍐嶇瓑绛�",func:function(){i.close()}}]});else new s({content:"鏈嶅姟绔紓甯�"})})}),$("#btn-received").click($.proxy(this._received,this)),$("#btn-hasten").click($.proxy(this._hasten,this)),$("#btn-paynow").on("click",function(){var e=$(this).data("order-id");t._order.environment=="test"||t.environment=="qatest"?l(t._order.baseurl,e):a(t._order.baseurl,e)}),$("#btn-cancelrefund").on("click",function(){var n=new e({content:"鍙栨秷閫€娆惧悗锛屽綋鍓嶉€€娆炬祦绋嬪皢缁撴潫銆傜‘瀹氬彇娑堥€€娆惧悧",btns:[{value:"鍙栨秷",func:function(){n.close()}},{value:"纭畾",func:function(){n.close(),$.get(t._order.baseurl+"/pay/refund/cancel/"+t._order.orderViewId,function(e){e&&e.code==0&&window.location.reload()})}}]})}),$("#coupon-close").click(function(){$(".coupon-infor").hide()})},_payTimedown:function(){var e=$("#order-remain-time");if(!e.size())return!1;var t=new f(e,e.data("time-down"),"down");t.on("endCount",function(){location.reload()})},_setOrderRecTime:function(){var e=this,t=$("#order-receive-time");if(e._order.status<4){var n=Math.max.apply(Math,e._order.orderRecInitTime),r=e._order.serverTime;n>r?t.html(e._order.operator_tip):(t.html("绛夊緟鎺ュ崟 <em>"+e._timeTransform(r,n)+"</em>"),setInterval(function(){r++,t.html("绛夊緟鎺ュ崟 <em>"+e._timeTransform(r,n)+"</em>")},1e3))}},_timeTransform:function(e,t){var n=e-t,r=parseInt(n/60),i=n%60,s=(r<10?"0":"")+r+":"+(i<10?"0":"")+i;return s},_hasten:function(){var e=this;$.get(e._order.baseurl+"/ilog",{code:"20000024",result:this._order.orderViewId}),new t(this._order,t.TYPE_HASTEN)},_contactCancelOrder:function(t,n){var r=this,i=new e({content:t,btns:[{value:"鎷ㄦ墦鐢佃瘽",func:function(){i.close(),delayGo("tel:"+n)}},{value:"鍐嶇瓑绛�",func:function(){i.close()}}]})},_cancelOrder:function(t){var n=this,r=new e({content:t,btns:[{value:"鍙栨秷璁㈠崟",func:function(){r.close(),$.get(n._order.baseurl+"/order/ajax/cancel/"+n._order.orderViewId,function(e){e.code==0?location.reload():e.code==2?n._contactCancelOrder(e.data.failure_descriptiom,e.data.poi_phone):n._contactService(e.data.failure_description,e.data.service_phone)})}},{value:"鍐嶇瓑绛�",func:function(){r.close()}}]})},_received:function(){var t=this,n=t._order.orderViewId,r=t._order.orderTime*1e3,i=[];i.push('<h4 class="cfm_time_title">閫佽揪鏃堕棿</h4>'),i.push('<div id="cfm_time_wrap">'),i.push("<div>"),i.push('<ul class="cfm_time_list">');var s=6e5,o=Number(r)+s,a=Math.round(o/s)*s,f=new Date,l=f.getTime(),c=f.getDate(),h,p,d,v=0,m;l<a?(h=Math.round(l/s)*s,h<r?p=a:p=h):p=a,d=Math.round(l/s)*s,d<=p&&(d=p),v=(d-p)/s+1,m=v>=4?3:0;for(var g=0;g<v;g++){var y=new Date(p+s*g),b=y.getDate(),w=(b==c?"褰撳ぉ":"鏄ㄥぉ")+" "+(y.getHours()<10?"0":"")+y.getHours()+":"+(y.getMinutes()?y.getMinutes():"00");i.push("<li"+(g==m?' class="hvr"':"")+' data-time="'+y.getTime()/1e3+'">'+w+"</li>")}i.push("</ul>"),i.push("</div>"),i.push("</div>"),$("html, body").css("overflow","hidden");var E=new u({id:"cfm_dialog",content:i.join(""),show:!1});$("#cfm_dialog").css("max-height",$(window).height()*.9),E.show();var S=new IScroll("#cfm_time_wrap",{tap:!0});$(document).on("click",".mask",function(){$("html, body").css("overflow","visible"),E.close()}),$(".cfm_time_list").on("tap","li",function(){var i=$(this),s=i.text(),o=Math.floor((Number(i.data("time"))-r/1e3)/60);$("html, body").css("overflow","visible"),E.close(),$.get(t._order.baseurl+"/order/ajax/confirmreceive/"+n,{ship_time:o},function(t){if(t.code==0)if(t.data.poi_coupon!=null)var n=new e({content:'<img src="http://xs01.meituan.net/waimai_i/img/coupon/red-icon.25dda606.png" class="coupon-redimg"><div class="coupon-tips">'+t.data.poi_coupon.title+"</div>"+'<div class="coupon-tips-sec">'+t.data.poi_coupon.desc+"</div>",btns:[{value:"鐭ラ亾浜�",attrs:{"class":"coupon-ok"},func:function(){n.close(),location.reload()}}]});else location.reload()})})},_contactService:function(t,n){var r=this,i=new e({content:t,btns:[{value:"鑱旂郴瀹㈡湇",func:function(){i.close(),delayGo("tel:"+n)}},{value:"鏆備笉鑱旂郴",func:function(){i.close(),delayGo(function(){location.reload()})}}]})},_initBottomTip:function(){var e=this,t=$("#bottomtip");if(t.size()==0)return;var n=$(window).width(),r=t.find(".j-bottomtip-item");r.each(function(){$(this).css({width:n+"px"})}),t.find(".j-bottomtip-app-btn").click(function(){o.go({channel:e._order.channel})}),t.find(".j-bottomtip-close").click(function(){t.hide(),$.post(e._order.baseurl+"/order/closeTips",{orderViewId:e._order.orderViewId})}),r.size()>1&&new i({jQbannerElem:t.find(".j-bottomtip-list"),jQindicator:t.find(".j-bottomtip-indicator"),picWidth:n})},_initRestaurantPhone:function(){var e=this._order;$(".j-res-phone").click(function(){new t(e,t.TYPE_RESTAURANT_PHONE)})},_initReachTimeTip:function(){var e=null;$("#status-brief-help").click(function(){var t=$(this).offset(),n=t.top+t.height;e||(e=new s({content:'<div class="status-brief-help-tip">鏈椂闂翠粎渚涘弬鑰冿紝璇蜂互瀹為檯閫佽揪鏃堕棿涓哄噯</div>',autoPosition:!1,show:!1}),e.on("showed",function(){var t=($(window).width()-e.getJElem().width())/2;e.getJElem().css({top:n,left:t})})),e.show()})},_initNav:function(){var e=$("#nav"),t=e.find(".j-nav-bottomline");e.delegate(".j-nav-item","click",function(){var n=$(this);e.find(".j-nav-item").removeClass("nav-choose"),n.addClass("nav-choose"),n.hasClass("j-nav-status")?location.reload():(t.addClass("nav-bottomlineright"),$("#order-status").hide(),$("#order-detail").show())})}}});