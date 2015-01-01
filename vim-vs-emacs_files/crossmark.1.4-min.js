var crossmark={sOpenSelector:"#open-crossmark",sDOI:"",sDomain:"",sURIScheme:"",sCrossMarkURL:"",sStylesURL:"",sTooltipID:"crossmark-tooltip-130",sTooltipSelector:"#crossmark-tooltip-130",sTooltipCopy:"Click to get updates and verify authenticity.",initialize:function(){this.sDOI=this.detectDOI();this.sDomain=window.location.hostname;this.sURIScheme=window.location.protocol;this.sCrossMarkURL="crossmark.crossref.org/dialog/?doi="+this.sDOI+"&domain="+this.sDomain+"&uri_scheme="+this.sURIScheme+"&cm_version="+this.scriptVersion();this.sStylesURL="http://crossmark.crossref.org/stylesheets/"+this.versionDir()+"crossmark_widget.css"},addStylesheet:function(){$(this.sOpenSelector).parent().eq(0).prepend("<link media='screen' rel='stylesheet' type='text/css' href='"+this.sStylesURL+"'/>")},activateTooltip:function(){var b=this;$("body").append('<div id="'+this.sTooltipID+'" class="crossmark-tooltip" style="display: none;"><div class="cmtttop"></div><div class="cmttmid"><p>'+this.sTooltipCopy+'</p></div><div class="cmttbot"></div></div>');var a=$("#crossmark-icon");a.attr({title:"",alt:""}).show();a.mouseover(function(){var d=a.offset();var c=d.left+a.width()/2-$("#crossmark-icon").width()/2;var e=d.top-$(b.sTooltipSelector).height()+10;$(b.sTooltipSelector).css({left:c,top:e}).show()});a.mouseout(function(){$(b.sTooltipSelector).hide()})},scriptVersion:function(){var a="v1.4";return a},versionDir:function(){var a=this.scriptVersion();var b=a=="v1.2"?"":a+"/";return b},activateDialog:function(){var a=this;$(this.sOpenSelector).click(function(){$("#crossmark-dialog-frame").attr("src","http://"+a.sCrossMarkURL);$("#crossmark-dialog").dialog("open");$(a.sTooltipSelector).hide();return false})},detectDOI:function(){this.sDOI="";var a=$("meta").filter(function(){return(/dc\.identifier/i).test($(this).attr("name"))}).attr("content");if(a){a=a.replace(/^info:doi\//,"");a=a.replace(/^doi:/,"")}return a}};jQuery(document).ready(function(a){a("#crossmark-dialog").dialog({zIndex:3999,autoOpen:false,modal:true,resizable:false,draggable:false,open:function(){a(".ui-widget-overlay").click(function(){a("#crossmark-dialog").dialog("close")})},beforeClose:function(){a(".ui-widget-overlay").unbind()},height:550,width:550,dialogClass:"crossmark-ui-dialog"});crossmark.initialize();crossmark.addStylesheet();crossmark.activateTooltip();crossmark.activateDialog()});