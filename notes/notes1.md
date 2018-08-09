### 日常笔记1
###  git
```ruby
ssh-keygen -t rsa -C "haoyulong@haotang365.com.cn"
~/.SSH   PUB
SETTINGS -> SSH KEY   ADD
```
### 测试：
```ruby
ssh root@192.168.0.252 -p 21206
1qaz2wsxCd
```

### demo:
```ruby
ssh root@123.57.27.156 -p 21206
123QWEASDzxc

ssh root@123.57.47.94 -p 21206
12M4K9HGSB234a

cd ../home/jitai/static/content/html5/

```
[宠物家](https://api.cwjia.cn/static/content/)
### mis

 1. [mis后台demo248](http://192.168.0.248/mis/account/login)
 2. [mis后台demo247](http://192.168.0.247/mis/account/login)
```ruby
账号 admin
密码 haotangkj123456

后台服务器账号密码
ssh root@192.168.0.247
1qaz2wsxCde#$
cd ../home/work/app

ssh root@192.168.0.248
1qaz2wsxCde#$
cd ../home/work/app
```
### fis编译本地代码到服务器
```ruby
fis3 release qa -w -r home

fis3 release qa -r home 只启动一次
配置文件
D:\work\pet_web\home\fis-conf.js
```
#### $.trim() jQuery去除首尾空格
### sublime中设置Chrome浏览器快捷键
```ruby
[chorme { "keys": ["alt+f12"], "command": "side_bar_files_open_with", "args": { "paths": [], "application": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", "extensions": ".*" } } ]
```
### vim或者 vi 编辑器 
```
* vi path 打开文件
* esc 推出当前模式
* i 进入编辑模式 
* : 命令模式 q 退出 wq 保存退出 w 保存不退出
* u 撤销
```
### 时间选择器(过滤器) 
```
yyyy:mm:dd hh:ii:ss 
```
### 新建页面
```ruby
1. 复制同类型tpl，css，js文件，然后命名一样全小写，
2. 检查路径和文件名要一至
3. 建立对应页面PHP接口
4. 配置页面 http://192.168.0.248/mis/manage/addpage 一级菜单 新建二级菜单就不选二级菜单  填写页面名称  和URL地址注意路径对应
5. 配置页面显示 http://192.168.0.248/mis/manage/roleusedpage 超管账号 全选 保存
```
#### smarty语法
```ruby
1. 页面打印{%var_dump($count)%}  {%var_dump($pn)%} {%var_dump($rn)%}
2. {%if $xxx==$xxx%}selected{%/if%}  条件判断
3. 查询或者搜索时  刷新页面后输入框中值不清空 smarty语法解决办法：input中value = {参数值}
```

### fis项目中自动生成新页面
```ruby
1. 在config下新建同类型文件，然后对照文档修改配置  （注意 global.name首字母大写 path目录 pagelimit是否分页）
2. 生成js,tpl文件用tplbase
3. interface.url 用Java接口  不要/pet-manage头部
```

#### 获取URL某个字符串值  commonClass.getRequest().cardTemplateId;

#### 初始化时间选择器  设置时分秒
```javascript  
    datepickerClass.init("js-p-coupon-couponsend-selecttime",
    {
        hideEnd:true,format:"yyyy-mm-dd hh:ii:00",minView:"hour",setStartDateForBegin:new Date()
    });
setStartDateForBegin：xxx //设置选择时间限制
```
#### 获取URL中某个参数值
```javascript
    var activityId = window.location.search.substr(1).split("&")[1].split('=')[1];
```
#### decodeURI解码
```javascript
    decodeURIComponent('\u64cd\u4f5c\u5931\u8d25')   
```
### jQuery获取属性值
    $("xxx").prop("属性");
### 模板渲染时分固定个数为一行或者一列时
```javascript
    for(var j in dataset){
        var tr = ''
        if (j>0 && j%5==0 && j!=dataset.length) {
            tr = '</tr><tr>'
        }
        $tabletpltrs += tr + '<td class="text-center"'+ 'data-workerid="'+dataset[j].id+'">'+dataset[j].num+'</td>'
    }
```
### 时间选择器初始化
条件：隐藏后面选择框并显示时间到分钟
```javascript
datepickerClass.init(timeDateid, {
            hideEnd: true, format: 'yyyy-mm-dd hh:ii:00',
            startView: 0,
            minView: 0
       });
```
### 更改输入框中的placeholder
```
方法一：
xxx.attr("placeholder","aaa");
```
### 启动从git上clone的vue项目
```
    1. npm install 或者 npm yarn
    2. npm run dev
```
### 报错
```
    npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
    依赖包过时不影响
```
### PHP文件使用git时
```ruby
1. git status
2. git add.
3. git commit -m []
4. git push 
5. 登录服务器拉取代码
```
### git合并到主分支上
```ruby
1. 切换到主分支master
2. git merge [name] 合并到主分支
3. git push 提交
4. php 登录服务器
5. 拉取代码
6. exit
7. 前端上线时修改fis-conf
8. qa 切换到线上地址
9. 执行fis3 release qa -w -r home
10. 编译后fis-conf改回
11. 进后台管理页面配置页面接口和权限
12. git切回到开发分支
```
### PHP文件注意
```
1. 有打印时ajax回调函数不能成功
2. 从上至下运行代码，有问题回自动阻断。
3. 当获取的值为0 时，注意进行判断。
```
### 设置淘宝镜像
    npm config set registry http://registry.npm.taobao.org/
### 原生镜像
    npm config set registry https://registry.npmjs.org/