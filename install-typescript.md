~/work/TScript/typescript-practice naoya $ touch install-typescript.md
~/work/TScript/typescript-practice naoya $ git checkout -b install-typescript
Switched to a new branch 'install-typescript'
~/work/TScript/typescript-practice naoya $ npm info typescript

typescript@4.0.2 | Apache-2.0 | deps: none | versions: 1701
TypeScript is a language for application scale JavaScript development
https://www.typescriptlang.org/

keywords: TypeScript, Microsoft, compiler, language, javascript

bin: tsc, tsserver

dist
.tarball: https://registry.npmjs.org/typescript/-/typescript-4.0.2.tgz
.shasum: 7ea7c88777c723c681e33bf7988be5d008d05ac2
.integrity: sha512-e4ERvRV2wb+rRZ/IQeb3jm2VxBsirQLpQhdxplZ2MEzGvDkkMmPglecnNDfSUBivMjP93vRbngYYDQqQ/78bcQ==
.unpackedSize: 56.8 MB

maintainers:
- typescript-deploys <ortam@microsoft.com>
- orta <orta.therox@gmail.com>
- sheetalkamat <shkamat@microsoft.com>
- rbuckton <rbuckton@chronicles.org>
- minestarks <mineyalc@microsoft.com>
- andrewbranch <andrew@wheream.io>
- sanders_n <ncsander@indiana.edu>
- weswigham <wwigham@gmail.com>
- typescript-bot <typescript@microsoft.com>

dist-tags:
beta: 4.0.0-beta                          insiders: 4.0.2-insiders.20200818         next: 4.1.0-dev.20200911                  tag-for-publishing-older-releases: 3.6.5  
dev: 3.9.4                                latest: 4.0.2                             rc: 4.0.1-rc                              

published 3 weeks ago by typescript-bot <typescript@microsoft.com>
~/work/TScript/typescript-practice naoya $ npm install --save-dev typescript@3.7.5
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN typescript-practice@1.0.0 No description

+ typescript@3.7.5
added 1 package from 1 contributor and audited 1 package in 7.409s
found 0 vulnerabilities

~/work/TScript/typescript-practice naoya $ ls
READEME.md              node_modules            package-lock.json       package.json

~/work/TScript/typescript-practice naoya $ git status
On branch install-typescript
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        create-package-json.md
        install-typescript.md
        package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")

~/work/TScript/typescript-practice naoya $ git diff
diff --git a/package.json b/package.json
index 7d7985f..a8dd4ed 100644
--- a/package.json
+++ b/package.json
@@ -16,5 +16,8 @@
   "bugs": {
     "url": "https://github.com/nmatsuo63/typescript-practice/issues"
   },
-  "homepage": "https://github.com/nmatsuo63/typescript-practice#readme"
+  "homepage": "https://github.com/nmatsuo63/typescript-practice#readme",
+  "devDependencies": {
+    "typescript": "^3.7.5"
+  }
 }

 ~/work/TScript/typescript-practice naoya $ mkdir src
~/work/TScript/typescript-practice naoya $ touch src/install-typescript.ts
~/work/TScript/typescript-practice naoya $ vim src/install-typescript.ts 
~/work/TScript/typescript-practice naoya $ vim src/install-typescript.ts
~/work/TScript/typescript-practice naoya $ tsc src/install-typescript.ts 
zsh: command not found: tsc
~/work/TScript/typescript-practice naoya $ ls ./node_modules/.bin/tsc
./node_modules/.bin/tsc
~/work/TScript/typescript-practice naoya $ ./node_modules/.bin/tsc src/install-typescript.ts 
~/work/TScript/typescript-practice naoya $ ls src 
install-typescript.js   install-typescript.ts
~/work/TScript/typescript-practice naoya $ cat src/install-typescript.js 
var message = 'Hello, TypeScript!';
console.log({ message: message });
~/work/TScript/typescript-practice naoya $ npx tsc src/install-typescript.ts 
~/work/TScript/typescript-practice naoya $ rm src/install-typescript.js 
~/work/TScript/typescript-practice naoya $ npx tsc src/install-typescript.ts
~/work/TScript/typescript-practice naoya $ ls src 
install-typescript.js   install-typescript.ts
~/work/TScript/typescript-practice naoya $ node src/install-typescript.js 
{ message: 'Hello, TypeScript!' }

~/work/TScript/typescript-practice naoya $ git add .
~/work/TScript/typescript-practice naoya $ git status                       
On branch install-typescript
Your branch is up to date with 'origin/install-typescript'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   create-package-json.md
        new file:   install-typescript.md
        new file:   package-lock.json
        modified:   package.json
        new file:   src/install-typescript.js
        new file:   src/install-typescript.ts

~/work/TScript/typescript-practice naoya $ git clean -f Removing src/install-typescript.js
~/work/TScript/typescript-practice naoya $ git status
On branch install-typescript
Your branch is up to date with 'origin/install-typescript'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   create-package-json.md
        new file:   install-typescript.md
        new file:   package-lock.json
        modified:   package.json
        new file:   src/install-typescript.js
        new file:   src/install-typescript.ts

~/work/TScript/typescript-practice naoya $ git commit -m "install typescript"
[install-typescript 53b6f23] install typescript
 6 files changed, 199 insertions(+), 1 deletion(-)
 create mode 100644 create-package-json.md
 create mode 100644 install-typescript.md
 create mode 100644 package-lock.json
 create mode 100644 src/install-typescript.js
 create mode 100644 src/install-typescript.ts
~/work/TScript/typescript-practice naoya $ git reset src/install-typescript.js 
~/work/TScript/typescript-practice naoya $ git status
On branch install-typescript
Your branch is ahead of 'origin/install-typescript' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
~/work/TScript/typescript-practice naoya $ git commit -m "install typescript"
On branch install-typescript
Your branch is ahead of 'origin/install-typescript' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
~/work/TScript/typescript-practice naoya $ git push -u origin HEAD
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (9/9), done.
Writing objects: 100% (9/9), 3.24 KiB | 3.24 MiB/s, done.
Total 9 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/nmatsuo63/typescript-practice.git
   417f9f7..53b6f23  HEAD -> install-typescript
Branch 'install-typescript' set up to track remote branch 'install-typescript' from 'origin'.
~/work/TScript/typescript-practice naoya $ git checkout -
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
~/work/TScript/typescript-practice naoya $ git merge -
Updating 417f9f7..53b6f23
Fast-forward
 create-package-json.md    |  73 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 install-typescript.md     | 104 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 package-lock.json         |  14 ++++++++++++++
 package.json              |   5 ++++-
 src/install-typescript.js |   2 ++
 src/install-typescript.ts |   2 ++
 6 files changed, 199 insertions(+), 1 deletion(-)
 create mode 100644 create-package-json.md
 create mode 100644 install-typescript.md
 create mode 100644 package-lock.json
 create mode 100644 src/install-typescript.js
 create mode 100644 src/install-typescript.ts
~/work/TScript/typescript-practice naoya $ git push origin HEAD
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/nmatsuo63/typescript-practice.git
   417f9f7..53b6f23  HEAD -> master




