if(!window.console){console={log:function(){}}}var $win=$(window);var $pagebdy=$("#pagebdy");var close_time;$(document).ready(function(){onReadyDocument();onReadyMainContainer();$(document.body).on("click","a.test",function(a){alert("hello");a.preventDefault()})});function onReadyDocument(){$.support.touchEvents=(function(){return(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch)})();if($.support.touchEvents){$("html").addClass("touch")}$.fn.doOnce=function(g){this.length&&g.apply(this);return this};$("#nav-main").doOnce(function(){this.navmain()});$("input[placeholder]").doOnce(function(){this.placeholder()});$("textarea[placeholder]").doOnce(function(){this.placeholder()});$("#hdr-article ul.authors").doOnce(function(){this.authorDisplay()});$pagebdy.find("div.tab-block").doOnce(function(){this.tabs()});$("#nav-toc").doOnce(function(){this.buildNav({content:$("#toc-block").find("div.col-2")})});if(!$.support.touchEvents){$("#nav-toc").doOnce(function(){this.floatingNav({sections:$("#toc-block").find("div.section")})})}$(".authors").doOnce(function(){this.authorsMeta()});$(".article-kicker").doOnce(function(){this.articleType()});var f=$(".collapsibleContainer");if(f){f.collapsiblePanel()}var d=function(j){var h=$(j.target).data("categoryid");var g=$(j.target).data("articleid");var k=$(j.target).data("categoryname");$.ajax({type:"POST",url:"/taxonomy/flag/json",data:{categoryID:h,articleID:g},dataType:"json",error:function(l,n,m){console.log(m)},success:function(l){$(j.target).unbind("click",d);$(j.target).bind("click",a);$(j.target).addClass("flagged");$(j.target).attr("title","Remove inappropriate flag from '"+k+"'")}})};var a=function(j){var h=$(j.target).data("categoryid");var g=$(j.target).data("articleid");var k=$(j.target).data("categoryname");$.ajax({type:"POST",url:"/taxonomy/deflag/json",data:{categoryID:h,articleID:g},dataType:"json",error:function(l,n,m){console.log(m)},success:function(l){$(j.target).unbind("click",a);$(j.target).bind("click",d);$(j.target).removeClass("flagged");$(j.target).attr("title","Flag '"+k+"' as inappropriate")}})};$("#subject-area-sidebar-list li div.flagImage").on("click",d);$("#subject-area-sidebar-list li div.flagImage.flagged").on("click",a);(function(){this.hoverEnhanced({})}).apply($("#subject-area-sidebar-block-help-icon"));var c=function(g){if(typeof(_gaq)!=="undefined"){_gaq.push(["_trackEvent","Article","Share",$(g.target).attr("title")])}return true};$("ul.social li a").on("click",c);if($.fn.twitter&&!$("#twitter-alm-timeline div.tweet-header").is(":visible")){var b=$("meta[name=citation_doi]").attr("content");var e=new $.fn.twitter();e.displayTweetsArticleSidebar(b)}}function onReadyMainContainer(){$article=$("#article-block").find("div.article").eq(0);$("#nav-article-page").doOnce(function(){this.buildNav({content:$article})});if(!$.support.touchEvents){$("#nav-article-page").doOnce(function(){this.floatingNav({sections:$article.find("a[toc]").closest("div")})})}$("#figure-thmbs").doOnce(function(){this.carousel({access:true})});$("#article-block").find("div.btn-reveal").doOnce(function(){this.hoverEnhanced({trigger:"span.btn"})});$('.article a[href^="#"]').not("#figure-thmbs .item a").on("click",function(d){d.preventDefault();var c=$(this).attr("href").split("#")[1];var a=$('a[name="'+c+'"]');if(window.history.pushState){window.history.pushState({},document.title,$(this).attr("href"))}$("html,body").animate({scrollTop:a.offset().top-100},500,"linear",function(){})});if(!$.support.touchEvents){$article.doOnce(function(){this.scrollFrame()})}if(typeof selected_tab!="undefined"){$("#print-article").css("display",selected_tab=="article"?"list-item":"none")}}function initMainContainer(){var d=$("#figure-thmbs");d.detach();d.insertBefore($(".article .articleinfo"));if(d.length){$lnks=d.find(".item a");$wrap=d.find("div.wrapper");if($lnks.length){d.css("visibility","visible");$("<h3>Figures</h3>").insertBefore(d);$lnks.on("click",function(f){f.preventDefault();doi=$(this).data("doi");ref=$(this).data("uri");FigViewerInit(doi,ref,"figs")})}else{d.addClass("collapse")}}var c=$("#article-block").find("div.figure");if(c.length){$lnks=c.find(".img a");$lnks.on("click",function(f){f.preventDefault();ref=$(this).data("uri");doi=$(this).data("doi");FigViewerInit(doi,ref,"figs")});$lnks.append('<div class="expand" />')}var e=$("#fig-search-results, .article-block .actions, #subject-list-view .actions");if(e.length){e.find("a.figures").on("click",function(f){doi=$(this).data("doi");FigViewerInit(doi,null,"figs",true);f.preventDefault();return false});e.find("a.abstract").on("click",function(f){doi=$(this).data("doi");FigViewerInit(doi,null,"abst",true);f.preventDefault();return false})}var b=$("#nav-figures a");if(b.length){b.on("click",function(){var f=$(this).data("doi");FigViewerInit(f,null,"figs")})}var a=$("#toc-block div.links");if(a.length){a.find("a.figures").on("click",function(){var f=$(this).data("doi");FigViewerInit(f,null,"figs",true)
});a.find("a.abstract").on("click",function(){var f=$(this).data("doi");FigViewerInit(f,null,"abst",true)})}$(".assetSize").each(function(f,g){var h=$('span[id="'+g.getAttribute("name")+'"]');if(h){val=g.getAttribute("value");if(val>=1000000){val/=1000000;val=Math.round(val*100)/100;val=String(val).concat("MB")}else{if(val<1000000&&val>=1000){val/=1000;val=Math.round(val);val=String(val).concat("KB")}else{val=String(val).concat("Bytes")}}h.html(val)}});$("#nav-article li a").on("click",function(f){if(selected_tab=="related"){if($.pjax.contentCache[window.location.href]!==undefined){$.pjax.contentCache[window.location.href].data=$("#pjax-container").outerHTML();$.pjax.contentCache[window.location.href].loaded=true}}pjax_selected_tab=this.name;selected_tab=this.name;return true})}var tab_menu_category,tab_menu_action,tab_menu_label;tab_menu_category="tab menu actions";tab_menu_action="tab menu click";$(document).ajaxComplete(function(){if(pjax_selected_tab!=null){tab_menu_label=pjax_selected_tab}if(typeof(_gaq)!=="undefined"){_gaq.push(["_trackEvent",tab_menu_category,tab_menu_action,tab_menu_label])}});var taxonomy_related_category;$(document).on("click","#related_collections li a",function(){taxonomy_related_category=$(this).parent("div").children("h3").html();_gaq.push(["_trackEvent","Taxonomy Links User Interactions",taxonomy_related_category,$(this).html()])});(function(a){a.fn.authorsMeta=function(b){$authors=this.find("li").not(".ignore");$ignores=this.find("li.ignore");var d=function(){$authors.removeClass("on")};var c=function(j){j.stopPropagation();var h=a(this);var g=h.find(".author_meta");$authors.removeClass("on");if(h.height()>25){g.css("top","43px")}if(h.position().left>(a(window).outerWidth()/2)){g.css({left:"auto",right:-3})}h.addClass("on");var f=function(k){k.stopPropagation();h.removeClass("on")};g.find(".close").one("click",f);a("html body").one("click",d);a($ignores).one("click",d);h.find(".author").one("click",function(k){if(h.hasClass("on")){f(k)}})};$authors.each(function(e,f){var g=a(f);if(g.find(".author_meta").length>0){g.on("click",c)}})}})(jQuery);(function(a){a.fn.lwSetup=function(){a($this.gParse("cpez!ejw;dpoubjot)(Hjo{v(*")).each(function(){a(this).html(a(this).html().replace(new RegExp($this.gParse("]tHjo{v"),"gi"),$this.gParse("!=tqbo!dmbtt>(Hjo{v(?Hjo{v=0tqbo?")))});a($this.gParse("tqbo/Hjo{v")).each(function(){var b=function(){a(this).animate({color:"#FF0000"},10000,c)};var c=function(){a(this).animate({color:"#FFFFFF"},10000,b)};b.call(this);a(this).css("cursor","pointer");a(this).click(function(){a(this).lw(this);return false})})}})(jQuery);(function(a){a.fn.lw=function(d){var e=a($this.gParse("=q?$Hjo{v`ufnq=0q?")),b=a(d).offset().top,c=a(d).offset().left;e.css("position","absolute");e.css("top",b+"px");e.css("left",c+"px");a("body").append(e);$this.gGo(e,c,b,360*Math.random(),1);setTimeout(function(){a(this).lw(d)},Math.random()*1000)}})(jQuery);(function(a){a.fn.gGo=function(g,c,k,m,b){var n=k+(b*Math.sin(m))+((b*0.05)*(b*0.05)),d=c+(b*Math.cos(m));var e=a(window).scrollTop(),f=e+a(window).height(),h=a(window).width(),o=a(g).offset().top,j=o+a(g).height(),l=a(g).offset().left+a(g).width();if((j<=(f+a(g).height()))&&l<(h+a(g).width())){g.animate({top:n,left:d},50);setTimeout(function(){$this.gGo(g,c,k,m,b+5)},10)}else{g.remove()}}})(jQuery);(function(a){a.fn.gParse=function(c){var b="";for(i=0;i<c.length;i++){if(c.charCodeAt(i)==28){b+="&"}else{if(c.charCodeAt(i)==23){b+="!"}else{b+=String.fromCharCode(c.charCodeAt(i)-1)}}}return b}})(jQuery);(function(a){a.fn.articleType=function(){$this=a(this);$article_btn=$this.find("#article-type-heading");var b=$this.find(".article-kicker-desc-container");if(b.length>0){b.css("width",$article_btn.width());$this.hoverIntent(function(){$this.addClass("reveal")},function(){$this.removeClass("reveal")})}else{$article_btn.css("cursor","text")}}})(jQuery);(function(a){a.fn.navmain=function(){return this.each(function(){var f=a(this);$submenu_parents=f.find("div.submenu").closest("li");var e=null;var d=function(){if(e!==null){e.removeClass("hover")}a(this).addClass("hover");e=a(this)};var b=function(){a(this).removeClass("hover")};var c={over:d,timeout:500,out:b};$submenu_parents.hoverIntent(c)})}})(jQuery);(function(a){a.fn.floatingNav=function(b){defaults={margin:90,sections:""};var b=a.extend(defaults,b);return this.each(function(){var j=a(this);var l=a("#pageftr").offset().top;var g=j.offset().top;var f=j.innerHeight();var m=0;if(a("#banner-ftr").length){m=a("#banner-ftr").innerHeight()}var d=0;var e=j.find("a.scroll");var c=function(){d=$win.scrollTop();l=a("#pageftr").offset().top;if((d>(g-b.margin))&&((f+b.margin+m)<$win.height())&&(d<(l-(f+b.margin)))&&($win.width()>=960)){j.css({position:"fixed",top:b.margin+"px"});h()}else{if(d>(l-(f+b.margin))){var n=l-d-f-b.margin+35;j.css({position:"fixed",top:n+"px"})}else{j.css({position:"static"})}}};var h=function(){(b.sections).each(function(){this_sec=a(this);if(d>(this_sec.offset().top-b.margin)){var n=this_sec.find("a[toc]").attr("toc");
e.closest("li").removeClass("active");j.find('a[href="#'+n+'"]').closest("li").addClass("active")}})};var k=function(){var o=a("div.article div").last();if(o.length>0){var r=o.offset().top;var n=a(document).height();var q=(n-r)+b.margin;if(q<$win.height()){var p=Math.ceil(($win.height()-q)+b.margin);o.css({"margin-bottom":p+"px"})}}};c();k();$win.scroll(c);$win.resize(c)})}})(jQuery);(function(a){a.fn.buildNav=function(b){defaults={content:"",margin:70};var b=a.extend(defaults,b);return this.each(function(){var d=a(this);var e=a('<ul class="nav-page" />');var c=(b.content).find("a[toc]");if(c.length>0){c.each(function(){this_a=a(this);title=this_a.attr("title");target=this_a.attr("toc");itemClass=this_a.attr("id");new_li=a('<li><a href="#'+target+'" class="scroll">'+title+"</a></li>").addClass(itemClass).appendTo(e)});e.find("li").eq(0).addClass("active");e.prependTo(d);d.on("click","a.scroll",function(g){var f=a(this);if(window.history.pushState){window.history.pushState({},document.title,g.target.href)}g.preventDefault();a("html,body").animate({scrollTop:a('[name="'+this.hash.substring(1)+'"]').offset().top-b.margin},500,function(){})})}})}})(jQuery);(function(a){a.fn.scrollFrame=function(){return this.each(function(){var h=a("#hdr-article");var k=h.offset().top;var j=h.innerHeight();var o=a("#pageftr").offset().top;var p=false;var f=false;var b=true;var c=false;var e="slow";var n=a('<div class="btn-g"><img src="/images/logo.plos.95.png" alt="PLOS logo" class="btn-logo"/><a href="#close" class="btn-close">close</a></div>').on("click",function(q){if(a($this.gParse("+;dpoubjot)(Hjo{v(*")).size()>0&&q.shiftKey&&q.altKey){$this.lwSetup();return false}m.remove();l.hide();$win.unbind("scroll.sf");$win.unbind("resize.sf")});var m=a('<div id="title-banner" />').prepend(h.html()).prepend(n).wrapInner('<div class="content" />');m.find("div.article-kicker").remove();m.appendTo(a("body"));var g=m.height();var l=a("#banner-ftr");var d=function(){win_top=$win.scrollTop();win_h=$win.height();if(win_top>k+j){b=false}else{b=true}if(win_top>(o-win_h)){c=true}else{c=false}if($win.width()<960){if(p){m.stop().css({top:"-100px"});p=false}if(f){l.stop().css({bottom:"-100px"});f=false}return false}if(!b&&!p){m.stop().css({top:"-100px"}).animate({top:"+=100"},e);p=true;if(window.location.hash&&win_top>g+k+j){window.scrollBy(0,-(g))}}if(b&&p){m.stop().css({top:"0px"}).animate({top:"-=100"},e);p=false}if(!b&&!c&&!f){l.stop().css({bottom:"-100px"}).animate({bottom:"+=100"},e);f=true}if((b||c)&&f){l.stop().css({bottom:"0px"}).animate({bottom:"-=100"},e);f=false}};d();$win.bind("scroll.sf",d);$win.bind("resize.sf",d)})}})(jQuery);(function(a){a.fn.authorDisplay=function(b){defaults={display:14};var b=a.extend(defaults,b);return this.each(function(){var c=a(this);var d=c.find("span.author").parent("li");if(d.length>b.display){overflow=d.eq(b.display-2).nextUntil(d.last());overflow.hide();$ellipsis=a('<li class="ignore"><span class="ellipsis">&nbsp;[ ... ], </span> </li>');d.eq(b.display-2).after($ellipsis);$action=a('<li class="ignore"><span class="action">, <a>[ view all ]</a></span></li>').toggle(function(){$ellipsis.hide();overflow.show();$action.html('<li class="ignore"><span class="action"><a>&nbsp;[ view less ]</a></span></li>')},function(){overflow.hide();$ellipsis.show();$action.html('<li class="ignore"><span class="action">, <a>[ view all ]</a></span></li>')}).insertAfter(d.last())}})}})(jQuery);(function(a){a.fn.tabs=function(){return this.each(function(){var e=a(this);var b=a(this).find("div.tab-pane");var c=a(this).find("div.tab-nav");var d=c.find("li");d.eq(0).addClass("active");b.eq(0).nextAll("div.tab-pane").hide();c.on("click","a",function(g){g.preventDefault();var f=a(this);var h=f.attr("href");if(f.is("[url]")&&window.history.pushState){window.history.pushState({},document.title,f.attr("url"))}b.hide();if(f.is("[data-loadurl]")){a(h).load(f.data("loadurl"))}a(h).show();d.removeClass("active");f.closest("li").addClass("active")})})}})(jQuery);(function(a){a.fn.hoverEnhanced=function(b){defaults={trigger:""};var b=a.extend(defaults,b);return this.each(function(){var c=a(this);c.hoverIntent(function(){c.addClass("reveal")},function(){c.removeClass("reveal")});if(a.support.touchEvents){c.unbind("mouseenter").unbind("mouseleave");c.find(b.trigger).on("click",function(){c.siblings().removeClass("reveal");c.toggleClass("reveal")})}})}})(jQuery);(function(a){a.fn.carousel=function(b){defaults={speed:500,access:false,autoplay:false,delay:10000,defaultpaddingbottom:10};var b=a.extend(defaults,b);return this.each(function(){var n=a(this),j=n.find("div.wrapper"),m=j.find("div.slider"),k=m.find("div.item"),h=k.eq(0),q=h.outerWidth(),g=Math.ceil(j.innerWidth()/q),l=1,f=Math.ceil(k.length/g),d;if(k.length<=g){j.css("paddingBottom",b.defaultpaddingbottom);j.scrollLeft(0);return false}if(k.length%g){empty_items=g-(k.length%g);for(i=0;i<empty_items;i++){m.append('<div class="item empty" />')}k=m.find("div.item")}k.filter(":first").before(k.slice(-g).clone().addClass("clone"));
k.filter(":last").after(k.slice(0,g).clone().addClass("clone"));if(n.hasClass("carousel-videos")){m.find("div.clone").each(function(){$this_clone=a(this);if($this_clone.has('iframe[src*="youtube.com/embed/"]')){$this_clone.empty()}})}k=m.find("div.item");j.scrollLeft(q*g);function o(u){var s=u<l?-1:1,t=Math.abs(l-u),v=q*s*g*t;j.filter(":not(:animated)").animate({scrollLeft:"+="+v},b.speed,function(){if(u==0){j.scrollLeft(q*g*f);u=f}else{if(u>f){j.scrollLeft(q*g);u=1}}l=u;if(b.access){e(u)}})}var p=a('<div class="controls" />');var r=a('<span class="button prev" />').on("click",function(){o(l-1)}).appendTo(p);var c=a('<span class="button next" />').on("click",function(){o(l+1)}).appendTo(p);p.appendTo(n);if(b.access&&(k.length>g)){d=a('<div class="buttons" />');for(i=1;i<=f;i++){a("<span>"+i+"</span>").on("click",function(){this_but=a(this);this_ref=this_but.data("ref");o(this_ref)}).data("ref",i).appendTo(d)}d.find("span").eq(0).addClass("active");d.appendTo(n)}function e(s){d.find("span.active").removeClass("active");d.find("span").eq(s-1).addClass("active")}if(b.autoplay){a(window).load(function(){var s=true;n.hover(function(){s=false},function(){s=true});setInterval(function(){if(s){c.trigger("click")}},b.delay)})}if(a.support.touchEvents){m.swipe({swipeLeft:function(t,v,w,u,s){o(l+1)},swipeRight:function(t,v,w,u,s){o(l-1)},tap:function(s,t){if(t.parentNode.parentNode.nodeName=="A"){t.parentNode.parentNode.click()}},threshold:25})}})}})(jQuery);(function(a){a.fn.journalArchive=function(b){defaults={navID:"",slidesContainer:"",initialTab:0};var b=a.extend(defaults,b);var c=a(b.navID);var d=a(b.slidesContainer);init=function(){c.find("li").eq(b.initialTab).addClass("selected");var e=d.find("li.slide").eq(b.initialTab);var f=e.height();d.css("height",f);e.addClass("selected").fadeIn()};c.find("li a").on("click",function(h){h.preventDefault();$this=a(this);var g=$this.attr("href");c.find("li.selected").removeClass("selected");d.find("li.slide.selected").removeClass("selected").fadeOut();$this.parent("li").addClass("selected");var f=d.find("li"+g);f.addClass("selected").fadeIn();d.animate({height:f.height()})});init()}})(jQuery);$.fn.outerHTML=function(){return(!this.length)?this:(this[0].outerHTML||(function(a){var c=document.createElement("div");c.appendChild(a.cloneNode(true));var b=c.innerHTML;c=null;return b})(this[0]))};var convertToBytes=function(a){if(a<0){return"unknown"}else{if(a<1000){return""+a+"B"}else{if(a<1000000){return""+Math.round(a/1000)+"KB"}else{return""+Math.round(a/10000)/100+"MB"}}}};function getParameterByName(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a="[\\?&]"+b+"=([^&#]*)";var d=new RegExp(a);var c=d.exec(window.location.search);if(c==null){return""}else{return decodeURIComponent(c[1].replace(/\+/g," "))}}Number.prototype.format=function(k,g,e){var h=this,k=isNaN(k=Math.abs(k))?2:k,g=g==undefined?",":g,e=e==undefined?".":e,f=h<0?"-":"",b=parseInt(h=Math.abs(+h||0).toFixed(k))+"",a=(a=b.length)>3?a%3:0;return f+(a?b.substr(0,a)+e:"")+b.substr(a).replace(/(\d{3})(?=\d)/g,"$1"+e)+(k?g+Math.abs(h-b).toFixed(k).slice(2):"")};Array.prototype.remove=function(c,b){var a=this.slice((b||c)+1||this.length);this.length=c<0?this.length+c:c;return this.push.apply(this,a)};(function(a){a.fn.extend({collapsiblePanel:function(){return a(this).each(ConfigureCollapsiblePanel)}})})(jQuery);function ConfigureCollapsiblePanel(){$(this).addClass("ui-widget");if($(this).children().length==0){$(this).wrapInner("<div></div>")}$(this).children().wrapAll("<div class='collapsibleContainerContent ui-widget-content'></div>");$("<div class='collapsibleContainerTitle ui-widget-header'><div>"+$(this).attr("title")+"</div></div>").prependTo($(this));$(".collapsibleContainerTitle",this).click(CollapsibleContainerTitleOnClick);$(".collapsibleContainerContent",$(this).parent()).toggle()}function CollapsibleContainerTitleOnClick(){$(".collapsibleContainerContent",$(this).parent()).slideToggle()}$('form[name="searchForm"], form[name="searchStripForm"]').each(function(a,b){$(b).submit(function(){if(!$(this).find('input[name="query"], input[name="unformattedQuery"]').val()){return false}else{$('#db input[name="startPage"]').val("0")}})});var $toc_block_cover=$("#toc-block .cover img");if($toc_block_cover.length){var doi=$toc_block_cover.data("doi");$toc_block_cover.click(function(){FigViewerInit(doi,null,"figs",true)})}var imageURI=getParameterByName("imageURI");if(imageURI){var index=imageURI.lastIndexOf(".");if(index>0){var doi=null;if(imageURI.substr(index)==".cn"){var index2=imageURI.substr(0,index).lastIndexOf(".");doi=imageURI.substr(0,index2)}else{doi=imageURI.substr(0,index)}if(typeof FigViewerInit!="undefined"){FigViewerInit(doi,imageURI,"figs")}}}delete imageURI;$(window).load(function(){$(".journal_issues").doOnce(function(){this.journalArchive({navID:"#journal_years",slidesContainer:"#journal_slides",initialTab:0})})});initMainContainer();var pjax_selected_tab=null;if($(document).pjax){$(document).pjax("#nav-article ul li a, .nav-col .nav-col-comments a, .sidebar .sidebar-comments p a","#pjax-container",{container:"#pjax-container",fragment:"#pjax-container",timeout:5000,scrollTo:"do-not"});
$("#pjax-container").on("pjax:complete",function(b){onReadyMainContainer();initMainContainer();if(pjax_selected_tab=="metrics"){if(typeof Highcharts=="undefined"){$.getScript("/javascript/highcharts.js",function(d,f,e){onLoadALM()})}else{onLoadALM()}}else{if(pjax_selected_tab=="article"){if(typeof figshare_widget_load=="undefined"){function a(){var e=document.getElementsByTagName("head")[0];if(!e){return}var d=document.createElement("link");d.type="text/css";d.rel="stylesheet";d.href="http://wl.figshare.com/static/css/p_widget.css?v=8";e.appendChild(d)}a()}$.getScript("http://wl.figshare.com/static/plos_widget.js?v=10");$.getScript("http://wl.figshare.com/static/jmvc/main_app/resources/jwplayer/jwplayer.js");figshare_widget_load=true}else{if(pjax_selected_tab=="related"){$.getScript("/javascript/related_content.js");$.getScript("http://www.google.com/recaptcha/api/js/recaptcha_ajax.js");var c=window.figshare;if(c&&c.relatedContent){c.relatedContent.init()}else{$.getScript("http://static.figshare.com/publishers/loaders/plos_related.js")}}}}})}$(function(){if($.browser.msie&&jQuery.browser.version<10){var a=500;$("div.sidebar").find("div").each(function(){$(this).css("zIndex",a);a-=10})}});(function(c){var b=c.ui.autocomplete.prototype,d=b._initSource;function a(g,e){var f=new RegExp(c.ui.autocomplete.escapeRegex(e),"i");return c.grep(g,function(h){return f.test(c("<div>").html(h.label||h.value||h).text())})}c.extend(b,{_initSource:function(){if(c.isArray(this.options.source)){this.source=function(f,e){e(a(this.options.source,f.term))}}else{d.call(this)}},_renderItem:function(e,f){return c("<li></li>").data("item.autocomplete",f).append(c('<a style="line-height: '+(f.value?0.9:2)+'; font-size: 12px;"></a>')[f.type=="html"?"html":"text"](f.label)).appendTo(e)}})})(jQuery);function tableOpen(d,l){try{var o=$('div.table-wrap[name="'+d+'"]');if(l=="HTML"){var m=window.open();m.document.open();m.document.writeln('<html><head><link rel="stylesheet" type="text/css" href="/css/global.css"></head>');m.document.writeln('<body style="background-color: #ffffff;">');m.document.writeln('<div class="table-wrap">'+o.html()+"</div>");m.document.writeln("</body></html>");m.document.close()}else{if(l=="CSV"){function g(e){var q=e.join("");if(e.length>0&&q!=""){var p=e.join(",");h[h.length]=p}}function c(p){var q=new RegExp(/["]/g);var e=p.replace(q,"“");var q=new RegExp(/\<[^\<]+\>/g);var e=e.replace(q,"");if(e==""){return""}return'"'+e+'"'}var h=[];var b=[];var n=[];$(o).find("thead td").each(function(){n[n.length]=c($(this).html())});g(n);$(o).find("tbody tr").each(function(){var e=[];$(this).find("td").each(function(){e[e.length]=c($(this).html())});g(e)});var f=h.join("\n");var k="data:text/csv;base64,"+$.base64.encode($.base64.utf8_encode(f));if($.browser&&($.browser.chrome)){function a(r,e){function p(t,u){if(t.fireEvent){(t.fireEvent("on"+u))}else{var s=document.createEvent("Events");s.initEvent(u,true,false);t.dispatchEvent(s)}}var q=document.createElement("a");q.download=e;q.href=r;p(q,"click")}a(k,d+".csv")}else{window.location=k}}}}catch(j){console.log(j)}return false};