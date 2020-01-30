# Git使用规范和工作流

## 一、目的

## 二、使用规范
### 1、一个日常开发示例
#### 每开发一个功能都应该基于最新的master分支，去创建一个新分支
```
# 获取主干最新代码
$ git checkout master
$ git pull

# 新建一个开发分支myfeature
$ git checkout -b myfeature
```
#### 提交分支
分支修改后，就可以开始提交commit。
```
$ git add xxx|--all
$ git status
$ git commit -m '[fix]name'
```

#### 合并到master
首先拉取最新的master代码进行合并更新，再使用gitlab提交一个mergerRqeust进行codereview合并
```
git merge origin/master
git push
```

### 2、commit message书写规范
message格式如下：
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
总体说明可以分为三部分，header，body，footer。
其中header必不可少也是我们使用最多的commit message
以下说明commit message header的书写规范：

```
格式：<type>: <subject>
type：用于说明 commit 的类别，如：feat、fix等
subject：本次commit的简短描述，以及物动词开始，15个字内
```

以下对type进行简单说明：
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动


## 三、工作流

## 四、其他需要主要的点

## 五、参考资料
- commit message说明[http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html]
- git工作流[https://nvie.com/posts/a-successful-git-branching-model/]
- 公司内部的git工作流wiki[http://confluence.sohuno.com/pages/viewpage.action?pageId=26054626]