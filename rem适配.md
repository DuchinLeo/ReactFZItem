## 1.使用 rem 的单位，1080px 以下都可以只适应

使用方式：
1、样式统一写 scss 不写 less 在组件内引入 sass，然后就可以根据 px2rem(value)属性写大小了，我们写 375 的版本，width 最大 375，按 375px 的图纸写
2、在写样式的 scss 文件里面引入 px2rem.scss 就可以了

```css
.box {
  height: px2rem(375);
  width: px2rem(375);
  background: rgb(243, 179, 83);
}
```
