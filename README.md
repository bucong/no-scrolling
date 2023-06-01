## Installation
禁止页面滚动，将页面停留在当前位置，允许滚动后，恢复滚动，并将页面还原到当前位置

**install with NPM**
```bash
npm install no-scrolling --save
```

## function
function | Explanation
----|----
disableScroll | 禁止滚动
enableScroll | 恢复滚动

## Usage
```html
<body>
  <div id="app">
    <!-- 页面内容 -->
  </div>
<body>
```

```js
import { disableScroll, enableScroll } from 'no-scrolling'

disableScroll()
// enableScroll()

```

## Params
Parameter | Explanation | 必填 | default
----|----|----|----
domId | 最外部容器id | 是 | app
