var padcookie = require('ep_etherpad-lite/static/js/pad_cookie').padcookie;

exports.aceInitInnerdocbodyHead = function (hook_name, args, cb)
{
	args.iframeHTML.push('<link rel="stylesheet" type="text/css" href="../static/plugins/ep_syntaxhighlighting/static/css/shCore.css"/>');
	args.iframeHTML.push('<link rel="stylesheet" type="text/css" href="../static/plugins/ep_syntaxhighlighting/static/css/shThemeDefault.css"/>');
}	

exports.acePostWriteDomLineHTML = function (hook_name, args, cb)
{
	// Iterate through the child nodes (spans) and point SyntaxHighlighter at them
	
	 var children = args.node.children;
	 
	 if(typeof children === "undefined") { return; }
	 
	 for(var i = 0; i < children.length; i++)
	 {
		if(args.node.children[i].className.indexOf("list") != -1 || args.node.children[i].className.indexOf("tag") != -1 || args.node.children[i].className.indexOf("url") != -1) continue;
		if( padcookie.getPref("SH_BRUSH") != 'undefined' ) {
			SyntaxHighlighter.highlight( {"brush": padcookie.getPref("SH_BRUSH") } , args.node.children[i] );
		}
	 }
}

exports.eejsBlock_scripts = function (hook_name, args, cb)
{
	args.content = args.content + require('ep_etherpad-lite/node/eejs/').require("ep_syntaxhighlighting/templates/syntaxHighlightingScripts.ejs");
}

exports.eejsBlock_styles = function (hook_name, args, cb)
{
	args.content = args.content + require('ep_etherpad-lite/node/eejs/').require("ep_syntaxhighlighting/templates/syntaxHighlightingStyles.ejs");
}

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	args.content = require('ep_etherpad-lite/node/eejs/').require("ep_syntaxhighlighting/templates/syntaxHighlightingEditbarButtons.ejs") + args.content;
}