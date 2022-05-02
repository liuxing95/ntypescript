import * as ts from 'ntypescript';

function printAllChildren(node: ts.Node, depth = 0) {
  console.log(new Array(depth + 1).join('----'), ts.formatSyntaxKind(node.kind), node.pos, node.end);
  depth++;
  node.getChildren().forEach(c => printAllChildren(c, depth));
}

var sourceCode = `const foo = 123;`;
var sourceFile = ts.createSourceFile('foo.ts', sourceCode, ts.ScriptTarget.ES5, true)
console.log(sourceFile)
// printAllChildren(sourceFile);

// SourceFile 0 16
// ---- SyntaxList 0 16
// -------- VariableStatement 0 16
// ------------ VariableDeclarationList 0 15
// ---------------- ConstKeyword 0 5
// ---------------- SyntaxList 5 15
// -------------------- VariableDeclaration 5 15
// ------------------------ Identifier 5 9
// ------------------------ EqualsToken 9 11
// ------------------------ NumericLiteral 11 15
// ------------ SemicolonToken 15 16
// ---- EndOfFileToken 16 16