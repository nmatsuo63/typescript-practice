~/work/TScript/typescript-practice naoya $ git branch
* master
~/work/TScript/typescript-practice naoya $ git checkout -b create-package-json
Switched to a new branch 'create-package-json'

~/work/TScript/typescript-practice naoya $ git  branch
* create-package-json
  master
~/work/TScript/typescript-practice naoya $ npm init -y
Wrote to /Users/naoya/work/TScript/typescript-practice/package.json:

{
  "name": "typescript-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nmatsuo63/typescript-practice.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/nmatsuo63/typescript-practice/issues"
  },
  "homepage": "https://github.com/nmatsuo63/typescript-practice#readme"
}


~/work/TScript/typescript-practice naoya $ git status
On branch create-package-json
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        package.json

nothing added to commit but untracked files present (use "git add" to track)
~/work/TScript/typescript-practice naoya $ less package.json 
~/work/TScript/typescript-practice naoya $ git add .
~/work/TScript/typescript-practice naoya $ git status
On branch create-package-json
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   package.json

~/work/TScript/typescript-practice naoya $ git config --global user.email "nmatsuo.63@gmail.com"
~/work/TScript/typescript-practice naoya $ git config --global user.name "Nao"
~/work/TScript/typescript-practice naoya $ git commit -m "create package.json"                  
[create-package-json 417f9f7] create package.json
 1 file changed, 20 insertions(+)
 create mode 100644 package.json
~/work/TScript/typescript-practice naoya $ git checkout - 
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
~/work/TScript/typescript-practice naoya $ git merge -
Updating 044b663..417f9f7
Fast-forward
 package.json | 20 ++++++++++++++++++++
 1 file changed, 20 insertions(+)
 create mode 100644 package.json
~/work/TScript/typescript-practice naoya $ git push origin HEAD
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 526 bytes | 526.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/nmatsuo63/typescript-practice.git
   044b663..417f9f7  HEAD -> master

