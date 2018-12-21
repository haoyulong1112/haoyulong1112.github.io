### vue笔记

#### 计算属性
```javascript
var vm = new
Vue({
 el: '#example',
 data: {
   message: 'Hello'
 },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})

这里我们声明了一个人计算属性reversedMessage。我们提供的函数将用作属性vm.reversedMessage的getter函数：
    vm.message = 'Goodbye'
    console.log(vm.reversedMessage)
```

#### 插值语法
```ruby
1. 加 v-cloak 防止页面未加载完是显示出 { }
2. V-for 循环 必须加 : key =”a{$index}”
```
#### 能够解析脚本语言的地方不要用v-html方法、

#### 基于nodejs的

### vue中获取function外的this实例

使用箭头函数
```ruby
 xxx.addEventListener("timeupdate",()=>{
     
 }
```
### 阻止触摸默认事件 @touchmove.prevent
### 移除点击事件
```ruby
<button v-if="!unbind" v-on:click="addClick">点击</button>
<button v-else >点击</button>
```
