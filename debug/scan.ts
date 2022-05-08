import * as ts from 'ntypescript';
const scanner = ts.createScanner(ts.ScriptTarget.Latest, true);

  function initializeState(text: string) {
      scanner.setText(text);
      scanner.setScriptTarget(ts.ScriptTarget.ES5);
      scanner.setLanguageVariant(ts.LanguageVariant.Standard);
  }

  const str = 'const foo = 123;'

  initializeState(str);

  var token = scanner.scan();

  while (token != ts.SyntaxKind.EndOfFileToken) {
    let currentToken = ts.formatSyntaxKind(token);
    let tokenStart = scanner.getStartPos();
    token = scanner.scan();
    let tokenEnd = scanner.getStartPos();
    console.log(currentToken, tokenStart, tokenEnd);
  }


// 76
// ConstKeyword
// 71
// Identifier
// 58
// EqualsToken
// 8
// NumericLiteral
// 25
// SemicolonToken