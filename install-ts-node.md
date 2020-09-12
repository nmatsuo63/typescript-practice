~/work/TScript/typescript-practice naoya $ touch install-ts-node.md
~/work/TScript/typescript-practice naoya $ git checkout -b install-ts-node
Switched to a new branch 'install-ts-node'
~/work/TScript/typescript-practice naoya $ npm info ts-node

ts-node@9.0.0 | MIT | deps: 5 | versions: 109
TypeScript execution environment and REPL for node.js, with source map support
https://github.com/TypeStrong/ts-node

keywords: typescript, node, runtime, environment, ts, compiler

bin: ts-node, ts-script, ts-node-script, ts-node-transpile-only

dist
.tarball: https://registry.npmjs.org/ts-node/-/ts-node-9.0.0.tgz
.shasum: e7699d2a110cc8c0d3b831715e417688683460b3
.integrity: sha512-/TqB4SnererCDR/vb4S/QvSZvzQMJN8daAslg7MeaiHvD8rDZsSfXmNeNumyZZzMned72Xoq/isQljYSt8Ynfg==
.unpackedSize: 376.7 kB

dependencies:
arg: ^4.1.0                 diff: ^4.0.1                make-error: ^1.1.1          source-map-support: ^0.5.17 yn: 3.1.1                   

maintainers:
- blakeembrey <hello@blakeembrey.com>
- cspotcode <cspotcode@gmail.com>

dist-tags:
latest: 9.0.0  

published 3 weeks ago by cspotcode <cspotcode@gmail.com>
~/work/TScript/typescript-practice naoya $ npm install --save-dev ts-node@8.6.2
npm WARN typescript-practice@1.0.0 No description

+ ts-node@8.6.2
added 8 packages from 40 contributors and audited 9 packages in 1.823s
found 0 vulnerabilities

~/work/TScript/typescript-practice naoya $ git diff package.json 
diff --git a/package.json b/package.json
index a8dd4ed..e1d8d63 100644
--- a/package.json
+++ b/package.json
@@ -18,6 +18,7 @@
   },
   "homepage": "https://github.com/nmatsuo63/typescript-practice#readme",
   "devDependencies": {
+    "ts-node": "^8.6.2",
     "typescript": "^3.7.5"
   }
 }
~/work/TScript/typescript-practice naoya $ npx ts-node src/install-typescript.ts
{ message: 'Hello, TypeScript!' }








