import * as ts from 'ntypescript';

var sourceCode = `const foo:number = '123';`;
var sourceFile = ts.createSourceFile('foo.ts', sourceCode, ts.ScriptTarget.ES5, true)
console.log('before bind', sourceFile)
ts.bindSourceFile(sourceFile, {})
console.log('after bind', sourceFile)
