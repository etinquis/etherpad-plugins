This plugin is no longer supported... See https://github.com/LaKing/ep_codepad for an alternative.

--------------------

# SyntaxHighlighter plugin for etherpad-lite

Based on a modified version of Alex Gorbatchev's [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/).
Available syntaxes are displayed in a select element in the etherpad-lite menu bar.

## Adding Syntaxes:
To add a new syntax variant, copy the javascript file for the new syntax into the EP_ROOT/node_modules/ep_syntaxhighlighting/static/js directory, then add it to the end of EP_ROOT/node_modules/ep_syntaxhighlighting/templates/syntaxHighlightingScripts.ejs as follows:

<script src="/static/plugins/ep_syntaxhighlighting/static/js/shBrushCSharp.js"></script>

Finally, add an option to EP_ROOT/node_modules/ep_syntaxhighlighting/templates/syntaxHighlightingEditbarButtons.ejs such as:
<option value="csharp">C#</option>

## Removing Syntaxes:
If a syntax variant is included that you don't want, simply remove the corresponding <option.../option> line in the  EP_ROOT/node_modules/ep_syntaxhighlighting/templates/syntaxHighlightingEditbarButtons.ejs file.

## SyntaxHighlighter Themes:
I have found that the themes with background colors don't work well because the background color will only apply to lines and not the full background of the etherpad-lite pad.  Your mileage may vary.
