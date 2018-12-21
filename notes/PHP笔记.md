### PHP笔记

### smarty语法
```ruby
1. 页面打印{%var_dump($count)%}  {%var_dump($pn)%} {%var_dump($rn)%}
2. {%if $xxx==$xxx%}selected{%/if%}  条件判断
3. 查询或者搜索时  刷新页面后输入框中值不清空 smarty语法解决办法：input中value = {参数值}
```

### smarty语法的select中
```ruby
    <select id="js-p-coupon-timersendlist-sendstate" class="form-control">
        <option value="0" {%if 0==$taskStatus%}selected{%/if%}>未发送</option>
        <option value="1" {%if 1==$taskStatus%}selected{%/if%}>已发送</option>
        <option value="2" {%if 2==$taskStatus%}selected{%/if%}>已撤销</option>
    </select>
```


### 异步接口调用 php
```ruby
'mis_giftcard_api_rechargecardtemplatelisteditsave' => 'actions/giftcard/api/Re
chargeCardTemplateListEditSave.php',`
```

### 注意：
```ruby
1. 传参数时要和后台一致  一一对应 
2. api接口名字跟后台要一致
3. 数字参数 0时不能为空
```

### PHP文件注意
1. 有打印时ajax回调函数不能成功
2. 从上至下运行代码，有问题回自动阻断。
3. 当获取的值为0 时，注意进行判断。

### PHP正则表达式匹配相应的字符串
1. 在php中，提供了preg_math()和preg_match_all函数进行正则匹配。
```ruby
preg_match|preg_match_all ( "reg表达式",str,arr )

str 是要匹配的字符串
arr 是返回的数组.
```
2. 循环遍历时，如果需要修改数据则需要在item前加&符号。
3. 拼接字符串是用" . "链接
4. 获取json数据时需要才用固定格式 item["aaa"]。


#### smarty语法
```ruby
1. 条件判断语句
{%if $XXXX%}{%else%}{%/if%}
2. 循环遍历语句
{%foreach from=$list item=item key=key name=foo%}
{%/foreach%}
```
#### 过滤掉emoji表情
```ruby
function filterEmoji($str)
{
    $str = preg_replace_callback(
        '/./u',
        function (array $match) {
            return strlen($match[0]) >= 4 ? '' : $match[0];
        },
        $str);
 
    return $str;
}
```

### 获取时间
1. 获取当前日期字符串：
```ruby
date("Y-m-d H:i:s");  // 2017-12-14 23:13:51
```
2. 获取当前时间戳
```ruby
time();  // 1513264258
```
3. 获取某个时间戳对应的日期字符串：
```ruby
date("Y-m-d H:i:s"，1513264258);  // 2017-12-14 23:13:51
```
4. 获取某个日期的时间戳
```ruby
strtotime('2017-12-14 23:13:51');  // 1513264258
```