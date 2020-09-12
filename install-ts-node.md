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

~/work/TScript/typescript-practice naoya $ vim src/install-typescript.ts
~/work/TScript/typescript-practice naoya $ git status
On branch install-ts-node
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   install-typescript.md
        modified:   package-lock.json
        modified:   package.json
        modified:   src/install-typescript.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        install-ts-node.md

no changes added to commit (use "git add" and/or "git commit -a")
~/work/TScript/typescript-practice naoya $ git diff src/install-typescript.ts 
diff --git a/src/install-typescript.ts b/src/install-typescript.ts
index c6e61e8..678431e 100644
--- a/src/install-typescript.ts
+++ b/src/install-typescript.ts
@@ -1,2 +1,2 @@
-let message: string = 'Hello, TypeScript!';
+let message: string = 'Hello, ts-node!';
 console.log({ message });
~/work/TScript/typescript-practice naoya $ npx ts-node src/install-typescript.ts 
{ message: 'Hello, ts-node!' }
~/work/TScript/typescript-practice naoya $ 
~/work/TScript/typescript-practice naoya $ 
~/work/TScript/typescript-practice naoya $ git status
On branch install-ts-node
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   install-typescript.md
        modified:   package-lock.json
        modified:   package.json
        modified:   src/install-typescript.ts

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        install-ts-node.md

no changes added to commit (use "git add" and/or "git commit -a")
~/work/TScript/typescript-practice naoya $ git add .           
~/work/TScript/typescript-practice naoya $ git status
On branch install-ts-node
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   install-ts-node.md
        modified:   install-typescript.md
        modified:   package-lock.json
        modified:   package.json
        modified:   src/install-typescript.ts

~/work/TScript/typescript-practice naoya $ git commit -m "install ts-node"
[install-ts-node 0315c1f] install ts-node
 5 files changed, 202 insertions(+), 1 deletion(-)
 create mode 100644 install-ts-node.md
~/work/TScript/typescript-practice naoya $ git push -u origin HEAD
gitEnumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 3.48 KiB | 3.48 MiB/s, done.
Total 8 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote: 
remote: Create a pull request for 'install-ts-node' on GitHub by visiting:
remote:      https://github.com/nmatsuo63/typescript-practice/pull/new/install-ts-node
remote: 
To https://github.com/nmatsuo63/typescript-practice.git
 * [new branch]      HEAD -> install-ts-node
Branch 'install-ts-node' set up to track remote branch 'install-ts-node' from 'origin'.
~/work/TScript/typescript-practice naoya $ git checkout -
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
~/work/TScript/typescript-practice naoya $ git merge -
Updating 53b6f23..0315c1f
Fast-forward
 install-ts-node.md        | 60 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 install-typescript.md     | 81 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 package-lock.json         | 59 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 package.json              |  1 +
 src/install-typescript.ts |  2 +-
 5 files changed, 202 insertions(+), 1 deletion(-)
 create mode 100644 install-ts-node.md
~/work/TScript/typescript-practice naoya $ git push origin HEAD  
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/nmatsuo63/typescript-practice.git
   53b6f23..0315c1f  HEAD -> master






