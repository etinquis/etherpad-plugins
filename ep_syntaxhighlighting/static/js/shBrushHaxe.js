/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 4.0.0 (February 7 2016)
 * 
 * @copyright
 * Copyright (C) 2004-2016 Alex Gorbatchev.
 *
 * @license
 * MIT license.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush() {
  var inits = 'class interface package macro enum typedef extends implements dynamic in for if while else do try switch case catch';

  var keywords = 'return break continue new throw cast using import function public private inline static untyped callback true false null Int Float String Void Std Bool Dynamic Array Vector';

  this.regexList = [
    {
      regex: SyntaxHighlighter.regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: SyntaxHighlighter.regexLib.multiLineCComments,
      css: 'comments'
    },
    {
      regex: SyntaxHighlighter.regexLib.doubleQuotedString,
      css: 'string'
    },
    {
      regex: SyntaxHighlighter.regexLib.singleQuotedString,
      css: 'string'
    },
    {
      regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,
      css: 'value'
    },
    {
      regex: new RegExp(this.getKeywords(inits), 'gm'),
      css: 'color3'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    },
    {
      regex: new RegExp('var', 'gm'),
      css: 'variable'
    },
    {
      regex: new RegExp('trace', 'gm'),
      css: 'color1'
    },
    {
      regex: new RegExp('#if', 'gm'),
      css: 'comments'
    },
    {
      regex: new RegExp('#elseif', 'gm'),
      css: 'comments'
    },
    {
      regex: new RegExp('#end', 'gm'),
      css: 'comments'
    },
    {
      regex: new RegExp('#error', 'gm'),
      css: 'comments'
    }
	];

  //standard compiler conditionals flags
  var flags = [
		"debug", "error", "cpp", "js", "neko", "php", "flash", "flash8", "flash9", "flash10", "flash10", "mobile", "desktop", "web", "ios", "android", "iphone"
	];

  //append the flags to the array with a ! operator
  var i;
  var length = flags.length;
  for (i = 0; i <= length - 1; i++) {
    this.regexList.push({
      regex: new RegExp(flags[i], 'gm'),
      css: 'comments'
    });
    this.regexList.push({
      regex: new RegExp('!' + flags[i], 'gm'),
      css: 'comments'
    });
  }

  this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
  };

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
  Brush.aliases	= ['haxe', 'hx'];

	SyntaxHighlighter.brushes.Haxe = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
