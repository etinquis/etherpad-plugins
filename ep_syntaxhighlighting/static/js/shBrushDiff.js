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
  this.regexList = [
    {
      regex: /^\+\+\+ .*$/gm,
      css: 'color2'
    },
    {
      regex: /^\-\-\- .*$/gm,
      css: 'color2'
    },
    {
      regex: /^\s.*$/gm,
      css: 'color1'
    },
    {
      regex: /^@@.*@@.*$/gm,
      css: 'variable'
    },
    {
      regex: /^\+.*$/gm,
      css: 'string'
    },
    {
      regex: /^\-.*$/gm,
      css: 'color3'
    }
		];
  };

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['diff', 'patch'];

	SyntaxHighlighter.brushes.Diff = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
