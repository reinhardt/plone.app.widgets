/*!
 * pickadate.js v2.0 - 21 December, 2012
 * By Amsul (http://amsul.ca)
 * Hosted on https://github.com/amsul/pickadate.js
 * Licensed under MIT ("expat" flavour) license.
 *//*jshint
   debug: true,
   devel: true,
   browser: true,
   asi: true,
   unused: true,
   eqnull: true
 */(function(e,t,n,r){"use strict";function h(e,t){if(typeof e=="function")return e.call(t)}function p(e){return(e<10?"0":"")+e}function d(e,t,n,r){return t?(t=Array.isArray(t)?t.join(""):t,n=n?' class="'+n+'"':"",r=r?" "+r:"","<"+e+n+r+">"+t+"</"+e+">"):""}function v(e,t){return Array.isArray(e)?e=new Date(e[0],e[1],e[2]):isNaN(e)?t||(e=new Date,e.setHours(0,0,0,0)):e=new Date(e),{YEAR:t||e.getFullYear(),MONTH:t||e.getMonth(),DATE:t||e.getDate(),DAY:t||e.getDay(),TIME:t||e.getTime(),OBJ:t||e}}var i=7,s=6,o=s*i,u="div",a="pickadate__",f=e(n),l=e(n.body),c=function(t,r){function M(e,t){return e===!0?b:Array.isArray(e)?(--e[1],v(e)):e&&!isNaN(e)?v([b.YEAR,b.MONTH,b.DATE+e]):v(0,t?Infinity:-Infinity)}function _(e,t){e=e.TIME?e:v(e);if(S){var n=e;while(S.filter(x,e).length)e=v([e.YEAR,e.MONTH,e.DATE+(t||1)]),e.MONTH!=n.MONTH&&(e=v([n.YEAR,n.MONTH,t>0?++n.DATE:--n.DATE]),n=e)}return e.TIME<w.TIME?e=_(w):e.TIME>E.TIME&&(e=_(E,-1)),e}function D(e){if(e&&C.YEAR>=E.YEAR&&C.MONTH>=E.MONTH||!e&&C.YEAR<=w.YEAR&&C.MONTH<=w.MONTH)return"";var t="month"+(e?"Next":"Prev");return d(u,r[t],g[t],"data-nav="+(e||-1))}function P(e){return r.monthSelector?d("select",e.map(function(e,t){return d("option",e,0,"value="+t+(C.MONTH==t?" selected":"")+q(t,C.YEAR," disabled",""))}),g.selectMonth,R()):d(u,e[C.MONTH],g.month)}function H(){var e=C.YEAR,t=r.yearSelector;if(t){t=t===!0?5:~~(t/2);var n=[],i=e-t,s=I(i,w.YEAR),o=e+t+(s-i),a=I(o,E.YEAR,1);s=I(i-(o-a),w.YEAR);for(var f=0;f<=a-s;f+=1)n.push(s+f);return d("select",n.map(function(t){return d("option",t,0,"value="+t+(e==t?" selected":""))}),g.selectYear,R())}return d(u,e,g.year)}function B(){var e,t,n,s=[],a="",f=v([C.YEAR,C.MONTH+1,0]).DATE,l=v([C.YEAR,C.MONTH,1]).DAY+(r.firstDay?-2:-1),c=function(e,t){var n,r=[g.day,t?g.dayInfocus:g.dayOutfocus];if(e.TIME<w.TIME||e.TIME>E.TIME||S&&S.filter(x,e).length)n=1,r.push(g.dayDisabled);return e.TIME==b.TIME&&r.push(g.dayToday),e.TIME==T.TIME&&r.push(g.dayHighlighted),e.TIME==N.TIME&&r.push(g.daySelected),[r.join(" "),"data-"+(n?"disabled":"date")+"="+[e.YEAR,e.MONTH+1,e.DATE].join("/")]};l+=l<-1?7:0;for(var h=0;h<o;h+=1)t=h-l,e=v([C.YEAR,C.MONTH,t]),n=c(e,t>0&&t<=f),s.push(d("td",d(u,e.DATE,n[0],n[1]))),h%i+1==i&&(a+=d("tr",s.splice(0,i)));return d("tbody",a,g.body)}function j(){return d("button",r.today,g.buttonToday,"data-date="+U("yyyy/mm/dd",b)+" "+R())+d("button",r.clear,g.buttonClear,"data-clear=1 "+R())}function F(){return d(u,d(u,d(u,d(u,D()+D(1)+P(r.showMonthsFull?r.monthsFull:r.monthsShort)+H(),g.header)+d("table",[L,B()],g.table)+d(u,j(),g.footer),g.calendar),g.wrap),g.frame)}function I(e,t,n){return n&&e<t||!n&&e>t?e:t}function q(e,t,n,r){return t<=w.YEAR&&e<w.MONTH?n||w.MONTH:t>=E.YEAR&&e>E.MONTH?n||E.MONTH:r!=null?r:e}function R(){return"tabindex="+(m.isOpen?0:-1)}function U(e,t){return y.toArray(e||r.format).map(function(e){return h(y[e],t||N)||e}).join("")}function z(e,t){T=e,C=e,t||W(e),K()}function W(e){N=e||N,c.value=e?U():"",k&&(k.value=e?U(r.formatSubmit):""),h(r.onSelect,a)}function X(e){return A.find("."+e)}function V(e,t){t=t||C.YEAR,e=q(e,t),C=v([t,e,1]),K()}function J(e){[m.selectMonth,m.selectYear,X(g.buttonToday)[0],X(g.buttonClear)[0]].map(function(t){t&&(t.tabIndex=e)})}function K(){A.html(F()),Q()}function Q(){m.selectMonth=X(g.selectMonth).on({click:function(e){e.stopPropagation()},change:function(){V(+this.value),X(g.selectMonth).focus()}})[0],m.selectYear=X(g.selectYear).on({click:function(e){e.stopPropagation()},change:function(){V(C.MONTH,+this.value),X(g.selectYear).focus()}})[0]}var s=function(){},a=s.prototype={constructor:s,$node:t,init:function(){return t.on({"focus click":function(){A.addClass(g.focused),a.open()},blur:function(){A.removeClass(g.focused)},keydown:function(e){var t=e.keyCode,n=t==8||t==46;if(n||!m.isOpen&&O[t])e.preventDefault(),e.stopPropagation(),n?a.clear().close():a.open()}}).after([A,k]),c.autofocus&&a.open(),Q(),h(r.onStart,a),a},open:function(){return m.isOpen?a:(m.isOpen=!0,J(0),t.focus().addClass(g.inputActive),A.addClass(g.opened),l.addClass(g.bodyActive),f.on("focusin.P"+m.id,function(e){!A.find(e.target).length&&e.target!=c&&a.close()}).on("click.P"+m.id,function(e){e.target!=c&&a.close()}).on("keydown.P"+m.id,function(e){var t=e.keyCode,n=O[t];t==27?(c.focus(),a.close()):e.target==c&&(n||t==13)&&(e.preventDefault(),n?z(_([C.YEAR,C.MONTH,T.DATE+n],n),1):(W(T),K(),a.close()))}),h(r.onOpen,a),a)},close:function(){return m.isOpen?(m.isOpen=!1,J(-1),t.removeClass(g.inputActive),A.removeClass(g.opened),l.removeClass(g.bodyActive),f.off(".P"+m.id),h(r.onClose,a),a):a},show:function(e,t){return V(--e,t),a},clear:function(){return W(0),K(),a},getDate:function(e){return c.value?e===!0?N.OBJ:U(e):""},setDate:function(e,t,n,r){return z(_([e,--t,n]),r),a},getDateLimit:function(e,t){return U(t,e?E:w)},setDateLimit:function(e,t){return t?(E=M(e,t),C.TIME>E.TIME&&(C=E)):(w=M(e),C.TIME<w.TIME&&(C=w)),K(),a}},c=function(e){return e.autofocus=e==n.activeElement,e.type="text",e.readOnly=!0,e}(t[0]),m={id:~~(Math.random()*1e9)},g=r.klass,y=function(){function e(e){return e.match(/\w+/)[0].length}function t(e){return/\d/.test(e[1])?2:1}function n(e,t,n){var r=e.match(/\w+/)[0];return!t.mm&&!t.m&&(t.m=n.indexOf(r)+1),r.length}return{d:function(e){return e?t(e):this.DATE},dd:function(e){return e?2:p(this.DATE)},ddd:function(t){return t?e(t):r.weekdaysShort[this.DAY]},dddd:function(t){return t?e(t):r.weekdaysFull[this.DAY]},m:function(e){return e?t(e):this.MONTH+1},mm:function(e){return e?2:p(this.MONTH+1)},mmm:function(e,t){var i=r.monthsShort;return e?n(e,t,i):i[this.MONTH]},mmmm:function(e,t){var i=r.monthsFull;return e?n(e,t,i):i[this.MONTH]},yy:function(e){return e?2:(""+this.YEAR).slice(2)},yyyy:function(e){return e?4:this.YEAR},toArray:function(e){return e.split(/(?=\b)(d{1,4}|m{1,4}|y{4}|yy)+(\b)/g)}}}(),b=v(),w=M(r.dateMin),E=M(r.dateMax,1),S=function(e){if(Array.isArray(e))return e[0]===!0&&(m.disabled=e.shift()),e.map(function(e){return isNaN(e)?(--e[1],v(e)):--e+r.firstDay})}(r.datesDisabled),x=function(){var e=function(e){return this.TIME==e.TIME||S.indexOf(this.DAY)>-1};return m.disabled?function(t,n,r){return r.map(e,this).indexOf(!0)<0}:e}(),T=function(e,t){return e?(t={},y.toArray(r.formatSubmit).map(function(n){var r=y[n]?y[n](e,t):n.length;y[n]&&(t[n]=e.slice(0,r)),e=e.slice(r)}),t=[+(t.yyyy||t.yy),+(t.mm||t.m)-1,+(t.dd||t.d)]):t=Date.parse(t),_(!isNaN(t)||Array.isArray(t)?t:b)}(c.getAttribute("data-value"),c.value),N=T,C=T,k=r.formatSubmit?e("<input type=hidden name="+c.name+r.hiddenSuffix+">").val(c.value?U(r.formatSubmit):"")[0]:null,L=function(e){return r.firstDay&&e.push(e.splice(0,1)[0]),d("thead",d("tr",e.map(function(e){return d("th",e,g.weekdays)})))}((r.showWeekdaysShort?r.weekdaysShort:r.weekdaysFull).slice(0)),A=e(d(u,F(),g.holder)).on("click",function(t){var n,r=e(t.target),i=r.data();t.stopPropagation(),c.focus(),i.nav?V(C.MONTH+i.nav):i.clear?a.clear().close():i.date?(n=i.date.split("/").map(function(e){return+e}),a.setDate(n[0],n[1],n[2]).close()):r[0]==A[0]&&a.close()}),O={40:7,38:-7,39:1,37:-1};return new a.init};e.fn.pickadate=function(t){var n="pickadate";return t=e.extend(!0,{},e.fn.pickadate.defaults,t),t.disablePicker?this:this.each(function(){var r=e(this);this.nodeName=="INPUT"&&!r.data(n)&&r.data(n,new c(r,t))})},e.fn.pickadate.defaults={monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthPrev:"&#9664;",monthNext:"&#9654;",showMonthsFull:1,showWeekdaysShort:1,today:"Today",clear:"Clear",format:"d mmmm, yyyy",formatSubmit:0,hiddenSuffix:"_submit",firstDay:0,monthSelector:0,yearSelector:0,dateMin:0,dateMax:0,datesDisabled:0,disablePicker:0,onOpen:0,onClose:0,onSelect:0,onStart:0,klass:{bodyActive:a+"active",inputActive:a+"input--active",holder:a+"holder",opened:a+"holder--opened",focused:a+"holder--focused",frame:a+"frame",wrap:a+"wrap",calendar:a+"calendar",table:a+"table",header:a+"header",monthPrev:a+"nav--prev",monthNext:a+"nav--next",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",body:a+"body",day:a+"day",dayDisabled:a+"day--disabled",daySelected:a+"day--selected",dayHighlighted:a+"day--highlighted",dayToday:a+"day--today",dayInfocus:a+"day--infocus",dayOutfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today"}};var m=String.prototype.split,g=/()??/.exec("")[1]===r;String.prototype.split=function(e,t){var n=this;if(Object.prototype.toString.call(e)!=="[object RegExp]")return m.call(n,e,t);var i=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),o=0,u,a,f,l;e=new RegExp(e.source,s+"g"),n+="",g||(u=new RegExp("^"+e.source+"$(?!\\s)",s)),t=t===r?-1>>>0:t>>>0;while(a=e.exec(n)){f=a.index+a[0].length;if(f>o){i.push(n.slice(o,a.index)),!g&&a.length>1&&a[0].replace(u,function(){for(var e=1;e<arguments.length-2;e++)arguments[e]===r&&(a[e]=r)}),a.length>1&&a.index<n.length&&Array.prototype.push.apply(i,a.slice(1)),l=a[0].length,o=f;if(i.length>=t)break}e.lastIndex===a.index&&e.lastIndex++}return o===n.length?(l||!e.test(""))&&i.push(""):i.push(n.slice(o)),i.length>t?i.slice(0,t):i},Array.isArray||(Array.isArray=function(e){return{}.toString.call(e)=="[object Array]"}),[].map||(Array.prototype.map=function(e,t){var n=this,r=n.length,i=new Array(r);for(var s=0;s<r;s++)s in n&&(i[s]=e.call(t,n[s],s,n));return i}),[].filter||(Array.prototype.filter=function(e){if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")throw new TypeError;var r=[],i=arguments[1];for(var s=0;s<n;s++)if(s in t){var o=t[s];e.call(i,o,s,t)&&r.push(o)}return r}),[].indexOf||(Array.prototype.indexOf=function(e){if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>1&&(r=Number(arguments[1]),r!=r?r=0:r!=0&&r!=Infinity&&r!=-Infinity&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1})})(jQuery,window,document);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e,t){function n(){}function r(){}function i(){}function x(e,t){typeof t=="string"&&(t=t.split("."));var n=t.join(".").replace(/\.(\w)/g,function(e,t){return t.toUpperCase()}),r=t.shift(),i;return typeof (i=e[n])!=a?i=i:typeof (i=e[r])!=a&&t.length>0&&(i=x(i,t)),i}function T(){function i(e,r){n.bind(e,function(){return r.apply(t,arguments)})}var e=o.apply(arguments),t=this,n=e.length===1?t:e.shift(),r;e=e[0]||{};for(r in e)i(r,e[r])}function N(e,t){return{input:e,form:t}}var s=(JSON||{}).stringify,o=Array.prototype.slice,u,a="undefined",f="item.manager",l="plugins",c="ext",h="html.wrap",p="html.hidden",d="keys",v="preInvalidate",m="postInvalidate",g="getFormData",y="setFormData",b="setInputData",w="postInit",E="ready",S={itemManager:r,plugins:[],ext:{},html:{wrap:'<div class="text-core"><div class="text-wrap"/></div>',hidden:'<input type="hidden" />'},keys:{8:"backspace",9:"tab",13:"enter!",27:"escape!",37:"left",38:"up!",39:"right",40:"down!",46:"delete",108:"numpadEnter"}};if(!s)throw new Error("JSON.stringify() not found");u=r.prototype,u.init=function(e){},u.filter=function(e,t){var n=[],r,i;for(r=0;r<e.length;r++)i=e[r],this.itemContains(i,t)&&n.push(i);return n},u.itemContains=function(e,t){return this.itemToString(e).toLowerCase().indexOf(t.toLowerCase())==0},u.stringToItem=function(e){return e},u.itemToString=function(e){return e},u.compareItems=function(e,t){return e==t},u=n.prototype,u.init=function(t,n){var r=this,i,s,o;r._defaults=e.extend({},S),r._opts=n||{},r._plugins={},r._itemManager=s=new(r.opts(f)),t=e(t),o=e(r.opts(h)),i=e(r.opts(p)),t.wrap(o).keydown(function(e){return r.onKeyDown(e)}).keyup(function(e){return r.onKeyUp(e)}).data("textext",r),e(r).data({hiddenInput:i,wrapElement:t.parents(".text-wrap").first(),input:t}),i.attr("name",t.attr("name")),t.attr("name",null),i.insertAfter(t),e.extend(!0,s,r.opts(c+".item.manager")),e.extend(!0,r,r.opts(c+".*"),r.opts(c+".core")),r.originalWidth=t.outerWidth(),r.invalidateBounds(),s.init(r),r.initPatches(),r.initPlugins(r.opts(l),e.fn.textext.plugins),r.on({setFormData:r.onSetFormData,getFormData:r.onGetFormData,setInputData:r.onSetInputData,anyKeyUp:r.onAnyKeyUp}),r.trigger(w),r.trigger(E),r.getFormData(0)},u.initPatches=function(){var t=[],n=e.fn.textext.patches,r;for(r in n)t.push(r);this.initPlugins(t,n)},u.initPlugins=function(t,n){var r=this,i,s,o,u=[],a;typeof t=="string"&&(t=t.split(/\s*,\s*|\s+/g));for(a=0;a<t.length;a++)s=t[a],o=n[s],o&&(r._plugins[s]=o=new o,r[s]=function(e){return function(){return e}}(o),u.push(o),e.extend(!0,o,r.opts(c+".*"),r.opts(c+"."+s)));u.sort(function(e,t){return e=e.initPriority(),t=t.initPriority(),e===t?0:e<t?1:-1});for(a=0;a<u.length;a++)u[a].init(r)},u.hasPlugin=function(e){return!!this._plugins[e]},u.on=T,u.bind=function(e,t){this.input().bind(e,t)},u.trigger=function(){var e=arguments;this.input().trigger(e[0],o.call(e,1))},u.itemManager=function(){return this._itemManager},u.input=function(){return e(this).data("input")},u.opts=function(e){var t=x(this._opts,e);return typeof t=="undefined"?x(this._defaults,e):t},u.wrapElement=function(){return e(this).data("wrapElement")},u.invalidateBounds=function(){var e=this,t=e.input(),n=e.wrapElement(),r=n.parent(),i=e.originalWidth+"px",s;e.trigger(v),s=t.outerHeight()+"px",t.css({width:i}),n.css({width:i,height:s}),r.css({height:s}),e.trigger(m)},u.focusInput=function(){this.input()[0].focus()},u.serializeData=s,u.hiddenInput=function(t){return e(this).data("hiddenInput")},u.getWeightedEventResponse=function(e,t){var n=this,r={},i=0;n.trigger(e,r,t);for(var s in r)i=Math.max(i,s);return r[i]},u.getFormData=function(e){var t=this,n=t.getWeightedEventResponse(g,e||0);t.trigger(y,n.form),t.trigger(b,n.input)},u.onAnyKeyUp=function(e,t){this.getFormData(t)},u.onSetInputData=function(e,t){this.input().val(t)},u.onSetFormData=function(e,t){var n=this;n.hiddenInput().val(n.serializeData(t))},u.onGetFormData=function(e,t){var n=this.input().val();t[0]=N(n,n)},e(["Down","Up"]).each(function(){var e=this.toString();u["onKey"+e]=function(t){var n=this,r=n.opts(d)[t.keyCode],i=!0;return r&&(i=r.substr(-1)!="!",r=r.replace("!",""),n.trigger(r+"Key"+e),e=="Up"&&n._lastKeyDown==t.keyCode&&(n._lastKeyDown=null,n.trigger(r+"KeyPress")),e=="Down"&&(n._lastKeyDown=t.keyCode)),n.trigger("anyKey"+e,t.keyCode),i}}),u=i.prototype,u.on=T,u.formDataObject=N,u.init=function(e){throw new Error("Not implemented")},u.baseInit=function(t,n){var r=this;t._defaults=e.extend(!0,t._defaults,n),r._core=t,r._timers={}},u.startTimer=function(e,t,n){var r=this;r.stopTimer(e),r._timers[e]=setTimeout(function(){delete r._timers[e],n.apply(r)},t*1e3)},u.stopTimer=function(e){clearTimeout(this._timers[e])},u.core=function(){return this._core},u.opts=function(e){return this.core().opts(e)},u.itemManager=function(){return this.core().itemManager()},u.input=function(){return this.core().input()},u.val=function(e){var t=this.input();if(typeof e===a)return t.val();t.val(e)},u.trigger=function(){var e=this.core();e.trigger.apply(e,arguments)},u.bind=function(e,t){this.core().bind(e,t)},u.initPriority=function(){return 0};var C=!1,k=e.fn.textext=function(t){var r;return!C&&(r=e.fn.textext.css)!=null&&(e("head").append("<style>"+r+"</style>"),C=!0),this.map(function(){var r=e(this);if(t==null)return r.data("textext");var i=new n;return i.init(r,t),r.data("textext",i),i.input()[0]})};k.addPlugin=function(e,t){k.plugins[e]=t,t.prototype=new k.TextExtPlugin},k.addPatch=function(e,t){k.patches[e]=t,t.prototype=new k.TextExtPlugin},k.TextExt=n,k.TextExtPlugin=i,k.ItemManager=r,k.plugins={},k.patches={}})(jQuery),function(e){function t(){}e.fn.textext.TextExtIE9Patches=t,e.fn.textext.addPatch("ie9",t);var n=t.prototype;n.init=function(e){if(navigator.userAgent.indexOf("MSIE 9")==-1)return;var t=this;e.on({postInvalidate:t.onPostInvalidate})},n.onPostInvalidate=function(){var e=this,t=e.input(),n=t.val();t.val(Math.random()),t.val(n)}}(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtAjax=t,e.fn.textext.addPlugin("ajax",t);var n=t.prototype,r="ajax.data.callback",i="ajax.cache.results",s="ajax.loading.delay",o="ajax.loading.message",u="ajax.type.delay",a="setSuggestions",f="showDropdown",l="loading",c={ajax:{typeDelay:.5,loadingMessage:"Loading...",loadingDelay:.5,cacheResults:!1,dataCallback:null}};n.init=function(e){var t=this;t.baseInit(e,c),t.on({getSuggestions:t.onGetSuggestions}),t._suggestions=null},n.load=function(t){var n=this,i=n.opts(r)||function(e){return{q:e}},s;s=e.extend(!0,{data:i(t),success:function(e){n.onComplete(e,t)},error:function(e,n){console.error(n,t)}},n.opts("ajax")),e.ajax(s)},n.onComplete=function(e,t){var n=this,r=e;n.dontShowLoading(),n.opts(i)==1&&(n._suggestions=e,r=n.itemManager().filter(e,t)),n.trigger(a,{result:r})},n.dontShowLoading=function(){this.stopTimer(l)},n.showLoading=function(){var e=this;e.dontShowLoading(),e.startTimer(l,e.opts(s),function(){e.trigger(f,function(t){t.clearItems();var n=t.addDropdownItem(e.opts(o));n.addClass("text-loading")})})},n.onGetSuggestions=function(e,t){var n=this,r=n._suggestions,s=(t||{}).query||"";if(r&&n.opts(i)===!0)return n.onComplete(r,s);n.startTimer("ajax",n.opts(u),function(){n.showLoading(),n.load(s)})}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtArrow=t,e.fn.textext.addPlugin("arrow",t);var n=t.prototype,r="html.arrow",i={html:{arrow:'<div class="text-arrow"/>'}};n.init=function(t){var n=this,s;n.baseInit(t,i),n._arrow=s=e(n.opts(r)),n.core().wrapElement().append(s),s.bind("click",function(e){n.onArrowClick(e)})},n.onArrowClick=function(e){this.trigger("toggleDropdown"),this.core().focusInput()}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtAutocomplete=t,e.fn.textext.addPlugin("autocomplete",t);var n=t.prototype,r=".",i="text-selected",s=r+i,o="text-suggestion",u=r+o,a="text-label",f=r+a,l="autocomplete.enabled",c="autocomplete.dropdown.position",h="autocomplete.dropdown.maxHeight",p="autocomplete.render",d="html.dropdown",v="html.suggestion",m="hideDropdown",g="showDropdown",y="getSuggestions",b="getFormData",w="toggleDropdown",E="above",S="below",x="mousedownOnAutocomplete",T={autocomplete:{enabled:!0,dropdown:{position:S,maxHeight:"100px"}},html:{dropdown:'<div class="text-dropdown"><div class="text-list"/></div>',suggestion:'<div class="text-suggestion"><span class="text-label"/></div>'}};n.init=function(t){var n=this;n.baseInit(t,T);var r=n.input(),i;n.opts(l)===!0&&(n.on({blur:n.onBlur,anyKeyUp:n.onAnyKeyUp,deleteKeyUp:n.onAnyKeyUp,backspaceKeyPress:n.onBackspaceKeyPress,enterKeyPress:n.onEnterKeyPress,escapeKeyPress:n.onEscapeKeyPress,setSuggestions:n.onSetSuggestions,showDropdown:n.onShowDropdown,hideDropdown:n.onHideDropdown,toggleDropdown:n.onToggleDropdown,postInvalidate:n.positionDropdown,getFormData:n.onGetFormData,downKeyDown:n.onDownKeyDown,upKeyDown:n.onUpKeyDown}),i=e(n.opts(d)),i.insertAfter(r),n.on(i,{mouseover:n.onMouseOver,mousedown:n.onMouseDown,click:n.onClick}),i.css("maxHeight",n.opts(h)).addClass("text-position-"+n.opts(c)),e(n).data("container",i),e(document.body).click(function(e){n.isDropdownVisible()&&!n.withinWrapElement(e.target)&&n.trigger(m)}),n.positionDropdown())},n.containerElement=function(){return e(this).data("container")},n.onMouseOver=function(t){var n=this,r=e(t.target);r.is(u)&&(n.clearSelected(),r.addClass(i))},n.onMouseDown=function(e){this.containerElement().data(x,!0)},n.onClick=function(t){var n=this,r=e(t.target);(r.is(u)||r.is(f))&&n.trigger("enterKeyPress"),n.core().hasPlugin("tags")&&n.val("")},n.onBlur=function(e){var t=this,n=t.containerElement(),r=n.data(x)===!0;t.isDropdownVisible()&&(r?t.core().focusInput():t.trigger(m)),n.removeData(x)},n.onBackspaceKeyPress=function(e){var t=this,n=t.val().length>0;(n||t.isDropdownVisible())&&t.getSuggestions()},n.onAnyKeyUp=function(e,t){var n=this,r=n.opts("keys."+t)!=null;n.val().length>0&&!r&&n.getSuggestions()},n.onDownKeyDown=function(e){var t=this;t.isDropdownVisible()?t.toggleNextSuggestion():t.getSuggestions()},n.onUpKeyDown=function(e){this.togglePreviousSuggestion()},n.onEnterKeyPress=function(e){var t=this;t.isDropdownVisible()&&t.selectFromDropdown()},n.onEscapeKeyPress=function(e){var t=this;t.isDropdownVisible()&&t.trigger(m)},n.positionDropdown=function(){var e=this,t=e.containerElement(),n=e.opts(c),r=e.core().wrapElement().outerHeight(),i={};i[n===E?"bottom":"top"]=r+"px",t.css(i)},n.suggestionElements=function(){return this.containerElement().find(u)},n.setSelectedSuggestion=function(t){if(!t)return;var n=this,r=n.suggestionElements(),s=r.first(),u,a;n.clearSelected();for(a=0;a<r.length;a++){u=e(r[a]);if(n.itemManager().compareItems(u.data(o),t)){s=u.addClass(i);break}}s.addClass(i),n.scrollSuggestionIntoView(s)},n.selectedSuggestionElement=function(){return this.suggestionElements().filter(s).first()},n.isDropdownVisible=function(){return this.containerElement().is(":visible")===!0},n.onGetFormData=function(e,t,n){var r=this,i=r.val(),s=i,o=i;t[100]=r.formDataObject(s,o)},n.initPriority=function(){return 200},n.onHideDropdown=function(e){this.hideDropdown()},n.onToggleDropdown=function(e){var t=this;t.trigger(t.containerElement().is(":visible")?m:g)},n.onShowDropdown=function(t,n){var r=this,i=r.selectedSuggestionElement().data(o),s=r._suggestions;if(!s)return r.trigger(y);e.isFunction(n)?n(r):(r.renderSuggestions(r._suggestions),r.toggleNextSuggestion()),r.showDropdown(r.containerElement()),r.setSelectedSuggestion(i)},n.onSetSuggestions=function(e,t){var n=this,r=n._suggestions=t.result;t.showHideDropdown!==!1&&n.trigger(r===null||r.length===0?m:g)},n.getSuggestions=function(){var e=this,t=e.val();if(e._previousInputValue==t)return;t==""&&(current=null),e._previousInputValue=t,e.trigger(y,{query:t})},n.clearItems=function(){this.containerElement().find(".text-list").children().remove()},n.renderSuggestions=function(t){var n=this;n.clearItems(),e.each(t||[],function(e,t){n.addSuggestion(t)})},n.showDropdown=function(){this.containerElement().show()},n.hideDropdown=function(){var e=this,t=e.containerElement();e._previousInputValue=null,t.hide()},n.addSuggestion=function(e){var t=this,n=t.opts(p),r=t.addDropdownItem(n?n.call(t,e):t.itemManager().itemToString(e));r.data(o,e)},n.addDropdownItem=function(t){var n=this,r=n.containerElement().find(".text-list"),i=e(n.opts(v));return i.find(".text-label").html(t),r.append(i),i},n.clearSelected=function(){this.suggestionElements().removeClass(i)},n.toggleNextSuggestion=function(){var e=this,t=e.selectedSuggestionElement(),n;t.length>0?(n=t.next(),n.length>0&&t.removeClass(i)):n=e.suggestionElements().first(),n.addClass(i),e.scrollSuggestionIntoView(n)},n.togglePreviousSuggestion=function(){var e=this,t=e.selectedSuggestionElement(),n=t.prev();if(n.length==0)return;e.clearSelected(),n.addClass(i),e.scrollSuggestionIntoView(n)},n.scrollSuggestionIntoView=function(e){var t=e.outerHeight(),n=this.containerElement(),r=n.innerHeight(),i=n.scrollTop(),s=(e.position()||{}).top,o=null,u=parseInt(n.css("paddingTop"));if(s==null)return;s+t>r&&(o=s+i+t-r+u),s<0&&(o=s+i-u),o!=null&&n.scrollTop(o)},n.selectFromDropdown=function(){var e=this,t=e.selectedSuggestionElement().data(o);t&&(e.val(e.itemManager().itemToString(t)),e.core().getFormData()),e.trigger(m)},n.withinWrapElement=function(e){return this.core().wrapElement().find(e).size()>0}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://alexgorbatchev.com/textext
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtClear=t,e.fn.textext.addPlugin("clear",t);var n=t.prototype,r="html.clear",i={html:{clear:'<div class="text-clear"/>'}};n.init=function(t){var n=this,s;n.baseInit(t,i),n._clear=s=e(n.opts(r)),n.core().wrapElement().append(s),s.bind("click",function(e){n.onClearClick(e)})},n.onClearClick=function(t){var n=this;if(typeof n.core()._plugins.tags!="undefined"){var r=n.core()._plugins.tags.tagElements();for(var i=0;i<r.length;i++)n.core()._plugins.tags.removeTag(e(r[i]))}n.val(""),n.core().getFormData()}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtFilter=t,e.fn.textext.addPlugin("filter",t);var n=t.prototype,r="filter.enabled",i="filter.items",s={filter:{enabled:!0,items:null}};n.init=function(e){var t=this;t.baseInit(e,s),t.on({getFormData:t.onGetFormData,isTagAllowed:t.onIsTagAllowed,setSuggestions:t.onSetSuggestions}),t._suggestions=null},n.onGetFormData=function(e,t,n){var r=this,i=r.val(),s=i,o="";r.core().hasPlugin("tags")||(r.isValueAllowed(s)&&(o=i),t[300]=r.formDataObject(s,o))},n.isValueAllowed=function(e){var t=this,n=t.opts("filterItems")||t._suggestions||[],i=t.itemManager(),s=!t.opts(r),o;for(o=0;o<n.length&&!s;o++)i.compareItems(e,n[o])&&(s=!0);return s},n.onIsTagAllowed=function(e,t){t.result=this.isValueAllowed(t.tag)},n.onSetSuggestions=function(e,t){this._suggestions=t.result}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtFocus=t,e.fn.textext.addPlugin("focus",t);var n=t.prototype,r="html.focus",i={html:{focus:'<div class="text-focus"/>'}};n.init=function(e){var t=this;t.baseInit(e,i),t.core().wrapElement().append(t.opts(r)),t.on({blur:t.onBlur,focus:t.onFocus}),t._timeoutId=0},n.onBlur=function(e){var t=this;clearTimeout(t._timeoutId),t._timeoutId=setTimeout(function(){t.getFocus().hide()},100)},n.onFocus=function(e){var t=this;clearTimeout(t._timeoutId),t.getFocus().show()},n.getFocus=function(){return this.core().wrapElement().find(".text-focus")}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtPrompt=t,e.fn.textext.addPlugin("prompt",t);var n=t.prototype,r="text-hide-prompt",i="prompt",s="html.prompt",o={prompt:"Awaiting input...",html:{prompt:'<div class="text-prompt"/>'}};n.init=function(t){var n=this,r="placeholder",u,a;n.baseInit(t,o),u=e(n.opts(s)),e(n).data("container",u),n.core().wrapElement().append(u),n.setPrompt(n.opts(i)),a=t.input().attr(r),a||(a=n.opts(i)),t.input().attr(r,""),a&&n.setPrompt(a),e.trim(n.val()).length>0&&n.hidePrompt(),n.on({blur:n.onBlur,focus:n.onFocus,postInvalidate:n.onPostInvalidate,postInit:n.onPostInit})},n.onPostInit=function(e){this.invalidateBounds()},n.onPostInvalidate=function(e){this.invalidateBounds()},n.invalidateBounds=function(){var e=this,t=e.input();e.containerElement().css({paddingLeft:t.css("paddingLeft"),paddingTop:t.css("paddingTop")})},n.onBlur=function(e){var t=this;t.startTimer("prompt",.1,function(){t.showPrompt()})},n.showPrompt=function(){var t=this,n=t.input();e.trim(t.val()).length===0&&!n.is(":focus")&&t.containerElement().removeClass(r)},n.hidePrompt=function(){this.stopTimer("prompt"),this.containerElement().addClass(r)},n.onFocus=function(e){this.hidePrompt()},n.setPrompt=function(e){this.containerElement().text(e)},n.containerElement=function(){return e(this).data("container")}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtSuggestions=t,e.fn.textext.addPlugin("suggestions",t);var n=t.prototype,r="suggestions",i={suggestions:null};n.init=function(e){var t=this;t.baseInit(e,i),t.on({getSuggestions:t.onGetSuggestions,postInit:t.onPostInit})},n.setSuggestions=function(e,t){this.trigger("setSuggestions",{result:e,showHideDropdown:t!=0})},n.onPostInit=function(e){var t=this;t.setSuggestions(t.opts(r),!1)},n.onGetSuggestions=function(e,t){var n=this,i=n.opts(r);i.sort(),n.setSuggestions(n.itemManager().filter(i,t.query))}})(jQuery);/**
 * jQuery TextExt Plugin
 * http://textextjs.com
 *
 * @version 1.3.1
 * @copyright Copyright (C) 2011 Alex Gorbatchev. All rights reserved.
 * @license MIT License
 */(function(e){function t(){}e.fn.textext.TextExtTags=t,e.fn.textext.addPlugin("tags",t);var n=t.prototype,r=".",i="text-tags-on-top",s=r+i,o="text-tag",u=r+o,a="text-tags",f=r+a,l="text-label",c=r+l,h="text-remove",p=r+h,d="tags.enabled",v="tags.items",m="html.tag",g="html.tags",y="isTagAllowed",b="tagClick",w={tags:{enabled:!0,items:null},html:{tags:'<div class="text-tags"/>',tag:'<div class="text-tag"><div class="text-button"><span class="text-label"/><a class="text-remove"/></div></div>'}};n.init=function(t){this.baseInit(t,w);var n=this,r=n.input(),i;n.opts(d)&&(i=e(n.opts(g)),r.after(i),e(n).data("container",i),n.on({enterKeyPress:n.onEnterKeyPress,backspaceKeyDown:n.onBackspaceKeyDown,preInvalidate:n.onPreInvalidate,postInit:n.onPostInit,getFormData:n.onGetFormData}),n.on(i,{click:n.onClick,mousemove:n.onContainerMouseMove}),n.on(r,{mousemove:n.onInputMouseMove})),n._originalPadding={left:parseInt(r.css("paddingLeft")||0),top:parseInt(r.css("paddingTop")||0)},n._paddingBox={left:0,top:0},n.updateFormCache()},n.containerElement=function(){return e(this).data("container")},n.onPostInit=function(e){var t=this;t.addTags(t.opts(v))},n.onGetFormData=function(e,t,n){var r=this,i=n===13?"":r.val(),s=r._formData;t[200]=r.formDataObject(i,s)},n.initPriority=function(){return 100},n.onInputMouseMove=function(e){this.toggleZIndex(e)},n.onContainerMouseMove=function(e){this.toggleZIndex(e)},n.onBackspaceKeyDown=function(e){var t=this,n=t.tagElements().last();t.val().length==0&&t.removeTag(n)},n.onPreInvalidate=function(e){var t=this,n=t.tagElements().last(),r=n.position();n.length>0?r.left+=n.innerWidth():r=t._originalPadding,t._paddingBox=r,t.input().css({paddingLeft:r.left,paddingTop:r.top})},n.onClick=function(t){function l(e,t){a.data(o,e),a.find(c).text(n.itemManager().itemToString(e)),n.updateFormCache(),r.getFormData(),r.invalidateBounds(),t&&r.focusInput()}var n=this,r=n.core(),i=e(t.target),s=0,a;i.is(f)?s=1:i.is(p)?(n.removeTag(i.parents(u+":first")),s=1):i.is(c)&&(a=i.parents(u+":first"),n.trigger(b,a,a.data(o),l)),s&&r.focusInput()},n.onEnterKeyPress=function(e){var t=this,n=t.val(),r=t.itemManager().stringToItem(n);t.isTagAllowed(r)&&(t.addTags([r]),t.core().focusInput())},n.updateFormCache=function(){var t=this,n=[];t.tagElements().each(function(){n.push(e(this).data(o))}),t._formData=n},n.toggleZIndex=function(e){var t=this,n=t.input().offset(),r=e.clientX-n.left,o=e.clientY-n.top,u=t._paddingBox,a=t.containerElement(),f=a.is(s),l=r>u.left&&o>u.top;(!f&&!l||f&&l)&&a[(f?"remove":"add")+"Class"](i)},n.tagElements=function(){return this.containerElement().find(u)},n.isTagAllowed=function(e){var t={tag:e,result:!0};return this.trigger(y,t),t.result===!0},n.addTags=function(e){if(!e||e.length==0)return;var t=this,n=t.core(),r=t.containerElement(),i,s;for(i=0;i<e.length;i++)s=e[i],s&&t.isTagAllowed(s)&&r.append(t.renderTag(s));t.updateFormCache(),n.getFormData(),n.invalidateBounds()},n.getTagElement=function(t){var n=this,r=n.tagElements(),i,s;for(i=0;i<r.length,s=e(r[i]);i++)if(n.itemManager().compareItems(s.data(o),t))return s},n.removeTag=function(t){var n=this,r=n.core(),i;t instanceof e?(i=t,t=t.data(o)):i=n.getTagElement(t),i.remove(),n.updateFormCache(),r.getFormData(),r.invalidateBounds()},n.renderTag=function(t){var n=this,r=e(n.opts(m));return r.find(".text-label").text(n.itemManager().itemToString(t)),r.data(o,t),r}})(jQuery);/* ===================================================
 * bootstrap-transition.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery);/* ========================================================
 * bootstrap-tab.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery);// Patterns 
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Depends: jquery.js
//
// Description: 
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  undef:true, strict:true, trailing:true, browser:true, evil:true *//*global jQuery:false, console:false */(function(e,t){"use strict";function i(t,n,r){return r=r||{},e.nodeName(t[0],"body")||(r=i(t.parent(),n,r)),t.length&&e.each(t[0].attributes,function(t,i){i.name.substr(0,("data-"+n).length)==="data-"+n&&(i.value==="true"?r[e.camelCase(i.name.substr(("data-"+n).length+1))]=!0:i.value==="false"?r[e.camelCase(i.name.substr(("data-"+n).length+1))]=!1:r[e.camelCase(i.name.substr(("data-"+n).length+1))]=i.value)}),r}function s(e,t,n){var s=new r[t](e,i(e,t,n));return s}function o(i){e.each((i.data("pattern")||"").split(" "),function(e,o){if(o.length!==0){if(r[o]===t){n('Pattern you try to initialize "'+o+'" does not exists.');return}i.data("pattern-"+o,s(i,o))}})}function u(t){e(t)[0]!==e(document)[0]&&o(e(t)),e("[data-pattern]",t).each(function(){o(e(this))})}function a(i){if(!i.prototype.name){n("Pattern you try to register has no name.");return}if(r[i.prototype.name]!==t){n('Pattern with name "'+i.prototype.name+'" was already '+"registered. Please select different name.");return}r[i.prototype.name]=i,i.prototype.jqueryPlugin&&(e.fn[i.prototype.jqueryPlugin]=function(n,r){return e(this).each(function(){var o=e(this),u=o.data("pattern-"+i.prototype.name);typeof n=="object"&&(r=n,n=t),typeof u=="string"?(u=s(o,i.prototype.name,r),o.data("pattern-"+i.prototype.name,u)):n&&u&&u[n]&&u[n].apply(u,[r])}),this},e.fn[i.prototype.jqueryPlugin].Constructor=i.constructor)}var n=jQuery.error,r={},f=function(e,t){this.$el=e.addClass("pattern-"+this.name),this.options=t,this.init&&this.init()};f.prototype={constructor:f},f.extend=function(t){var n=this,r;t&&t.hasOwnProperty("constructor")?r=t.constructor:r=function(){n.apply(this,arguments)};var i=function(){this.constructor=r};return i.prototype=n.prototype,r.prototype=new i,e.extend(!0,r.prototype,t),r.__super__=n.prototype,r},e(document).ready(function(){u(e(document))}),window.Patterns={_registry:r,initialize:u,register:a,getOptions:i,Base:f}})(window.jQuery);// plone integration for pickadate.
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Depends: jquery.js patterns.js pickadate.js
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  undef:true, strict:true, trailing:true, browser:true, evil:true *//*global jQuery:false */(function(e,t,n){"use strict";var r=t.Base.extend({name:"calendar",jqueryPlugin:"patternCalendar",defaults:{klassWrapper:"pattern-calendar",klassIcon:"pattern-calendar-icon",format:"d-mmmm-yyyy@HH:MM",formatSubmit:"yyyy-m-d H:M",showAMPM:!0,AMPM:["AM","PM"],minuteStep:"5"},init:function(){function r(){n.$years.val()!==""&&n.$months.val()!==""&&n.$days.val()!==""&&n.pickadate.setDate(parseInt(n.$years.val(),10),parseInt(n.$months.val(),10),parseInt(n.$days.val(),10),!0),n.setDate(n.$years.val(),n.$months.val(),n.$days.val(),n.$hours.val(),n.$minutes.val(),n.$ampm.val())}var n=this;n.options=e.extend({},n.defaults,n.options),n.pickadateOptions=e.extend({},e.fn.pickadate.defaults,{monthSelector:!0,yearSelector:!0},t.getOptions(n.$el,"pickadate"),{formatSubmit:"yyyy-mm-dd",onOpen:function(){},onClose:function(){},onSelect:function(e){var t=this.getDate("yyyy-mm-dd").split("-");n.$years.val(parseInt(t[0],10)),n.$months.val(parseInt(t[1],10)),n.$days.val(parseInt(t[2],10)),n.setDate(n.$years.val(),n.$months.val(),n.$days.val(),n.$hours.val(),n.$minutes.val(),n.$ampm.val())}}),n.$el.hide(),n.$wrapper=e("<div/>").addClass(n.options.klassWrapper).appendTo(n.$el.parent()),n.pickadate=e("<input/>").hide().appendTo(n.$wrapper).pickadate(n.pickadateOptions).data("pickadate"),n.$years=e("<select/>").on("change",r),n.$months=e("<select/>").on("change",r),n.$days=e("<select/>").on("change",r),n.$hours=e("<select/>").on("change",r),n.$minutes=e("<select/>").on("change",r),n.$icon=e('<span class="'+n.options.klassIcon+'"/>').on("click",function(e){e.stopPropagation(),e.preventDefault(),n.toggle()}),e.each(n._strftime(n.options.format,function(t){switch(t){case"yy":case"yyyy":return n.$years.append(n._getYears(t));case"m":case"mm":case"mmm":case"mmmm":return n.$months.append(n._getMonths(t));case"d":case"dd":case"ddd":case"dddd":return n.$days.append(n._getDays(t));case"H":case"HH":return n.$hours.append(n._getHours(t));case"M":case"MM":return n.$minutes.append(n._getMinutes(t));case"@":return n.$icon;default:return e("<span> "+t+" </span>")}}),function(e,t){n.$wrapper.append(t)}),n.$ampm=e("<select/>").append(n._getAMPM()).on("change",r),n.options.showAMPM&&(n.$wrapper.append(e("<span> </span>")),n.$wrapper.append(n.$ampm));if(n.$el.val()!==""){var i=n.$el.val().split(" "),s=i[0].split("-"),o=i[1].split(":"),u=parseInt(o[0],10)>=12&&"PM"||"AM";o[0]-=parseInt(o[0],10)>=12&&12||0,n.setDate(s[0],s[1],s[2],o[0],o[1],u),n.$years.val(""+parseInt(s[0],10)),n.$months.val(""+parseInt(s[1],10)),n.$days.val(""+parseInt(s[2],10)),n.$hours.val(""+parseInt(o[0],10)),n.$minutes.val(""+parseInt(o[1],10)),n.$ampm.val(u)}},_strftime:function(t,n,r){var i=this,s=[];return r=r||["dddd","ddd","dd","d","mmmm","mmm","mm","m","yyyy","yy","HH","H","MM","M","@"],e.each(r,function(e,o){if(t.indexOf(o)!==-1){var u=t.split(o),a;return r.length>0&&u[0]!==""&&(a=s.concat(i._strftime(u[0],n,r.slice(e))),a.length===s.length?s.push(n(u[0])):s=a),s.push(n(o)),r.length>0&&u[1]!==""&&(a=s.concat(i._strftime(u[1],n,r.slice(e))),a.length===s.length?s.push(n(u[1])):s=a),!1}if(r.length===0)return!1}),s},_getYears:function(e){var t=[],r=this.getDate("yyyy"),i=r,s,o;r?(s=this.pickadate.getdatelimit("yyyy"),o=this.pickadate.getDateLimit(!0,"yyyy")):(r=(new Date).getFullYear(),s=r-10,o=r+10),t.push(this._createOption("","--",i===n));while(s<=o)e==="yy"?t.push(this._createOption(s,(""+s).slice(-2),s===i)):t.push(this._createOption(s,s,s===i)),s+=1;return t},_getMonths:function(e){var t=[],r=this.getDate("m"),i=1;t.push(this._createOption("","--",r===n));while(i<=12)e==="m"?t.push(this._createOption(i,i,r===i)):e==="mm"?t.push(this._createOption(i,("0"+i).slice(-2),r===i)):e==="mmm"?t.push(this._createOption(i,this.pickadateOptions.monthsShort[i-1],r===i)):t.push(this._createOption(i,this.pickadateOptions.monthsFull[i-1],r===i)),i+=1;return t},_getDays:function(t){var r=[],i=this.getDate("d"),s=this.getDate("m"),o=31,u=1;r.push(this._createOption("","--",i===n)),s&&(e.inArray(s,[4,6,9,11])?o=30:e.inArray(s,[2])&&(o=29));while(u<=o)t==="d"?r.push(this._createOption(u,u,i===u)):r.push(this._createOption(u,("0"+u).slice(-2),i===u)),u+=1;return r},_getAMPM:function(){return[this._createOption(this.options.AMPM[0],this.options.AMPM[0]),this._createOption(this.options.AMPM[1],this.options.AMPM[1])]},_getHours:function(e){var t=[],r=this.getDate("h"),i=0;t.push(this._createOption("","--",r===n));while(i<(this.options.showAMPM&&12||24))e==="H"?t.push(this._createOption(i,i,r===i)):t.push(this._createOption(i,("0"+i).slice(-2),r===i)),i+=1;return t},_getMinutes:function(e){var t=[],r=this.getDate("m"),i=0;t.push(this._createOption("","--",r===n));while(i<60)e==="M"?t.push(this._createOption(i,i,r===i)):t.push(this._createOption(i,("0"+i).slice(-2),r===i)),i+=parseInt(this.options.minuteStep,10);return t},_createOption:function(t,n,r){var i=e("<option/>").attr("value",t).html(n);return r&&i.attr("selected","selected"),i},setDate:function(e,t,r,i,s,o){var u=this;u._rawDate=n,u.$el.attr("value",""),e!==""&&t!==""&&r!==""&&i!==""&&s!==""&&(u._rawDate=new Date(parseInt(e,10),parseInt(t,10),parseInt(r,10),parseInt(i,10)+(o==="PM"&&12||0),parseInt(s,10)),u.$el.attr("value",u.getDate(u.options.formatSubmit)))},getDate:function(e){var t=this;if(!t._rawDate)return;return e?t._strftime(e,function(e){switch(e){case"yy":return(""+t._rawDate.getFullYear()).slice(-2);case"yyyy":return""+t._rawDate.getFullYear();case"m":return""+t._rawDate.getMonth();case"mm":return("0"+t._rawDate.getMonth()).slice(-2);case"mmm":return t.pickadateOptions.monthsShort[t._rawDate.getMonth()];case"mmmm":return t.pickadateOptions.monthsFull[t._rawDate.getMonth()];case"d":return""+t._rawDate.getDate();case"dd":return("0"+t._rawDate.getDate()).slice(-2);case"ddd":return t.pickadateOptions.weekdaysShort[t._rawDate.getDay()];case"dddd":return t.pickadateOptions.weekdaysFull[t._rawDate.getDay()];case"H":return""+t._rawDate.getHours();case"HH":return("0"+t._rawDate.getHours()).slice(-2);case"M":return""+t._rawDate.getMinutes();case"MM":return("0"+t._rawDate.getMinutes()).slice(-2);default:return e}}).join(""):t._rawDate},toggle:function(){this._opened?this.close():this.open()},open:function(){this._opened||(this.pickadate.open(),this._opened=!0)},close:function(){this._opened&&(this.pickadate.close(),this._opened=!1)}});t.register(r)})(window.jQuery,window.Patterns);// plone integration for textext.
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Depends:
//    ++resource++plone.app.jquery.js
//    ++resource++plone.app.widgets/textext.js
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  undef:true, strict:true, trailing:true, browser:true, evil:true *//*global jQuery:false */(function(e,t,n){"use strict";var r=function(){};r.prototype={init:function(e){},filter:function(e,t){var n=[],r,i;for(r=0;r<e.length;r+=1)i=e[r],this.itemContains(i,t)&&n.push(i);return n},itemContains:function(e,t){return this.itemToString(e).toLowerCase().indexOf(t.toLowerCase())===0},stringToItem:function(e){return e},itemToString:function(e){return e},compareItems:function(e,t){return e===t}};var i=t.Base.extend({name:"autocomplete",jqueryPlugin:"patternAutocomplete",defaults:{createItems:!0,plugins:"autocomplete tags ajax prompt focus arrow",prompt:"Add...",ajaxDataType:"json",ajaxCacheResults:!0},init:function(){var t=this;t.options=e.extend({},t.defaults,t.options),t.textextOptions={itemManager:r,tagsItems:JSON.parse(t.$el.val()),plugins:t.options.plugins,prompt:t.options.prompt,ext:{core:{onSetFormData:function(t,n){e.each(n,function(e,t){n[e]=t.trim()}),this.hiddenInput().val(this.serializeData(n))}},autocomplete:{onSetSuggestions:function(n,r){var i=[],s=this._suggestions=r.result,o=JSON.parse(t.$el.textext()[0].hiddenInput().val());e.each(s,function(t,n){e.inArray(n,o)===-1&&i.push(n)}),this._suggestions=i,r.showHideDropdown!==!1&&this.trigger(i===null||i.length===0?"hideDropdown":"showDropdown")}},tags:{onIsTagAllowed:function(n,r){r.result=!1,this.isValueAllowed(r.tag)&&e.inArray(r.tag.trim(),JSON.parse(t.$el.textext()[0].hiddenInput().val()))!==-1&&(r.result=!0,!t.options.createItems&&e.inArray(r.tag,this._suggestions)!==1&&(r.result=!1))}}}},t.options.ajaxUrl&&e.extend(t.textextOptions,{ajax:{url:t.options.ajaxUrl,dataType:t.options.ajaxDataType,cacheResults:t.options.ajaxCacheResults,dataCallback:function(e){return{query:e}}}}),t.$el.val("");if(!t.$el.is(":visible")){var n=t.$el.parents(":hidden").last().show();t.$el.textext(t.textextOptions),n.hide()}else t.$el.textext(t.textextOptions)}});t.register(i)})(window.jQuery,window.Patterns);// tabs pattern.
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Depends: jquery.js patterns.js bootstrap-transition.js bootstrap-tab.js
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  undef:true, strict:true, trailing:true, browser:true, evil:true *//*global jQuery:false */(function(e,t,n){"use strict";var r=t.Base.extend({name:"tabs",jqueryPlugin:"patternTabs",defaults:{},init:function(){var t=this;t.options=e.extend({},t.defaults,t.options),t.getTabs().on("click",function(t){t.preventDefault(),e(this).tab("show")}).on("show",function(n){t.show(e(this))}).on("hide",function(n){t.hide(e(this))}).first().tab("show")},show:function(e){this.getPanels().hide(),this.getPanel(e).show()},hide:function(e){this.getPanel(e).hide()},getTabs:function(){return this.$el.find("li > a")},getPanels:function(){var t=this,n=[];return e.each(t.getTabs(),function(r,i){n.push(t.getPanel(e(i))[0])}),e(n)},getPanel:function(t){var n=t.attr("href");return n=n&&n.replace(/.*(?=#[^\s]*$)/,""),e(n)}});t.register(r)})(window.jQuery,window.Patterns);// tabs pattern.
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Depends: jquery.js patterns.js pattern.tabs.js
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  undef:true, strict:true, trailing:true, browser:true, evil:true *//*global jQuery:false */(function(e,t,n){"use strict";var r=t.Base.extend({name:"plonetabs",jqueryPlugin:"ploneTabs",defaults:{panels:".enableFormTabbing fieldset",panelKlass:"formPanel",tabKlass:"formTab",tabsKlass:"formTabs"},init:function(){var n=this;n.options=e.extend({},n.defaults,n.options),n.$panels=e(n.options.panels,n.$el);if(!n.$panels.size())return;n.$tabs=e("<ul/>").addClass(n.options.tabsKlass).insertBefore(n.$panels.parent()).attr({"data-pattern":"tabs"}),n.$panels.each(function(){var t=e(this).addClass(n.options.panelKlass),r=e("> legend",t).hide();n.$tabs.append(e("<li/>").addClass(n.options.tabKlass).append(e("<a/>").attr({id:r.attr("id"),href:"#"+t.attr("id")}).append(e("<span/>").html(r.text()))))}),t.initialize(n.$tabs)}});t.register(r)})(window.jQuery,window.Patterns);// tabs pattern.
//
// Author: Rok Garbas
// Contact: rok@garbas.si
// Version: 1.0
// Depends: jquery.js patterns.js bootstrap-transition.js bootstrap-tab.js
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//
/*jshint bitwise:true, curly:true, eqeqeq:true, immed:true, latedef:true,
  newcap:true, noarg:true, noempty:true, nonew:true, plusplus:true,
  undef:true, strict:true, trailing:true, browser:true, evil:true *//*global jQuery:false */(function(e,t,n){"use strict";var r=t.Base.extend({name:"toggle",jqueryPlugin:"patternToggle",defaults:{name:"class",event:"click"},init:function(){var t=this;t.options=e.extend({},t.defaults,t.options),t.options.target?t.$target=t.$el.closest(t.options.target):t.$target=t.$el,t.$el.on(t.options.event,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},isMarked:function(){var e=this;return e.options.name==="class"?this.$target.hasClass(this.options.value):this.$target.attr(this.options.name)!==this.options.value},toggle:function(){var e=this;e.isMarked()?e.remove():e.add()},remove:function(){var e=this;e.options.name==="class"?e.$target.removeClass(e.options.value):e.$target.removeAttr(e.options.name),e.$el.trigger("patterns.toggle.remove")},add:function(){var e=this;e.options.name==="class"?e.$target.addClass(e.options.value):e.$target.attr(e.options.name,e.options.value),e.$el.trigger("patterns.toggle.add")}});t.register(r)})(window.jQuery,window.Patterns);