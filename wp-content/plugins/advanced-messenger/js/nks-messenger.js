var LA_DEBUG=0;!function(n){if(!n.nks_msg_transitionEnd){var e={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},t=document.createElement("div");for(var i in e)if("undefined"!=typeof t.style[i]){n.nks_msg_transitionEnd=e[i];break}n.nks_msg_transitionEnd||(n.nks_msg_transitionEnd=!1)}}(window),function(n,e){var t,i=n.jQuery||n.Cowboy||(n.Cowboy={});i.throttle=t=function(n,t,o,s){function r(){function i(){a=+new Date,o.apply(d,u)}function r(){l=e}var d=this,c=+new Date-a,u=arguments;s&&!l&&i(),l&&clearTimeout(l),s===e&&c>n?i():t!==!0&&(l=setTimeout(s?r:i,s===e?n-c:n))}var l,a=0;return"boolean"!=typeof t&&(s=o,o=t,t=e),i.guid&&(r.guid=o.guid=o.guid||i.guid++),r},i.debounce=function(n,i,o){return o===e?t(n,i,!1):t(n,o,i!==!1)}}(this),jQuery(document).one("nks_msg_ready",function(n){var n=jQuery;setTimeout(function(){var e=window.console&&window.LA_DEBUG?window.console:{log:function(){}},t=window.LA_Messenger||function(){function i(){return o(),t.init=function(){},this}function o(){p.resize(a),n(document).on("la.livechatplugin_loaded",function(){v=n("#fb-root"),"scroll"===u.label_vis?v.addClass("nks_msg_tooltip_hidden"):u.label_scroll_selector&&-1!=u.label_vis.indexOf("scroll")&&v.addClass("nks_msg_tooltip_hidden")}),n(document).on("la.parse",function(){}),n(document).on("la.resize",function(){}),n(document).on("la.render",function(){b=n(".fb-customerchat"),m=b.find("iframe"),v=n("#fb-root"),_=m[0],g=n(".fb_dialog"),k||w?m.after('<div id="nks_msg_backdrop"></div>'):m.addClass("nks_msg_filtered"),w&&v.addClass("nks_msg_mobile"),"visible"===u.label_tooltip&&g.after(n('<div id="nks_msg_tooltip">'+u.label_tooltip_text+"</div>")),"scroll"===u.label_vis?n(function(){setTimeout(function(){p.one("scroll",function(){setTimeout(function(){v.removeClass("nks_msg_tooltip_hidden")},500)})},500)}):u.label_scroll_selector&&-1!=u.label_vis.indexOf("scroll")&&n(function(){setTimeout(function(){var e=n(u.label_scroll_selector).eq(0),t=function(){l(e)&&(v.removeClass("nks_msg_tooltip_hidden"),p.unbind("scroll",t))};p.scroll(n.throttle(250,t)).scroll()},2e3)}),s(),window.nksUiDefault&&"visible"!==u.label_tooltip||r()})}function s(){for(var n,e,t,i=m.attr("style").replace(/\s/g,"").replace(/(;$)/g,""),o=f,s=i.split(";"),r={},l=0,a=s.length;a>l;l++)n=s[l].split(":"),e=n[0],t=n[1],r[e]=t;f="none"===r.display||"hidden"===r.visibility||"0"==r.opacity||"0px"==r["max-height"]?"hidden":r.height&&parseInt(r.height)<200?"collapsed":"expanded",o!==f&&v.removeClass("nks_msg_"+o).addClass("nks_msg_"+f)}function r(){setInterval(s,50)}function l(n){var e=p.scrollTop(),t=e+p.height(),i=n.offset().top,o=i;return t>=o&&i>=e}function a(){}function d(){return f}function c(n){var e,t,i=["Moz","Webkit","O","ms"],o=document.createElement("div"),s=n.charAt(0).toUpperCase()+n.substr(1);if(n in o.style)return n;for(t=0;t<i.length;++t)if(e=i[t]+s,e in o.style)return e;this.div=null}var u=window.NksMessengerOpts;e.log("Advanced Facebook: exec...");var f,_,m,g,v,b,p=n(window),h=(n("html"),n("body"),document.body,navigator.userAgent),w=(c("transform"),u.sidebar_pos,/safari|chrome/.test(h.toLowerCase()),/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(h)),k=(/msie|trident.*rv\:11\./.test(h.toLowerCase()),/firefox/.test(h.toLowerCase()),h.toLowerCase().indexOf("safari/")>-1&&-1==h.indexOf("Chrome"));return{init:i,getState:d}}();window.LA_Messenger=t.init()},0)});