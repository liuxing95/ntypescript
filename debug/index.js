"use strict";
exports.__esModule = true;
var ts = require("ntypescript");
var scanner = ts.createScanner(ts.ScriptTarget.Latest, true);
function initializeState(text) {
    scanner.setText(text);
    scanner.setScriptTarget(ts.ScriptTarget.ES5);
    scanner.setLanguageVariant(ts.LanguageVariant.Standard);
}
var str = 'const foo = 123;';
initializeState(str);
var token = scanner.scan();
while (token != ts.SyntaxKind.EndOfFileToken) {
    console.log(token);
    console.log(ts.formatSyntaxKind(token));
    token = scanner.scan();
}
