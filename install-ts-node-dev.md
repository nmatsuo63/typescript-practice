~/work/TScript/typescript-practice naoya $ git checkout -b install-ts-node-dev
Switched to a new branch 'install-ts-node-dev'
~/work/TScript/typescript-practice naoya $ touch install-ts-node-dev.md 
~/work/TScript/typescript-practice naoya $ 
~/work/TScript/typescript-practice naoya $ npm info ts-node-dev

ts-node-dev@1.0.0-pre.62 | MIT | deps: 11 | versions: 62
Compiles your TS app and restarts when files are modified.
https://github.com/whitecolor/ts-node-dev#readme

keywords: restart, reload, supervisor, monitor, watch

bin: ts-node-dev, tsnd

dist
.tarball: https://registry.npmjs.org/ts-node-dev/-/ts-node-dev-1.0.0-pre.62.tgz
.shasum: 835644c43669b659a880379b9d06df86cef665ad
.integrity: sha512-hfsEuCqUZOVnZ86l7A3icxD1nFt1HEmLVbx4YOHCkrbSHPBNWcw+IczAPZo3zz7YiOm9vs0xG6OENNrkgm89tQ==
.unpackedSize: 57.0 kB

dependencies:
chokidar: ^3.4.0            dynamic-dedupe: ^0.3.0      mkdirp: ^1.0.4              rimraf: ^2.6.1              tree-kill: ^1.2.2           tsconfig: ^7.0.0            
dateformat: ~1.0.4-1.2.3    minimist: ^1.2.5            resolve: ^1.0.0             source-map-support: ^0.5.12 ts-node: ^8.10.2            

maintainers:
- whitecolor <alex.oshchepkov@gmail.com>

dist-tags:
latest: 1.0.0-pre.62  

published a week ago by whitecolor <alex.oshchepkov@gmail.com>
~/work/TScript/typescript-practice naoya $ npm install --save-dev ts-node-dev@1.0.0-pre.44
npm WARN typescript-practice@1.0.0 No description

+ ts-node-dev@1.0.0-pre.44
added 74 packages from 44 contributors and audited 83 packages in 8.663s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

~/work/TScript/typescript-practice naoya $ git diff package
fatal: ambiguous argument 'package': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
~/work/TScript/typescript-practice naoya $ git diff package.json
diff --git a/package.json b/package.json
index e1d8d63..6583d91 100644
--- a/package.json
+++ b/package.json
@@ -19,6 +19,7 @@
   "homepage": "https://github.com/nmatsuo63/typescript-practice#readme",
   "devDependencies": {
     "ts-node": "^8.6.2",
+    "ts-node-dev": "^1.0.0-pre.44",
     "typescript": "^3.7.5"
   }
 }
~/work/TScript/typescript-practice naoya $ git add .
~/work/TScript/typescript-practice naoya $ npx ts-node-dev --respawn src/install-typescript.ts 
Using ts-node version 8.6.2, typescript version 3.7.5
{ message: 'Hello, ts-node!' }
[INFO] 16:17:36 Restarting: /Users/naoya/work/TScript/typescript-practice/src/install-typescript.ts has been modified
Using ts-node version 8.6.2, typescript version 3.7.5
{ message: 'Hello, ts-node-dev!' }
[INFO] 16:18:03 Restarting: /Users/naoya/work/TScript/typescript-practice/src/install-typescript.ts has been modified
Using ts-node version 8.6.2, typescript version 3.7.5
{ message: 'Hello, ts-node-dev!!' }
^C
~/work/TScript/typescript-practice naoya $ npm run dev src/install-typescript.ts 

> typescript-practice@1.0.0 dev /Users/naoya/work/TScript/typescript-practice
> ts-node-dev --respawn "src/install-typescript.ts"

Using ts-node version 8.6.2, typescript version 3.7.5
{ message: 'Hello, ts-node-dev!!' }
^C
~/work/TScript/typescript-practice naoya $ git add .
~/work/TScript/typescript-practice naoya $ git diff package.json
~/work/TScript/typescript-practice naoya $ git commit -m "install ts-node-dev"
[install-ts-node-dev 184a745] install ts-node-dev
 5 files changed, 705 insertions(+), 2 deletions(-)
 create mode 100644 install-ts-node-dev.md
~/work/TScript/typescript-practice naoya $ git push -u origin HEAD
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 8.89 KiB | 4.45 MiB/s, done.
Total 8 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: 
remote: Create a pull request for 'install-ts-node-dev' on GitHub by visiting:
remote:      https://github.com/nmatsuo63/typescript-practice/pull/new/install-ts-node-dev
remote: 
To https://github.com/nmatsuo63/typescript-practice.git
 * [new branch]      HEAD -> install-ts-node-dev
Branch 'install-ts-node-dev' set up to track remote branch 'install-ts-node-dev' from 'origin'.
~/work/TScript/typescript-practice naoya $ git checkout -
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
~/work/TScript/typescript-practice naoya $ git merge -
Updating 0315c1f..184a745
Fast-forward
 install-ts-node-dev.md    |   0
 install-ts-node.md        |  92 ++++++++++++++++++++++++++++-
 package-lock.json         | 611 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 package.json              |   2 +
 src/install-typescript.ts |   2 +-
 5 files changed, 705 insertions(+), 2 deletions(-)
 create mode 100644 install-ts-node-dev.md
~/work/TScript/typescript-practice naoya $ git push origin HEAD
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/nmatsuo63/typescript-practice.git
   0315c1f..184a745  HEAD -> master