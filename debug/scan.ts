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

  while(token != ts.SyntaxKind.EndOfFileToken) {
      console.log(token);
      console.log(ts.formatSyntaxKind(token));
      token = scanner.scan();
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