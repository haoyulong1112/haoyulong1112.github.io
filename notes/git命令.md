### github 常用指令
```ruby
1. git clone 检出
2. git pull  拉取代码
3. git status  版本状态
4. git reset --hard 回退版本
5. git reset --hard origin/[]  
6. git branch 查看本地版本分支
7. git branch -r 查看远程分支
8. git branch [name] 创建本地分支
9. git checkout [name] 切换到某个人分支
10. git checkout -b[name]  创建分支并clone当前本地分支
11. git checkout -b name origin/name 创建分支并clone origin/name
12. git merge[name] 将名称为[name]的分支与当前分支合并
13. git branch -d[name]  删除分支
14. git pull origin + 分支名  远程分支
15. git log 查看历史版本
16. git push 推送远程仓库
17. git add .  本地提交
18. git commit -m'miaoshu' 描述
19. git stash 缓存本地修改
20. git stash list 查看已缓存的列表
21. git stash pop 还原列表的最后一条
22. git pull origin fenzhi  更新
23. git push origin fenzhi  提交
24. git fetch 刷新缓存
```
### git提交
    git本地修改编辑之后，先add提交，再commit描述提交，然后从远程pull代码，之后push提交至远程代码仓库。